import React, { useState } from 'react';
import { Film, Send, CheckCircle2, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenScreeningRequest: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenScreeningRequest }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Studio Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-amber-200/20 via-amber-500/10 to-zinc-900 border border-amber-500/30 flex items-center justify-center">
                <span className="font-serif text-amber-200 font-bold text-lg tracking-widest">M</span>
              </div>
              <div>
                <span className="font-serif tracking-[0.25em] text-xl font-medium text-zinc-100 uppercase block">
                  MOIRES FILMS
                </span>
                <span className="text-[9px] tracking-[0.3em] text-amber-400/80 uppercase block font-mono -mt-1">
                  INDIE CINEMA &bull; LONDON &bull; TOKYO &bull; NYC
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              An international independent film studio producing tactile 35mm narrative features, psychological neo-noirs, and poetic documentaries for global festivals and theatrical release.
            </p>

            <div className="pt-2 text-xs font-mono text-zinc-500 space-y-1">
              <div>Sales & Rights: <span className="text-zinc-300">rights@moiresfilms.com</span></div>
              <div>Press & Accreditation: <span className="text-zinc-300">press@moiresfilms.com</span></div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-amber-400 font-bold uppercase tracking-widest block text-[10px]">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('slate');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-200 transition-colors"
                >
                  &rarr; The Film Slate
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('curator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-200 transition-colors"
                >
                  &rarr; AI Film Curator
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('pitch');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-200 transition-colors"
                >
                  &rarr; Script Pitch Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('cutting-room');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-200 transition-colors"
                >
                  &rarr; Cutting Room Script Reader
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('news');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-200 transition-colors"
                >
                  &rarr; News & Press Kit
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenScreeningRequest}
                  className="hover:text-amber-200 transition-colors text-amber-300"
                >
                  &rarr; Book DCP Screening
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio Dispatch Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-amber-400 font-mono font-bold uppercase tracking-widest block text-[10px]">
              STUDIO DISPATCH & PREMIERE INVITES
            </span>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Subscribe for private festival screener invitations, limited edition 35mm posters, and annual script grant announcements.
            </p>

            {subscribed ? (
              <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl text-xs font-mono text-amber-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Subscribed to MOIRES Studio Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="cinematophile@moires.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-200 transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-2">
              <a href="#" className="hover:text-amber-300 transition-colors">Letterboxd</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-amber-300 transition-colors">Vimeo Pro</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-amber-300 transition-colors">Instagram</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-amber-300 transition-colors">BFI Directory</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-600 gap-4">
          <div>
            &copy; {new Date().getFullYear()} MOIRES FILMS LTD. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <span>2.39:1 CINEMASCOPE</span>
            <span>&bull;</span>
            <span>KODAK 35MM / ARRI ALEXA LF</span>
            <span>&bull;</span>
            <span>LONDON / TOKYO / NYC</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
