import React, { useState, useMemo } from 'react';
import { Search, Filter, Play, Award, Clapperboard, Grid, List, Sparkles, Film as FilmIcon, ChevronRight } from 'lucide-react';
import { Film } from '../types';

interface FilmCatalogProps {
  films: Film[];
  onSelectFilm: (film: Film) => void;
  onOpenScreeningRequest: (film?: Film) => void;
}

export const FilmCatalog: React.FC<FilmCatalogProps> = ({
  films,
  onSelectFilm,
  onOpenScreeningRequest,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedGenre, setSelectedGenre] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const statusOptions = ['ALL', 'In Distribution', 'Festival Circuit', 'Post-Production', 'In Development'];
  
  const allGenres = useMemo(() => {
    const set = new Set<string>();
    films.forEach((f) => f.genre.forEach((g) => set.add(g)));
    return ['ALL', ...Array.from(set)];
  }, [films]);

  const filteredFilms = useMemo(() => {
    return films.filter((film) => {
      const matchesSearch =
        film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.logline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.cast.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesStatus =
        selectedStatus === 'ALL' || film.status === selectedStatus;

      const matchesGenre =
        selectedGenre === 'ALL' || film.genre.includes(selectedGenre);

      return matchesSearch && matchesStatus && matchesGenre;
    });
  }, [films, searchQuery, selectedStatus, selectedGenre]);

  return (
    <section className="py-20 bg-zinc-950 min-h-screen text-zinc-100 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800/80 pb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-[0.3em] mb-2">
              <FilmIcon className="w-4 h-4 text-amber-400" />
              <span>PRODUCTION SLATE &bull; CATALOGUE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-zinc-100 tracking-tight">
              The Film Slate
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-sans font-light mt-2 max-w-2xl">
              An international catalogue of auteur-driven feature films, high-concept narrative thrillers, and tactile 35mm poetic dramas.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-zinc-900 border border-zinc-800 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-all ${
                viewMode === 'grid' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
              title="Cinematic Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-all ${
                viewMode === 'list' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
              title="Minimalist List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl mb-10 space-y-4 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search by title, director, cast, or logline..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
            </div>

            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              <span className="text-[10px] font-mono text-zinc-500 uppercase mr-1">Status:</span>
              {statusOptions.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    selectedStatus === status
                      ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                      : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800/60'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Genre Filters Bar */}
          <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/50 overflow-x-auto">
            <span className="text-[10px] font-mono text-zinc-500 uppercase whitespace-nowrap">Genre:</span>
            {allGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-sans transition-all whitespace-nowrap ${
                  selectedGenre === genre
                    ? 'bg-zinc-800 text-amber-300 border border-amber-500/30'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-6">
          <span>SHOWING {filteredFilms.length} OF {films.length} FILMS</span>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStatus('ALL');
                setSelectedGenre('ALL');
              }}
              className="text-amber-400 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Catalog Content - Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFilms.map((film) => (
              <div
                key={film.id}
                className="group bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-amber-500/5"
              >
                <div>
                  {/* Poster Thumbnail */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                    <img
                      src={film.posterUrl}
                      alt={film.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold bg-zinc-950/80 border border-zinc-700 text-amber-300 backdrop-blur-md">
                        {film.status}
                      </span>
                    </div>

                    {/* Festival Badge if exists */}
                    {film.festivals && film.festivals.length > 0 && (
                      <div className="absolute top-3 right-3 bg-amber-500/20 border border-amber-500/40 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-amber-200 flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-400" />
                        <span>{film.festivals[0].laurelBadge}</span>
                      </div>
                    )}

                    {/* Quick Play Trigger */}
                    <button
                      onClick={() => onSelectFilm(film)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/60 backdrop-blur-xs"
                    >
                      <div className="w-12 h-12 rounded-full bg-amber-300 text-zinc-950 flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-5 h-5 fill-zinc-950 translate-x-0.5" />
                      </div>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                      <span>{film.year} &bull; {film.runtime}</span>
                      <span>{film.aspectRatio}</span>
                    </div>

                    <h3
                      onClick={() => onSelectFilm(film)}
                      className="text-2xl font-serif text-zinc-100 group-hover:text-amber-200 transition-colors cursor-pointer leading-tight"
                    >
                      {film.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-mono">
                      DIRECTED BY <span className="text-zinc-200 font-semibold">{film.director}</span>
                    </p>

                    <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed font-sans font-light">
                      "{film.logline}"
                    </p>

                    {/* Genre tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {film.genre.map((g) => (
                        <span
                          key={g}
                          className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 text-[10px] font-mono"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-zinc-800/40 mt-4 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectFilm(film)}
                    className="text-xs font-mono uppercase tracking-wider text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect Film Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenScreeningRequest(film)}
                    className="text-[11px] font-mono text-zinc-400 hover:text-zinc-200 underline"
                  >
                    Request DCP
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Minimalist List View */
          <div className="space-y-4">
            {filteredFilms.map((film) => (
              <div
                key={film.id}
                className="group bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 hover:border-amber-500/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={film.posterUrl}
                    alt={film.title}
                    referrerPolicy="no-referrer"
                    className="w-20 h-14 object-cover rounded-md border border-zinc-800 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <h3
                        onClick={() => onSelectFilm(film)}
                        className="text-xl font-serif text-zinc-100 group-hover:text-amber-200 transition-colors cursor-pointer"
                      >
                        {film.title}
                      </h3>
                      <span className="text-xs font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        {film.year}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-mono mt-1">
                      Dir. {film.director} &bull; Starring {film.cast.slice(0, 2).join(', ')} &bull; {film.runtime}
                    </p>
                    <p className="text-xs text-zinc-300 font-sans mt-1 line-clamp-1 max-w-2xl">
                      {film.logline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                  <button
                    onClick={() => onSelectFilm(film)}
                    className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-200 text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5"
                  >
                    <Clapperboard className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Film Specs</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredFilms.length === 0 && (
          <div className="text-center py-20 bg-zinc-900/20 border border-dashed border-zinc-800 rounded-2xl p-8">
            <FilmIcon className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-300 font-serif text-lg">No films matched your search criteria.</p>
            <p className="text-zinc-500 text-xs font-mono mt-1">Try resetting search terms or genre filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};
