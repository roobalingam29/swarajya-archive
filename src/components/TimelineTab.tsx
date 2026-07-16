/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { timelineItems } from '../data/timeline.ts';
import { CalendarDays, Filter, Award, ShieldAlert, BookOpen, MapPin } from 'lucide-react';

export default function TimelineTab() {
  const [filterType, setFilterType] = useState<string>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = filterType === 'all'
    ? timelineItems
    : timelineItems.filter(item => item.type === filterType);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      
      {/* Tab Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-editorial-rust pl-4">
        <div>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-editorial-charcoal dark:text-stone-100">
            Interactive Historical Timeline
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
            Traverse India's journey to freedom from the Battle of Plassey (1757) to the establishment of the Republic (1950).
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center space-x-1.5 self-start sm:self-center">
          <Filter className="h-3.5 w-3.5 text-stone-500 mr-1" />
          {['all', 'war', 'movement', 'milestone'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                filterType === type
                  ? 'bg-editorial-rust/15 text-editorial-rust border-editorial-rust/30 font-semibold'
                  : 'text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-900 border-black/10 dark:border-stone-850 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Vertical Timeline */}
      <div className="relative border-l border-black/10 dark:border-stone-800 pl-6 ml-4 space-y-12 py-4">
        
        {/* Glow Line Indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-editorial-rust/40 via-editorial-green/20 to-editorial-rust/40" />

        {filteredItems.map((item, idx) => {
          const isHovered = hoveredItem === item.id;
          
          {/* Node Icon Selector */}
          let typeColor = 'border-stone-400 bg-stone-100 text-stone-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400';
          if (item.type === 'war') typeColor = 'border-red-500/50 bg-red-500/10 text-red-600 dark:text-red-400';
          if (item.type === 'movement') typeColor = 'border-editorial-rust/50 bg-editorial-rust/10 text-editorial-rust';
          if (item.type === 'milestone') typeColor = 'border-editorial-green/50 bg-editorial-green/10 text-editorial-green';

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative flex flex-col md:flex-row gap-4 items-start group"
            >
              
              {/* Absolute Bullet Dot */}
              <div className={`absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                isHovered 
                  ? 'scale-125 border-editorial-rust bg-editorial-rust shadow-md shadow-editorial-rust/30' 
                  : 'border-black/20 dark:border-stone-800 bg-white dark:bg-stone-900'
              }`} />

              {/* Year Column */}
              <div className="flex-shrink-0">
                <span className={`font-serif text-2xl font-black tracking-tight transition-colors duration-300 ${
                  isHovered ? 'text-editorial-rust' : 'text-editorial-charcoal dark:text-stone-300'
                }`}>
                  {item.year}
                </span>
              </div>

              {/* Card Container */}
              <div className={`flex-1 rounded border p-5 transition-all duration-300 ${
                isHovered
                  ? 'border-editorial-rust/30 bg-editorial-sand/40 dark:bg-stone-900/80 shadow-md -translate-y-0.5'
                  : 'border-black/10 dark:border-stone-850 bg-white dark:bg-stone-900/30 shadow-sm'
              }`}>
                
                {/* Upper Metadata Block */}
                <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-stone-850/60 mb-3 text-[10px] font-mono uppercase tracking-wider">
                  <span className={`rounded border px-2 py-0.5 ${typeColor}`}>
                    {item.type}
                  </span>
                  {item.state && (
                    <span className="flex items-center space-x-1 text-stone-500">
                      <MapPin className="h-3 w-3 text-editorial-rust" />
                      <span>{item.state}</span>
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-base font-bold text-editorial-charcoal dark:text-stone-100 group-hover:text-editorial-rust transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}
