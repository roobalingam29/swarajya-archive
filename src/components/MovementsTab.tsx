/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Movement } from '../types.ts';
import { Target, Flag, Users, Globe, Shield, HelpCircle } from 'lucide-react';

interface MovementsTabProps {
  movements: Movement[];
}

export default function MovementsTab({ movements }: MovementsTabProps) {
  return (
    <div className="space-y-8">
      
      {/* Section Title */}
      <div className="border-l-4 border-editorial-rust pl-4">
        <h3 className="font-serif text-2xl font-bold tracking-tight text-editorial-charcoal dark:text-stone-100">
          Mass National Movements
        </h3>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          Review the large-scale collective campaigns that mobilized millions to resist colonial governance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {movements.map((movement) => (
          <div
            key={movement.id}
            className="rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/25 p-6 md:p-8 space-y-6 hover:border-editorial-rust/30 transition-colors shadow-sm"
          >
            
            {/* Title Block */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/5 dark:border-stone-850 pb-4 gap-4">
              <div className="space-y-1">
                <h4 className="font-serif text-xl font-bold text-editorial-rust dark:text-editorial-paper sm:text-2xl">
                  {movement.name}
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-stone-500 dark:text-stone-400 font-mono">
                  <span className="bg-white dark:bg-stone-950 px-2 py-1 rounded border border-black/10 dark:border-stone-850">
                    DURATION: {movement.startDate} to {movement.endDate}
                  </span>
                </div>
              </div>
              
              {/* Linked States */}
              <div className="flex flex-wrap gap-1.5">
                {movement.locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center space-x-1 rounded bg-white dark:bg-stone-950/80 border border-black/10 dark:border-stone-850 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400"
                  >
                    <Globe className="h-3 w-3 text-editorial-green" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Movement Description */}
            <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed max-w-3xl">
              {movement.description}
            </p>

            {/* Strategic Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Objectives */}
              <div className="space-y-3 bg-white dark:bg-stone-950 p-4 rounded border border-black/10 dark:border-stone-850">
                <h5 className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-editorial-rust font-mono">
                  <Target className="h-4 w-4" />
                  <span>Strategic Objectives</span>
                </h5>
                <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300 list-inside list-disc">
                  {movement.objectives.map((obj, i) => (
                    <li key={i} className="leading-relaxed pl-1">{obj}</li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="space-y-3 bg-white dark:bg-stone-950 p-4 rounded border border-black/10 dark:border-stone-850">
                <h5 className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-editorial-green font-mono">
                  <Flag className="h-4 w-4" />
                  <span>Key Historical Outcomes</span>
                </h5>
                <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300 list-inside list-disc">
                  {movement.keyOutcomes.map((out, i) => (
                    <li key={i} className="leading-relaxed pl-1">{out}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
