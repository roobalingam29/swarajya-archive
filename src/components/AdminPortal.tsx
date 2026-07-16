/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { FreedomFighter, HistoricalEvent, Movement, AuditLog } from '../types.ts';
import { 
  ShieldAlert, Landmark, Users, Calendar, Award, 
  Trash2, Edit, Plus, Check, RefreshCw, Layers, ShieldCheck, FileText 
} from 'lucide-react';

interface AdminPortalProps {
  fighters: FreedomFighter[];
  events: HistoricalEvent[];
  movements: Movement[];
  onAddFighter: (fighter: FreedomFighter) => void;
  onEditFighter: (fighter: FreedomFighter) => void;
  onDeleteFighter: (id: string) => void;
  onAddEvent: (event: HistoricalEvent) => void;
  onAddMovement: (movement: Movement) => void;
}

export default function AdminPortal({
  fighters,
  events,
  movements,
  onAddFighter,
  onEditFighter,
  onDeleteFighter,
  onAddEvent,
  onAddMovement,
}: AdminPortalProps) {
  const [activeSubTab, setActiveSubTab] = useState<'dashboard' | 'fighters' | 'events' | 'logs'>('dashboard');
  
  // States for CRUD operations
  const [isAddingFighter, setIsAddingFighter] = useState(false);
  const [newFighter, setNewFighter] = useState<Partial<FreedomFighter>>({
    id: '',
    name: '',
    alternativeName: '',
    birthDate: '',
    deathDate: '',
    birthPlace: '',
    state: '',
    role: '',
    biography: '',
    keyContributions: [''],
    movementsLinked: [],
    organizationsLinked: [],
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=400',
    citations: ['National Archives of India, Official Record Registry']
  });

  // Mock logs state
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([
    {
      id: "log_1",
      timestamp: "2026-07-14 22:15:30",
      user: "sachinmoorthi137@gmail.com",
      action: "UPDATE",
      module: "Fighters",
      details: "Updated Mahatma Gandhi biography metadata and citation arrays."
    },
    {
      id: "log_2",
      timestamp: "2026-07-14 21:04:12",
      user: "sachinmoorthi137@gmail.com",
      action: "INSERT",
      module: "Events",
      details: "Inserted newly verified 'Royal Indian Navy Mutiny' archival entry."
    }
  ]);

  const handleSaveFighter = (e: FormEvent) => {
    e.preventDefault();
    if (!newFighter.name || !newFighter.role || !newFighter.state) return;

    const completedFighter: FreedomFighter = {
      id: newFighter.id || `fgt_${Date.now()}`,
      name: newFighter.name,
      alternativeName: newFighter.alternativeName,
      birthDate: newFighter.birthDate || '1880-01-01',
      deathDate: newFighter.deathDate || '1950-01-01',
      birthPlace: newFighter.birthPlace || 'Varanasi',
      state: newFighter.state,
      role: newFighter.role,
      biography: newFighter.biography || 'A dedicated freedom fighter who contributed massively.',
      keyContributions: newFighter.keyContributions?.filter(Boolean) || [],
      movementsLinked: [],
      organizationsLinked: [],
      image: newFighter.image || '',
      citations: newFighter.citations?.filter(Boolean) || []
    };

    onAddFighter(completedFighter);
    
    // Add Audit Log
    const newLog: AuditLog = {
      id: `log_${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      user: "sachinmoorthi137@gmail.com",
      action: "INSERT",
      module: "Fighters",
      details: `Created new fighter entry: ${completedFighter.name}`
    };
    setAuditLogs(prev => [newLog, ...prev]);

    setIsAddingFighter(false);
    // Reset Form
    setNewFighter({
      id: '',
      name: '',
      alternativeName: '',
      birthDate: '',
      deathDate: '',
      birthPlace: '',
      state: '',
      role: '',
      biography: '',
      keyContributions: [''],
      movementsLinked: [],
      organizationsLinked: [],
      image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=400',
      citations: ['National Archives of India']
    });
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete the archival record for ${name}?`)) {
      onDeleteFighter(id);
      
      const newLog: AuditLog = {
        id: `log_${Date.now()}`,
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
        user: "sachinmoorthi137@gmail.com",
        action: "DELETE",
        module: "Fighters",
        details: `Deleted fighter archival record with ID: ${id}`
      };
      setAuditLogs(prev => [newLog, ...prev]);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Upper header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 border-editorial-rust pl-4 gap-4">
        <div>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-editorial-charcoal dark:text-stone-100 flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6 text-editorial-green" />
            <span>Administrator Console</span>
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
            Secure CRUD management panel of the Swarajya Digital Knowledge Graph.
          </p>
        </div>

        {/* Sub-Tabs */}
        <div className="flex space-x-1 border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/60 p-1 rounded">
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'fighters', label: 'F Fighters' },
            { id: 'logs', label: 'Audit Logs' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all cursor-pointer ${
                activeSubTab === tab.id
                  ? 'bg-editorial-rust/10 text-editorial-rust border border-editorial-rust/20 font-semibold'
                  : 'text-stone-500 hover:text-editorial-rust dark:text-stone-400 dark:hover:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-850'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* DASHBOARD SUB-TAB */}
      {activeSubTab === 'dashboard' && (
        <div className="space-y-6">
          
          {/* Main Stat Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/25 p-5 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-2xl font-serif font-black text-editorial-charcoal dark:text-stone-100">{fighters.length}</div>
                <div className="text-xs text-stone-500 font-mono mt-1">Active Fighter Profiles</div>
              </div>
              <div className="p-3 bg-editorial-rust/10 text-editorial-rust rounded">
                <Users className="h-6 w-6" />
              </div>
            </div>

            <div className="rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/25 p-5 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-2xl font-serif font-black text-editorial-charcoal dark:text-stone-100">{events.length}</div>
                <div className="text-xs text-stone-500 font-mono mt-1">Archived Incidents</div>
              </div>
              <div className="p-3 bg-editorial-green/10 text-editorial-green rounded">
                <Calendar className="h-6 w-6" />
              </div>
            </div>

            <div className="rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/25 p-5 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-2xl font-serif font-black text-editorial-charcoal dark:text-stone-100">{movements.length}</div>
                <div className="text-xs text-stone-500 font-mono mt-1">National Movements</div>
              </div>
              <div className="p-3 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded">
                <Landmark className="h-6 w-6" />
              </div>
            </div>

          </div>

          {/* Database staging information note */}
          <div className="rounded border border-editorial-rust/10 bg-editorial-rust/[0.01] p-5 space-y-2 shadow-xs">
            <h5 className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-editorial-rust font-mono">
              <ShieldAlert className="h-4 w-4" />
              <span>Database Pre-Migration Status (Module 1)</span>
            </h5>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              We are currently in Module 1 (Project Architecture and Folder Structure). To maintain a fully fluid and high-fidelity showcase, all current database inputs are handled via high-performance local memory arrays. Once the PostgreSQL database instance is provisioned in the upcoming modules, these modules will persist directly into relational tables with strict referential constraints.
            </p>
          </div>

        </div>
      )}

      {/* FIGHTERS SUB-TAB WITH FULL CRUD */}
      {activeSubTab === 'fighters' && (
        <div className="space-y-6">
          
          <div className="flex justify-between items-center pb-4 border-b border-black/5 dark:border-stone-850">
            <h4 className="font-serif text-lg font-bold text-editorial-charcoal dark:text-stone-100">
              Manage Fighters Archival Index
            </h4>
            <button
              onClick={() => setIsAddingFighter(true)}
              className="flex items-center space-x-1.5 rounded bg-editorial-green px-3 py-2 text-xs font-semibold text-white hover:bg-opacity-95 active:scale-95 transition-all cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Add Record</span>
            </button>
          </div>

          {/* CRUD Form Modal overlay */}
          {isAddingFighter && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 dark:bg-stone-950/95 backdrop-blur-xs">
              <form
                onSubmit={handleSaveFighter}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900 text-editorial-charcoal dark:text-stone-100 shadow-2xl p-6 md:p-8 space-y-6 animate-in fade-in zoom-in-95"
              >
                <div className="border-b border-black/5 dark:border-stone-850 pb-3 flex justify-between items-center">
                  <h4 className="font-serif text-xl font-bold text-editorial-rust">Add Freedom Fighter Record</h4>
                  <button
                    type="button"
                    onClick={() => setIsAddingFighter(false)}
                    className="text-stone-500 hover:text-editorial-rust dark:text-stone-400 dark:hover:text-stone-100 font-mono text-xs cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-stone-500 dark:text-stone-400">Fighter Code ID (lowercase, e.g. patel)</label>
                    <input
                      type="text"
                      required
                      value={newFighter.id || ''}
                      onChange={(e) => setNewFighter(prev => ({ ...prev, id: e.target.value.toLowerCase().replace(/[^a-z_]/g, '') }))}
                      className="w-full rounded bg-white dark:bg-stone-950 px-3.5 py-2.5 border border-black/10 dark:border-stone-800 focus:border-editorial-rust focus:outline-none text-xs text-editorial-charcoal dark:text-stone-100"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-stone-500 dark:text-stone-400">Full Name</label>
                    <input
                      type="text"
                      required
                      value={newFighter.name || ''}
                      onChange={(e) => setNewFighter(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full rounded bg-white dark:bg-stone-950 px-3.5 py-2.5 border border-black/10 dark:border-stone-800 focus:border-editorial-rust focus:outline-none text-xs text-editorial-charcoal dark:text-stone-100"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-stone-500 dark:text-stone-400">Alias or Alternative Name (e.g. Netaji)</label>
                    <input
                      type="text"
                      value={newFighter.alternativeName || ''}
                      onChange={(e) => setNewFighter(prev => ({ ...prev, alternativeName: e.target.value }))}
                      className="w-full rounded bg-white dark:bg-stone-950 px-3.5 py-2.5 border border-black/10 dark:border-stone-800 focus:border-editorial-rust focus:outline-none text-xs text-editorial-charcoal dark:text-stone-100"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-stone-500 dark:text-stone-400">Key Role Detail</label>
                    <input
                      type="text"
                      required
                      value={newFighter.role || ''}
                      onChange={(e) => setNewFighter(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full rounded bg-white dark:bg-stone-950 px-3.5 py-2.5 border border-black/10 dark:border-stone-800 focus:border-editorial-rust focus:outline-none text-xs text-editorial-charcoal dark:text-stone-100"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-stone-500 dark:text-stone-400">Birth State</label>
                    <input
                      type="text"
                      required
                      value={newFighter.state || ''}
                      onChange={(e) => setNewFighter(prev => ({ ...prev, state: e.target.value }))}
                      className="w-full rounded bg-white dark:bg-stone-950 px-3.5 py-2.5 border border-black/10 dark:border-stone-800 focus:border-editorial-rust focus:outline-none text-xs text-editorial-charcoal dark:text-stone-100"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-stone-500 dark:text-stone-400">Birth Place (Town/District)</label>
                    <input
                      type="text"
                      value={newFighter.birthPlace || ''}
                      onChange={(e) => setNewFighter(prev => ({ ...prev, birthPlace: e.target.value }))}
                      className="w-full rounded bg-white dark:bg-stone-950 px-3.5 py-2.5 border border-black/10 dark:border-stone-800 focus:border-editorial-rust focus:outline-none text-xs text-editorial-charcoal dark:text-stone-100"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <label className="text-stone-500 dark:text-stone-400">Archival Biography Blurb</label>
                  <textarea
                    rows={4}
                    value={newFighter.biography || ''}
                    onChange={(e) => setNewFighter(prev => ({ ...prev, biography: e.target.value }))}
                    className="w-full rounded bg-white dark:bg-stone-950 px-3.5 py-2.5 border border-black/10 dark:border-stone-800 focus:border-editorial-rust focus:outline-none text-xs text-editorial-charcoal dark:text-stone-100"
                  />
                </div>

                <div className="flex justify-end gap-2 text-xs pt-4 border-t border-black/5 dark:border-stone-850">
                  <button
                    type="button"
                    onClick={() => setIsAddingFighter(false)}
                    className="px-4 py-2.5 border border-black/10 dark:border-stone-850 rounded hover:bg-stone-50 dark:hover:bg-stone-850 cursor-pointer text-stone-700 dark:text-stone-300 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center space-x-1.5 px-4 py-2.5 bg-editorial-green rounded text-white font-semibold hover:bg-opacity-95 cursor-pointer shadow-sm"
                  >
                    <Check className="h-4 w-4" />
                    <span>Save Archival Record</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Table list view */}
          <div className="overflow-x-auto rounded border border-black/10 dark:border-stone-800 bg-white dark:bg-stone-900/10 shadow-sm">
            <table className="w-full text-xs text-stone-700 dark:text-stone-300 text-left">
              <thead className="bg-editorial-sand/45 dark:bg-stone-950 text-[10px] uppercase font-mono tracking-wider text-stone-600 dark:text-stone-500 border-b border-black/10 dark:border-stone-850">
                <tr>
                  <th className="p-4">CODE</th>
                  <th className="p-4">NAME</th>
                  <th className="p-4">STATE</th>
                  <th className="p-4">ROLE</th>
                  <th className="p-4 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-stone-850/60">
                {fighters.map((f) => (
                  <tr key={f.id} className="hover:bg-stone-50 dark:hover:bg-stone-900/40 transition-colors">
                    <td className="p-4 font-mono text-[11px] text-editorial-rust font-semibold">{f.id}</td>
                    <td className="p-4 font-bold text-editorial-charcoal dark:text-stone-100">{f.name}</td>
                    <td className="p-4">{f.state}</td>
                    <td className="p-4 max-w-xs truncate">{f.role}</td>
                    <td className="p-4 flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleDelete(f.id, f.name)}
                        className="p-1.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer"
                        title="Delete record"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* AUDIT LOGS SUB-TAB */}
      {activeSubTab === 'logs' && (
        <div className="space-y-6">
          <div className="border-b border-black/5 dark:border-stone-850 pb-3 flex justify-between items-center">
            <h4 className="font-serif text-lg font-bold text-editorial-charcoal dark:text-stone-100">Archive Audit Logs</h4>
            <span className="text-[10px] font-mono text-editorial-green border border-editorial-green/20 bg-editorial-green/5 px-2 py-0.5 rounded uppercase font-semibold">Compliant</span>
          </div>

          <div className="space-y-3.5">
            {auditLogs.map((log) => (
              <div
                key={log.id}
                className="p-4 rounded border border-black/5 dark:border-stone-850 bg-editorial-sand/10 dark:bg-stone-950/45 space-y-2 text-xs shadow-xs"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] font-mono gap-1 text-stone-550 dark:text-stone-500">
                  <div className="flex items-center space-x-2">
                    <span className="text-editorial-green font-bold">[{log.action}]</span>
                    <span>USER: {log.user}</span>
                  </div>
                  <span>{log.timestamp}</span>
                </div>
                <div className="font-semibold text-editorial-charcoal dark:text-stone-200">
                  Module: <span className="text-editorial-rust font-bold">{log.module}</span>
                </div>
                <p className="text-stone-600 dark:text-stone-400 text-[11px] leading-relaxed">
                  {log.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
