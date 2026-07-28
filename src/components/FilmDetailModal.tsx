import React, { useState } from 'react';
import { X, Play, Pause, Award, Volume2, Download, Send, Quote, Film as FilmIcon, Sparkles, Image, Music, ArrowLeft } from 'lucide-react';
import { Film } from '../types';

interface FilmDetailModalProps {
  film: Film | null;
  onClose: () => void;
  onOpenScreeningRequest: (film: Film) => void;
}

export const FilmDetailModal: React.FC<FilmDetailModalProps> = ({
  film,
  onClose,
  onOpenScreeningRequest,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'stills' | 'press' | 'audio'>('overview');
  const [selectedStill, setSelectedStill] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!film) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-zinc-950/95 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-auto text-zinc-100 max-h-[92vh] flex flex-col">
        
        {/* Top Header Controls */}
        <div className="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur-md px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 text-zinc-400 hover:text-amber-200 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                MOIRES ARCHIVE &bull; {film.status}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-zinc-100 leading-none">
                {film.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenScreeningRequest(film)}
              className="hidden sm:flex px-4 py-2 rounded-full bg-amber-300 text-zinc-950 text-xs font-bold uppercase tracking-wider hover:bg-amber-200 transition-colors shadow"
            >
              Request DCP Screener
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-8">
          
          {/* Hero Banner / Trailer Media Header */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-2xl">
            {film.trailerVideoUrl ? (
              <video
                src={film.trailerVideoUrl}
                poster={film.bannerUrl}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={film.bannerUrl}
                alt={film.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 bg-zinc-950/80 border border-zinc-800 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300">
                <FilmIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>SPEC: {film.format}</span>
              </div>
              <div className="bg-amber-500/20 border border-amber-500/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-amber-200">
                RATIO: {film.aspectRatio}
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'overview'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Overview & Specs
            </button>
            <button
              onClick={() => setActiveTab('stills')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'stills'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Image className="w-3.5 h-3.5" />
              <span>Stills Gallery ({film.stillUrls.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('press')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'press'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Press & Festival Laurels</span>
            </button>
            {film.soundtrackTrack && (
              <button
                onClick={() => setActiveTab('audio')}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  activeTab === 'audio'
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>Soundtrack</span>
              </button>
            )}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Logline & Synopsis */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">LOGLINE</h3>
                  <p className="text-lg font-serif italic text-amber-100/90 leading-relaxed bg-zinc-950/60 border-l-2 border-amber-400 p-4 rounded-r-xl">
                    "{film.logline}"
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">SYNOPSIS</h3>
                  <p className="text-sm font-sans font-light text-zinc-300 leading-relaxed whitespace-pre-line">
                    {film.synopsis}
                  </p>
                </div>

                {film.directorStatement && (
                  <div className="bg-zinc-950/80 border border-zinc-800 p-5 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>DIRECTOR'S STATEMENT</span>
                    </div>
                    <p className="text-xs font-serif italic text-zinc-300 leading-relaxed">
                      "{film.directorStatement}"
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column - Specs Data Sheet */}
              <div className="bg-zinc-950 border border-zinc-800/80 p-6 rounded-2xl space-y-4 font-mono text-xs">
                <h3 className="text-amber-400 font-bold uppercase tracking-widest text-xs border-b border-zinc-800 pb-2">
                  TECHNICAL FILM SHEET
                </h3>

                <div className="space-y-3 divide-y divide-zinc-900 text-zinc-300">
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500 uppercase">Director</span>
                    <span className="text-amber-200 text-right font-semibold">{film.director}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500 uppercase">Screenplay</span>
                    <span className="text-zinc-200 text-right">{film.screenplay}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500 uppercase">Cinematography</span>
                    <span className="text-zinc-200 text-right">{film.cinematographer}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500 uppercase">Starring</span>
                    <span className="text-zinc-200 text-right max-w-[180px]">{film.cast.join(', ')}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500 uppercase">Capture Format</span>
                    <span className="text-amber-200 text-right max-w-[180px]">{film.format}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500 uppercase">Aspect Ratio</span>
                    <span className="text-zinc-200">{film.aspectRatio}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500 uppercase">Runtime</span>
                    <span className="text-zinc-200">{film.runtime}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500 uppercase">Country / Lang</span>
                    <span className="text-zinc-200">{film.country} / {film.language}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500 uppercase">Release Date</span>
                    <span className="text-amber-300">{film.releaseDate}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenScreeningRequest(film)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 text-zinc-950 font-bold uppercase tracking-wider text-xs shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquire for Festival / Cinema</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STILLS GALLERY */}
          {activeTab === 'stills' && (
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                CINEMATOGRAPHY STILLS & LOOKBOOK
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {film.stillUrls.map((url, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedStill(url)}
                    className="group relative aspect-[16/9] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 cursor-pointer"
                  >
                    <img
                      src={url}
                      alt={`${film.title} Still ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-200 bg-zinc-950/80 px-3 py-1.5 rounded-full border border-amber-500/30">
                        Expand Still
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PRESS & LAURELS */}
          {activeTab === 'press' && (
            <div className="space-y-8">
              {/* Festival Laurels Grid */}
              {film.festivals && film.festivals.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-4">
                    FESTIVAL ACCOLADES & HONORS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {film.festivals.map((f, i) => (
                      <div
                        key={i}
                        className="bg-zinc-950 border border-amber-500/30 p-5 rounded-2xl flex flex-col items-center text-center space-y-2"
                      >
                        <Award className="w-8 h-8 text-amber-400" />
                        <span className="text-xs font-mono font-bold text-amber-200">{f.laurelBadge}</span>
                        <h4 className="text-sm font-serif font-medium text-zinc-100">{f.name}</h4>
                        <p className="text-xs font-sans text-amber-300/80">{f.award}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Press Quotes */}
              {film.pressQuotes && film.pressQuotes.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    CRITICAL PRESS RECEPTION
                  </h3>
                  <div className="space-y-4">
                    {film.pressQuotes.map((pq, i) => (
                      <div
                        key={i}
                        className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl relative"
                      >
                        <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
                        <p className="text-base font-serif italic text-zinc-200 leading-relaxed">
                          "{pq.quote}"
                        </p>
                        <div className="mt-3 text-xs font-mono text-amber-400">
                          &mdash; {pq.publication} {pq.critic ? `(${pq.critic})` : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: SOUNDTRACK */}
          {activeTab === 'audio' && film.soundtrackTrack && (
            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl space-y-6">
              <div className="flex items-center gap-3">
                <Music className="w-6 h-6 text-amber-400" />
                <div>
                  <h3 className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    ORIGINAL MOTION PICTURE SOUNDTRACK
                  </h3>
                  <p className="text-lg font-serif text-zinc-100">{film.soundtrackTrack.title}</p>
                  <p className="text-xs font-mono text-zinc-400">Composed by {film.soundtrackTrack.composer}</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="p-3 rounded-full bg-amber-300 text-zinc-950 hover:bg-amber-200 transition-colors"
                  >
                    {isPlayingAudio ? <Pause className="w-4 h-4 fill-zinc-950" /> : <Play className="w-4 h-4 fill-zinc-950 translate-x-0.5" />}
                  </button>
                  <div>
                    <span className="text-xs font-mono text-zinc-200 block">Track Sample ({film.soundtrackTrack.duration})</span>
                    <span className="text-[10px] font-mono text-zinc-500">24-Bit / 96kHz Lossless Master</span>
                  </div>
                </div>

                {/* Animated Audio Waveform */}
                <div className="flex items-center gap-1 h-6">
                  {[20, 50, 80, 40, 90, 30, 70, 60, 100, 40, 80, 50].map((h, idx) => (
                    <div
                      key={idx}
                      style={{ height: isPlayingAudio ? `${h}%` : '20%' }}
                      className="w-1 bg-amber-400 rounded-full transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expanded Still Lightbox Modal */}
      {selectedStill && (
        <div
          onClick={() => setSelectedStill(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
        >
          <img
            src={selectedStill}
            alt="Expanded Film Still"
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[90vh] object-contain rounded-lg border border-zinc-800 shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
