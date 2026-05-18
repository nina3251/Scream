import { Character } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Skull, Heart, Users, Shield, Zap, Search, Info, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { ChangeEvent, useState } from 'react';

interface SidebarProps {
  selectedCharacter: Character | null;
  aiInsight?: string;
  loadingInsight?: boolean;
  onClose: () => void;
  onMovieFilter: (movie: number | null) => void;
  activeMovie: number | null;
  onSearch: (query: string) => void;
  characters: Character[];
}

export default function Sidebar({ 
  selectedCharacter, 
  aiInsight,
  loadingInsight,
  onClose, 
  onMovieFilter, 
  activeMovie,
  onSearch,
  characters 
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const movieData = [
    { id: 1, label: "'96" },
    { id: 2, label: "'97" },
    { id: 3, label: "'00" },
    { id: 4, label: "'11" },
    { id: 5, label: "'22" },
    { id: 6, label: "'23" },
    { id: 7, label: "'26" },
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="absolute right-0 top-0 h-full w-80 md:w-96 bg-[#050505]/90 backdrop-blur-xl border-l border-neutral-800 p-8 flex flex-col gap-8 z-50 overflow-y-auto">
      <div className="flex items-center justify-between">
        <h1 className="horror-title text-4xl text-neutral-200">DATABASE</h1>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X className="w-5 h-5 text-neutral-500" />
        </button>
      </div>

      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 transition-colors group-focus-within:text-red-600" />
        <input
          type="text"
          placeholder="Filter Woodboro Archives..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full bg-neutral-900/50 border border-neutral-800 rounded-none py-3 pl-10 pr-4 text-[10px] uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors"
        />
      </div>

      <div>
        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 mb-4">Target Year</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onMovieFilter(null)}
            className={cn(
              "px-3 py-1.5 text-[9px] font-black uppercase tracking-tighter border transition-all",
              activeMovie === null 
                ? "bg-red-600 border-red-600 text-black" 
                : "bg-transparent border-neutral-800 text-neutral-500 hover:border-neutral-600"
            )}
          >
            ALL_RECORDS
          </button>
          {movieData.map(m => (
            <button
              key={m.id}
              onClick={() => onMovieFilter(m.id)}
              className={cn(
                "px-3 py-1.5 text-[9px] font-black uppercase tracking-tighter border transition-all",
                activeMovie === m.id 
                  ? "bg-red-600 border-red-600 text-black" 
                  : "bg-transparent border-neutral-800 text-neutral-500 hover:border-neutral-600"
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedCharacter ? (
          <motion.div
            key={selectedCharacter.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white text-black p-6 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 bg-black text-white text-[8px] font-black mono leading-none tracking-tighter">
                ID: {selectedCharacter.id.slice(0, 8).toUpperCase()}
               </div>
               <div className="text-[10px] uppercase tracking-widest text-red-600 font-bold mb-2">Subject Information</div>
               <h2 className="text-5xl horror-title leading-none mb-1">{selectedCharacter.name}</h2>
               
               <div className="flex items-center gap-2 mt-4">
                  <span className={cn(
                    "px-2 py-0.5 bg-black text-white text-[10px] font-black uppercase",
                    selectedCharacter.status === 'dead' && "bg-red-600"
                  )}>
                    {selectedCharacter.status}
                  </span>
                  <span className="px-2 py-0.5 border border-black text-black text-[10px] font-black uppercase opacity-60">
                    {selectedCharacter.role}
                  </span>
               </div>

               <div className="mt-6 font-mono text-xs leading-relaxed font-bold border-l-2 border-red-600 pl-4 py-1 italic">
                 {selectedCharacter.description}
               </div>

               {/* AI Analyis Section */}
               {(aiInsight || loadingInsight) && (
                 <div className="mt-6 p-4 bg-red-600/10 border border-red-600/30 rounded-sm">
                   <div className="text-[9px] uppercase tracking-widest text-red-600 font-black mb-2 flex items-center gap-2">
                     <Zap className="w-3 h-3 fill-current" />
                     Ghostface Analysis
                   </div>
                   <div className="text-[10px] font-mono leading-normal text-neutral-300">
                     {loadingInsight ? (
                       <span className="animate-pulse">Accessing encrypted archives...</span>
                     ) : (
                       aiInsight
                     )}
                   </div>
                 </div>
               )}

               <div className="mt-6 flex flex-col gap-4">
                <div className="p-4 bg-neutral-100 border border-neutral-200">
                  <h4 className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-2 underline decoration-red-600 underline-offset-4 font-mono">Apperance Logs</h4>
                  <div className="flex gap-2">
                    {selectedCharacter.movies.map(m => (
                      <span key={m} className="text-sm font-black text-red-600">v{m}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 border border-neutral-200 bg-neutral-50">
                  <h4 className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-2 font-mono italic">Threat Level</h4>
                  <div className="h-1 bg-neutral-200 w-full mb-3">
                    <div className="h-full bg-red-600" style={{ width: selectedCharacter.role === 'killer' ? '95%' : (selectedCharacter.status === 'dead' ? '0%' : '40%') }}></div>
                  </div>
                  <div className="flex justify-between items-center text-neutral-400">
                    <span className="text-[9px] font-mono leading-none">{selectedCharacter.role === 'killer' ? 'CRITICAL' : 'MONITORED'}</span>
                    <span className="text-[9px] font-mono leading-none">V.{selectedCharacter.movies[0]}.3.96</span>
                  </div>
                </div>
               </div>
            </div>
          </motion.div>
        ) : (
          <div className="flex-1 flex flex-col gap-8 py-4">
            <div className="bg-neutral-900/50 p-6 border-l-4 border-red-600">
              <div className="text-[10px] uppercase tracking-widest text-red-500 mb-2">Simulation Status</div>
              <h3 className="text-3xl horror-title text-neutral-100">STANDBY_MODE</h3>
              <p className="text-[11px] text-neutral-500 font-mono mt-3 leading-relaxed">
                Waiting for node selection. Accessing Woodsboro Forensic Server... 
                Encrypted logs ready for deployment.
              </p>
            </div>

            <div className="bg-red-600 p-6 text-black shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Skull className="w-5 h-5 fill-current" />
                <h4 className="font-black text-sm uppercase tracking-widest">The Rules</h4>
              </div>
              <ul className="text-[11px] font-black uppercase leading-tight space-y-3 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-white bg-black w-4 h-4 rounded-full flex items-center justify-center text-[10px]">1</span>
                  <span>Don't answer the door</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white bg-black w-4 h-4 rounded-full flex items-center justify-center text-[10px]">2</span>
                  <span>Don't hide in the closet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white bg-black w-4 h-4 rounded-full flex items-center justify-center text-[10px]">3</span>
                  <span>Everyone is a suspect</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto border border-neutral-800 p-4 bg-neutral-900/10">
               <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">System Terminal</span>
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[9px] font-mono text-neutral-500">GHOST_WATCH_LIVE v6.0</span>
               </div>
            </div>
          </div>
        )}
      </AnimatePresence>
      
      <div className="mt-8 pt-4 text-[10px] text-neutral-600 uppercase tracking-[0.2em] font-mono border-t border-neutral-800/50">
        AI_INSIGHTS_ENABLED // 4.3.96
      </div>
    </div>
  );
}
