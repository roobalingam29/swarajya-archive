/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HistoricalEvent } from '../types.ts';
import { Calendar, MapPin, Sparkles, FileText, ChevronRight, BookOpen } from 'lucide-react';

interface EventsTabProps {
  events: HistoricalEvent[];
}

export default function EventsTab({ events }: EventsTabProps) {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  return (
    <div className="space-y-8">
      
      {/* Tab Header */}
      <div className="border-l-4 border-editorial-rust pl-4">
        <h3 className="font-serif text-2xl font-bold tracking-tight text-editorial-charcoal dark:text-stone-100">
          Key Archival Events
        </h3>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          Explore defining inflection points, heroic revolts, and official declarations in India's struggle.
        </p>
      </div>

      {events.length === 0 ? (
        <div className="rounded border border-dashed border-black/10 dark:border-stone-850 p-12 text-center text-stone-500">
          No events match your current filters.
        </div>
      ) : (
        /* Event timeline-list view */
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-5 rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/30 hover:bg-editorial-sand/40 dark:hover:bg-stone-900/70 hover:border-editorial-rust/40 cursor-pointer transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                
                {/* Year Marker */}
                <div className="flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded border border-editorial-rust/30 bg-editorial-rust/10 font-serif font-bold text-editorial-rust shadow-sm">
                  <span className="text-lg leading-none">{event.year}</span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-editorial-charcoal dark:text-stone-100 group-hover:text-editorial-rust transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-stone-500 dark:text-stone-400">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5 text-stone-400" />
                      <span>{event.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-3.5 w-3.5 text-stone-400" />
                      <span>{event.place}, {event.state}</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Significance Snippet / Learn more */}
              <div className="mt-4 md:mt-0 flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
                <span className="hidden md:block max-w-sm text-xs text-stone-500 dark:text-stone-400 line-clamp-1 italic">
                  {event.significance}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded border border-black/10 dark:border-white/10 bg-white dark:bg-stone-950 text-editorial-rust group-hover:bg-editorial-rust/10 transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded border border-black/10 dark:border-stone-800 bg-editorial-paper dark:bg-stone-900 text-editorial-charcoal dark:text-stone-100 shadow-2xl p-6 md:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 p-2 rounded bg-white dark:bg-stone-950 hover:bg-stone-100 dark:hover:bg-stone-850 border border-black/10 dark:border-white/10 text-stone-500 dark:text-stone-400 transition-colors cursor-pointer text-xs uppercase font-semibold font-mono"
            >
              Close &times;
            </button>

            <div className="space-y-4">
              
              {/* Event Badge Title */}
              <div className="flex h-16 w-16 items-center justify-center rounded bg-editorial-rust/10 border border-editorial-rust/20 font-serif text-xl font-bold text-editorial-rust">
                {selectedEvent.year}
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-editorial-rust dark:text-editorial-paper">
                  {selectedEvent.title}
                </h3>
                <div className="flex items-center space-x-4 text-xs font-mono text-stone-550 dark:text-stone-400">
                  <span>{selectedEvent.date}</span>
                  <span>&bull;</span>
                  <span>{selectedEvent.place}, {selectedEvent.state}</span>
                </div>
              </div>

            </div>

            {/* Main Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Historical Description
              </h4>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed bg-white dark:bg-stone-950 p-4 rounded border border-black/10 dark:border-stone-850">
                {selectedEvent.description}
              </p>
            </div>

            {/* Strategic Significance */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-editorial-rust font-mono flex items-center space-x-1.5">
                <Sparkles className="h-4 w-4" />
                <span>Strategic Significance</span>
              </h4>
              <p className="text-xs text-stone-750 dark:text-stone-300 leading-relaxed bg-editorial-rust/[0.03] border border-editorial-rust/20 p-4 rounded">
                {selectedEvent.significance}
              </p>
            </div>

            {/* Linked Documents & Archive References */}
            <div className="space-y-2 pt-4 border-t border-black/10 dark:border-stone-850">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono flex items-center space-x-1.5">
                <FileText className="h-4 w-4" />
                <span>Linked Archival Materials</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedEvent.documentsLinked.map((doc) => (
                  <span
                    key={doc}
                    className="inline-flex items-center space-x-1 rounded bg-white dark:bg-stone-950 border border-black/10 dark:border-stone-850 px-3 py-1.5 text-[11px] font-mono text-stone-550 dark:text-stone-400 uppercase tracking-wider"
                  >
                    <BookOpen className="h-3 w-3 text-editorial-rust" />
                    <span>REF: {doc}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
