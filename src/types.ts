export interface Film {
  id: string;
  title: string;
  originalTitle?: string;
  year: number;
  runtime: string; // e.g. "118 MINS"
  genre: string[];
  status: 'In Distribution' | 'Festival Circuit' | 'Post-Production' | 'In Development' | 'Archival';
  director: string;
  screenplay: string;
  cast: string[];
  cinematographer: string;
  format: string; // e.g. "35mm Kodak Vision3 / Arri Alexa LF"
  aspectRatio: '2.39:1' | '1.85:1' | '1.66:1' | '4:3';
  logline: string;
  synopsis: string;
  directorStatement?: string;
  posterUrl: string;
  bannerUrl: string;
  stillUrls: string[];
  festivals: {
    name: string;
    award: string;
    laurelBadge: string; // e.g. "Cannes 2025"
    category: string;
  }[];
  pressQuotes: {
    quote: string;
    publication: string;
    critic?: string;
  }[];
  trailerVideoUrl?: string; // sample trailer embed or interactive simulation
  screenplayExcerptUrl?: string;
  soundtrackTrack?: {
    title: string;
    composer: string;
    duration: string;
  };
  releaseDate: string;
  country: string;
  language: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Festival' | 'Distribution' | 'Production' | 'Award' | 'Press';
  summary: string;
  readTime: string;
  imageUrl: string;
  source?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  credits: string[];
}

export interface PitchSubmission {
  title: string;
  writerName: string;
  email: string;
  logline: string;
  synopsis: string;
  genre: string;
  format: string;
  comparables: string;
}

export interface PitchFeedback {
  coverageScore: number;
  verdict: 'RECOMMEND FOR DEVELOPMENT' | 'CONSIDER WITH REVISIONS' | 'PASS FOR NOW';
  loglineStrength: string;
  thematicAnalysis: string;
  marketFit: string;
  creativeSuggestions: string[];
  moireSuitabilityRating: string;
}
