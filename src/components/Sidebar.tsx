import { Character, communityDescriptions, Community } from '../types';
import { screamData } from '../data/screamData';
import { motion, AnimatePresence } from 'motion/react';
import { X, Skull, Heart, Users, Shield, Zap, Search, Info, User, ChevronDown, ChevronUp, Play, Pause, Tv, Activity, Film, BarChart2 } from 'lucide-react';
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

const movieDetails: Record<number, { title: string; year: string; location: string; killers: string; victims: string; description: string }> = {
  1: {
    title: "Vrisak 1",
    year: "1996",
    location: "Woodsboro, Kalifornija",
    killers: "Billy Loomis, Stu Macher",
    victims: "7 žrtava",
    description: "Sve počinje u gradiću Woodsboro gdje tinejdžeri Sidney Prescott i njezini prijatelji postaju mete zagonetnog serijskog ubojice pod maskom Ghostfacea. Billy Loomis i Stu Macher započinju krvavu osvetu koja je redefinirala slasher filmski rod."
  },
  2: {
    title: "Vrisak 2",
    year: "1997",
    location: "Sveučilište Windsor, Ohio",
    killers: "Nancy Loomis, Mickey Altieri",
    victims: "10 žrtava",
    description: "Sidney je studentica na fakultetu Windsor. Naizgled miran novi život nasilno prekida novi niz ubojstava. Iza maske se kriju osvetoljubiva majka Nancy Loomis i student Mickey Altieri opsjednut slavom na suđenju."
  },
  3: {
    title: "Vrisak 3",
    year: "2000",
    location: "Hollywood, Los Angeles",
    killers: "Roman Bridger",
    victims: "9 žrtava",
    description: "Smješteno u Hollywoodu tijekom snimanja filma 'Stab 3'. Sidney izlazi iz skrivanja i otkriva da je ubojica zapravo njezin polubrat Roman Bridger — režiser filma koji je potaknuo i osmislio izvorni masakr iz 1996."
  },
  4: {
    title: "Vrisak 4",
    year: "2011",
    location: "Woodsboro, Kalifornija",
    killers: "Jill Roberts, Charlie Walker",
    victims: "11 žrtava",
    description: "Sidney se vraća u Woodsboro zbog promocije svoje knjige o preživljavanju, što aktivira novog ubojicu. To je njezina mlada rođakinja Jill Roberts koja želi istu slavu kao i Sidney, uz suradnju filmofila Charlieja."
  },
  5: {
    title: "Vrisak (2022)",
    year: "2022",
    location: "Woodsboro, Kalifornija",
    killers: "Richie Kirsch, Amber Freeman",
    victims: "8 žrtava",
    description: "25 godina nakon originalnih ubojstava, u Woodsborou se pojavljuje novi Ghostface napadajući grupu tinejdžera blisku prošlosti. Sam Carpenter mora spasiti sestru Taru od Richieja i Amber koji žele stvoriti savršen filmski reboot."
  },
  6: {
    title: "Vrisak VI",
    year: "2023",
    location: "New York City",
    killers: "Wayne, Ethan i Quinn Bailey",
    victims: "13 žrtava",
    description: "Preživjeli iz petog filma sele se u užurnani New York tražeći mir, no suočavaju se s još agresivnijim Ghostfaceom. Richiejeva obitelj (detektiv Bailey, Ethan i Quinn) traži apsolutnu krvnu osvetu za njegovu smrt."
  },
  7: {
    title: "Vrisak 7",
    year: "2026",
    location: "Pine Grove & Ustanova",
    killers: "Jessica Bowden, M. Davis, K. Gibbs",
    victims: "Višestruki napadi",
    description: "Sidney Prescott sa suprugom i kćerima živi u tajnosti. Kada se stvori uigrana urotnička mreža psihopata, cijela obitelj biva uvučena u finalni obračun koji spaja sve niti forenzičkih arhiva Woodsboroa."
  }
};

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
  const [expandedRel, setExpandedRel] = useState<string | null>(null);
  const [cctvFilter, setCctvFilter] = useState<'VHS' | 'INFRARED' | 'ENHANCED'>('VHS');
  const [isPlayingCctv, setIsPlayingCctv] = useState(true);

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
                "px-3 py-1.5 text-[9px] font-black uppercase tracking-tighter border transition-all cursor-pointer",
                activeMovie === m.id 
                  ? "bg-red-600 border-red-600 text-black font-black" 
                  : "bg-transparent border-neutral-800 text-neutral-400 hover:border-neutral-500 hover:text-white"
              )}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Dynamic Movie/Plot Details Card */}
        <AnimatePresence mode="wait">
          {activeMovie !== null ? (
            <motion.div 
              key={activeMovie}
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-neutral-950/80 border border-red-900/60 text-left font-mono rounded-none"
            >
              <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-red-500 font-bold uppercase tracking-widest mb-1.5">
                <span>DOKUMENTIRANI SLUČAJ // GHOSTFACE CASE</span>
                <span className="text-neutral-400 font-bold">{movieDetails[activeMovie].year}. r.</span>
              </div>
              <h4 className="text-[11px] font-black text-white uppercase tracking-tight mb-2 flex items-center justify-between gap-1 border-b border-neutral-900 pb-1.5">
                <span>{movieDetails[activeMovie].title}</span>
                <span className="text-[7.5px] text-neutral-400 font-normal">LOKACIJA: {movieDetails[activeMovie].location}</span>
              </h4>
              <p className="text-[10px] text-neutral-300 leading-relaxed font-medium normal-case mb-3 border-l border-red-600 pl-2.5">
                {movieDetails[activeMovie].description}
              </p>
              <div className="grid grid-cols-2 gap-2 text-[8px] font-bold text-neutral-500 bg-neutral-950/50 p-2 border border-neutral-900 rounded-sm">
                <div className="flex flex-col">
                  <span className="text-[7px] text-neutral-600">IDENTIFICIRANI UBOJICE</span>
                  <span className="text-neutral-100 mt-0.5">{movieDetails[activeMovie].killers}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[7px] text-neutral-600">INTENZITET TRAGEDIJE</span>
                  <span className="text-red-500 font-black mt-0.5">{movieDetails[activeMovie].victims}</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="mt-4 p-4 bg-neutral-900/30 border border-neutral-800/60 text-left font-mono rounded-none">
              <div className="text-[8px] sm:text-[9px] text-neutral-500 font-bold uppercase tracking-wider mb-1">Woodsboro Forenzička Analitika</div>
              <p className="text-[10px] text-neutral-400 leading-relaxed font-semibold">
                Kliknite na godinu iznad kako biste učitali deklasificirane dosijee o svakom od 7 valova Ghostface ubojstava, uključujući lokacije, motive i aktere.
              </p>
            </div>
          )}
        </AnimatePresence>
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
            <div className="bg-neutral-950/80 backdrop-blur-xl border border-red-900/60 p-6 shadow-2xl relative overflow-hidden text-neutral-200">
               <div className="absolute top-0 right-0 p-2 bg-red-950/80 text-red-500 border-l border-b border-red-950/50 text-[8px] font-black font-mono leading-none tracking-tighter">
                ID: {selectedCharacter.id.slice(0, 8).toUpperCase()}
               </div>
               <div className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-bold mb-2 font-mono">SUBJEKT // DOSSIER</div>
               <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none mb-1 text-white uppercase">{selectedCharacter.name}</h2>
               
               <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className={cn(
                    "px-2.5 py-0.5 text-[10px] font-mono font-black uppercase border",
                    selectedCharacter.status === 'dead' 
                      ? "bg-red-950/60 text-red-500 border-red-800" 
                      : "bg-green-950/60 text-green-400 border-green-800"
                  )}>
                    {selectedCharacter.status === 'dead' ? '● CRVENI // POKOJNI' : '● STATUS // PREŽIVIO'}
                  </span>
                  <span className="px-2.5 py-0.5 border border-neutral-700 bg-neutral-900/50 text-neutral-300 text-[10px] font-mono font-black uppercase">
                    KOD: {selectedCharacter.role === 'killer' ? 'UBOJICA // THREAT' : 'META // PROTIVNIK'}
                  </span>
                  <div 
                    className="relative inline-block"
                    onMouseEnter={() => setHoveredCommunity(selectedCharacter.community)}
                    onMouseLeave={() => setHoveredCommunity(null)}
                  >
                    <span className={cn(
                      "px-2.5 py-0.5 border text-xs font-mono font-bold uppercase cursor-help select-none transition-all duration-200 hover:brightness-110",
                      selectedCharacter.community === 'legacy' && "bg-blue-950/80 border-blue-500 text-blue-400",
                      selectedCharacter.community === 'core-four' && "bg-emerald-950/80 border-emerald-500 text-emerald-400",
                      selectedCharacter.community === 'killers' && "bg-red-950/80 border-red-500 text-red-400 font-extrabold shadow-[0_0_10px_rgba(239,68,68,0.3)]",
                      selectedCharacter.community === 'secondary' && "bg-neutral-900 border-neutral-700 text-neutral-300"
                    )}>
                      {selectedCharacter.community.replace('-', ' ')}
                    </span>

                    <AnimatePresence>
                      {hoveredCommunity === selectedCharacter.community && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-2 w-64 p-3 bg-black/95 text-white border border-neutral-800 shadow-2xl text-left"
                          style={{ minWidth: "16rem" }}
                        >
                          <div className="text-[10px] uppercase font-black tracking-widest text-red-500 mb-1 font-mono">
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

               <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-neutral-900 text-left font-mono">
                  <div className="flex flex-col bg-neutral-900/30 p-2 border border-neutral-900/80 rounded-none">
                    <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider">Appearance</span>
                    <span className="text-xs font-black text-neutral-200 mt-0.5">
                      {selectedCharacter.movies.length} / 7 filmova ({Math.round((selectedCharacter.movies.length / 7) * 100)}%)
                    </span>
                  </div>
                  <div className="flex flex-col bg-neutral-900/30 p-2 border border-neutral-900/80 rounded-none">
                    <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider">Broj Veza</span>
                    <span className="text-xs font-black text-neutral-200 mt-0.5">
                      {connectionCount} aktivnih linkova
                    </span>
                  </div>
                  <div className="flex flex-col col-span-2 bg-neutral-900/30 p-2.5 border border-neutral-900/80 rounded-none">
                    <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider mb-1.5">Narativna Važnost (Ugroženost)</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-white w-8">
                        {narrativeImportance}%
                      </span>
                      <div className="flex-1 h-2 bg-neutral-950 border border-neutral-900 relative overflow-hidden">
                        <div className="h-full bg-red-600" style={{ width: `${narrativeImportance}%` }} />
                      </div>
                    </div>
                  </div>
               </div>

               <div className="mt-6 font-mono text-xs leading-relaxed border-l-2 border-red-600 pl-4 py-1 italic text-neutral-300">
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
                   <div className="flex flex-col gap-3 ">
                     {relsForChar.map((rel, index) => {
                       const otherId = rel.source === selectedCharacter.id ? rel.target : rel.source;
                       const otherChar = characters.find(c => c.id === otherId);
                       if (!otherChar) return null;
                       
                       const relKey = `${rel.source}-${rel.target}`;
                       const isExpanded = expandedRel === relKey;
                       
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

                       // Interaction frequencies calculation
                       const totalInts = rel.totalInteractions || (rel.strength * 4 + 2);
                       const intsPerMovie = rel.interactionsPerMovie || {};
                       const sharedMovies = selectedCharacter.movies.filter(m => otherChar.movies.includes(m));
                       const finalIntsPerMovie: Record<string, number> = {};
                       
                       if (Object.keys(intsPerMovie).length > 0) {
                         Object.assign(finalIntsPerMovie, intsPerMovie);
                       } else {
                         if (sharedMovies.length > 0) {
                           let remaining = totalInts;
                           sharedMovies.forEach((m, idx) => {
                             if (idx === sharedMovies.length - 1) {
                               finalIntsPerMovie[String(m)] = remaining;
                             } else {
                               const count = Math.max(1, Math.round((totalInts / sharedMovies.length) + (idx % 2 === 0 ? 1 : -1)));
                               finalIntsPerMovie[String(m)] = count;
                               remaining -= count;
                             }
                           });
                         } else {
                           selectedCharacter.movies.slice(0, 2).forEach(m => {
                             finalIntsPerMovie[String(m)] = Math.floor(totalInts / 2);
                           });
                         }
                       }
                       
                       return (
                         <div 
                           key={index} 
                           className={cn(
                             "border border-neutral-900 bg-black/40 hover:border-neutral-800 transition-all duration-300 rounded-sm overflow-hidden",
                             isExpanded && "border-red-900/80 bg-neutral-950 shadow-[inset_0_0_12px_rgba(220,38,38,0.1)]"
                           )}
                         >
                           {/* Head Toggle */}
                           <button
                             onClick={() => setExpandedRel(isExpanded ? null : relKey)}
                             className="w-full text-left p-2.5 flex items-start justify-between gap-3 font-mono cursor-pointer transition-colors hover:bg-neutral-900/40"
                           >
                             <div className="flex-1">
                               <div className="flex items-center justify-between gap-2 mb-1.5">
                                 <span className="text-[10px] font-black tracking-tight text-white">
                                   {otherChar.name}
                                 </span>
                                 <span className={cn(
                                   "px-1.5 py-0.5 text-[7px] border font-black uppercase rounded-[1px] tracking-wide",
                                   relColors[rel.type] || "border-neutral-800 text-neutral-400"
                                 )}>
                                   {relLabels[rel.type] || rel.type}
                                 </span>
                               </div>
                               <p className="text-[9px] text-neutral-300 leading-normal font-medium w-full normal-case">
                                 {rel.reason}
                               </p>
                             </div>
                             <span className="text-neutral-500 self-center hover:text-white transition-colors">
                               {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                             </span>
                           </button>

                           {/* Detail Panel */}
                           <AnimatePresence initial={false}>
                             {isExpanded && (
                               <motion.div
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: "auto", opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 className="border-t border-neutral-900 p-3 bg-neutral-950 text-[10px] text-neutral-300 flex flex-col gap-3 font-mono"
                               >
                                 {/* Interaction Stats */}
                                 <div className="flex flex-col gap-2 p-2 bg-neutral-900/50 border border-neutral-900 rounded-sm">
                                   <div className="flex flex-col">
                                     <span className="text-[7.5px] uppercase text-neutral-500 font-bold tracking-wider">UKUPNO INTERAKCIJA</span>
                                     <span className="text-xs font-black text-white flex items-center gap-1.5 mt-0.5">
                                       <Activity className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                                       {totalInts} SUSRETA
                                     </span>
                                   </div>
                                   <div className="flex flex-col border-t border-neutral-900/50 pt-2">
                                     <span className="text-[7.5px] uppercase text-neutral-500 font-bold tracking-wider">STANJE DETEKCIJE</span>
                                     <span className={cn(
                                       "text-[9px] font-black uppercase mt-0.5",
                                       otherChar.status === 'dead' ? "text-red-500" : "text-green-500"
                                     )}>
                                       ● {otherChar.status === 'dead' ? 'POKOJNI' : 'PREŽIVJELI (LIVE)'}
                                     </span>
                                   </div>
                                 </div>

                                 {/* Movie Frequencies */}
                                 <div className="p-2 bg-neutral-900/30 border border-neutral-900 rounded-sm">
                                   <span className="text-[8px] font-black text-neutral-400 tracking-wider flex items-center gap-1 mb-2">
                                     <BarChart2 className="w-3 h-3 text-red-500" />
                                     UČESTALOST INTERAKCIJE PO FILMU
                                   </span>
                                   <div className="flex flex-col gap-1.5 p-1">
                                     {Object.entries(finalIntsPerMovie).sort((a,b) => Number(a[0]) - Number(b[0])).map(([movie, count]) => {
                                       const percentage = Math.min(100, (count / 40) * 100);
                                       return (
                                         <div key={movie} className="flex items-center justify-between gap-2 bg-black/40 px-2 py-1 border border-neutral-900">
                                           <span className="text-white font-bold text-[8px]">VRISAK {movie}</span>
                                           <div className="flex items-center gap-2 flex-grow max-w-[120px] justify-end">
                                             <span className="text-red-400 font-black text-[9px]">{count}x</span>
                                             <div className="w-16 h-1 bg-neutral-900 rounded-full overflow-hidden relative border border-neutral-800">
                                               <div 
                                                 className="h-full bg-red-600 rounded-full transition-all duration-500" 
                                                 style={{ width: `${percentage}%` }} 
                                               />
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                 </div>

                                 {/* CCTV Player Section */}
                                 <div className="p-2.5 bg-black border border-neutral-900 rounded-sm flex flex-col gap-2">
                                   <span className="text-[8px] font-black text-neutral-400 tracking-wider flex items-center gap-1">
                                     <Film className="w-3 h-3 text-red-500" />
                                     CCTV REKONSTRUKCIJA DOKAZA
                                   </span>

                                   {rel.videoClips && rel.videoClips.length > 0 ? (
                                     /* Real YouTube Clips */
                                     <div className="flex flex-col gap-2">
                                       {rel.videoClips.map((clip, clipIdx) => (
                                         <div key={clipIdx} className="flex flex-col gap-1.5">
                                           <span className="text-[8px] text-neutral-400 font-bold uppercase truncate">
                                             ZAPIS: {clip.title}
                                           </span>
                                           <div className="relative aspect-video w-full bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden">
                                             <iframe 
                                               src={`${clip.embedUrl}?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0`} 
                                               title={clip.title}
                                               className="w-full h-full absolute inset-0 z-10 border-0"
                                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                               referrerPolicy="no-referrer"
                                               allowFullScreen
                                             />
                                           </div>
                                         </div>
                                       ))}
                                     </div>
                                   ) : (
                                     /* Simulated CCTV feed which is much cooler than static frames */
                                     <div className="relative aspect-video w-full bg-neutral-950 border border-red-950 rounded-sm overflow-hidden flex flex-col justify-between p-2 text-green-500 font-mono tracking-tight text-[8px]">
                                       {/* Scanlines / Static overlay effects */}
                                       <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_at_center,rgba(0,10,0,0.15)_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-10" />
                                       <div className={cn(
                                         "absolute inset-0 w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-10",
                                         isPlayingCctv && "animate-pulse"
                                       )} />
                                       
                                       {/* Camera HUD Header */}
                                       <div className="flex justify-between items-start z-10 font-bold">
                                         <div className="flex items-center gap-1">
                                           {isPlayingCctv && (
                                             <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping shrink-0" />
                                           )}
                                           <span className="text-red-500">REC</span>
                                           <span>CAM_0{Math.floor(Math.random() * 8) + 1}</span>
                                         </div>
                                         <span className="text-[7px]">SYS_STATUS: ACTIVE</span>
                                       </div>

                                       {/* Signal static text or bouncing audio levels */}
                                       <div className="my-auto flex flex-col items-center justify-center text-center gap-1 z-10">
                                         {isPlayingCctv ? (
                                           <>
                                             <div className="text-[12px] font-black text-red-500 tracking-widest uppercase mb-1 drop-shadow-md">
                                               {cctvFilter === 'INFRARED' ? 'INFRARED_SCAN' : cctvFilter === 'ENHANCED' ? 'ENHANCED_GRID' : 'GHOST_WATCH'}
                                             </div>
                                             <div className="font-mono text-neutral-400 text-[8px] h-3 max-w-[140px] truncate">
                                               Arhiva Woodsboro: d_data_log.bin
                                              </div>
                                              
                                              {/* Simple audio bouncing visualization */}
                                              <div className="flex items-end justify-center gap-0.5 h-4 mt-1.5">
                                                {Array.from({ length: 16 }).map((_, i) => {
                                                  const heights = ['h-2', 'h-4', 'h-1', 'h-3', 'h-2', 'h-1', 'h-3', 'h-4', 'h-2', 'h-3', 'h-1', 'h-2', 'h-4', 'h-3'];
                                                  const hClass = heights[(i + (new Date().getSeconds() % heights.length)) % heights.length];
                                                  return (
                                                    <span 
                                                      key={i} 
                                                      className={cn(
                                                        "w-1 bg-green-500", 
                                                        cctvFilter === 'INFRARED' && "bg-neutral-100",
                                                        cctvFilter === 'ENHANCED' && "bg-red-500",
                                                        hClass
                                                      )} 
                                                    />
                                                  );
                                                })}
                                              </div>
                                            </>
                                          ) : (
                                            <div className="text-neutral-500 font-bold uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                                              <Pause className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                                              FEED ZAUSTAVLJEN
                                            </div>
                                          )}
                                       </div>

                                       {/* HUD Footer (Timestamp and buttons) */}
                                       <div className="flex justify-between items-end z-10">
                                         <div className="flex flex-col font-bold">
                                           <span>TIME: {new Date().toISOString().slice(11, 19)}</span>
                                           <span className="text-neutral-500 text-[6.5px]">SRC_NODE: {selectedCharacter.id.slice(0, 6)} // {otherChar.id.slice(0, 6)}</span>
                                         </div>
                                         
                                         {/* Mode filter button */}
                                         <div className="flex gap-1">
                                           {['VHS', 'INFRARED', 'ENHANCED'].map((filterOpt) => (
                                             <button
                                               key={filterOpt}
                                               onClick={(e) => {
                                                 e.stopPropagation();
                                                 setCctvFilter(filterOpt as any);
                                               }}
                                               className={cn(
                                                 "px-1 py-0.5 text-[6px] border rounded-[1px] cursor-pointer",
                                                 cctvFilter === filterOpt 
                                                   ? "bg-green-500 text-black border-green-500" 
                                                   : "bg-transparent text-green-500 border-green-900/50 hover:bg-green-950"
                                               )}
                                             >
                                               {filterOpt}
                                             </button>
                                           ))}
                                         </div>
                                       </div>
                                     </div>
                                   )}

                                   {/* Action row to Play/Pause mock CCTV stream */}
                                   {!rel.videoClips && (
                                     <div className="flex items-center justify-between gap-2.5 mt-1 border-t border-neutral-900 pt-1.5">
                                       <span className="text-[7px] text-neutral-500 uppercase font-black tracking-widest font-mono">
                                         GHOSTFACE_DECRYPTOR_LOG
                                       </span>
                                       <button 
                                         onClick={(e) => {
                                           e.stopPropagation();
                                           setIsPlayingCctv(!isPlayingCctv);
                                         }}
                                         className="px-1.5 py-0.5 bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-1 rounded-sm text-[8px] transition-colors cursor-pointer border border-red-800"
                                       >
                                         {isPlayingCctv ? (
                                           <>
                                             <Pause className="w-2 h-2 fill-current" />
                                             ZAUSTAVI DEKRIPCIJU
                                           </>
                                         ) : (
                                           <>
                                             <Play className="w-2 h-2 fill-current" />
                                             REKONSTRUIRAJ SIGNAL
                                           </>
                                         )}
                                       </button>
                                     </div>
                                   )}
                                 </div>
                               </motion.div>
                             )}
                           </AnimatePresence>
                         </div>
                       );
                     })}
                   </div>
                 )}
               </div>

               {/* AI Analyis Section */}
               {(aiInsight || loadingInsight) && (
                 <div className="mt-6 p-4 bg-red-650/10 border border-red-900/40 rounded-none font-mono">
                   <div className="text-[9px] uppercase tracking-widest text-red-500 font-black mb-2 flex items-center gap-2">
                     <Zap className="w-3 h-3 fill-current" />
                     Ghostface Analysis // DECRYPTED_INTELLIGENCE
                   </div>
                   <div className="text-[10px] leading-relaxed text-white font-semibold">
                     {loadingInsight ? (
                       <span className="animate-pulse">Accessing encrypted archives...</span>
                     ) : (
                       aiInsight
                     )}
                   </div>
                 </div>
               )}

               <div className="mt-6 flex flex-col gap-4 font-mono">
                <div className="p-4 bg-neutral-900/40 border border-neutral-900 rounded-none">
                  <h4 className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-3 underline decoration-red-600 underline-offset-4 font-mono">Appearance History</h4>
                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {selectedCharacter.movies.map(m => (
                      <span key={m} className="px-2.5 py-1 bg-black/60 border border-neutral-800 text-[10px] font-black text-red-500 shadow-none">
                        SCREAM {movieData.find(movie => movie.id === m)?.label || m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 border border-neutral-900 bg-neutral-900/40 rounded-none">
                  <h4 className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-2 font-mono italic">Threat Level</h4>
                  <div className="h-2 bg-black border border-neutral-900/60 w-full mb-3 rounded-none overflow-hidden">
                    <div className="h-full bg-red-600 transition-all duration-300" style={{ width: selectedCharacter.role === 'killer' ? '95%' : (selectedCharacter.status === 'dead' ? '0%' : '40%') }}></div>
                  </div>
                  <div className="flex justify-between items-center text-neutral-500">
                    <span className="text-[9px] leading-none font-bold">{selectedCharacter.role === 'killer' ? 'CRITICAL_THREAT' : 'MONITORED_SUBJECT'}</span>
                    <span className="text-[9px] leading-none">V.{selectedCharacter.movies[0]}.3.96</span>
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
