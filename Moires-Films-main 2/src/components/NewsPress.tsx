import React from 'react';
import { Newspaper, Calendar, ArrowRight, Download, ExternalLink, Award } from 'lucide-react';
import { NEWS_ITEMS } from '../data/filmsData';

export const NewsPress: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 text-zinc-100 min-h-screen border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Newspaper className="w-4 h-4 text-amber-400" />
              <span>DISPATCHES & PRESS ROOM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-zinc-100">
              News & Festival Coverage
            </h2>
            <p className="text-zinc-400 text-sm font-sans font-light mt-2 max-w-xl">
              Official press announcements, festival awards, distribution milestones, and international reviews.
            </p>
          </div>

          <button
            onClick={() => alert('MOIRES FILMS Brand Kit & Press Assets downloading... (PDF Zip, High-Res Logos & Stills)')}
            className="px-5 py-2.5 rounded-full bg-zinc-900 border border-amber-500/30 hover:border-amber-400 text-amber-200 text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Download Studio Press Kit</span>
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-950/80 border border-zinc-700 px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-300 uppercase">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date} &bull; {item.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif text-zinc-100 group-hover:text-amber-200 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-sans font-light leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-zinc-800/40 mt-4 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>SOURCE: {item.source}</span>
                <span className="text-amber-300 group-hover:underline flex items-center gap-1">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Press Contact & Inquiries */}
        <div className="mt-16 bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
              PRESS & CRITICS INQUIRIES
            </span>
            <h3 className="text-2xl font-serif font-light text-zinc-100">
              Screener Keys & Interview Requests
            </h3>
            <p className="text-xs text-zinc-400 font-sans font-light mt-2 leading-relaxed">
              For accredited press members, film critics, and festival programmers seeking password-protected screener links, high-res 35mm stills, or director interviews.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800/80 p-6 rounded-2xl space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-zinc-900 pb-2">
              <span className="text-zinc-500">Press Contact:</span>
              <span className="text-amber-200">press@moiresfilms.com</span>
            </div>
            <div className="flex justify-between border-b border-zinc-900 pb-2">
              <span className="text-zinc-500">International Sales:</span>
              <span className="text-amber-200">sales@moiresfilms.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">London Office:</span>
              <span className="text-zinc-300">Soho Square, W1D 3QP</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
