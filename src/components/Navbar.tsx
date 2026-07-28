import React, { useState, useEffect } from 'react';
import { Film, Sparkles, Volume2, VolumeX, Menu, X, Clapperboard, Send, BookOpen, Compass, Newspaper } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  aspectRatioMode: 'anamorphic' | 'academy' | 'full';
  setAspectRatioMode: (mode: 'anamorphic' | 'academy' | 'full') => void;
  ambientSoundOn: boolean;
  setAmbientSoundOn: (on: boolean) => void;
  onOpenScreeningRequest: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  aspectRatioMode,
  setAspectRatioMode,
  ambientSoundOn,
  setAmbientSoundOn,
  onOpenScreeningRequest,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'slate', label: 'The Slate', icon: Clapperboard },
    { id: 'curator', label: 'Curator AI', icon: Compass },
    { id: 'pitch', label: 'Pitch Portal', icon: Sparkles },
    { id: 'cutting-room', label: 'Cutting Room', icon: BookOpen },
    { id: 'news', label: 'Press & News', icon: Newspaper },
    { id: 'about', label: 'About Studio', icon: Film },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-zinc-950/90 via-zinc-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Studio Name */}
          <button
            onClick={() => {
              setActiveTab('slate');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-amber-200/20 via-amber-500/10 to-zinc-900 border border-amber-500/30 flex items-center justify-center group-hover:border-amber-400 transition-colors shadow-lg">
              <span className="font-serif text-amber-200 font-bold text-lg tracking-widest">M</span>
            </div>
            <div>
              <span className="font-serif tracking-[0.25em] text-xl font-medium text-zinc-100 group-hover:text-amber-200 transition-colors uppercase block">
                MOIRES
              </span>
              <span className="text-[9px] tracking-[0.35em] text-amber-400/80 uppercase block font-mono -mt-1">
                FILMS &bull; EST. 2024
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/20 to-amber-200/10 text-amber-200 border border-amber-500/40 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-zinc-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Bar (Aspect Ratio, Audio Toggle, Screening Request) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => setAmbientSoundOn(!ambientSoundOn)}
              title={ambientSoundOn ? 'Mute studio ambient soundscape' : 'Enable 35mm projector soundscape'}
              className={`p-2 rounded-full border transition-all ${
                ambientSoundOn
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 animate-pulse'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {ambientSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Aspect Ratio Selector */}
            <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-1 text-[10px] font-mono text-zinc-400">
              <span className="px-1.5 text-zinc-500 uppercase">Ratio:</span>
              <button
                onClick={() => setAspectRatioMode('anamorphic')}
                className={`px-2 py-0.5 rounded transition-all ${
                  aspectRatioMode === 'anamorphic' ? 'bg-amber-500/30 text-amber-200 font-bold' : 'hover:text-zinc-200'
                }`}
                title="2.39:1 Anamorphic Cinema Scope"
              >
                2.39:1
              </button>
              <button
                onClick={() => setAspectRatioMode('academy')}
                className={`px-2 py-0.5 rounded transition-all ${
                  aspectRatioMode === 'academy' ? 'bg-amber-500/30 text-amber-200 font-bold' : 'hover:text-zinc-200'
                }`}
                title="1.85:1 Academy Flat"
              >
                1.85:1
              </button>
              <button
                onClick={() => setAspectRatioMode('full')}
                className={`px-2 py-0.5 rounded transition-all ${
                  aspectRatioMode === 'full' ? 'bg-amber-500/30 text-amber-200 font-bold' : 'hover:text-zinc-200'
                }`}
                title="Full Screen View"
              >
                FULL
              </button>
            </div>

            {/* Screening Booking */}
            <button
              onClick={onOpenScreeningRequest}
              className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:from-amber-100 hover:to-amber-300 transition-all shadow-md flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <Send className="w-3 h-3 text-zinc-950" />
              <span>Book Screening</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setAmbientSoundOn(!ambientSoundOn)}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-amber-300"
            >
              {ambientSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs tracking-wider uppercase font-medium ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40'
                      : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenScreeningRequest();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-zinc-950 bg-amber-300 flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Book Screening / DCP Request</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
