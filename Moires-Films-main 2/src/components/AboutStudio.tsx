import React from 'react';
import { Film, MapPin, Globe, Sparkles, Award, Mail, Phone, Building2 } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/filmsData';

export const AboutStudio: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 text-zinc-100 min-h-screen border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Studio Manifesto */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-widest">
            <Film className="w-4 h-4 text-amber-400" />
            <span>STUDIO MANIFESTO & ETHOS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-zinc-100 leading-tight">
            Weaving Threads of Human Dissonance and Light
          </h2>
          <p className="text-zinc-300 font-sans font-light text-base sm:text-lg leading-relaxed">
            Founded in 2024 by Evelyn Vance and Hiroshi Sato, <strong className="text-amber-200">MOIRES FILMS</strong> is an independent film production studio dedicated to atmospheric narrative cinema, tactile analog textures, and uncompromising auteur storytelling.
          </p>
          <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">
            Derived from the Moirai—the ancient weavers of human destiny—our films explore interference patterns: the places where memory collides with sound, where light dissolves into shadow, and where human vulnerability meets quiet grandeur.
          </p>
        </div>

        {/* Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl space-y-3 shadow-xl">
            <span className="text-3xl font-serif text-amber-400">01</span>
            <h3 className="text-xl font-serif text-zinc-100">Tactile Cinema</h3>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              We champion physical film stocks—35mm Kodak Vision3, 16mm reversal, anamorphic glass, and live location acoustic recording—to create cinema you can feel.
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl space-y-3 shadow-xl">
            <span className="text-3xl font-serif text-amber-400">02</span>
            <h3 className="text-xl font-serif text-zinc-100">Global Co-Productions</h3>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Operating seamlessly across London, Tokyo, and New York, we bridge European art-house sensibilities with East Asian visual poetry and American indie grit.
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl space-y-3 shadow-xl">
            <span className="text-3xl font-serif text-amber-400">03</span>
            <h3 className="text-xl font-serif text-zinc-100">Artist-First Equity</h3>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Every director, writer, and cinematographer working with Moires retains creative final cut and equity in physical, digital, and archival restoration rights.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
              STUDIO LEADERSHIP
            </span>
            <h3 className="text-3xl font-serif font-light text-zinc-100">Producers & Founders</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 space-y-4 hover:border-amber-500/40 transition-colors shadow-lg"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-full object-cover border-2 border-amber-500/30 mx-auto shadow-md"
                />
                <div className="text-center">
                  <h4 className="text-xl font-serif text-zinc-100">{member.name}</h4>
                  <p className="text-xs font-mono text-amber-400">{member.role}</p>
                </div>
                <p className="text-xs text-zinc-300 font-sans font-light leading-relaxed text-center">
                  {member.bio}
                </p>
                <div className="pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 text-center">
                  CREDITS: {member.credits.join(' &bull; ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Locations */}
        <div className="bg-zinc-900/60 border border-zinc-800 p-8 sm:p-12 rounded-3xl space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
              GLOBAL FOOTPRINT
            </span>
            <h3 className="text-3xl font-serif font-light text-zinc-100">Studio Offices</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>LONDON (HQ)</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Soho Square, London W1D 3QP<br />
                United Kingdom
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>TOKYO</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Jingu-mae, Shibuya-ku, Tokyo 150-0001<br />
                Japan
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>NEW YORK</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Mercer Street, SoHo, NY 10012<br />
                United States
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
