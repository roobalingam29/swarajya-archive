/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { stateMapData, StateMapDetails } from '../data/mapData.ts';
import { Map, MapPin, Award, Calendar, BookOpen, Layers, Info } from 'lucide-react';

export default function MapTab() {
  const [selectedState, setSelectedState] = useState<StateMapDetails>(stateMapData[0]);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      
      {/* Title */}
      <div className="border-l-4 border-editorial-rust pl-4">
        <h3 className="font-serif text-2xl font-bold tracking-tight text-editorial-charcoal dark:text-stone-100">
          Geographical History Atlas
        </h3>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          Select or hover over any key province node to explore regional uprisings, fighters, and battlefronts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Custom stylized SVG Geographic map of India */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/10 p-6 shadow-sm relative min-h-[480px]">
          
          {/* Header Legend */}
          <div className="flex items-center justify-between border-b border-black/5 dark:border-stone-850 pb-3 mb-4 text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            <span className="flex items-center space-x-2">
              <Layers className="h-4 w-4 text-editorial-rust" />
              <span>Historical Crucible Nodes</span>
            </span>
            <span className="text-editorial-rust text-[10px] tracking-widest uppercase font-semibold">Click any location node</span>
          </div>

          {/* Interactive Geographic Canvas Block */}
          <div className="relative flex-1 flex items-center justify-center bg-editorial-sand/40 dark:bg-stone-950/60 rounded border border-black/10 dark:border-stone-850 overflow-hidden py-12 px-6">
            
            {/* Visual background grid pattern */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Styled India Map visual representation */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] bg-white dark:bg-stone-900/10 rounded border border-black/10 dark:border-stone-800/40 p-4">
              
              {/* Symbolic high-contrast background sketch of India using CSS shapes or decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <Map className="h-full w-full stroke-1 text-stone-100" />
              </div>

              {/* State Nodes */}
              {stateMapData.map((st) => {
                const isSelected = selectedState.id === st.id;
                const isHovered = hoveredStateId === st.id;

                return (
                  <button
                    key={st.id}
                    onClick={() => setSelectedState(st)}
                    onMouseEnter={() => setHoveredStateId(st.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    style={{ left: `${st.centerX}%`, top: `${st.centerY}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                  >
                    {/* Ring Pulse */}
                    <span className={`absolute inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 transition-all duration-300 ${
                      isSelected 
                        ? 'bg-editorial-rust/25 scale-125 ring-2 ring-editorial-rust/50' 
                        : isHovered 
                        ? 'bg-editorial-rust/15 scale-110' 
                        : 'bg-transparent group-hover:bg-editorial-rust/5'
                    }`} />

                    {/* Central Core Circle */}
                    <span className={`relative flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isSelected
                        ? 'border-editorial-rust bg-editorial-rust text-white shadow-lg scale-110'
                        : isHovered
                        ? 'border-editorial-rust bg-editorial-rust/20 text-editorial-rust'
                        : 'border-black/20 dark:border-stone-600 bg-white dark:bg-stone-950 text-stone-500 group-hover:border-editorial-rust'
                    }`}>
                      <MapPin className="h-3 w-3" />
                    </span>

                    {/* Hover text flag */}
                    <span className={`absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900 px-2 py-1 text-[10px] font-mono tracking-wider text-stone-700 dark:text-stone-300 shadow-md transition-opacity duration-200 pointer-events-none ${
                      isHovered || isSelected ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {st.name}
                    </span>

                  </button>
                );
              })}

              {/* Compass symbol in the corner */}
              <div className="absolute bottom-4 right-4 flex flex-col items-center border border-black/10 dark:border-stone-800/40 bg-white dark:bg-stone-900/20 p-2.5 rounded text-stone-500 dark:text-stone-600 font-mono text-[9px] tracking-widest uppercase">
                <span>N</span>
                <span className="text-stone-400 dark:text-stone-700 font-serif my-0.5">&bull;</span>
                <div className="h-6 w-0.5 bg-black/10 dark:bg-stone-800" />
                <span className="text-editorial-rust font-bold mt-1">ATLAS</span>
              </div>

            </div>

          </div>

          {/* Quick instructions bar */}
          <div className="mt-4 flex items-center space-x-2 rounded bg-editorial-rust/[0.02] border border-editorial-rust/10 p-3.5 text-xs text-stone-600 dark:text-stone-400 animate-in fade-in">
            <Info className="h-4 w-4 text-editorial-rust flex-shrink-0" />
            <span>Click any marker to query its regional heroes, organizations, and military battlefronts.</span>
          </div>

        </div>

        {/* Right Side: Detailed Regional Information Profile */}
        <div className="lg:col-span-5 rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/35 p-6 md:p-8 flex flex-col justify-between shadow-sm">
          
          <div className="space-y-6">
            
            {/* Header Identity */}
            <div className="border-b border-black/5 dark:border-stone-850 pb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-editorial-rust font-semibold">Region Profile</span>
              <h4 className="font-serif text-2xl font-bold text-editorial-charcoal dark:text-stone-100 mt-1">
                {selectedState.name}
              </h4>
            </div>

            {/* Historical Role blurb */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-stone-550 font-bold">Historical Role</h5>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed bg-editorial-sand/30 dark:bg-stone-950 p-4 rounded border border-black/5 dark:border-stone-850">
                {selectedState.historicalRole}
              </p>
            </div>

            {/* Linked fighters list */}
            <div className="space-y-3">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-stone-550 font-bold">Key Figures & Leaders</h5>
              <div className="flex flex-wrap gap-2">
                {selectedState.freedomFighters.map((fighter) => (
                  <span
                    key={fighter}
                    className="inline-flex items-center space-x-1.5 rounded bg-white dark:bg-stone-950 border border-black/10 dark:border-stone-850 px-3 py-2 text-xs text-stone-700 dark:text-stone-300 capitalize shadow-xs"
                  >
                    <Award className="h-3.5 w-3.5 text-editorial-rust" />
                    <span>{fighter}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Linked milestones */}
            <div className="space-y-3">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-stone-550 font-bold">Major Incidents & Landmarks</h5>
              <div className="flex flex-wrap gap-2">
                {selectedState.events.map((evt) => (
                  <span
                    key={evt}
                    className="inline-flex items-center space-x-1.5 rounded bg-white dark:bg-stone-950 border border-black/10 dark:border-stone-850 px-3 py-2 text-xs text-stone-700 dark:text-stone-300 uppercase font-mono tracking-wider text-[11px] shadow-xs"
                  >
                    <Calendar className="h-3.5 w-3.5 text-editorial-rust" />
                    <span>ID: {evt}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Saffron/Green Flag accents on the card footer */}
          <div className="mt-8 pt-4 border-t border-black/5 dark:border-stone-850 flex items-center justify-between text-[10px] text-stone-500 font-mono">
            <span>REGISTRY ID: {selectedState.id}</span>
            <div className="flex space-x-1">
              <div className="h-2 w-4 bg-editorial-rust rounded-sm" />
              <div className="h-2 w-4 bg-stone-300 dark:bg-stone-100 rounded-sm" />
              <div className="h-2 w-4 bg-editorial-green rounded-sm" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
