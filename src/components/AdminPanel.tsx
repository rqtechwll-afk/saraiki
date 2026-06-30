/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldAlert, Users, Calendar, Landmark, Mail, Settings, Check, X, AlertCircle, Save, Sparkles, Server } from 'lucide-react';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'queue' | 'settings' | 'users'>('queue');
  
  // Settings State
  const [siteTitle, setSiteTitle] = useState('Saraiki Culture Portal');
  const [siteTagline, setSiteTagline] = useState('Preserving the Heritage of South Punjab');
  const [contactEmail, setContactEmail] = useState('contact@saraikiculture.com');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Moderation Queue State
  const [pendingQueue, setPendingQueue] = useState([
    { id: '1', title: 'Urs Baba Farid Shakarganj Festival Accommodation', category: 'Directory Listing', city: 'Pakpattan', user: 'WasebLover', date: '2026-06-28', status: 'Pending' },
    { id: '2', title: 'Multan Blue Pottery Glazing Masterclass', category: 'Cultural Event', city: 'Multan', user: 'CraftExpert', date: '2026-06-29', status: 'Pending' }
  ]);

  const handleApprove = (id: string) => {
    setPendingQueue(prev => prev.map(item => item.id === id ? { ...item, status: 'Approved' } : item));
  };

  const handleReject = (id: string) => {
    setPendingQueue(prev => prev.map(item => item.id === id ? { ...item, status: 'Rejected' } : item));
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 4000);
  };

  return (
    <div id="admin-panel-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-stone-200/50 dark:border-zinc-800 pb-4">
        <div className="h-10 w-10 rounded-xl bg-saraiki-maroon text-white flex items-center justify-center">
          <ShieldAlert className="h-5.5 w-5.5" />
        </div>
        <div>
          <h1 className="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-1.5">
            Admin Management Console
          </h1>
          <p className="text-xs text-stone-500 dark:text-zinc-400">
            Configure system configurations, approve community directories, and moderate events logs.
          </p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-saraiki-maroon/10 text-saraiki-maroon flex items-center justify-center shrink-0">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <span className="text-stone-400 text-[10px] font-bold uppercase select-none">Total Registrations</span>
            <h3 className="font-display font-extrabold text-lg text-stone-900 dark:text-zinc-200">1,245 scholars</h3>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-saraiki-blue/10 text-saraiki-blue flex items-center justify-center shrink-0">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <span className="text-stone-400 text-[10px] font-bold uppercase select-none">Approved Events</span>
            <h3 className="font-display font-extrabold text-lg text-stone-900 dark:text-zinc-200">18 Schedules</h3>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-saraiki-gold/10 text-saraiki-gold flex items-center justify-center shrink-0">
            <Landmark className="h-6 w-6" />
          </div>
          <div>
            <span className="text-stone-400 text-[10px] font-bold uppercase select-none">Directory Listings</span>
            <h3 className="font-display font-extrabold text-lg text-stone-900 dark:text-zinc-200">45 Shops & Guides</h3>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center shrink-0 border border-green-100">
            <Server className="h-6 w-6" />
          </div>
          <div>
            <span className="text-stone-400 text-[10px] font-bold uppercase select-none">Cloud Ingress Status</span>
            <h3 className="font-display font-extrabold text-xs text-green-700">Healthy (Port 3000)</h3>
          </div>
        </div>
      </div>

      {/* Inner tabs */}
      <div className="flex bg-stone-100 dark:bg-zinc-950 p-1.5 rounded-xl border border-stone-200/50 dark:border-zinc-800 max-w-md text-xs font-semibold select-none">
        <button
          onClick={() => setActiveTab('queue')}
          className={`w-1/3 py-2 rounded-lg transition-all ${
            activeTab === 'queue' ? 'bg-saraiki-maroon text-white shadow-sm font-bold' : 'text-stone-600 dark:text-zinc-400'
          }`}
        >
          Moderation Queue ({pendingQueue.filter(q => q.status === 'Pending').length})
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`w-1/3 py-2 rounded-lg transition-all ${
            activeTab === 'settings' ? 'bg-saraiki-maroon text-white shadow-sm font-bold' : 'text-stone-600 dark:text-zinc-400'
          }`}
        >
          Portal Configurations
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`w-1/3 py-2 rounded-lg transition-all ${
            activeTab === 'users' ? 'bg-saraiki-maroon text-white shadow-sm font-bold' : 'text-stone-600 dark:text-zinc-400'
          }`}
        >
          Users Registry
        </button>
      </div>

      {/* Tab Panels */}
      <div className="space-y-6">
        
        {/* Moderation Panel */}
        {activeTab === 'queue' && (
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200/60 dark:border-zinc-800 p-6 space-y-4 shadow-sm">
            <h3 className="font-display font-bold text-sm text-stone-900 dark:text-zinc-100 uppercase tracking-wider">Submitted Cultural Assets Waiting Approvals</h3>
            
            <div className="space-y-4">
              {pendingQueue.map(item => (
                <div key={item.id} className="p-4 bg-stone-50 dark:bg-zinc-950/20 border border-stone-100 dark:border-zinc-800 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold bg-saraiki-blue text-white px-2 py-0.5 rounded uppercase">
                        {item.category}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">By {item.user} • {item.date}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-zinc-100">{item.title}</h4>
                    <p className="text-[11px] text-stone-500">Location target: {item.city}, South Punjab</p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    {item.status === 'Pending' ? (
                      <>
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 border border-green-100 text-green-700 font-bold transition flex items-center gap-1 text-[11px]"
                          title="Approve Listing"
                        >
                          <Check className="h-4.5 w-4.5" /> Approve
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 border border-red-100 text-red-500 font-bold transition flex items-center gap-1 text-[11px]"
                          title="Reject Listing"
                        >
                          <X className="h-4.5 w-4.5" /> Reject
                        </button>
                      </>
                    ) : (
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        item.status === 'Approved' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {pendingQueue.length === 0 && (
                <p className="text-center text-xs text-stone-400 py-6">All citizen submissions have been audited.</p>
              )}
            </div>
          </div>
        )}

        {/* Configurations settings */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveSettings} className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm max-w-2xl">
            <h3 className="font-display font-bold text-sm text-stone-900 dark:text-zinc-100 uppercase tracking-wider">Configure General Metadata Rules</h3>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-500 uppercase">Primary Portal Title</label>
                <input
                  type="text"
                  required
                  value={siteTitle}
                  onChange={(e) => setSiteTitle(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 px-3.5 rounded-lg text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-500 uppercase">Dynamic Portal Tagline</label>
                <input
                  type="text"
                  required
                  value={siteTagline}
                  onChange={(e) => setSiteTagline(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 px-3.5 rounded-lg text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-500 uppercase">Contact Center Email</label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 px-3.5 rounded-lg text-xs"
                />
              </div>

              <div className="flex items-center justify-between p-3.5 bg-stone-50 dark:bg-zinc-950/20 border border-stone-100 dark:border-zinc-800 rounded-xl select-none">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-stone-800 dark:text-zinc-200">Maintenance Sandbox Freeze</h4>
                  <p className="text-[10px] text-stone-400">Lock database inputs for global deployments.</p>
                </div>
                <input
                  type="checkbox"
                  checked={maintenanceMode}
                  onChange={(e) => setMaintenanceMode(e.target.checked)}
                  className="h-4 w-4 text-saraiki-maroon border-stone-200 rounded focus:ring-saraiki-maroon"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-saraiki-maroon hover:bg-maroon-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-1.5"
              >
                <Save className="h-4 w-4" /> Save System Settings
              </button>

              {settingsSaved && (
                <div className="text-xs text-green-600 font-bold flex items-center gap-1 animate-pulse justify-center">
                  Settings persisted successfully in system registry parameters.
                </div>
              )}
            </div>
          </form>
        )}

        {/* Users registry list */}
        {activeTab === 'users' && (
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200/60 dark:border-zinc-800 p-6 space-y-4 shadow-sm">
            <h3 className="font-display font-bold text-sm text-stone-900 dark:text-zinc-100 uppercase tracking-wider">Registered Scholars Ledger</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-100 dark:border-zinc-800 text-[10px] font-bold text-stone-400 uppercase select-none">
                    <th className="py-3 px-2">Display Name</th>
                    <th className="py-3 px-2">Email</th>
                    <th className="py-3 px-2">Security Clearance</th>
                    <th className="py-3 px-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-stone-700 dark:text-zinc-300">
                  <tr className="border-b border-stone-50 dark:border-zinc-800/50">
                    <td className="py-3.5 px-2 font-bold text-stone-900 dark:text-zinc-100">SaraikiWaseb</td>
                    <td className="py-3.5 px-2 font-mono">waseb@gmail.com</td>
                    <td className="py-3.5 px-2"><span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-[10px] font-bold">Standard Scholar</span></td>
                    <td className="py-3.5 px-2 text-green-600 font-bold">● Active</td>
                  </tr>
                  <tr className="border-b border-stone-50 dark:border-zinc-800/50">
                    <td className="py-3.5 px-2 font-bold text-stone-900 dark:text-zinc-100">DrSajidFarooq</td>
                    <td className="py-3.5 px-2 font-mono">sajid.farooq@bzu.edu.pk</td>
                    <td className="py-3.5 px-2"><span className="bg-saraiki-gold/15 text-saraiki-gold px-2 py-0.5 rounded text-[10px] font-bold">Moderator Scholar</span></td>
                    <td className="py-3.5 px-2 text-green-600 font-bold">● Active</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
