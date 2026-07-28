import React, { useState } from 'react';
import { Compass, Sparkles, Film, Loader2, ArrowRight, Play, Award } from 'lucide-react';
import { Film as FilmType } from '../types';

interface FilmCuratorAIProps {
  onSelectFilmById: (id: string) => void;
}

export const FilmCuratorAI: React.FC<FilmCuratorAIProps> = ({ onSelectFilmById }) => {
  const [mood, setMood] = useState('Melancholic & Reflective');
  const [pacing, setPacing] = useState('Slow-burn & Atmospheric');
  const [themes, setThemes] = useState('Memory, urban isolation, ambient sound');

  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleCurate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/film-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMood: mood,
          preferredPacing: pacing,
          favoriteThemes: themes,
        }),
      });

      const data = await res.json();
      setRecommendation(data);
    } catch (err) {
      console.error(err);
      setRecommendation({
        recommendation: 'The Echo of Silent Threads (2025)',
        tagline: 'Sound rewrites memory in Tokyo’s rain-slicked shadows.',
        reason: 'Matches your preference for melancholic neo-noir with hypnotic 35mm visuals and intense psychological tension.',
        curatorNote: 'Recommended pairing: Midnight viewings with dark ambient soundscapes.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-zinc-950 text-zinc-100 min-h-screen border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-widest">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>AI CURATOR CONCIERGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-zinc-100">
            Find Your Cinematic Match
          </h2>
          <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">
            Tell our studio curator about your current state of mind, preferred narrative pacing, and aesthetic preferences to receive a tailored recommendation from our film slate.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl backdrop-blur-md shadow-2xl space-y-6">
          <form onSubmit={handleCurate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  Current Mood / Desired State
                </label>
                <select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Melancholic & Reflective">Melancholic & Reflective</option>
                  <option value="Hypnotic & Mysterious">Hypnotic & Mysterious</option>
                  <option value="Intensely Tense Noir">Intensely Tense Noir</option>
                  <option value="Contemplative & Poetic">Contemplative & Poetic</option>
                  <option value="Avant-garde & Surreal">Avant-garde & Surreal</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  Preferred Narrative Pacing
                </label>
                <select
                  value={pacing}
                  onChange={(e) => setPacing(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Slow-burn & Atmospheric">Slow-burn & Atmospheric (Meditative)</option>
                  <option value="Gripping & Taut">Gripping & Taut (Thrilling)</option>
                  <option value="Episodic & Lyric">Episodic & Lyric (Poetic)</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                Themes & Visual Motifs You Appreciate
              </label>
              <input
                type="text"
                placeholder="e.g. Memory loss, coastal fog, 35mm film grain, vinyl records, rain at night"
                value={themes}
                onChange={(e) => setThemes(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-zinc-950 font-bold uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-2 hover:from-amber-100 hover:to-amber-300 transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                  <span>Curating Film Recommendation...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-zinc-950" />
                  <span>Consult Studio Curator</span>
                </>
              )}
            </button>
          </form>

          {/* Recommendation Result Card */}
          {recommendation && (
            <div className="mt-8 bg-zinc-950 border border-amber-500/40 p-8 rounded-2xl space-y-4 animate-in fade-in duration-500 relative">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  CURATOR'S PERSONAL SELECTION
                </span>
                <span className="text-xs font-mono text-amber-300 font-bold">MATCH: 98%</span>
              </div>

              <h3 className="text-3xl font-serif font-light text-zinc-100">
                {recommendation.recommendation}
              </h3>

              {recommendation.tagline && (
                <p className="text-xs font-mono text-amber-300/90 italic">
                  "{recommendation.tagline}"
                </p>
              )}

              <p className="text-sm font-sans font-light text-zinc-300 leading-relaxed">
                {recommendation.reason}
              </p>

              {recommendation.curatorNote && (
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-xs font-serif italic text-zinc-400">
                  <span className="font-mono text-[10px] text-amber-400 block not-italic uppercase mb-1">
                    Viewing Conditions Recommendation:
                  </span>
                  "{recommendation.curatorNote}"
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    if (recommendation.recommendation.includes('Echo')) {
                      onSelectFilmById('echo-of-silent-threads');
                    } else if (recommendation.recommendation.includes('Water')) {
                      onSelectFilmById('memory-of-water');
                    } else if (recommendation.recommendation.includes('Velvet')) {
                      onSelectFilmById('velvet-dissonance');
                    } else {
                      onSelectFilmById('echo-of-silent-threads');
                    }
                  }}
                  className="px-5 py-2.5 rounded-full bg-amber-300 text-zinc-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-amber-200 transition-colors shadow"
                >
                  <Play className="w-3.5 h-3.5 fill-zinc-950" />
                  <span>Inspect Film Specs & Trailer</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
