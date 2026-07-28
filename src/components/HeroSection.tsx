import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Award, ArrowRight, Clapperboard, Film as FilmIcon } from 'lucide-react';
import { Film } from '../types';

interface HeroSectionProps {
  featuredFilm: Film;
  onSelectFilm: (film: Film) => void;
  onExploreSlate: () => void;
  aspectRatioMode: 'anamorphic' | 'academy' | 'full';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredFilm,
  onSelectFilm,
  onExploreSlate,
  aspectRatioMode,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(14);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= 124 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  // Format timecode e.g., 00:01:24:18
  const formatTimecode = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const frames = Math.floor((seconds * 24) % 24);
    return `00:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      {/* Background Video / Still with Vignette */}
      <div className="absolute inset-0 z-0">
        {featuredFilm.trailerVideoUrl ? (
          <video
            ref={videoRef}
            src={featuredFilm.trailerVideoUrl}
            poster={featuredFilm.bannerUrl}
            loop
            muted={isMuted}
            playsInline
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60 scale-105 transition-all duration-1000 filter brightness-90 contrast-110"
          />
        ) : (
          <img
            src={featuredFilm.bannerUrl}
            alt={featuredFilm.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60 filter contrast-115 brightness-90"
          />
        )}

        {/* Gradient Overlays for Cinematic Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
        
        {/* Film Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(#e6c687_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Anamorphic Aspect Ratio Matte Lines (Top & Bottom black bars) */}
      {aspectRatioMode === 'anamorphic' && (
        <>
          <div className="absolute top-0 left-0 right-0 h-14 bg-black z-20 border-b border-zinc-900/50 flex items-center justify-between px-6 font-mono text-[10px] text-zinc-600 uppercase tracking-widest pointer-events-none">
            <span>MOIRES_REEL_2391</span>
            <span>2.39:1 CINEMASCOPE ANAMORPHIC</span>
            <span>RAW_35MM_KODAK</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-black z-20 border-t border-zinc-900/50 flex items-center justify-between px-6 font-mono text-[10px] text-zinc-600 uppercase tracking-widest pointer-events-none">
            <span>SOUNDTRACK_SYNC_OK</span>
            <span>24 FPS &bull; TIME: {formatTimecode(currentTime)}</span>
            <span>STEREO_PCM_24BIT</span>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Cannes / Festival Laurel Badge */}
          {featuredFilm.festivals && featuredFilm.festivals.length > 0 && (
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md text-amber-200 text-xs font-mono tracking-wider">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{featuredFilm.festivals[0].name.toUpperCase()} &bull; {featuredFilm.festivals[0].award}</span>
            </div>
          )}

          {/* Title & Tagline */}
          <div className="space-y-2">
            <span className="text-amber-400/90 font-mono text-xs tracking-[0.3em] uppercase block">
              FLAGSHIP RELEASE &bull; {featuredFilm.year} &bull; {featuredFilm.runtime}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-zinc-100 tracking-tight leading-none drop-shadow-md">
              {featuredFilm.title}
            </h1>
            {featuredFilm.originalTitle && (
              <p className="font-serif italic text-amber-200/60 text-lg sm:text-xl font-light">
                {featuredFilm.originalTitle}
              </p>
            )}
          </div>

          {/* Logline */}
          <p className="text-zinc-300 text-base sm:text-lg font-sans font-light leading-relaxed max-w-2xl text-shadow-sm">
            "{featuredFilm.logline}"
          </p>

          {/* Director & Cast Specs */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono pt-2 border-t border-zinc-800/60">
            <div>
              <span className="text-zinc-500 uppercase block text-[10px]">DIRECTED BY</span>
              <span className="text-amber-100 font-semibold">{featuredFilm.director}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase block text-[10px]">STARRING</span>
              <span className="text-zinc-200">{featuredFilm.cast.slice(0, 3).join(', ')}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase block text-[10px]">CAPTURE SPEC</span>
              <span className="text-zinc-300">{featuredFilm.format}</span>
            </div>
          </div>

          {/* Action buttons & Video Controls */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {/* Play Teaser Button */}
            <button
              onClick={togglePlay}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:from-amber-100 hover:to-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center gap-2.5 hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-zinc-950" />
                  <span>Pause Teaser</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-zinc-950" />
                  <span>Watch Trailer Reel</span>
                </>
              )}
            </button>

            {/* View Full Film Details */}
            <button
              onClick={() => onSelectFilm(featuredFilm)}
              className="px-6 py-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-amber-500/30 hover:border-amber-400 text-amber-200 text-xs font-semibold uppercase tracking-widest transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Clapperboard className="w-4 h-4 text-amber-300" />
              <span>Full Film Specs & Gallery</span>
            </button>

            {/* Explore Slate Button */}
            <button
              onClick={onExploreSlate}
              className="px-5 py-3 rounded-full bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-mono uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Player HUD Bar */}
          <div className="pt-4 flex items-center gap-4 text-zinc-500 text-xs font-mono">
            <button
              onClick={toggleMute}
              className="p-2 rounded-md bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-amber-300 transition-colors"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            </button>

            <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-zinc-300">{formatTimecode(currentTime)}</span>
            </div>

            {/* Simulated soundwave visualizer */}
            <div className="hidden sm:flex items-center gap-1 h-4 px-2">
              {[40, 70, 30, 90, 60, 20, 85, 45, 100, 50, 75, 35].map((val, i) => (
                <div
                  key={i}
                  style={{
                    height: isPlaying ? `${Math.max(20, (val * (i % 3 + 1)) % 100)}%` : '20%',
                  }}
                  className="w-1 bg-amber-400/60 rounded-full transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
