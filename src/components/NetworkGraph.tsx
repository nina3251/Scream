import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Character, Relationship } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Ghost, Skull, User, Users, Heart, Zap, Crosshair } from 'lucide-react';

interface SimulationNode extends Character, d3.SimulationNodeDatum {}
interface SimulationLink extends d3.SimulationLinkDatum<SimulationNode> {
  type: Relationship['type'];
  strength: number;
}

interface NetworkGraphProps {
  characters: Character[];
  relationships: Relationship[];
  onNodeClick: (character: Character) => void;
  selectedCharacter: Character | null;
  activeMovie: number | null;
}

export default function NetworkGraph({ 
  characters, 
  relationships, 
  onNodeClick, 
  selectedCharacter,
  activeMovie 
}: NetworkGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Filter nodes and links based on active movie
    const filteredNodes: SimulationNode[] = (activeMovie 
      ? characters.filter(c => c.movies.includes(activeMovie))
      : characters).map(c => ({ ...c }));

    const filteredNodeIds = new Set(filteredNodes.map(n => n.id));

    const filteredLinks: SimulationLink[] = relationships
      .filter(l => filteredNodeIds.has(l.source) && filteredNodeIds.has(l.target))
      .map(l => ({ ...l, source: l.source, target: l.target }));

    const simulation = d3.forceSimulation<SimulationNode>(filteredNodes)
      .force('link', d3.forceLink<SimulationNode, SimulationLink>(filteredLinks).id(d => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide<SimulationNode>().radius(60));

    const g = svg.append('g');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Links
    const link = g.append('g')
      .selectAll('line')
      .data(filteredLinks)
      .enter()
      .append('line')
      .attr('stroke', d => {
        switch(d.type) {
          case 'romantic': return '#ffffff';
          case 'killer-victim': return '#dc2626';
          case 'family': return '#4d94ff';
          case 'rivalry': return '#ffa500';
          default: return '#555';
        }
      })
      .attr('stroke-opacity', d => d.type === 'killer-victim' ? 0.9 : 0.6)
      .attr('stroke-width', d => {
        const baseWidth = Math.sqrt(d.strength) * 2;
        return d.type === 'killer-victim' ? baseWidth * 1.5 : baseWidth;
      })
      .attr('stroke-dasharray', d => d.type === 'killer-victim' ? '4,2' : 'none');

    // Nodes
    const node = g.append('g')
      .selectAll('.node')
      .data(filteredNodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .on('click', (event, d) => onNodeClick(d as Character))
      .style('cursor', 'pointer');

    // Node circles
    node.append('circle')
      .attr('r', d => {
        if (d.role === 'killer') return 35;
        if (d.role === 'legacy') return 30;
        return 25;
      })
      .attr('fill', d => {
        if (d.id === selectedCharacter?.id) return '#fff';
        if (d.role === 'killer') return '#111';
        if (d.status === 'dead') return '#222';
        return '#000';
      })
      .attr('stroke', d => {
        if (d.id === selectedCharacter?.id) return '#dc2626';
        if (d.role === 'killer') return '#dc2626';
        if (d.role === 'legacy') return '#neutral-600';
        return '#333';
      })
      .attr('stroke-width', d => d.id === selectedCharacter?.id ? 4 : 2)
      .classed('node-active', d => d.id === selectedCharacter?.id);

    // Icons/Text in nodes
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .attr('font-family', 'Anton')
      .attr('font-size', d => d.id === selectedCharacter?.id ? '12px' : '9px')
      .attr('fill', d => d.id === selectedCharacter?.id ? '#000' : '#fff')
      .attr('pointer-events', 'none')
      .attr('class', 'uppercase tracking-tighter')
      .text(d => d.name.split(' ')[0]);

    node.append('title')
      .text(d => `${d.name} (${d.status})`);

    // Update positions
    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y);

      node
        .attr('transform', d => `translate(${(d as any).x},${(d as any).y})`);
    });

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      svg.attr('width', newWidth).attr('height', newHeight);
      simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2)).alpha(0.3).restart();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      simulation.stop();
    };
  }, [characters, relationships, onNodeClick, selectedCharacter, activeMovie]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      <svg ref={svgRef} className="w-full h-full" />
      
      {/* Legend */}
      <div className="absolute top-4 left-4 p-6 bg-black/60 backdrop-blur-md border border-neutral-800 flex flex-col gap-3">
        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-neutral-500 mb-1">Key Identifiers</div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#ffffff]" />
          <span className="text-[9px] uppercase font-black tracking-widest text-neutral-400">Romantic</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#4d94ff]" />
          <span className="text-[9px] uppercase font-black tracking-widest text-neutral-400">Family</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#dc2626] animate-pulse" />
          <span className="text-[9px] uppercase font-black tracking-widest text-neutral-400">Killer-Target</span>
        </div>
        <div className="h-px bg-neutral-800 my-1" />
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-black border-2 border-red-600 rounded-full" />
          <span className="text-[9px] uppercase font-black tracking-widest text-red-600">Active Threat</span>
        </div>
      </div>
    </div>
  );
}
