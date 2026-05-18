import { ScreamData } from '../types';

export const screamData: ScreamData = {
  characters: [
    // --- FIGURES CENTRALES & LEGACY ---
    { id: 'maureen-prescott', name: 'Maureen Prescott', movies: [1, 3], role: 'secondary', status: 'dead', description: 'Sidneyina majka čije je ubojstvo prije događaja prvog filma pokrenulo cijelu seriju. Njezine izvanbračne afere s Hankom Loomisom i Cottonom Wearyjem, te njezina prošlost u Hollywoodu kao "Rina Reynolds", motivirali su prve tri ubojice.' },
    { id: 'sidney-prescott', name: 'Sidney Prescott', movies: [1, 2, 3, 4, 5, 7], role: 'legacy', status: 'alive', description: 'Glavna junakinja (Final Girl) prvih pet filmova. Meta je Ghostfacea zbog postupaka svoje majke. U Scream 7 (2026.) živi u Pine Groveu, udana je za detektiva Marka Evansa/Kincaida i ima tri kćeri: Tatum, Emmu i Rebeccu.' },
    { id: 'gale-weathers', name: 'Gale Weathers', movies: [1, 2, 3, 4, 5, 6, 7], role: 'legacy', status: 'alive', description: 'Ambiciozna novinarka i autorica koja se pojavljuje u svih sedam filmova. Preživjela je brojne napade i napisala knjige o svakom masakru, uključujući onaj u New Yorku (2023.).' },
    { id: 'dewey-riley', name: 'Dewey Riley', movies: [1, 2, 3, 4, 5, 7], role: 'legacy', status: 'dead', description: 'Dobroćudni policajac i Sidneyin zaštitnik. Ubijen je u petom filmu od strane Amber Freeman dok je spašavao Taru Carpenter. U Scream 7 pojavljuje se kao AI duboka krivotvorina koju ubojice koriste da muče Sidney.' },
    { id: 'mark-kincaid', name: 'Mark Kincaid', movies: [3, 7], role: 'secondary', status: 'alive', description: 'Detektiv iz Los Angelesa koji je pomogao Sidney u trećem filmu. Sidneyin suprug.' },
    { id: 'randy-meeks', name: 'Randy Meeks', movies: [1, 2, 3], role: 'main', status: 'dead', description: 'Originalni stručnjak za horore. Ubila ga je Nancy Loomis. Brat Marthe Meeks.' },
    
    // --- SCREAM 2 EXTENDED ---
    { id: 'cici-cooper', name: 'Cici Cooper', movies: [2], role: 'victim', status: 'dead', description: 'Sestra iz sestrinstva Omega Beta Zeta, ubijena od strane Mickeyja Altierija.' },
    { id: 'derek-feldman', name: 'Derek Feldman', movies: [2], role: 'secondary', status: 'dead', description: 'Sidneyin dečko na fakultetu, ubijen od strane Mickeyja.' },
    { id: 'hallie-mcdaniel', name: 'Hallie McDaniel', movies: [2], role: 'secondary', status: 'dead', description: 'Sidneyina najbolja prijateljica na fakultetu.' },

    // --- SCREAM 3 EXTENDED ---
    { id: 'jennifer-jolie', name: 'Jennifer Jolie', movies: [3], role: 'secondary', status: 'dead', description: 'Glumica koja je glumila Gale Weathers u Stab 3.' },
    { id: 'sarah-darling', name: 'Sarah Darling', movies: [3], role: 'victim', status: 'dead', description: 'Glumica iz Stab 3.' },

    // --- SCREAM 4 EXTENDED ---
    { id: 'olivia-morris', name: 'Olivia Morris', movies: [4], role: 'victim', status: 'dead', description: 'Jillina i Kirbyina prijateljica.' },
    { id: 'rebecca-walters', name: 'Rebecca Walters', movies: [4], role: 'secondary', status: 'dead', description: 'Sidneyina publicistica.' },

    // --- NEW GENERATION (CORE FOUR) ---
    { id: 'sam-carpenter', name: 'Sam Carpenter', movies: [5, 6], role: 'main', status: 'alive', description: 'Glavna protagonistica petog i šestog filma. Ona je izvanbračna kći Billyja Loomisa (prvog ubojice), što je tajna koju je otkrila u majčinim dnevnicima. Pati od vizija svog mrtvog oca koji je potiče na nasilje.' },
    { id: 'tara-carpenter', name: 'Tara Carpenter', movies: [5, 6], role: 'main', status: 'alive', description: 'Samina mlađa polusestra i prva žrtva napada u filmu iz 2022. koja je preživjela. U vezi je s Chadom Meeks-Martinom.' },
    { id: 'chad-meeks-martin', name: 'Chad Meeks-Martin', movies: [5, 6], role: 'main', status: 'alive', description: 'Sportaš, sin Marthe Meeks i nećak Randyja Meeksa. Preživio je nevjerojatno velik broj brutalnih napada nožem u oba filma u kojima se pojavio.' },
    { id: 'mindy-meeks-martin', name: 'Mindy Meeks-Martin', movies: [5, 6], role: 'main', status: 'alive', description: 'Chadova sestra blizanka i filmska stručnjakinja koja objašnjava "pravila" preživljavanja, baš kao i njezin ujak Randy.' },

    // --- KILLERS & MOTIVES ---
    // Scream (1996)
    { id: 'billy-loomis', name: 'Billy Loomis', movies: [1, 5, 6], role: 'killer', status: 'dead', description: 'Sidneyin dečko. Ubio Maureen Prescott jer je njezina afera s njegovim ocem uništila njegovu obitelj. Otac je Sam Carpenter.' },
    { id: 'stu-macher', name: 'Stu Macher', movies: [1], role: 'killer', status: 'dead', description: 'Billyjev najbolji prijatelj. Sudjelovao je iz "pritiska okoline" i zabave.' },
    
    // Scream 2 (1997)
    { id: 'mrs-loomis', name: 'Nancy Loomis', movies: [2], role: 'killer', status: 'dead', description: 'Billyjeva majka (pod pseudonimom Debbie Salt). Motiv: osveta Sidney za Billyjevu smrt. Ubila je Randyja Meeksa iz osvete.' },
    { id: 'mickey-altieri', name: 'Mickey Altieri', movies: [2], role: 'killer', status: 'dead', description: 'Student filma kojeg je Nancy angažirala; želio je postati slavan na suđenju okrivljujući filmove za svoje postupke.' },
    
    // Scream 3 (2000)
    { id: 'roman-bridger', name: 'Roman Bridger', movies: [3], role: 'killer', status: 'dead', description: 'Sidneyin polubrat i pravi mozak iza svega jer je nagovorio Billyja da ubije Maureen. Sin kojeg je Maureen dala na posvajanje.' },
    
    // Scream 4 (2011)
    { id: 'jill-roberts', name: 'Jill Roberts', movies: [4], role: 'killer', status: 'dead', description: 'Sidneyina rođakinja. Motiv: ljubomora na Sidneyinu slavu; željela je postati nova "Sidney" kao jedina preživjela.' },
    { id: 'charlie-walker', name: 'Charlie Walker', movies: [4], role: 'killer', status: 'dead', description: 'Filmski fanatik koji je pomagao Jill nadajući se njezinoj naklonosti.' },
    
    // Scream (2022)
    { id: 'richie-kirsch', name: 'Richie Kirsch', movies: [5], role: 'killer', status: 'dead', description: 'Samin dečko. Motiv: bijesni obožavatelj Stab franšize koji je želio "stvoriti materijal" za bolji nastavak.' },
    { id: 'amber-freeman', name: 'Amber Freeman', movies: [5], role: 'killer', status: 'dead', description: 'Tarina prijateljica koja živi u bivšoj kući Stu Machera. Ubila je Deweya Rileyja i Judy Hicks.' },
    { id: 'wes-hicks', name: 'Wes Hicks', movies: [5], role: 'secondary', status: 'dead', description: 'Sin Judy Hicks, ubijen u petom filmu.' },
    
    // --- SCREAM VI EXTENDED ---
    { id: 'anika-kayoko', name: 'Anika Kayoko', movies: [6], role: 'victim', status: 'dead', description: 'Mindyina djevojka, ubijena u New Yorku.' },
    
    // Scream VI (2023)
    { id: 'det-wayne-bailey', name: 'Wayne Bailey', movies: [6], role: 'killer', status: 'dead', description: 'Detektiv i Richiejev otac. Cijela obitelj se željela osvetiti Sam Carpenter za Richiejevo ubojstvo.' },
    { id: 'ethan-landry', name: 'Ethan Landry', movies: [6], role: 'killer', status: 'dead', description: 'Richiejeva braća/sestre, osveta za Richiejevu smrt.' },
    { id: 'quinn-bailey', name: 'Quinn Bailey', movies: [6], role: 'killer', status: 'dead', description: 'Richiejeva braća/sestre, osveta za Richiejevu smrt.' },

    // Scream 7 (2026)
    { id: 'jessica-bowden', name: 'Jessica Bowden', movies: [7], role: 'killer', status: 'dead', description: 'Sidneyina susjeda u Scream 7. Motivacija je povezana sa Sidneyinim nestankom iz javnog života.' },
    { id: 'marco-davis', name: 'Marco Davis', movies: [7], role: 'killer', status: 'dead', description: 'Zaposlenik psihijatrijske ustanove u Scream 7.' },
    { id: 'karl-gibbs', name: 'Karl Gibbs', movies: [7], role: 'killer', status: 'dead', description: 'Pacijent iz ustanove u Scream 7.' },

    // --- OTHER KEY SECONDARY CHARACTERS ---
    { id: 'cotton-weary', name: 'Cotton Weary', movies: [1, 2, 3], role: 'secondary', status: 'dead', description: 'Čovjek lažno optužen za ubojstvo Maureen Prescott. Kasnije postaje slavan, ali ga ubija Roman Bridger jer nije želio otkriti gdje je Sidney.' },
    { id: 'kirby-reed', name: 'Kirby Reed', movies: [4, 6], role: 'main', status: 'alive', description: 'Jedina preživjela tinejdžerica iz četvrtog filma. U šestom filmu vraća se kao agentica FBI-a.' },
    { id: 'judy-hicks', name: 'Judy Hicks', movies: [4, 5], role: 'secondary', status: 'dead', description: 'Šerifica Woodsboroa, ubijena sa sinom Wesom Hicksom u petom filmu.' },
    { id: 'martha-meeks', name: 'Martha Meeks', movies: [3, 5], role: 'secondary', status: 'alive', description: 'Randy\'s sister and mother of Chad and Mindy.' },
    { id: 'kate-roberts', name: 'Kate Roberts', movies: [4], role: 'victim', status: 'dead', description: 'Maureen\'s sister and mother of Jill Roberts.' },
    { id: 'danny-brackett', name: 'Danny Brackett', movies: [6], role: 'secondary', status: 'alive', description: 'Sam\'s neighbor and current boyfriend who survived the NYC attacks.' },
    { id: 'tatum-prescott', name: 'Tatum Prescott', movies: [7], role: 'secondary', status: 'alive', description: 'Sidney and Mark\'s daughter, named after Sidney\'s late best friend.' },
    { id: 'emma-prescott', name: 'Emma Prescott', movies: [7], role: 'secondary', status: 'alive', description: 'Sidney and Mark\'s middle daughter.' },
    { id: 'rebecca-prescott', name: 'Rebecca Prescott', movies: [7], role: 'secondary', status: 'alive', description: 'Sidney and Mark\'s youngest daughter.' },
  ],
  relationships: [
    // Family Links
    { source: 'maureen-prescott', target: 'sidney-prescott', type: 'family', strength: 5 },
    { source: 'maureen-prescott', target: 'roman-bridger', type: 'family', strength: 5 },
    { source: 'maureen-prescott', target: 'kate-roberts', type: 'family', strength: 5 },
    { source: 'kate-roberts', target: 'jill-roberts', type: 'family', strength: 5 },
    { source: 'sidney-prescott', target: 'jill-roberts', type: 'family', strength: 3 },
    { source: 'sidney-prescott', target: 'roman-bridger', type: 'family', strength: 3 },
    { source: 'mrs-loomis', target: 'billy-loomis', type: 'family', strength: 5 },
    { source: 'billy-loomis', target: 'sam-carpenter', type: 'family', strength: 5 },
    { source: 'sam-carpenter', target: 'tara-carpenter', type: 'family', strength: 5 },
    { source: 'randy-meeks', target: 'martha-meeks', type: 'family', strength: 5 },
    { source: 'martha-meeks', target: 'chad-meeks-martin', type: 'family', strength: 5 },
    { source: 'martha-meeks', target: 'mindy-meeks-martin', type: 'family', strength: 5 },
    { source: 'chad-meeks-martin', target: 'mindy-meeks-martin', type: 'family', strength: 5 },
    { source: 'det-wayne-bailey', target: 'richie-kirsch', type: 'family', strength: 5 },
    { source: 'det-wayne-bailey', target: 'ethan-landry', type: 'family', strength: 5 },
    { source: 'det-wayne-bailey', target: 'quinn-bailey', type: 'family', strength: 5 },
    { source: 'sidney-prescott', target: 'mark-kincaid', type: 'romantic', strength: 5 },
    { source: 'sidney-prescott', target: 'tatum-prescott', type: 'family', strength: 5 },
    { source: 'sidney-prescott', target: 'emma-prescott', type: 'family', strength: 5 },
    { source: 'sidney-prescott', target: 'rebecca-prescott', type: 'family', strength: 5 },

    // romantic
    { source: 'sidney-prescott', target: 'billy-loomis', type: 'romantic', strength: 5 },
    { source: 'gale-weathers', target: 'dewey-riley', type: 'romantic', strength: 5 },
    { source: 'sam-carpenter', target: 'richie-kirsch', type: 'romantic', strength: 5 },
    { source: 'sam-carpenter', target: 'danny-brackett', type: 'romantic', strength: 4 },
    { source: 'tara-carpenter', target: 'chad-meeks-martin', type: 'romantic', strength: 5 },
    { source: 'jill-roberts', target: 'charlie-walker', type: 'romantic', strength: 4 },

    // Deadly Links & Alliances
    { source: 'roman-bridger', target: 'billy-loomis', type: 'rivalry', strength: 5 }, // Mentorship/Influence
    { source: 'billy-loomis', target: 'stu-macher', type: 'friendship', strength: 5 },
    { source: 'mrs-loomis', target: 'mickey-altieri', type: 'friendship', strength: 5 },
    { source: 'richie-kirsch', target: 'amber-freeman', type: 'friendship', strength: 5 },
    { source: 'jessica-bowden', target: 'marco-devils', type: 'friendship', strength: 5 },
    { source: 'jessica-bowden', target: 'karl-gibbs', type: 'friendship', strength: 5 },
    { source: 'amber-freeman', target: 'dewey-riley', type: 'killer-victim', strength: 5 },
    { source: 'sam-carpenter', target: 'richie-kirsch', type: 'killer-victim', strength: 5 },
    { source: 'nancy-loomis', target: 'randy-meeks', type: 'killer-victim', strength: 5 },
    { source: 'roman-bridger', target: 'cotton-weary', type: 'killer-victim', strength: 5 },
    { source: 'jill-roberts', target: 'charlie-walker', type: 'killer-victim', strength: 5 },
    { source: 'maureen-prescott', target: 'cotton-weary', type: 'romantic', strength: 4 }, // Affair
    { source: 'sidney-prescott', target: 'hallie-mcdaniel', type: 'friendship', strength: 5 },
    { source: 'sidney-prescott', target: 'derek-feldman', type: 'romantic', strength: 5 },
    { source: 'gale-weathers', target: 'jennifer-jolie', type: 'friendship', strength: 3 },
    { source: 'jill-roberts', target: 'olivia-morris', type: 'friendship', strength: 5 },
    { source: 'kirby-reed', target: 'olivia-morris', type: 'friendship', strength: 5 },
    { source: 'judy-hicks', target: 'wes-hicks', type: 'family', strength: 5 },
    { source: 'mindy-meeks-martin', target: 'anika-kayoko', type: 'romantic', strength: 5 },
    { source: 'mickey-altieri', target: 'derek-feldman', type: 'killer-victim', strength: 5 },
    { source: 'mickey-altieri', target: 'cici-cooper', type: 'killer-victim', strength: 5 },
    { source: 'amber-freeman', target: 'wes-hicks', type: 'killer-victim', strength: 5 },
  ]
};

