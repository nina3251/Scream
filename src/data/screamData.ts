import { ScreamData } from '../types';

export const screamData: ScreamData = {
  characters: [
    // --- FIGURES CENTRALES & LEGACY ---
    { id: 'maureen-prescott', name: 'Maureen Prescott', movies: [1, 3], role: 'secondary', status: 'dead', community: 'legacy', description: 'Sidneyina majka čije je ubojstvo prije događaja prvog filma pokrenulo cijelu seriju. Njezine izvanbračne afere s Hankom Loomisom i Cottonom Wearyjem, te njezina prošlost u Hollywoodu kao "Rina Reynolds", motivirali su prve tri ubojice.' },
    { id: 'sidney-prescott', name: 'Sidney Prescott', movies: [1, 2, 3, 4, 5, 7], role: 'legacy', status: 'alive', community: 'legacy', description: 'Glavna junakinja (Final Girl) prvih pet filmova. Meta je Ghostfacea zbog postupaka svoje majke. U Scream 7 (2026.) živi u Pine Groveu, udana je za detektiva Marka Evansa/Kincaida i ima tri kćeri: Tatum, Emmu i Rebeccu.' },
    { id: 'gale-weathers', name: 'Gale Weathers', movies: [1, 2, 3, 4, 5, 6, 7], role: 'legacy', status: 'alive', community: 'legacy', description: 'Ambiciozna novinarka i autorica koja se pojavljuje u svih sedam filmova. Preživjela je brojne napade i napisala knjige o svakom masakru, uključujući onaj u New Yorku (2023.).' },
    { id: 'dewey-riley', name: 'Dewey Riley', movies: [1, 2, 3, 4, 5, 7], role: 'legacy', status: 'dead', community: 'legacy', description: 'Dobroćudni policajac i Sidneyin zaštitnik. Ubijen je u petom filmu od strane Amber Freeman dok je spašavao Taru Carpenter. U Scream 7 pojavljuje se kao AI duboka krivotvorina koju ubojice koriste da muče Sidney.' },
    { id: 'mark-kincaid', name: 'Mark Kincaid', movies: [3, 7], role: 'secondary', status: 'alive', community: 'legacy', description: 'Detektiv iz Los Angelesa koji je pomogao Sidney u trećem filmu. Sidneyin suprug.' },
    { id: 'randy-meeks', name: 'Randy Meeks', movies: [1, 2, 3], role: 'main', status: 'dead', community: 'legacy', description: 'Originalni stručnjak za horore. Ubila ga je Nancy Loomis. Brat Marthe Meeks.' },
    
    // --- SCREAM 2 EXTENDED ---
    { id: 'cici-cooper', name: 'Cici Cooper', movies: [2], role: 'victim', status: 'dead', community: 'secondary', description: 'Sestra iz sestrinstva Omega Beta Zeta, ubijena od strane Mickeyja Altierija.' },
    { id: 'derek-feldman', name: 'Derek Feldman', movies: [2], role: 'secondary', status: 'dead', community: 'secondary', description: 'Sidneyin dečko na fakultetu, ubijen od strane Mickeyja.' },
    { id: 'hallie-mcdaniel', name: 'Hallie McDaniel', movies: [2], role: 'secondary', status: 'dead', community: 'secondary', description: 'Sidneyina najbolja prijateljica na fakultetu.' },

    // --- SCREAM 3 EXTENDED ---
    { id: 'jennifer-jolie', name: 'Jennifer Jolie', movies: [3], role: 'secondary', status: 'dead', community: 'secondary', description: 'Glumica koja je glumila Gale Weathers u Stab 3.' },
    { id: 'sarah-darling', name: 'Sarah Darling', movies: [3], role: 'victim', status: 'dead', community: 'secondary', description: 'Glumica iz Stab 3.' },

    // --- SCREAM 4 EXTENDED ---
    { id: 'olivia-morris', name: 'Olivia Morris', movies: [4], role: 'victim', status: 'dead', community: 'secondary', description: 'Jillina i Kirbyina prijateljica.' },
    { id: 'rebecca-walters', name: 'Rebecca Walters', movies: [4], role: 'secondary', status: 'dead', community: 'secondary', description: 'Sidneyina publicistica.' },

    // --- NEW GENERATION (CORE FOUR) ---
    { id: 'sam-carpenter', name: 'Sam Carpenter', movies: [5, 6], role: 'main', status: 'alive', community: 'core-four', description: 'Glavna protagonistica petog i šestog filma i članica grupe "Core Four". Ona je izvanbračna kći Billyja Loomisa (prvog ubojice), što je tajna koju je otkrila u majčinim dnevnicima. Pati od vizija svog mrtvog oca koji je potiče na nasilje.' },
    { id: 'tara-carpenter', name: 'Tara Carpenter', movies: [5, 6], role: 'main', status: 'alive', community: 'core-four', description: 'Samina mlađa polusestra i članica grupe "Core Four". Prva je žrtva napada u filmu iz 2022. koja je preživjela. U vezi je s Chadom Meeks-Martinom.' },
    { id: 'chad-meeks-martin', name: 'Chad Meeks-Martin', movies: [5, 6, 7], role: 'main', status: 'alive', community: 'core-four', description: 'Sportaš, član grupe "Core Four", sin Marthe Meeks i nećak Randyja Meeksa. Preživio je nevjerojatno velik broj brutalnih napada nožem.' },
    { id: 'mindy-meeks-martin', name: 'Mindy Meeks-Martin', movies: [5, 6, 7], role: 'main', status: 'alive', community: 'core-four', description: 'Chadova sestra blizanka, članica grupe "Core Four" i filmska stručnjakinja koja objašnjava "pravila" preživljavanja, baš kao i njezin ujak Randy.' },

    // --- KILLERS & MOTIVES ---
    // Scream (1996)
    { id: 'billy-loomis', name: 'Billy Loomis', movies: [1, 5, 6], role: 'killer', status: 'dead', community: 'killers', description: 'Sidneyin dečko. Ubio Maureen Prescott jer je njezina afera s njegovim ocem uništila njegovu obitelj. Otac je Sam Carpenter.' },
    { id: 'stu-macher', name: 'Stu Macher', movies: [1], role: 'killer', status: 'dead', community: 'killers', description: 'Billyjev najbolji prijatelj. Sudjelovao je iz "pritiska okoline" i zabave.' },
    
    // Scream 2 (1997)
    { id: 'mrs-loomis', name: 'Nancy Loomis', movies: [2], role: 'killer', status: 'dead', community: 'killers', description: 'Billyjeva majka (pod pseudonimom Debbie Salt). Motiv: osveta Sidney za Billyjevu smrt. Ubila je Randyja Meeksa iz osvete.' },
    { id: 'mickey-altieri', name: 'Mickey Altieri', movies: [2], role: 'killer', status: 'dead', community: 'killers', description: 'Student filma kojeg je Nancy angažirala; želio je postati slavan na suđenju okrivljujući filmove za svoje postupke.' },
    
    // Scream 3 (2000)
    { id: 'roman-bridger', name: 'Roman Bridger', movies: [3], role: 'killer', status: 'dead', community: 'killers', description: 'Sidneyin polubrat i pravi mozak iza svega jer je nagovorio Billyja da ubije Maureen. Sin kojeg je Maureen dala na posvajanje.' },
    
    // Scream 4 (2011)
    { id: 'jill-roberts', name: 'Jill Roberts', movies: [4], role: 'killer', status: 'dead', community: 'killers', description: 'Sidneyina rođakinja. Motiv: ljubomora na Sidneyinu slavu; željela je postati nova "Sidney" kao jedina preživjela.' },
    { id: 'charlie-walker', name: 'Charlie Walker', movies: [4], role: 'killer', status: 'dead', community: 'killers', description: 'Filmski fanatik koji je pomagao Jill nadajući se njezinoj naklonosti.' },
    
    // Scream (2022)
    { id: 'richie-kirsch', name: 'Richie Kirsch', movies: [5], role: 'killer', status: 'dead', community: 'killers', description: 'Samin dečko. Motiv: bijesni obožavatelj Stab franšize koji je želio "stvoriti materijal" za bolji nastavak.' },
    { id: 'amber-freeman', name: 'Amber Freeman', movies: [5], role: 'killer', status: 'dead', community: 'killers', description: 'Tarina prijateljica koja živi u bivšoj kući Stu Machera. Ubila je Deweya Rileyja i Judy Hicks.' },
    { id: 'wes-hicks', name: 'Wes Hicks', movies: [5], role: 'secondary', status: 'dead', community: 'secondary', description: 'Sin Judy Hicks, ubijen u petom filmu.' },
    
    // --- SCREAM VI EXTENDED ---
    { id: 'anika-kayoko', name: 'Anika Kayoko', movies: [6], role: 'victim', status: 'dead', community: 'secondary', description: 'Mindyina djevojka, ubijena u New Yorku.' },
    
    // Scream VI (2023)
    { id: 'det-wayne-bailey', name: 'Wayne Bailey', movies: [6], role: 'killer', status: 'dead', community: 'killers', description: 'Detektiv i Richiejev otac. Cijela obitelj se željela osvetiti Sam Carpenter za Richiejevo ubojstvo.' },
    { id: 'ethan-landry', name: 'Ethan Landry', movies: [6], role: 'killer', status: 'dead', community: 'killers', description: 'Richiejeva braća/sestre, osveta za Richiejevu smrt.' },
    { id: 'quinn-bailey', name: 'Quinn Bailey', movies: [6], role: 'killer', status: 'dead', community: 'killers', description: 'Richiejeva braća/sestre, osveta za Richiejevu smrt.' },
    
    // Scream 7 (2026)
    { id: 'jessica-bowden', name: 'Jessica Bowden', movies: [7], role: 'killer', status: 'dead', community: 'killers', description: 'Sidneyina susjeda u Scream 7. Motivacija je povezana sa Sidneyinim nestankom iz javnog života.' },
    { id: 'marco-davis', name: 'Marco Davis', movies: [7], role: 'killer', status: 'dead', community: 'killers', description: 'Zaposlenik psihijatrijske ustanove u Scream 7.' },
    { id: 'karl-gibbs', name: 'Karl Gibbs', movies: [7], role: 'killer', status: 'dead', community: 'killers', description: 'Pacijent iz ustanove u Scream 7.' },
    
    // --- OTHER KEY SECONDARY CHARACTERS ---
    { id: 'cotton-weary', name: 'Cotton Weary', movies: [1, 2, 3], role: 'secondary', status: 'dead', community: 'secondary', description: 'Čovjek lažno optužen za ubojstvo Maureen Prescott. Kasnije postaje slavan, ali ga ubija Roman Bridger jer nije želio otkriti gdje je Sidney.' },
    { id: 'kirby-reed', name: 'Kirby Reed', movies: [4, 6], role: 'main', status: 'alive', community: 'legacy', description: 'Jedina preživjela tinejdžerica iz četvrtog filma. U šestom filmu vraća se kao agentica FBI-a.' },
    { id: 'judy-hicks', name: 'Judy Hicks', movies: [4, 5], role: 'secondary', status: 'dead', community: 'secondary', description: 'Šerifica Woodsboroa, ubijena sa sinom Wesom Hicksom u petom filmu.' },
    { id: 'martha-meeks', name: 'Martha Meeks', movies: [3, 5], role: 'secondary', status: 'alive', community: 'legacy', description: 'Randy\'s sister and mother of Chad and Mindy.' },
    { id: 'kate-roberts', name: 'Kate Roberts', movies: [4], role: 'victim', status: 'dead', community: 'secondary', description: 'Maureen\'s sister and mother of Jill Roberts.' },
    { id: 'danny-brackett', name: 'Danny Brackett', movies: [6], role: 'secondary', status: 'alive', community: 'secondary', description: 'Sam\'s neighbor and current boyfriend who survived the NYC attacks.' },
    { id: 'tatum-prescott', name: 'Tatum Prescott', movies: [7], role: 'secondary', status: 'alive', community: 'legacy', description: 'Sidney and Mark\'s daughter, named after Sidney\'s late best friend.' },
    { id: 'emma-prescott', name: 'Emma Prescott', movies: [7], role: 'secondary', status: 'alive', community: 'legacy', description: 'Sidney and Mark\'s middle daughter.' },
    { id: 'rebecca-prescott', name: 'Rebecca Prescott', movies: [7], role: 'secondary', status: 'alive', community: 'legacy', description: 'Sidney and Mark\'s youngest daughter.' },
  ],
  relationships: [
    // Family Links
    { 
      source: 'maureen-prescott', 
      target: 'sidney-prescott', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka i kći. Maureeno ubojstvo je trauma koja je definirala Sidneyin život.',
      totalInteractions: 14,
      interactionsPerMovie: { '1': 8, '3': 6 },
      videoClips: [
        { title: "Maureen Prescott: The Secret Legacy", embedUrl: "https://www.youtube-nocookie.com/embed/hbeP78bvYOk" }
      ]
    },
    { 
      source: 'maureen-prescott', 
      target: 'roman-bridger', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka i napušteni sin. Maureenino odbacivanje Romana stvorilo je ultimativnog negativca.',
      totalInteractions: 8,
      interactionsPerMovie: { '3': 8 }
    },
    { 
      source: 'maureen-prescott', 
      target: 'kate-roberts', 
      type: 'family', 
      strength: 5, 
      reason: 'Sestre, dijelile su obiteljske tajne Woodsboroa.',
      totalInteractions: 12,
      interactionsPerMovie: { '1': 4, '4': 8 }
    },
    { 
      source: 'kate-roberts', 
      target: 'jill-roberts', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka i kći. Jillina ogorčenost obitelji potaknula je njezin ubilački pohod.',
      totalInteractions: 19,
      interactionsPerMovie: { '4': 19 }
    },
    { 
      source: 'sidney-prescott', 
      target: 'jill-roberts', 
      type: 'family', 
      strength: 3, 
      reason: 'Sestrične. Jill je bila patološki ljubomorna na Sidneyinu slavnu sudbinu.',
      totalInteractions: 24,
      interactionsPerMovie: { '4': 24 },
      videoClips: [
        { title: "Jill Roberts Reveal of Jealousy", embedUrl: "https://www.youtube-nocookie.com/embed/t3S8mIdn8Xo" }
      ]
    },
    { 
      source: 'sidney-prescott', 
      target: 'roman-bridger', 
      type: 'family', 
      strength: 3, 
      reason: 'Polubrat i polusestra. Roman je bio tajni arhitekt Sidneyine noćne more.',
      totalInteractions: 11,
      interactionsPerMovie: { '3': 11 },
      videoClips: [
        { title: "Roman's Monologue to Sidney", embedUrl: "https://www.youtube-nocookie.com/embed/_Gpe-D7Ld-M" }
      ]
    },
    { 
      source: 'mrs-loomis', 
      target: 'billy-loomis', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka i sin. Nancy Loomis je pokrenula Scream 2 masakr kako bi osvetila Billyjevu smrt.',
      totalInteractions: 2,
      interactionsPerMovie: { '1': 1, '2': 1 }
    },
    { 
      source: 'billy-loomis', 
      target: 'sam-carpenter', 
      type: 'family', 
      strength: 5, 
      reason: 'Otac i izvanbračna kći. Samin identitet opterećen je Billyjevim nasilnim genima i vizijama.',
      totalInteractions: 15,
      interactionsPerMovie: { '5': 8, '6': 7 },
      videoClips: [
        { title: "Billy Loomis Mirror Apparitions", embedUrl: "https://www.youtube-nocookie.com/embed/beAun1vSgLU" }
      ]
    },
    { 
      source: 'sam-carpenter', 
      target: 'tara-carpenter', 
      type: 'family', 
      strength: 5, 
      reason: 'Polusestre i srž Core Four saveza. Njihova sestrinska ljubav preživljava sve napade.',
      totalInteractions: 52,
      interactionsPerMovie: { '5': 22, '6': 30 },
      videoClips: [
        { title: "The Sisters Face Ghostface Together", embedUrl: "https://www.youtube-nocookie.com/embed/h74AXqw4O30" }
      ]
    },
    { 
      source: 'randy-meeks', 
      target: 'martha-meeks', 
      type: 'family', 
      strength: 5, 
      reason: 'Brat i sestra, čuvari izvornih filmskih pravila.',
      totalInteractions: 14,
      interactionsPerMovie: { '1': 10, '3': 4 }
    },
    { 
      source: 'martha-meeks', 
      target: 'chad-meeks-martin', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka i sin.',
      totalInteractions: 6,
      interactionsPerMovie: { '5': 4, '6': 2 }
    },
    { 
      source: 'martha-meeks', 
      target: 'mindy-meeks-martin', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka i kći.',
      totalInteractions: 6,
      interactionsPerMovie: { '5': 4, '6': 2 }
    },
    { 
      source: 'chad-meeks-martin', 
      target: 'mindy-meeks-martin', 
      type: 'family', 
      strength: 5, 
      reason: 'Blizanci s neraskidivom telepatskom i preživljavajućom vezom.',
      totalInteractions: 31,
      interactionsPerMovie: { '5': 13, '6': 18 }
    },
    { 
      source: 'det-wayne-bailey', 
      target: 'richie-kirsch', 
      type: 'family', 
      strength: 5, 
      reason: 'Otac i sin. Detektiv Bailey osmislio je njujorški masakr kako bi osvetio Richijeve ubojice.',
      totalInteractions: 8,
      interactionsPerMovie: { '6': 8 }
    },
    { 
      source: 'det-wayne-bailey', 
      target: 'ethan-landry', 
      type: 'family', 
      strength: 5, 
      reason: 'Otac i sin, urotili su se u New Yorku radi osvete za Richieja.',
      totalInteractions: 10,
      interactionsPerMovie: { '6': 10 }
    },
    { 
      source: 'det-wayne-bailey', 
      target: 'quinn-bailey', 
      type: 'family', 
      strength: 5, 
      reason: 'Otac i kći, lažirali su njezinu smrt kako bi se infiltrirali među žrtve.',
      totalInteractions: 9,
      interactionsPerMovie: { '6': 9 }
    },
    { 
      source: 'sidney-prescott', 
      target: 'mark-kincaid', 
      type: 'romantic', 
      strength: 5, 
      reason: 'Supružnici. Detektiv Kincaid je postao Sidneyin životni zaštitnik i otac njezine djece.',
      totalInteractions: 14,
      interactionsPerMovie: { '3': 12, '7': 2 }
    },
    { 
      source: 'sidney-prescott', 
      target: 'tatum-prescott', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka i kći. Nazvana po njezinoj pokojnoj najboljoj prijateljici Tatum Riley.',
      totalInteractions: 5,
      interactionsPerMovie: { '7': 5 }
    },
    { 
      source: 'sidney-prescott', 
      target: 'emma-prescott', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka i kći.',
      totalInteractions: 4,
      interactionsPerMovie: { '7': 4 }
    },
    { 
      source: 'sidney-prescott', 
      target: 'rebecca-prescott', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka i kći.',
      totalInteractions: 4,
      interactionsPerMovie: { '7': 4 }
    },

    // romantic
    { 
      source: 'sidney-prescott', 
      target: 'billy-loomis', 
      type: 'romantic', 
      strength: 5, 
      reason: 'Prvi dečko i ubojica. Billyjeva izdaja obilježila je cijeli Sidneyin život.',
      totalInteractions: 48,
      interactionsPerMovie: { '1': 35, '2': 2, '3': 1, '5': 10 },
      videoClips: [
        { title: "Billy Loomis is Ghostface (Reveal Scene)", embedUrl: "https://www.youtube-nocookie.com/embed/hbeP78bvYOk" },
        { title: "Sidney confronts her past", embedUrl: "https://www.youtube-nocookie.com/embed/hbeP78bvYOk" }
      ]
    },
    { 
      source: 'gale-weathers', 
      target: 'dewey-riley', 
      type: 'romantic', 
      strength: 5, 
      reason: 'Komična i tragična ljubavna priča Woodsboroa koja je trajala kroz pet filmova.',
      totalInteractions: 64,
      interactionsPerMovie: { '1': 18, '2': 15, '3': 12, '4': 11, '5': 8 },
      videoClips: [
        { title: "Gale and Dewey: Partners in Survival", embedUrl: "https://www.youtube-nocookie.com/embed/uGVes8gXg7o" }
      ]
    },
    { 
      source: 'sam-carpenter', 
      target: 'richie-kirsch', 
      type: 'romantic', 
      strength: 5, 
      reason: 'Dečko i ubojica. Richie se infiltrirao u njezin život radi fanatične opsesije filmovima.',
      totalInteractions: 28,
      interactionsPerMovie: { '5': 28 },
      videoClips: [
        { title: "Sam's Revenge: Ending the Toxicity", embedUrl: "https://www.youtube.com/embed/5Fp3U_7N_sc" }
      ]
    },
    { 
      source: 'sam-carpenter', 
      target: 'danny-brackett', 
      type: 'romantic', 
      strength: 4, 
      reason: 'Susjed i dečko koji joj je pomogao preživjeti napade u New Yorku.',
      totalInteractions: 16,
      interactionsPerMovie: { '6': 16 }
    },
    { 
      source: 'tara-carpenter', 
      target: 'chad-meeks-martin', 
      type: 'romantic', 
      strength: 5, 
      reason: 'Prijatelji iz djetinjstva čija je ljubav procvjetala tijekom zajedničkog proživljavanja trauma.',
      totalInteractions: 24,
      interactionsPerMovie: { '5': 8, '6': 16 }
    },
    { 
      source: 'jill-roberts', 
      target: 'charlie-walker', 
      type: 'romantic', 
      strength: 4, 
      reason: 'Uvrnuti saveznik. Charlie je ubijao nadajući se da će postati njezin "Billy Loomis".',
      totalInteractions: 14,
      interactionsPerMovie: { '4': 14 }
    },

    // Deadly Links & Alliances
    { 
      source: 'roman-bridger', 
      target: 'billy-loomis', 
      type: 'rivalry', 
      strength: 5, 
      reason: 'Mentorstvo i manipulacija. Roman je otkrio tajnu Billyju i potaknuo ga na ubojstvo Maureen.',
      totalInteractions: 6,
      interactionsPerMovie: { '1': 1, '3': 5 }
    }, 
    { 
      source: 'billy-loomis', 
      target: 'stu-macher', 
      type: 'friendship', 
      strength: 5, 
      reason: 'Originalni ubilački dvojac iz 1996. godine.',
      totalInteractions: 36,
      interactionsPerMovie: { '1': 36 },
      videoClips: [
        { title: "Billy & Stu: Original Psychopath Alliance", embedUrl: "https://www.youtube-nocookie.com/embed/hbeP78bvYOk" }
      ]
    },
    { 
      source: 'mrs-loomis', 
      target: 'mickey-altieri', 
      type: 'friendship', 
      strength: 5, 
      reason: 'Udruženi ubojice s fakulteta u Windsoru.',
      totalInteractions: 12,
      interactionsPerMovie: { '2': 12 }
    },
    { 
      source: 'richie-kirsch', 
      target: 'amber-freeman', 
      type: 'friendship', 
      strength: 5, 
      reason: 'Udruženi ubojice s interneta, opsjednuti oživljavanjem franšize u originalnoj Stuovoj kući.',
      totalInteractions: 25,
      interactionsPerMovie: { '5': 25 }
    },
    { 
      source: 'jessica-bowden', 
      target: 'marco-davis', 
      type: 'friendship', 
      strength: 5, 
      reason: 'Udruženi ubojice iz ustanove u Scream 7 (2026.).',
      totalInteractions: 10,
      interactionsPerMovie: { '7': 10 }
    },
    { 
      source: 'jessica-bowden', 
      target: 'karl-gibbs', 
      type: 'friendship', 
      strength: 5, 
      reason: 'Udruženi urotnici s motivom destabilizacije Sidney Prescott.',
      totalInteractions: 9,
      interactionsPerMovie: { '7': 9 }
    },
    { 
      source: 'amber-freeman', 
      target: 'dewey-riley', 
      type: 'killer-victim', 
      strength: 5, 
      reason: 'Amber je brutalno ubila Deweya u bolnici, čime je prekinula nasljeđe legendarnog šerifa.',
      totalInteractions: 5,
      interactionsPerMovie: { '5': 5 },
      videoClips: [
        { title: "Dewey Riley's Tragic Hospital End Scene", embedUrl: "https://www.youtube-nocookie.com/embed/beAun1vSgLU" }
      ]
    },
    { 
      source: 'sam-carpenter', 
      target: 'richie-kirsch', 
      type: 'killer-victim', 
      strength: 5, 
      reason: 'Sam je oslobodila svoj unutarnji nasilni alter-ego kako bi izbola Richieja na smrt.',
      totalInteractions: 28,
      interactionsPerMovie: { '5': 28 },
      videoClips: [
        { title: "Sam's Revenge: Ending the Toxicity", embedUrl: "https://www.youtube-nocookie.com/embed/beAun1vSgLU" }
      ]
    },
    { 
      source: 'nancy-loomis', 
      target: 'randy-meeks', 
      type: 'killer-victim', 
      strength: 5, 
      reason: 'Nancy je u naletu bijesa i prkosa ubila Randyja u reportažnom kombiju.',
      totalInteractions: 3,
      interactionsPerMovie: { '2': 3 }
    },
    { 
      source: 'roman-bridger', 
      target: 'cotton-weary', 
      type: 'killer-victim', 
      strength: 5, 
      reason: 'Roman je ubio Cottona jer je odbio predati informaciju o tome gdje se Sidney skriva.',
      totalInteractions: 4,
      interactionsPerMovie: { '3': 4 }
    },
    { 
      source: 'jill-roberts', 
      target: 'charlie-walker', 
      type: 'killer-victim', 
      strength: 5, 
      reason: 'Završna izdaja. Jill je ubila Charlieja kako bi sebe predstavila kao jedinu nevinu žrtvu.',
      totalInteractions: 14,
      interactionsPerMovie: { '4': 14 }
    },
    { 
      source: 'maureen-prescott', 
      target: 'cotton-weary', 
      type: 'romantic', 
      strength: 4, 
      reason: 'Izvanbračna afera koja je dovela do lažnog optuživanja Cottona za njezinu smrt.',
      totalInteractions: 11,
      interactionsPerMovie: { '1': 11 }
    }, 
    { 
      source: 'sidney-prescott', 
      target: 'hallie-mcdaniel', 
      type: 'friendship', 
      strength: 5, 
      reason: 'Cimerica i najbolja prijateljica na fakultetu koja je stradala od ruku ubojice.',
      totalInteractions: 20,
      interactionsPerMovie: { '2': 20 }
    },
    { 
      source: 'sidney-prescott', 
      target: 'derek-feldman', 
      type: 'romantic', 
      strength: 5, 
      reason: 'Tragična ljubav na fakultetu. Derek je upucan pred Sidneyinim očima.',
      totalInteractions: 22,
      interactionsPerMovie: { '2': 22 }
    },
    { 
      source: 'gale-weathers', 
      target: 'jennifer-jolie', 
      type: 'friendship', 
      strength: 3, 
      reason: 'Komično i napeto suparništvo i suradnja novinarke i glumice koja ju je utjelovila.',
      totalInteractions: 15,
      interactionsPerMovie: { '3': 15 }
    },
    { 
      source: 'jill-roberts', 
      target: 'olivia-morris', 
      type: 'friendship', 
      strength: 5, 
      reason: 'Prijateljstvo koje je služilo kao paravan za Jillino stravično planiranje njezina ubojstva.',
      totalInteractions: 11,
      interactionsPerMovie: { '4': 11 }
    },
    { 
      source: 'kirby-reed', 
      target: 'olivia-morris', 
      type: 'friendship', 
      strength: 5, 
      reason: 'Srednjoškolske školske prijateljice iz Woodsboroa.',
      totalInteractions: 12,
      interactionsPerMovie: { '4': 12 }
    },
    { 
      source: 'judy-hicks', 
      target: 'wes-hicks', 
      type: 'family', 
      strength: 5, 
      reason: 'Majka šerifica i voljeni sin čija su ubojstva šokirala obitelj.',
      totalInteractions: 16,
      interactionsPerMovie: { '4': 2, '5': 14 }
    },
    { 
      source: 'mindy-meeks-martin', 
      target: 'anika-kayoko', 
      type: 'romantic', 
      strength: 5, 
      reason: 'Njujorška ljubav. Anika je tragično pala s ljestava u jednom od najbrutalnijih ubojstava.',
      totalInteractions: 14,
      interactionsPerMovie: { '6': 14 }
    },
    { 
      source: 'mickey-altieri', 
      target: 'derek-feldman', 
      type: 'killer-victim', 
      strength: 5, 
      reason: 'Mickey je ubio Dereka zavezanog na pozornici kako bi psihički slomio Sidney.',
      totalInteractions: 3,
      interactionsPerMovie: { '2': 3 }
    },
    { 
      source: 'mickey-altieri', 
      target: 'cici-cooper', 
      type: 'killer-victim', 
      strength: 5, 
      reason: 'Mickey je bacio Cici s balkona sestrinstva u Windsoru.',
      totalInteractions: 2,
      interactionsPerMovie: { '2': 2 }
    },
    { 
      source: 'amber-freeman', 
      target: 'wes-hicks', 
      type: 'killer-victim', 
      strength: 5, 
      reason: 'Amber je iznenadila i ubila Wesa u vlastitoj kući u Woodsborou.',
      totalInteractions: 5,
      interactionsPerMovie: { '5': 5 }
    }
  ]
};

