import React, { useState } from 'react';
import { X, Send, Film as FilmIcon, CheckCircle2, Calendar, Building, Globe } from 'lucide-react';
import { Film } from '../types';

interface ScreeningRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFilm?: Film | null;
  allFilms: Film[];
}

export const ScreeningRequestModal: React.FC<ScreeningRequestModalProps> = ({
  isOpen,
  onClose,
  selectedFilm,
  allFilms,
}) => {
  const [formData, setFormData] = useState({
    filmId: selectedFilm ? selectedFilm.id : allFilms[0]?.id || '',
    venueName: '',
    venueType: 'Independent Cinema',
    cityCountry: '',
    contactName: '',
    contactEmail: '',
    requestedDates: '',
    formatRequested: 'DCP (Digital Cinema Package 2K/4K)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl my-auto text-zinc-100">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <FilmIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                MOIRES DISTRIBUTION
              </span>
              <h3 className="text-xl font-serif text-zinc-100">Theatrical Screening & DCP Request</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-zinc-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
            <h4 className="text-2xl font-serif text-zinc-100">Screening Request Dispatched</h4>
            <p className="text-xs font-sans text-zinc-400 max-w-md mx-auto leading-relaxed">
              Thank you. Our international sales agent at MOIRES FILMS has received your DCP booking inquiry. A password-protected screener link and technical delivery specs will be sent to <strong className="text-amber-200">{formData.contactEmail}</strong> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-amber-300 text-zinc-950 font-bold uppercase text-xs tracking-wider"
              >
                Return to Studio
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                Select Film Title *
              </label>
              <select
                value={formData.filmId}
                onChange={(e) => setFormData({ ...formData, filmId: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
              >
                {allFilms.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.title} ({f.year}) &bull; {f.status}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                  Cinema / Venue / Festival Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Electric Cinema Soho, BFI, Film Society"
                  value={formData.venueName}
                  onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                  Venue Type
                </label>
                <select
                  value={formData.venueType}
                  onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Independent Cinema">Independent Art-House Cinema</option>
                  <option value="Film Festival">Film Festival</option>
                  <option value="University Micro-Cinema">University Film Society / Micro-Cinema</option>
                  <option value="Museum Archive">Museum / Cultural Archive</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                  City & Country *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. London, UK or Tokyo, Japan"
                  value={formData.cityCountry}
                  onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                  Proposed Screening Dates
                </label>
                <input
                  type="text"
                  placeholder="e.g. Nov 14-18, 2025"
                  value={formData.requestedDates}
                  onChange={(e) => setFormData({ ...formData, requestedDates: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                  Programmer / Contact Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="programmer@cinema.org"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                Playback Format Needed
              </label>
              <select
                value={formData.formatRequested}
                onChange={(e) => setFormData({ ...formData, formatRequested: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
              >
                <option value="DCP (Digital Cinema Package 2K/4K)">Unencrypted DCP (2K / 4K)</option>
                <option value="35mm Film Print">35mm Archival Film Reel Print (Select Titles)</option>
                <option value="ProRes 422 HQ Digital Screener">ProRes 422 HQ Digital Screener</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-zinc-950 font-bold uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-2 hover:from-amber-100 hover:to-amber-300 transition-all"
              >
                <Send className="w-4 h-4 text-zinc-950" />
                <span>Submit Booking Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
