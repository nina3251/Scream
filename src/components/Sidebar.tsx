import { Character, communityDescriptions, Community } from '../types';
import { screamData } from '../data/screamData';
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
  activeCommunity: Community | null;
  setActiveCommunity: (community: Community | null) => void;
  communityDetectionActive: boolean;
  setCommunityDetectionActive: (active: boolean) => void;
}

export default function Sidebar({ 
  selectedCharacter, 
  aiInsight,
  loadingInsight,
  onClose, 
  onMovieFilter, 
  activeMovie,
  onSearch,
  characters,
  activeCommunity,
  setActiveCommunity,
  communityDetectionActive,
  setCommunityDetectionActive
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCommunity, setHoveredCommunity] = useState<Community | null>(null);
  const [sidebarTab, setSidebarTab] = useState<'status' | 'community'>('status');

  const connectionCount = selectedCharacter
    ? screamData.relationships.filter(r => r.source === selectedCharacter.id || r.target === selectedCharacter.id).length
    : 0;

  const relsForChar = selectedCharacter
    ? screamData.relationships.filter(r => r.source === selectedCharacter.id || r.target === selectedCharacter.id)
    : [];

  const narrativeImportance = selectedCharacter
    ? Math.min(100, (selectedCharacter.role === 'legacy' ? 60 : selectedCharacter.role === 'killer' ? 50 : selectedCharacter.role === 'main' ? 45 : selectedCharacter.role === 'secondary' ? 25 : 15) 
      + (selectedCharacter.movies.length * 5) 
      + (connectionCount * 3))
    : 0;

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
                  <div 
                    className="relative inline-block"
                    onMouseEnter={() => setHoveredCommunity(selectedCharacter.community)}
                    onMouseLeave={() => setHoveredCommunity(null)}
                  >
                    <span className={cn(
                      "px-2 py-0.5 border text-white text-[10px] font-black uppercase cursor-help select-none transition-all duration-200 hover:brightness-110",
                      selectedCharacter.community === 'legacy' && "bg-blue-900 border-blue-900",
                      selectedCharacter.community === 'core-four' && "bg-green-900 border-green-900",
                      selectedCharacter.community === 'killers' && "bg-black border-red-600 text-red-600",
                      selectedCharacter.community === 'secondary' && "bg-neutral-600 border-neutral-600"
                    )}>
                      {selectedCharacter.community.replace('-', ' ')}
                    </span>

                    <AnimatePresence>
                      {hoveredCommunity === selectedCharacter.community && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-2 w-64 p-3 bg-black text-white border border-neutral-800 shadow-2xl text-left"
                          style={{ minWidth: "16rem" }}
                        >
                          <div className="text-[10px] uppercase font-black tracking-widest text-red-600 mb-1">
                            {communityDescriptions[selectedCharacter.community].name}
                          </div>
                          <p className="text-[10px] font-mono leading-relaxed text-neutral-300 font-medium normal-case">
                            {communityDescriptions[selectedCharacter.community].desc}
                          </p>
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-l border-t border-neutral-800 rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-200 text-left">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-neutral-400 font-bold uppercase tracking-wider">Appearances</span>
                    <span className="text-xs font-mono font-black text-neutral-800">
                      {selectedCharacter.movies.length} / 7 Films ({Math.round((selectedCharacter.movies.length / 7) * 100)}%)
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-neutral-400 font-bold uppercase tracking-wider">Connections</span>
                    <span className="text-xs font-mono font-black text-neutral-800">
                      {connectionCount} Active Link{connectionCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex flex-col col-span-2">
                    <span className="text-[9px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">Narrative Importance (Weight)</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black text-neutral-800 w-8">
                        {narrativeImportance}%
                      </span>
                      <div className="flex-1 h-2 bg-neutral-200 relative overflow-hidden">
                        <div className="h-full bg-red-600" style={{ width: `${narrativeImportance}%` }} />
                      </div>
                    </div>
                  </div>
               </div>

               <div className="mt-6 font-mono text-xs leading-relaxed font-bold border-l-2 border-red-600 pl-4 py-1 italic">
                 {selectedCharacter.description}
               </div>

               {/* Forensic Connection Dossier */}
               <div className="mt-6 p-4 bg-neutral-950 text-neutral-100 border border-neutral-800 text-left rounded-sm">
                 <h4 className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-black mb-3 font-mono flex items-center justify-between">
                   <span>FORENSIC_LINKS // ODNOSI</span>
                   <span className="text-neutral-500 font-bold">{relsForChar.length} VEZA</span>
                 </h4>
                 {relsForChar.length === 0 ? (
                   <p className="text-[10px] text-neutral-500 font-mono italic">Nema zabilježenih izravnih interakcija u arhivi Woodsboroa.</p>
                 ) : (
                   <div className="flex flex-col gap-2.5 max-h-60 overflow-y-auto pr-1">
                     {relsForChar.map((rel, index) => {
                       const otherId = rel.source === selectedCharacter.id ? rel.target : rel.source;
                       const otherChar = characters.find(c => c.id === otherId);
                       if (!otherChar) return null;
                       
                       const relColors = {
                         family: 'border-blue-900/40 bg-blue-950/20 text-blue-400',
                         romantic: 'border-pink-900/40 bg-pink-950/20 text-pink-400',
                         friendship: 'border-green-900/40 bg-green-950/20 text-green-400',
                         'killer-victim': 'border-red-900 bg-red-950/40 text-red-500',
                         rivalry: 'border-amber-900/40 bg-amber-950/20 text-amber-500'
                       };
                       const relLabels = {
                         family: 'OBITELJ',
                         romantic: 'PARTNER',
                         friendship: 'SAVEZNIK',
                         'killer-victim': 'UBOJICA / ŽRTVA',
                         rivalry: 'SUPARNIŠTVO / UTJECAJ'
                       };
                       
                       return (
                         <div key={index} className="p-2 bg-black/40 border border-neutral-900 hover:border-neutral-800 transition-colors">
                           <div className="flex items-center justify-between gap-2 mb-1">
                             <span className="text-[10px] font-black tracking-tight text-white font-mono">
                               {otherChar.name}
                             </span>
                             <span className={cn(
                               "px-1.5 py-0.5 text-[7px] border font-black uppercase font-mono rounded-[1px]",
                               relColors[rel.type] || "border-neutral-800 text-neutral-400"
                             )}>
                               {relLabels[rel.type] || rel.type}
                             </span>
                           </div>
                           {rel.reason && (
                             <p className="text-[9px] text-neutral-400 font-mono leading-normal font-medium normal-case">
                               {rel.reason}
                             </p>
                           )}
                         </div>
                       );
                     })}
                   </div>
                 )}
               </div>

               {/* AI Analyis Section */}
               {(aiInsight || loadingInsight) && (
                 <div className="mt-6 p-4 bg-red-600/10 border border-red-600/30 rounded-sm">
                   <div className="text-[9px] uppercase tracking-widest text-red-600 font-black mb-2 flex items-center gap-2">
                     <Zap className="w-3 h-3 fill-current" />
                     Ghostface Analysis
                   </div>
                   <div className="text-[10px] font-mono leading-normal text-neutral-800 font-bold">
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
                  <h4 className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-3 underline decoration-red-600 underline-offset-4 font-mono">Appearance History</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCharacter.movies.map(m => (
                      <span key={m} className="px-2 py-1 bg-white border border-neutral-300 text-[10px] font-black text-red-600 shadow-sm">
                        SCREAM {movieData.find(movie => movie.id === m)?.label || m}
                      </span>
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
          <div className="flex-1 flex flex-col gap-6 py-2">
            {/* Tab switchers */}
            <div className="flex border-b border-neutral-800 text-[10px] uppercase font-black tracking-widest text-[#666]">
              <button 
                onClick={() => setSidebarTab('status')}
                className={cn(
                  "flex-1 pb-3 text-[10px] font-black uppercase text-center border-b-2 transition-colors",
                  sidebarTab === 'status' ? "border-red-600 text-white" : "border-transparent text-neutral-500 hover:text-neutral-300"
                )}
              >
                STATUS & THE RULES
              </button>
              <button 
                onClick={() => setSidebarTab('community')}
                className={cn(
                  "flex-1 pb-3 text-[10px] font-black uppercase text-center border-b-2 transition-colors",
                  sidebarTab === 'community' ? "border-red-600 text-white" : "border-transparent text-neutral-500 hover:text-neutral-300"
                )}
              >
                GENERATE COMMUNITIES
              </button>
            </div>

            {sidebarTab === 'status' ? (
              <div className="flex flex-col gap-6">
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
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="p-4 bg-red-600/10 border border-red-600/30 text-left">
                  <div className="text-[10px] uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2 font-black">
                    <Zap className="w-3.5 h-3.5 animate-pulse text-red-600" />
                    INTERACTIVE CLUSTER DETECTION
                  </div>
                  <p className="text-[10px] text-neutral-300 font-mono leading-relaxed">
                    Louvainov algoritam detektira preklapajuće mreže i grupe likova koje često interagiraju na temelju obiteljskih, romantičnih ili ubojitih srodnosti.
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-neutral-800 pt-3">
                    <span className="text-[8px] font-mono font-bold text-neutral-400">PODIJELI GRAF U OTOKE (GRAVITY):</span>
                    <button
                      onClick={() => setCommunityDetectionActive(!communityDetectionActive)}
                      className={cn(
                        "px-3 py-1 text-[9px] font-mono font-black border transition-colors",
                        communityDetectionActive ? "bg-red-600 text-black border-red-600" : "bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-700"
                      )}
                    >
                      {communityDetectionActive ? "AKTIVAN" : "UKLJUČI"}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-mono text-neutral-500 font-bold uppercase tracking-widest text-left">DETEKTIRANE SKUPINE (KLASTERI):</span>
                  
                  {(['legacy', 'core-four', 'killers', 'secondary'] as Community[]).map((comm) => {
                    const desc = communityDescriptions[comm];
                    const isSelected = activeCommunity === comm;
                    const commMembers = characters.filter(c => c.community === comm);
                    const commColors = {
                      'legacy': 'bg-blue-950/40 border-blue-900 text-blue-300 hover:bg-blue-950/20',
                      'core-four': 'bg-green-950/40 border-green-900 text-green-300 hover:bg-green-950/20',
                      'killers': 'bg-red-950/40 border-red-900 text-red-300 hover:bg-red-950/20',
                      'secondary': 'bg-neutral-950/40 border-neutral-800 text-neutral-300 hover:bg-neutral-950/20'
                    };
                    const badgeColors = {
                      'legacy': 'bg-blue-900 text-white border-blue-800',
                      'core-four': 'bg-green-900 text-white border-green-800',
                      'killers': 'bg-black text-red-600 border-red-600',
                      'secondary': 'bg-neutral-800 text-white border-neutral-700'
                    };
                    
                    return (
                      <div 
                        key={comm}
                        onClick={() => setActiveCommunity(isSelected ? null : comm)}
                        className={cn(
                          "p-3 border cursor-pointer transition-all duration-200 select-none text-left rounded-sm",
                          commColors[comm],
                          isSelected ? "border-red-500 bg-red-950/60 shadow-lg scale-[1.02]" : "border-neutral-900"
                        )}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={cn(
                            "px-1.5 py-0.5 border text-[8px] font-mono font-black uppercase tracking-wider",
                            badgeColors[comm]
                          )}>
                            {desc.name}
                          </span>
                          <span className="text-[8px] font-mono text-neutral-500 font-semibold uppercase">{commMembers.length} likova</span>
                        </div>
                        <p className="text-[10px] text-neutral-400 font-mono normal-case leading-snug mb-2 font-medium">
                          {desc.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mt-1 opacity-75">
                          {commMembers.slice(0, 4).map(c => (
                            <span key={c.id} className="text-[8px] font-mono bg-black/50 px-1 py-0.5 border border-white/5 text-neutral-300">
                              {c.name.split(' ')[0]}
                            </span>
                          ))}
                          {commMembers.length > 4 && (
                            <span className="text-[8px] font-mono text-neutral-500 px-1 py-0.5">
                              +{commMembers.length - 4} još
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-auto border border-neutral-800 p-4 bg-neutral-900/10 text-left">
               <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest block mb-2">System Terminal</span>
               <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[9px] font-mono text-neutral-500">GHOST_WATCH_LIVE v6.0</span>
                 </div>
                 {activeCommunity && (
                   <button 
                     onClick={() => setActiveCommunity(null)}
                     className="text-[9px] font-mono text-red-600 underline font-black uppercase hover:text-red-500"
                   >
                     CLEAR_FOCUS
                   </button>
                 )}
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
