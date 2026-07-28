import React, { useState } from 'react';
import { Sparkles, Send, BookOpen, CheckCircle, AlertCircle, Award, Film as FilmIcon, Loader2, ArrowRight } from 'lucide-react';
import { PitchFeedback } from '../types';

export const ScriptPitchPortal: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    writerName: '',
    email: '',
    genre: 'Psychological Thriller',
    format: 'Feature Film (35mm / Digital)',
    logline: '',
    synopsis: '',
    comparables: 'e.g. Drive meets Stalker, or Blow Out in Tokyo',
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<PitchFeedback | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.logline) {
      setErrorMsg('Please provide at least a Title and Logline for coverage evaluation.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/pitch-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          logline: formData.logline,
          synopsis: formData.synopsis,
          genre: formData.genre,
          format: formData.format,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to analyze script pitch.');
      }

      setFeedback(data);
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'An error occurred during pitch coverage generation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-zinc-950 text-zinc-100 min-h-screen border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SCRIPT SLATE &bull; SUBMISSION PORTAL</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-zinc-100">
            Submit Your Script Pitch
          </h2>
          <p className="text-zinc-400 font-sans font-light text-base leading-relaxed">
            MOIRES FILMS seeks visionary screenwriters and directors crafting atmospheric, character-driven cinema. Submit your pitch below for instant studio coverage and consideration for our annual $50,000 development grants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Submission Form */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl backdrop-blur-md shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <h3 className="font-serif text-xl font-medium text-zinc-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Feature Pitch Entry</span>
              </h3>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30 uppercase">
                AI Coverage Engine Ready
              </span>
            </div>

            {errorMsg && (
              <div className="bg-red-950/50 border border-red-500/40 p-4 rounded-xl text-red-200 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleAnalyze} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Script Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nocturne in Chrome"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Screenwriter / Director Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Evelyn Vance"
                    value={formData.writerName}
                    onChange={(e) => setFormData({ ...formData, writerName: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Primary Genre
                  </label>
                  <select
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Psychological Thriller">Psychological Thriller</option>
                    <option value="Neo-Noir">Neo-Noir</option>
                    <option value="Poetic Drama">Poetic Drama</option>
                    <option value="Experimental Sci-Fi">Experimental Sci-Fi</option>
                    <option value="Environmental Mystery">Environmental Mystery</option>
                    <option value="Magical Realism">Magical Realism</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Format & Target Spec
                  </label>
                  <input
                    type="text"
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Logline (1-2 sentences) *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="When an archivist in Tokyo uncovers an uncatalogued audio tape from 1984 containing a murder confession spoken in her late mother's voice, she descends into an underground noir maze..."
                  value={formData.logline}
                  onChange={(e) => setFormData({ ...formData, logline: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500 leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Short Synopsis & Visual Style (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide brief act structure highlights, visual tone references, character arcs..."
                  value={formData.synopsis}
                  onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500 leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-zinc-950 font-bold uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-2 hover:from-amber-100 hover:to-amber-300 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                      <span>Generating Studio Coverage & Fit Rating...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-zinc-950" />
                      <span>Run Studio Script Coverage Analysis</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: AI Script Coverage Output */}
          <div className="lg:col-span-5 space-y-6">
            {feedback ? (
              <div className="bg-zinc-900 border border-amber-500/40 p-6 rounded-3xl space-y-6 shadow-2xl animate-in fade-in duration-500">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                      MOIRES FILMS &bull; COVERAGE REPORT
                    </span>
                    <h4 className="text-xl font-serif text-zinc-100">{formData.title}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-mono font-bold text-amber-300">{feedback.coverageScore}/100</span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">COVERAGE SCORE</span>
                  </div>
                </div>

                {/* Verdict Badge */}
                <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl text-center">
                  <span className="text-xs font-mono font-bold text-amber-200 tracking-wider uppercase block">
                    VERDICT: {feedback.verdict}
                  </span>
                </div>

                {/* Logline Evaluation */}
                <div className="space-y-2">
                  <h5 className="text-xs font-mono text-amber-400 uppercase tracking-wider">Logline Evaluation</h5>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                    {feedback.loglineStrength}
                  </p>
                </div>

                {/* Thematic Analysis */}
                <div className="space-y-2">
                  <h5 className="text-xs font-mono text-amber-400 uppercase tracking-wider">Moires Ethos & Visual Potential</h5>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                    {feedback.thematicAnalysis}
                  </p>
                </div>

                {/* Market & Festival Fit */}
                <div className="space-y-2">
                  <h5 className="text-xs font-mono text-amber-400 uppercase tracking-wider">Festival & Market Positioning</h5>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                    {feedback.marketFit}
                  </p>
                </div>

                {/* Creative Suggestions */}
                <div className="space-y-2">
                  <h5 className="text-xs font-mono text-amber-400 uppercase tracking-wider">Development Suggestions</h5>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {feedback.creativeSuggestions.map((sug, i) => (
                      <li key={i} className="flex items-start gap-2 bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{sug}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-zinc-500 border-t border-zinc-800">
                  <span>MOIRES SUITABILITY: {feedback.moireSuitabilityRating}</span>
                  <button
                    onClick={() => {
                      alert('Pitch saved to MOIRES DEVELOPMENT QUEUE! Ref: MOIRES-2025-' + Math.floor(1000 + Math.random() * 9000));
                    }}
                    className="text-amber-300 hover:underline"
                  >
                    Confirm Submission &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mx-auto text-amber-400">
                  <FilmIcon className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg text-zinc-200">Studio Coverage Standard</h4>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-sm mx-auto">
                  Every pitch submitted receives analysis evaluated against MOIRES FILMS' artistic standards for atmospheric depth, narrative tension, and tier-1 festival positioning.
                </p>

                <div className="pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-500 space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Annual Slate Grant: $50,000 USD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Co-Production Partners: BFI, CNC, UK Global Screen Fund</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Response Time: Instant Coverage + 14-day Producer Review</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
