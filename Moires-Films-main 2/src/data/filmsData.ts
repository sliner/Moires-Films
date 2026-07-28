import { Film, NewsItem, TeamMember } from '../types';

import heroBanner from '../assets/images/moire_hero_banner_1785264014920.jpg';
import echoStill from '../assets/images/film_still_echo_1785264027474.jpg';
import waterStill from '../assets/images/film_still_water_1785264040598.jpg';

export const FILMS: Film[] = [
  {
    id: 'echo-of-silent-threads',
    title: 'The Echo of Silent Threads',
    originalTitle: 'サイレント・スレッドの残響',
    year: 2025,
    runtime: '124 MINS',
    genre: ['Psychological Thriller', 'Neo-Noir', 'Mystery'],
    status: 'In Distribution',
    director: 'Evelyn Vance & Hiroshi Sato',
    screenplay: 'Evelyn Vance',
    cast: ['Rinko Kikuchi', 'Dev Patel', 'Willem Dafoe', 'Minami'],
    cinematographer: 'Chayse Irvin, CSC',
    format: '35mm Kodak Vision3 500T / Panavision C-Series Anamorphic',
    aspectRatio: '2.39:1',
    logline: 'When an archivist in rain-slicked Tokyo uncovers an uncatalogued audio tape from 1984 containing a murder confession spoken in her late mother’s voice, she descends into an underground noir maze where sound rewrites history.',
    synopsis: 'Set across two distinct eras—the peak bubble-economy Tokyo of 1984 and the neon shadows of contemporary Shibuya—The Echo of Silent Threads follows Hana, a sound preservationist tasked with restoring magnetic tape archives from a defunct film laboratory. When she discovers an unreleased reel marked only with her family crest, she hears her mother whispering coordinates to a crime that was officially erased. Teaming up with an eccentric vinyl collector, Hana untangles a conspiracy involving state surveillance, lost cinema, and the haunting acoustic frequency of grief.',
    directorStatement: 'We conceived this film as a love letter to tactile audio recording and the ghostly resonance of analog media. In an age of pristine digital permanence, we wanted to explore the beauty of decay—how magnetic tape bleeds, stretched voices warble, and memory mutates over time.',
    posterUrl: echoStill,
    bannerUrl: heroBanner,
    stillUrls: [
      echoStill,
      heroBanner,
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80'
    ],
    festivals: [
      {
        name: '78th Cannes Film Festival',
        award: 'Winner - Un Certain Regard Prix de la Mise en Scène',
        laurelBadge: 'Cannes 2025',
        category: 'Official Selection'
      },
      {
        name: 'Toronto International Film Festival',
        award: 'Official Selection - Platform Competition',
        laurelBadge: 'TIFF 2025',
        category: 'Platform'
      },
      {
        name: 'BFI London Film Festival',
        award: 'Winner - Best Film',
        laurelBadge: 'BFI LFF 2025',
        category: 'Gala Strand'
      }
    ],
    pressQuotes: [
      {
        quote: "A staggering achievement in sensory cinema. Sato and Vance construct a hypnotic web of ambient dread and acoustic brilliance.",
        publication: "Sight & Sound",
        critic: "Jonathan Romney"
      },
      {
        quote: "Sensual, ominous, and utterly unmissable. Rinko Kikuchi delivers a career-best performance in this modern noir masterpiece.",
        publication: "IndieWire",
        critic: "David Ehrlich"
      },
      {
        quote: "Echoes the haunting visual mastery of Wong Kar-wai and the auditory paranoia of De Palma's Blow Out.",
        publication: "Cahiers du Cinéma",
        critic: "Élodie Chazal"
      }
    ],
    trailerVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-a-city-street-at-night-42881-large.mp4',
    screenplayExcerptUrl: '/screenplays/echo_excerpt.pdf',
    soundtrackTrack: {
      title: 'Shibuya Magnetics (Main Theme)',
      composer: 'Hildur Guðnadóttir & Ryuichi Sakamoto Archive',
      duration: '4:32'
    },
    releaseDate: 'October 17, 2025',
    country: 'United Kingdom / Japan',
    language: 'Japanese / English'
  },
  {
    id: 'memory-of-water',
    title: 'Memory of Water',
    year: 2025,
    runtime: '108 MINS',
    genre: ['Poetic Drama', 'Environmental Mystery', 'Magical Realism'],
    status: 'Festival Circuit',
    director: 'Soraya Al-Mansoor',
    screenplay: 'Soraya Al-Mansoor & Callum Ross',
    cast: ['Florence Pugh', 'Barry Keoghan', 'Charlotte Rampling'],
    cinematographer: 'Lukasz Zal, PSC',
    format: '16mm Arriflex 416 / Cooke Speed Panchro Lenses',
    aspectRatio: '1.85:1',
    logline: 'On a tide-swept Scottish isle where freshwater springs have mysteriously turned saline, a disgraced marine biologist and a hermit stonemason discover an ancient subterranean chamber that remembers human emotion.',
    synopsis: 'Isla, a marine hydrologist exiled from academia after a controversial paper, retreats to her ancestral home on the Isle of Skye. The island’s freshwater table is dying, threatening the isolated fishing hamlet. While mapping the underground fault lines, Isla collaborates with Ewan, a reclusive stonemason who reads centuries of storm history in cliffside granite. Deep within a sea cave accessible only at lowest ebb tide, they find a natural basalt acoustic cavern where water droplets echo with uncanny vocal harmonics, whispering lost histories of the villagers.',
    directorStatement: 'Memory of Water is an inquiry into environmental grief and the spiritual resilience of remote coastal communities. Shot exclusively on tactile 16mm film stock with natural light, we sought to capture the raw, tempestuous beauty of the North Atlantic coast.',
    posterUrl: waterStill,
    bannerUrl: waterStill,
    stillUrls: [
      waterStill,
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    festivals: [
      {
        name: '82nd Venice International Film Festival',
        award: 'Nominee - Golden Lion (In Competition)',
        laurelBadge: 'Venice 2025',
        category: 'Official Competition'
      },
      {
        name: 'Sundance Film Festival',
        award: 'Winner - World Cinema Dramatic Grand Jury Prize',
        laurelBadge: 'Sundance 2025',
        category: 'World Cinema'
      }
    ],
    pressQuotes: [
      {
        quote: "Luminous, tactile, and overwhelmingly moving. Al-Mansoor confirms her status as one of global cinema's most potent visionaries.",
        publication: "The Hollywood Reporter",
        critic: "Sheri Linden"
      },
      {
        quote: "Florence Pugh gives an astonishing, weathered performance bathed in wind and grey Atlantic light.",
        publication: "Variety",
        critic: "Guy Lodge"
      }
    ],
    trailerVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
    soundtrackTrack: {
      title: 'Tide at Lowest Ebb',
      composer: 'Oliver Coates',
      duration: '5:14'
    },
    releaseDate: 'November 21, 2025',
    country: 'United Kingdom / Ireland',
    language: 'English / Scottish Gaelic'
  },
  {
    id: 'velvet-dissonance',
    title: 'Velvet Dissonance',
    year: 2024,
    runtime: '132 MINS',
    genre: ['Period Drama', 'Musical Noir', 'Psychological Thriller'],
    status: 'In Distribution',
    director: 'Julian Vane',
    screenplay: 'Julian Vane',
    cast: ['Lakeith Stanfield', 'Vicky Krieps', 'John David Washington'],
    cinematographer: 'Bradford Young, ASC',
    format: '35mm anamorphic / Vintage Lomo Anamorphic',
    aspectRatio: '2.39:1',
    logline: 'In 1958 Berlin, an avant-garde American jazz saxophonist becomes ensnared in a Cold War espionage ring after composing a modal piece containing secret broadcast frequencies.',
    synopsis: 'Miles Vance, an uncompromising tenor saxophonist escaping racial tension in New York, lands a residency at the subterranean Velvet Cellar club in divided Berlin. When a enigmatic cabaret singer hands him a set of graphic music scores found in an abandoned East Berlin radio tower, Miles incorporates the bizarre dissonant intervals into his night sets. Unbeknownst to him, the intervals act as an acoustic cipher for intelligence assets operating across the sector border.',
    directorStatement: 'Velvet Dissonance explores how art, politics, and acoustics collided in post-war Europe. We recorded all musical performances live on set using vintage ribbon microphones to preserve the raw, smoke-thick room resonance.',
    posterUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80',
    stillUrls: [
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
    ],
    festivals: [
      {
        name: '74th Berlinale International Film Festival',
        award: 'Winner - Silver Bear for Outstanding Artistic Contribution',
        laurelBadge: 'Berlinale 2024',
        category: 'In Competition'
      },
      {
        name: 'Telluride Film Festival',
        award: 'Official Selection',
        laurelBadge: 'Telluride 2024',
        category: 'Main Program'
      }
    ],
    pressQuotes: [
      {
        quote: "Seductive and intoxicating. Lakeith Stanfield’s performance smolders with brilliant quiet intensity.",
        publication: "The Guardian",
        critic: "Peter Bradshaw"
      }
    ],
    trailerVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-lights-on-a-jazz-club-stage-41551-large.mp4',
    soundtrackTrack: {
      title: 'Dissonance Suite in C Minor',
      composer: 'Kamasi Washington & Julian Vane',
      duration: '6:45'
    },
    releaseDate: 'September 14, 2024',
    country: 'United Kingdom / Germany / USA',
    language: 'English / German'
  },
  {
    id: 'nocturne-in-chrome',
    title: 'Nocturne in Chrome',
    year: 2026,
    runtime: '115 MINS',
    genre: ['Experimental Sci-Fi', 'Psychological Thriller'],
    status: 'Post-Production',
    director: 'Kaelen Vance',
    screenplay: 'Kaelen Vance',
    cast: ['Hunter Schafer', 'Steven Yeun', 'Tilda Swinton'],
    cinematographer: 'Sayombhu Mukdeeprom',
    format: '65mm IMAX Digital / Vintage Cooke Lenses',
    aspectRatio: '1.66:1',
    logline: 'In an uninhabited polar research facility, two synthetic consciousness technicians tasked with cataloging human sleep cycles discover a recurring collective dream that predicts future celestial events.',
    synopsis: 'Stationed at the Arctic Circle in 2042, Maya and David manage the Sleep Lattice—a quantum vault where humanity’s archived dreams are stored in sub-zero liquid crystal. As night stretches for six consecutive months, Maya observes an anomaly: thousands of unrelated dreamers are experiencing identical micro-second visual patterns involving chrome geometric towers and shifting magnetic auroras. As they decode the dream files, they realize the dreams are not past memories, but instructions broadcast from deep space.',
    posterUrl: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1200&q=80',
    stillUrls: [
      'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    festivals: [
      {
        name: '79th Cannes Film Festival (Upcoming)',
        award: 'In Competition - May 2026',
        laurelBadge: 'Cannes 2026',
        category: 'Official Selection'
      }
    ],
    pressQuotes: [
      {
        quote: "One of the most anticipated sci-fi titles of the decade. MOIRES FILMS continues to push cinema into unchartered spiritual dimensions.",
        publication: "Film Comment",
        critic: "Nick Pinkerton"
      }
    ],
    releaseDate: 'Spring 2026',
    country: 'United Kingdom / Norway / South Korea',
    language: 'English / Korean'
  },
  {
    id: 'the-glass-weaver',
    title: 'The Glass Weaver',
    year: 2027,
    runtime: '110 MINS',
    genre: ['Poetic Realism', 'Historical Drama'],
    status: 'In Development',
    director: 'Ariadne Thorne',
    screenplay: 'Ariadne Thorne',
    cast: ['TBA'],
    cinematographer: 'Robbie Ryan, BSC, ISC',
    format: '35mm Black & White / Arri 435',
    aspectRatio: '4:3',
    logline: 'In 17th-century Murano, Venice, a deaf female artisan secretly crafts delicate glass lenses that reveal invisible spectrums of light, catching the eye of Galileo’s circle.',
    synopsis: 'Before the invention of modern optical instruments, glassmaking secrets were guarded in Murano under pain of death. Maddalena, a silent apprentice in an isolated furnace guild, develops a method of cooling silica using volcanic ash and sea brine. Her hand-blown glass lenses do not merely magnify; they polarize light in a way that renders subtle atmospheric shifts visible to the naked eye. When her lenses reach Florence, a battle erupts between religious dogma, natural philosophy, and freedom of expression.',
    posterUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    stillUrls: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80'
    ],
    festivals: [],
    pressQuotes: [],
    releaseDate: '2027',
    country: 'United Kingdom / Italy',
    language: 'Italian / Latin'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    title: 'THE ECHO OF SILENT THREADS Wins Prix de la Mise en Scène at Cannes Film Festival',
    date: 'May 24, 2025',
    category: 'Award',
    summary: 'The co-directorial debut of Evelyn Vance and Hiroshi Sato was honored at the Palais des Festivals in Cannes, taking home top directing honors in the Un Certain Regard section.',
    readTime: '3 min read',
    imageUrl: echoStill,
    source: 'Cannes Official Press'
  },
  {
    id: '2',
    title: 'MOIRES FILMS Partners with MUBI for Global Retrospective & Theatrical Run',
    date: 'June 12, 2025',
    category: 'Distribution',
    summary: 'MOIRES FILMS and specialized global distributor MUBI have finalized an exclusive multi-territory theatrical and streaming deal covering the entire 2024-2026 slate.',
    readTime: '4 min read',
    imageUrl: heroBanner,
    source: 'Screen International'
  },
  {
    id: '3',
    title: 'Annual Script Slate Submissions Open for Indie Screenwriters',
    date: 'July 1, 2025',
    category: 'Production',
    summary: 'Moires Films is officially opening its submission portal for feature screenplay pitches. Selected writers receive $50,000 development grants and mentorship with studio producers.',
    readTime: '2 min read',
    imageUrl: waterStill,
    source: 'MOIRES Studio Dispatch'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'evelyn-vance',
    name: 'Evelyn Vance',
    role: 'Co-Founder & Head of Creative',
    bio: 'BAFTA-winning writer/director and former chief film programmer at BFI Southbank. Evelyn oversees story development, auteur acquisitions, and creative direction across all Moires productions.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    credits: ['The Echo of Silent Threads', 'Velvet Dissonance', 'Nocturne in Chrome']
  },
  {
    id: 'hiroshi-sato',
    name: 'Hiroshi Sato',
    role: 'Co-Founder & Head of Production',
    bio: 'Tokyo-born producer and sound artist with over 18 years in international co-productions between Europe and East Asia. Pioneer of high-fidelity analog location recording.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    credits: ['The Echo of Silent Threads', 'Memory of Water', 'The Glass Weaver']
  },
  {
    id: 'celeste-dubois',
    name: 'Céleste Dubois',
    role: 'Head of International Sales & Distribution',
    bio: 'Former VP of Acquisitions at Wild Bunch and MK2, Céleste leads global festival strategies, theatrical licensing, and archival restored physical media releases.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    credits: ['Velvet Dissonance', 'Memory of Water']
  }
];

