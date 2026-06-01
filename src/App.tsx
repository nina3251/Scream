/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { screamData } from './data/screamData';
import { Character, Community } from './types';
import NetworkGraph from './components/NetworkGraph';
import Sidebar from './components/Sidebar';
import { Skull, Ghost, Search, Menu } from 'lucide-react';
import { getGhostfaceInsight } from './services/geminiService';

export default function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [activeMovie, setActiveMovie] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSplash, setShowSplash] = useState(true);
  const [insight, setInsight] = useState<string>('');
  const [loadingInsight, setLoadingInsight] = useState(false);
  const [activeCommunity, setActiveCommunity] = useState<Community | null>(null);
  const [communityDetectionActive, setCommunityDetectionActive] = useState(false);

  // Filtered data based on search
  const filteredCharacters = useMemo(() => {
    return screamData.characters.filter(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleNodeClick = async (character: Character) => {
    setSelectedCharacter(character);
    setInsight('');
    setLoadingInsight(true);
    const text = await getGhostfaceInsight(character);
    setInsight(text);
    setLoadingInsight(false);
  };

  const killerCount = screamData.characters.filter(c => c.role === 'killer').length;
  const survivorCount = screamData.characters.filter(c => c.status === 'alive').length;
  const victimCount = 64; // Stylized estimate

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-[#050505] overflow-hidden font-sans p-8 flex flex-col">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <Skull className="w-24 h-24 text-blood-red mb-4" />
              <div className="absolute -inset-4 bg-blood-red blur-3xl opacity-20 animate-pulse" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-8xl font-display font-bold tracking-tighter text-red-600 uppercase"
            >
              SCREAM
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-4 uppercase tracking-[0.4em] text-xs font-semibold"
            >
              The Ultimate Woodsboro Bloodline Visualizer
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="flex justify-between items-end mb-8 shrink-0">
        <div className="title-block">
          <h1 className="horror-title text-8xl text-red-600 leading-none">SCREAM</h1>
          <p className="text-[10px] tracking-[0.4em] font-light text-neutral-400 mt-2 uppercase">
            GHOSTFACE_SYSTEM // PERSISTENT_ARCHIVE_v7.26
          </p>
        </div>
        <div className="flex gap-8 text-right">
          <div className="stat">
            <div className="text-3xl horror-title">{killerCount.toString().padStart(2, '0')}</div>
            <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Identified Killers</div>
          </div>
          <div className="stat">
            <div className="text-3xl horror-title">{victimCount}</div>
            <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Total Victims</div>
          </div>
          <div className="stat">
            <div className="text-3xl horror-title text-red-600">{survivorCount.toString().padStart(2, '0')}</div>
            <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Legacy Survivors</div>
          </div>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden bg-neutral-900/10 rounded-xl border border-white/5">
        <NetworkGraph
          characters={filteredCharacters}
          relationships={screamData.relationships}
          onNodeClick={handleNodeClick}
          selectedCharacter={selectedCharacter}
          activeMovie={activeMovie}
          activeCommunity={activeCommunity}
          communityDetectionActive={communityDetectionActive}
        />
        
        <Sidebar 
          selectedCharacter={selectedCharacter}
          aiInsight={insight}
          loadingInsight={loadingInsight}
          onClose={() => setSelectedCharacter(null)}
          onMovieFilter={setActiveMovie}
          activeMovie={activeMovie}
          onSearch={setSearchQuery}
          characters={screamData.characters}
          activeCommunity={activeCommunity}
          setActiveCommunity={setActiveCommunity}
          communityDetectionActive={communityDetectionActive}
          setCommunityDetectionActive={setCommunityDetectionActive}
        />
      </main>

      <footer className="mt-8 pt-4 border-t border-neutral-800 flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-500 font-semibold shrink-0">
        <div>System: Ghostface_OS_v6.0</div>
        <div className="flex gap-6">
          <span>Meta-Data</span>
          <span>Security Protocol</span>
          <span>History of Stab</span>
        </div>
        <div>&copy; 1996-2026 WOODSBORO FORENSICS</div>
      </footer>
    </div>
  );
}

