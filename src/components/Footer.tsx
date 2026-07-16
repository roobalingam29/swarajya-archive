/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Heart, FileText, Landmark } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-editorial-sand dark:bg-editorial-charcoal text-stone-800 dark:text-stone-300 transition-all duration-300">
      
      {/* Principal Citation Panel */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Column 1: Archival Mandate */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-editorial-rust">
              <Landmark className="h-5 w-5" />
              <h3 className="font-serif text-sm font-bold tracking-wider uppercase">
                Archival Mandate
              </h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              The Swarajya Archive is committed to the digital preservation, curation, and absolute cataloging of historical records, manuscripts, and personal correspondences related to India's Freedom Struggle (1757–1950).
            </p>
          </div>

          {/* Column 2: Sources of Authenticity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-editorial-rust">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-serif text-sm font-bold tracking-wider uppercase">
                Sources of Authenticity
              </h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              All digital manuscripts, biographies, and timeline checkpoints are verified against files from the <span className="text-stone-900 dark:text-stone-200 font-medium">National Archives of India</span>, State Archives registries, and published collections of official historical agencies.
            </p>
          </div>

          {/* Column 3: Digital Rights & Citations */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-editorial-rust">
              <FileText className="h-5 w-5" />
              <h3 className="font-serif text-sm font-bold tracking-wider uppercase">
                Open Access & Citations
              </h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              This repository is a free academic, open-access knowledge graph. Public domain source records are available for educational citations under Creative Commons Attribution-ShareAlike licenses.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500 font-mono">
          <div>
            &copy; {year} Swarajya Archive Project. All rights preserved.
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-1">
            <span>Preserving history with deep gratitude</span>
            <Heart className="h-3.5 w-3.5 text-editorial-rust fill-editorial-rust animate-pulse" />
            <span>for India's freedom fighters.</span>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-editorial-rust transition-colors">Metadata Registry</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-editorial-rust transition-colors">Citation Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-editorial-rust transition-colors">API Endpoint Documentation</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
