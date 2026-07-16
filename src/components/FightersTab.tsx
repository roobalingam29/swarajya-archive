/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FreedomFighter } from '../types.ts';
import { MapPin, Calendar, Award, BookOpen, Quote, X, FileText } from 'lucide-react';

interface FightersTabProps {
  fighters: FreedomFighter[];
}

export default function FightersTab({ fighters }: FightersTabProps) {
  const [selectedFighter, setSelectedFighter] = useState<FreedomFighter | null>(null);

  return (
    <div className="space-y-8">
      
      {/* Title */}
      <div className="border-l-4 border-editorial-rust pl-4">
        <h3 className="font-serif text-2xl font-bold tracking-tight text-editorial-charcoal dark:text-stone-100">
          Freedom Fighters & Revolutionaries
        </h3>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          Explore the individual lives, strategic struggles, and authentic records of India's liberators.
        </p>
      </div>

      {fighters.length === 0 ? (
        <div className="rounded border border-dashed border-black/10 dark:border-stone-850 p-12 text-center text-stone-500">
          No records match your active search terms or filters.
        </div>
      ) : (
        /* Grid */
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fighters.map((fighter) => (
            <div
              key={fighter.id}
              onClick={() => setSelectedFighter(fighter)}
              className="group relative flex flex-col justify-between overflow-hidden rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-5 hover:border-editorial-rust/40 hover:bg-editorial-sand/40 dark:hover:bg-stone-900/85 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              
              {/* Outer Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-editorial-rust/0 via-editorial-rust/0 to-editorial-rust/0 group-hover:to-editorial-rust/5 transition-all duration-300" />

              <div className="space-y-4">
                
                {/* Visual Cover Header */}
                <div className="relative h-48 overflow-hidden rounded border border-black/5 dark:border-stone-800/80">
                  <img
                    src={fighter.image}
                    alt={fighter.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  
                  {/* Absolute Badge for State */}
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1 rounded bg-white dark:bg-stone-900 border border-black/10 dark:border-stone-850 px-2 py-1 text-[10px] font-mono tracking-wider text-editorial-rust dark:text-editorial-paper uppercase">
                    <MapPin className="h-3 w-3 text-editorial-rust" />
                    <span>{fighter.state}</span>
                  </div>
                </div>

                {/* Identity */}
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-editorial-charcoal dark:text-stone-100 group-hover:text-editorial-rust transition-colors">
                    {fighter.name}
                  </h4>
                  {fighter.alternativeName && (
                    <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                      {fighter.alternativeName}
                    </p>
                  )}
                </div>

                {/* Role Details */}
                <div className="flex items-start space-x-2 text-xs text-stone-700 dark:text-stone-300 bg-editorial-sand/60 dark:bg-stone-900/60 rounded p-2.5 border border-black/5 dark:border-stone-800/50">
                  <Award className="h-4 w-4 text-editorial-rust flex-shrink-0 mt-0.5" />
                  <span>{fighter.role}</span>
                </div>

                {/* Blurb Biography snippet */}
                <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                  {fighter.biography}
                </p>

              </div>

              {/* Action Button Link */}
              <div className="mt-5 border-t border-black/5 dark:border-stone-850 pt-4 flex items-center justify-between text-[11px] text-editorial-rust group-hover:text-editorial-rust font-mono font-semibold">
                <span>View Historical Record</span>
                <span>&rarr;</span>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Profile Detail Immersive Overlay Modal */}
      {selectedFighter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded border border-black/10 dark:border-stone-800 bg-editorial-paper dark:bg-stone-900 text-editorial-charcoal dark:text-stone-100 shadow-2xl p-6 md:p-8 space-y-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedFighter(null)}
              className="absolute top-6 right-6 p-2 rounded bg-white dark:bg-stone-950 hover:bg-stone-100 dark:hover:bg-stone-850 border border-black/10 dark:border-white/10 text-stone-500 dark:text-stone-400 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Body Header */}
            <div className="flex flex-col md:flex-row gap-6">
              
              <div className="w-full md:w-1/3 h-56 rounded overflow-hidden border border-black/10 dark:border-stone-850 shadow-inner">
                <img
                  src={selectedFighter.image}
                  alt={selectedFighter.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-editorial-rust dark:text-editorial-paper">
                    {selectedFighter.name}
                  </h3>
                  {selectedFighter.alternativeName && (
                    <p className="text-sm text-stone-550 dark:text-stone-400 italic mt-0.5">
                      {selectedFighter.alternativeName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-stone-700 dark:text-stone-300">
                  <div className="flex items-center space-x-2 bg-white dark:bg-stone-950 p-2.5 rounded border border-black/10 dark:border-stone-850">
                    <Calendar className="h-4 w-4 text-editorial-rust" />
                    <div>
                      <div className="text-[9px] text-stone-500 uppercase tracking-wider">Birth / Lifespan</div>
                      <div>{selectedFighter.birthDate} – {selectedFighter.deathDate}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-white dark:bg-stone-950 p-2.5 rounded border border-black/10 dark:border-stone-850">
                    <MapPin className="h-4 w-4 text-editorial-rust" />
                    <div>
                      <div className="text-[9px] text-stone-500 uppercase tracking-wider font-mono">Origin District</div>
                      <div className="truncate">{selectedFighter.birthPlace}, {selectedFighter.state}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 rounded bg-editorial-rust/5 border border-editorial-rust/20 px-3 py-2 text-xs text-editorial-rust">
                  <Award className="h-4 w-4 flex-shrink-0" />
                  <span className="font-semibold">{selectedFighter.role}</span>
                </div>

              </div>

            </div>

            {/* Extended Biography */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-editorial-rust" />
                <span>Biography & Struggle Timeline</span>
              </h4>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed bg-white dark:bg-stone-950 p-4 rounded border border-black/10 dark:border-stone-850">
                {selectedFighter.biography}
              </p>
            </div>

            {/* Key Historic Contributions */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 flex items-center space-x-2">
                <Quote className="h-4 w-4 text-editorial-rust" />
                <span>Key Historical Contributions</span>
              </h4>
              <ul className="grid gap-2 text-xs text-stone-700 dark:text-stone-300">
                {selectedFighter.keyContributions.map((contrib, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 bg-white/50 dark:bg-stone-950/45 px-4 py-3 rounded border border-black/5 dark:border-stone-850/80">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-editorial-rust/10 text-editorial-rust font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Citations & Sources of Verification */}
            <div className="space-y-3 pt-4 border-t border-black/10 dark:border-stone-850">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center space-x-2">
                <FileText className="h-3.5 w-3.5" />
                <span>Archival Sources & Verification</span>
              </h4>
              <ul className="text-[11px] font-mono text-stone-550 dark:text-stone-400 list-disc list-inside space-y-1">
                {selectedFighter.citations.map((cite, idx) => (
                  <li key={idx} className="leading-relaxed">{cite}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
