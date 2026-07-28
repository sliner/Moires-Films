import React, { useState } from 'react';
import { BookOpen, Volume2, VolumeX, Play, Pause, Sparkles, FileText, Sliders, ChevronRight } from 'lucide-react';
import { SCRIPT_EXCERPT_DATA } from '../data/filmsData';

export const CuttingRoom: React.FC = () => {
  const [ambientTrack, setAmbientTrack] = useState<'rain' | 'tape' | 'jazz'>('tape');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  return (
    <section className="py-20 bg-zinc-950 text-zinc-100 min-h-screen border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800 pb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>INTERACTIVE SCRIPT READER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-zinc-100">
              The Cutting Room
            </h2>
            <p className="text-zinc-400 text-sm font-sans font-light mt-2 max-w-xl">
              Read excerpt pages from MOIRES FILMS award-winning screenplays accompanied by tactile analog soundscapes.
            </p>
          </div>

          {/* Reader Sound & Font Controls */}
          <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-2xl flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className={`p-2.5 rounded-xl transition-all ${
                  isPlayingAudio
                    ? 'bg-amber-300 text-zinc-950 font-bold shadow-lg'
                    : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
                title={isPlayingAudio ? 'Pause Ambient Soundscape' : 'Play Ambient Soundscape'}
              >
                {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <span className="text-xs font-mono text-zinc-400">
                {isPlayingAudio ? 'SOUNDSCAPE ACTIVE' : 'SOUNDSCAPE MUTED'}
              </span>
            </div>

            {/* Soundscape Type Selection */}
            <div className="flex items-center bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-[10px] font-mono">
              <button
                onClick={() => setAmbientTrack('tape')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  ambientTrack === 'tape' ? 'bg-amber-500/20 text-amber-200 font-bold' : 'text-zinc-500'
                }`}
              >
                35MM TAPE
              </button>
              <button
                onClick={() => setAmbientTrack('rain')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  ambientTrack === 'rain' ? 'bg-amber-500/20 text-amber-200 font-bold' : 'text-zinc-500'
                }`}
              >
                TOKYO RAIN
              </button>
              <button
                onClick={() => setAmbientTrack('jazz')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  ambientTrack === 'jazz' ? 'bg-amber-500/20 text-amber-200 font-bold' : 'text-zinc-500'
                }`}
              >
                BERLIN JAZZ
              </button>
            </div>
          </div>
        </div>

        {/* Script Viewer Container */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
          
          {/* Top Script Header Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6 font-mono text-xs text-zinc-400">
            <div>
              <span className="text-amber-400 font-bold uppercase tracking-widest block text-[10px]">
                FEATURE SCREENPLAY EXCERPT
              </span>
              <h3 className="text-lg font-serif text-zinc-100">{SCRIPT_EXCERPT_DATA.title}</h3>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 px-3.5 py-1.5 rounded-lg text-amber-300/90">
              {SCRIPT_EXCERPT_DATA.scene}
            </div>
          </div>

          {/* Courier Font Script Text Display */}
          <div className="bg-zinc-950 border border-zinc-800/80 p-6 sm:p-10 rounded-2xl font-mono text-zinc-200 leading-relaxed shadow-inner overflow-x-auto whitespace-pre-wrap">
            <div className={`transition-all ${fontSize === 'sm' ? 'text-xs' : fontSize === 'lg' ? 'text-base' : 'text-sm'}`}>
              {SCRIPT_EXCERPT_DATA.scriptText}
            </div>
          </div>

          {/* Interactive Sound Indicator Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-500 pt-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>RECORDING FORMAT: KODAK 35MM VISION3 &bull; 24 FPS</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Text Size:</span>
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-0.5 rounded border ${fontSize === 'sm' ? 'border-amber-400 text-amber-200' : 'border-zinc-800'}`}
              >
                S
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-0.5 rounded border ${fontSize === 'base' ? 'border-amber-400 text-amber-200' : 'border-zinc-800'}`}
              >
                M
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-0.5 rounded border ${fontSize === 'lg' ? 'border-amber-400 text-amber-200' : 'border-zinc-800'}`}
              >
                L
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
