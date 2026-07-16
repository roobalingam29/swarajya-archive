/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Hero from './components/Hero.tsx';

// Data models
import { freedomFighters as initialFighters } from './data/fighters.ts';
import { historicalEvents } from './data/events.ts';
import { movements } from './data/movements.ts';

// Tabs
import FightersTab from './components/FightersTab.tsx';
import EventsTab from './components/EventsTab.tsx';
import MovementsTab from './components/MovementsTab.tsx';
import TimelineTab from './components/TimelineTab.tsx';
import MapTab from './components/MapTab.tsx';
import AssistantTab from './components/AssistantTab.tsx';
import AdminPortal from './components/AdminPortal.tsx';

// Icons for login overlay
import { X, Lock, Mail, Compass } from 'lucide-react';
import { FreedomFighter, HistoricalEvent, Movement } from './types.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('archive');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  
  // Immersive stateful dataset for live local memory CRUD
  const [fighters, setFighters] = useState<FreedomFighter[]>(initialFighters);
  const [events, setEvents] = useState<HistoricalEvent[]>(historicalEvents);
  const [activeMovements, setActiveMovements] = useState<Movement[]>(movements);

  // Filter queries
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStateFilter, setSelectedStateFilter] = useState('');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState('');

  // Login Modal state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default logged in for flawless preview experience!
  const [emailInput, setEmailInput] = useState('sachinmoorthi137@gmail.com');
  const [passwordInput, setPasswordInput] = useState('••••••••••••');

  // Syncing HTML dark mode class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0c0a09'; // stone-950
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#fafaf9'; // stone-50
    }
  }, [darkMode]);

  // Derived filter options
  const uniqueStates = Array.from(new Set(fighters.map((f) => f.state))) as string[];
  const uniqueRoles = Array.from(new Set(fighters.map((f) => f.role.split(' / ')[0]))) as string[];

  // Filtering fighters based on search query and selector parameters
  const filteredFighters = fighters.filter((fighter) => {
    const matchesSearch =
      fighter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fighter.biography.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (fighter.alternativeName && fighter.alternativeName.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesState = selectedStateFilter ? fighter.state === selectedStateFilter : true;
    const matchesRole = selectedRoleFilter ? fighter.role.includes(selectedRoleFilter) : true;

    return matchesSearch && matchesState && matchesRole;
  });

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    if (activeTab === 'admin') {
      setActiveTab('archive');
    }
  };

  // CRUD helpers
  const handleAddFighter = (newFighter: FreedomFighter) => {
    setFighters((prev) => [newFighter, ...prev]);
  };

  const handleDeleteFighter = (id: string) => {
    setFighters((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between font-sans ${
      darkMode ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'
    }`}>
      
      {/* Universal Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenLogin={() => setShowLoginModal(true)}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {/* Main Core Content Stage */}
      <main className="flex-1 pb-16">
        
        {/* Render search hero banner only on 'archive' dashboard */}
        {activeTab === 'archive' && (
          <Hero
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedStateFilter={selectedStateFilter}
            setSelectedStateFilter={setSelectedStateFilter}
            selectedRoleFilter={selectedRoleFilter}
            setSelectedRoleFilter={setSelectedRoleFilter}
            states={uniqueStates}
            roles={uniqueRoles}
          />
        )}

        <div className="mx-auto max-w-7xl px-6 pt-12">
          
          {/* Main Tab Routing */}
          {activeTab === 'archive' && (
            <div className="space-y-16">
              
              {/* Fighters Section */}
              <section id="fighters">
                <FightersTab fighters={filteredFighters} />
              </section>

              {/* Events Section */}
              <section id="events" className="pt-12 border-t border-stone-800/60">
                <EventsTab events={events} />
              </section>

              {/* Movements Section */}
              <section id="movements" className="pt-12 border-t border-stone-800/60">
                <MovementsTab movements={activeMovements} />
              </section>

            </div>
          )}

          {activeTab === 'timeline' && <TimelineTab />}

          {activeTab === 'map' && <MapTab />}

          {activeTab === 'assistant' && <AssistantTab />}

          {activeTab === 'admin' && isLoggedIn && (
            <AdminPortal
              fighters={fighters}
              events={events}
              movements={activeMovements}
              onAddFighter={handleAddFighter}
              onEditFighter={() => {}}
              onDeleteFighter={handleDeleteFighter}
              onAddEvent={(evt) => setEvents(prev => [evt, ...prev])}
              onAddMovement={(mov) => setActiveMovements(prev => [mov, ...prev])}
            />
          )}

        </div>

      </main>

      {/* Universal Archival Footer */}
      <Footer />

      {/* Secure Sign-In Modal Overlay */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/95 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-stone-850 bg-stone-900 text-stone-100 shadow-2xl p-6 md:p-8 space-y-6 animate-in fade-in zoom-in-95">
            
            {/* Close */}
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-stone-950 hover:bg-stone-800 text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header branding */}
            <div className="text-center space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20">
                <Lock className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="font-serif text-xl font-bold text-amber-400">
                Secure Administrator Portal
              </h3>
              <p className="text-[11px] text-stone-400 leading-relaxed max-w-xs mx-auto">
                Access authorized credentials to register digital manuscripts and modify records.
              </p>
            </div>

            {/* Login form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              
              <div className="space-y-1 text-xs">
                <label className="text-stone-400 font-mono uppercase tracking-wider">Swarajya Gov Email</label>
                <div className="relative">
                  <Mail className="absolute top-3.5 left-3.5 h-4 w-4 text-stone-500" />
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="officer@swarajya.gov.in"
                    className="w-full rounded-xl bg-stone-950 py-3 pl-11 pr-4 text-stone-100 placeholder-stone-600 border border-stone-800 focus:border-amber-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <label className="text-stone-400 font-mono uppercase tracking-wider">Secure Access Key</label>
                <div className="relative">
                  <Lock className="absolute top-3.5 left-3.5 h-4 w-4 text-stone-500" />
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full rounded-xl bg-stone-950 py-3 pl-11 pr-4 text-stone-100 placeholder-stone-600 border border-stone-800 focus:border-amber-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 py-3 text-xs font-bold text-stone-950 shadow-lg hover:from-amber-500 hover:to-amber-400 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Compass className="h-4 w-4" />
                <span>Request Archival Session Access</span>
              </button>

            </form>

            {/* Demo/Preview help tip */}
            <div className="text-[10px] text-stone-500 text-center font-mono border-t border-stone-850 pt-4">
              Tip: Press submit using default values to sign-in instantly!
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