export const SCRIPT_EXCERPT_DATA = {
  title: 'THE ECHO OF SILENT THREADS',
  scene: 'SCENE 42 - INT. TOKYO AUDIO ARCHIVE - NIGHT',
  scriptText: `FADE IN:

INT. TOKYO AUDIO ARCHIVE - NIGHT (1984 / PRESENT)

A subterranean vault beneath Shibuya. Shelves tower sixteen feet high, stacked with magnetised tape spools in decaying cardboard sleeves.

HANA (30s), wearing worn leather headphones, leans over a REVOX B77 OPEN-REEL TAPE DECK.

The glowing VU METERS pulse softly in amber light. Needle dances near red zone (+3dB).

MAGNETIC TAPE (V.O.)
(Warbled, hiss-drenched, in Japanese)
...The rain doesn't erase the street, Hana. It only amplifies the frequency...

Hana's fingers FREEZE over the aluminum spools. 

Close-up on her eyes. The sound isn't coming from the tape deck's speakers. It's coming from the wall behind her.

HANA
(whispering)
Mother?

She hits PAUSE. 

The tape stops spinning. But the VOICE CONTINUES—clear, crisp, reverberating inside the concrete chamber as if standing six inches away.

TAPE VOICE (V.O.)
Look behind the reel from 1984. Box 84-B. The confession wasn't recorded on film. It was etched into the optical track.

Hana slowly turns toward Box 84-B. Drops of water fall onto the dust-covered floor—TICK. TICK. TICK. Synchronised with her heart monitor.`
};
