/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Compass, BookOpen, Map, Cpu, ShieldAlert, History, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  onOpenLogin: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  onOpenLogin,
  isLoggedIn,
  onLogout,
}: HeaderProps) {
  const navItems = [
    { id: 'archive', label: 'Digital Archive', icon: BookOpen },
    { id: 'timeline', label: 'Timeline', icon: History },
    { id: 'map', label: 'Interactive Map', icon: Map },
    { id: 'assistant', label: 'AI Assistant', icon: Cpu },
  ];

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
      darkMode 
        ? 'border-white/10 bg-editorial-charcoal text-editorial-paper' 
        : 'border-black/10 bg-white text-editorial-charcoal'
    }`}>
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6">
        
        {/* Emblem-like Logo Title */}
        <div 
          className="flex cursor-pointer items-center space-x-3"
          onClick={() => setActiveTab('archive')}
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
            darkMode 
              ? 'border-editorial-rust bg-editorial-rust/10' 
              : 'border-editorial-rust bg-editorial-rust/5'
          }`}>
            <span className="font-serif text-lg font-bold text-editorial-rust">स्व</span>
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold tracking-tight text-editorial-charcoal dark:text-white">
              Swarajya <span className="text-editorial-rust">Archive</span>
            </h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-mono">
              Digital Freedom Repository
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded text-xs uppercase font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-editorial-rust border-b-2 border-editorial-rust bg-editorial-sand/40 dark:bg-stone-800'
                    : 'text-stone-500 dark:text-stone-400 hover:text-editorial-charcoal dark:hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          
          {/* Light/Dark Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded border transition-colors cursor-pointer ${
              darkMode 
                ? 'border-white/10 bg-stone-900 text-stone-300 hover:text-editorial-rust' 
                : 'border-black/10 bg-editorial-sand text-stone-700 hover:text-editorial-rust'
            }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Admin Control */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setActiveTab('admin')}
                className={`flex items-center space-x-2 px-3 py-2 rounded text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  activeTab === 'admin'
                    ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30'
                    : 'bg-editorial-sand dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-black/10 dark:border-white/10 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <Compass className="h-4 w-4 animate-spin-slow" />
                <span>Console</span>
              </button>
              <button
                onClick={onLogout}
                className="text-xs text-stone-500 hover:text-editorial-rust transition-colors font-mono underline cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="flex items-center space-x-2 rounded bg-editorial-charcoal dark:bg-editorial-paper text-white dark:text-editorial-charcoal px-4 py-2 text-xs uppercase font-bold tracking-widest hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              <ShieldAlert className="h-4 w-4" />
              <span>Admin Portal</span>
            </button>
          )}

        </div>
      </div>

      {/* Mobile Sub-Navigation */}
      <div className={`lg:hidden flex items-center justify-around border-t py-2.5 ${
        darkMode ? 'border-white/10 bg-stone-900/90' : 'border-black/10 bg-white'
      }`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center space-y-1 text-[10px] font-medium transition-colors cursor-pointer ${
                isActive ? 'text-editorial-rust' : 'text-stone-500 dark:text-stone-400 hover:text-editorial-rust'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
