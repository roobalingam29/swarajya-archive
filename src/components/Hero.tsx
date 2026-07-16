/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Flame, Award, CalendarDays, Globe } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedStateFilter: string;
  setSelectedStateFilter: (state: string) => void;
  selectedRoleFilter: string;
  setSelectedRoleFilter: (role: string) => void;
  states: string[];
  roles: string[];
}

export default function Hero({
  searchQuery,
  setSearchQuery,
  selectedStateFilter,
  setSelectedStateFilter,
  selectedRoleFilter,
  setSelectedRoleFilter,
  states,
  roles,
}: HeroProps) {
  const quickTags = [
    { label: "Salt March", query: "Salt March" },
    { label: "Netaji Bose", query: "Bose" },
    { label: "Jhansi Uprising", query: "Jhansi" },
    { label: "Swadeshi", query: "Swadeshi" },
    { label: "Tribal Revolt", query: "Munda" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-editorial-sand to-editorial-paper dark:from-stone-900 dark:via-stone-950 dark:to-stone-900 text-editorial-charcoal dark:text-editorial-paper py-16 px-6 border-b border-black/10 dark:border-white/10">
      
      {/* Absolute Decorative Backdrop Circles representing Saffron and Green rays */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-editorial-rust/5 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-editorial-green/5 blur-3xl" />

      <div className="mx-auto max-w-5xl text-center space-y-8">
        
        {/* Archival Badge */}
        <div className="inline-flex items-center space-x-2 rounded border border-editorial-rust/30 bg-editorial-rust/5 px-4 py-1.5 text-xs text-editorial-rust">
          <Flame className="h-3.5 w-3.5 animate-pulse text-editorial-rust" />
          <span className="font-mono uppercase tracking-[0.15em] font-medium">Preserving the Torch of Independence</span>
        </div>

        {/* Regal Title */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl font-extrabold tracking-tight text-editorial-charcoal dark:text-white sm:text-5xl md:text-6xl">
            Swarajya <span className="text-editorial-rust">Archive</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-stone-600 dark:text-stone-400 sm:text-base md:text-lg leading-relaxed">
            A comprehensive, digital knowledge graph dedicated to the heroes, historic milestones, and authenticated manuscripts of India's long walk to sovereignty (1757–1950).
          </p>
        </div>

        {/* Central Multifaceted Search Panel */}
        <div className="mx-auto max-w-2xl p-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-stone-900 shadow-md">
          <div className="flex flex-col sm:flex-row gap-2">
            
            {/* Main Input */}
            <div className="relative flex-1">
              <Search className="absolute top-3.5 left-4 h-5 w-5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fighters, events, movements, or places..."
                className="w-full rounded bg-editorial-sand dark:bg-stone-950 py-3 pl-12 pr-4 text-sm text-editorial-charcoal dark:text-stone-200 placeholder-stone-400 border border-black/15 dark:border-white/10 focus:border-editorial-rust focus:outline-none transition-all"
              />
            </div>

            {/* Selector Filters */}
            <div className="flex gap-2">
              <select
                value={selectedStateFilter}
                onChange={(e) => setSelectedStateFilter(e.target.value)}
                className="rounded bg-editorial-sand dark:bg-stone-950 px-4 py-3 text-xs text-stone-750 dark:text-stone-300 border border-black/15 dark:border-white/10 focus:border-editorial-rust focus:outline-none transition-all cursor-pointer"
              >
                <option value="">All States</option>
                {states.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>

              <select
                value={selectedRoleFilter}
                onChange={(e) => setSelectedRoleFilter(e.target.value)}
                className="rounded bg-editorial-sand dark:bg-stone-950 px-4 py-3 text-xs text-stone-750 dark:text-stone-300 border border-black/15 dark:border-white/10 focus:border-editorial-rust focus:outline-none transition-all cursor-pointer"
              >
                <option value="">All Roles</option>
                {roles.map((rl) => (
                  <option key={rl} value={rl}>{rl}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Quick Tag Queries */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-stone-500 dark:text-stone-400">
          <span className="font-semibold text-editorial-charcoal dark:text-stone-300 font-serif">Quick Queries:</span>
          {quickTags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => setSearchQuery(tag.query)}
              className="rounded border border-black/10 dark:border-white/10 bg-white dark:bg-stone-900/40 px-3 py-1.5 hover:border-editorial-rust hover:bg-editorial-rust/5 hover:text-editorial-rust transition-all text-[11px] cursor-pointer"
            >
              {tag.label}
            </button>
          ))}
          {(searchQuery || selectedStateFilter || selectedRoleFilter) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStateFilter('');
                setSelectedRoleFilter('');
              }}
              className="rounded border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/10 px-3 py-1.5 text-red-700 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 transition-all text-[11px] font-mono cursor-pointer"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Archival Metrics */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 max-w-4xl mx-auto pt-6 border-t border-black/10 dark:border-white/10">
          
          <div className="rounded border border-black/5 dark:border-white/10 bg-editorial-sand/40 dark:bg-stone-900/20 p-4">
            <div className="flex justify-center text-editorial-rust mb-2">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-xl font-bold text-editorial-charcoal dark:text-stone-100 font-serif">7,850+</div>
            <div className="text-[10px] uppercase tracking-wider text-stone-500 font-mono mt-1">Fighters Verified</div>
          </div>

          <div className="rounded border border-black/5 dark:border-white/10 bg-editorial-sand/40 dark:bg-stone-900/20 p-4">
            <div className="flex justify-center text-editorial-rust mb-2">
              <CalendarDays className="h-5 w-5" />
            </div>
            <div className="text-xl font-bold text-editorial-charcoal dark:text-stone-100 font-serif">120+</div>
            <div className="text-[10px] uppercase tracking-wider text-stone-500 font-mono mt-1">Historic Movements</div>
          </div>

          <div className="rounded border border-black/5 dark:border-white/10 bg-editorial-sand/40 dark:bg-stone-900/20 p-4">
            <div className="flex justify-center text-editorial-rust mb-2">
              <Globe className="h-5 w-5" />
            </div>
            <div className="text-xl font-bold text-editorial-charcoal dark:text-stone-100 font-serif">560+</div>
            <div className="text-[10px] uppercase tracking-wider text-stone-500 font-mono mt-1">Historical Locations</div>
          </div>

          <div className="rounded border border-black/5 dark:border-white/10 bg-editorial-sand/40 dark:bg-stone-900/20 p-4">
            <div className="flex justify-center text-editorial-green mb-2">
              <Flame className="h-5 w-5 animate-pulse" />
            </div>
            <div className="text-xl font-bold text-editorial-green font-serif">100%</div>
            <div className="text-[10px] uppercase tracking-wider text-stone-500 font-mono mt-1">Authenticated Scans</div>
          </div>

        </div>

      </div>
    </div>
  );
}
