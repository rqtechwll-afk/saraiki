/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { User as UserIcon, LogOut, Bookmark, FileText, UploadCloud, ShieldCheck, Sparkles, LogIn, Lock, Mail, Heading, FileCheck, CheckCircle2 } from 'lucide-react';
import { BlogPost, CultureSection, User } from '../types';
import { blogData } from '../data/blogData';
import { cultureData } from '../data/cultureData';

interface UserDashboardProps {
  isLoggedIn: boolean;
  onLogin: (user: User) => void;
  onLogout: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onNavigate: (tabId: string, subId?: string) => void;
}

export default function UserDashboard({
  isLoggedIn,
  onLogin,
  onLogout,
  favorites,
  onToggleFavorite,
  onNavigate
}: UserDashboardProps) {
  // Login card states
  const [isLoginView, setIsLoginView] = useState(true);
  const [username, setUsername] = useState('SaraikiWaseb');
  const [email, setEmail] = useState('waseb@gmail.com');
  const [password, setPassword] = useState('••••••••');
  
  // Dashboard inside tab
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'favorites' | 'submit'>('overview');

  // Submissions State
  const [subTitle, setSubTitle] = useState('');
  const [subBody, setSubBody] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);
  const [mockDrafts, setMockDrafts] = useState<any[]>([
    { id: '1', title: 'The Sufi poetry meters of Shakir Shuja Abadi', status: 'Pending Review', date: '2026-06-25' }
  ]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      username: username || 'SaraikiWaseb',
      email: email || 'waseb@gmail.com',
      role: 'user',
      favorites: favorites,
      submittedArticles: [],
      submittedEvents: []
    });
  };

  const handleCreateDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subTitle || !subBody) return;

    const newDraft = {
      id: `draft_${Date.now()}`,
      title: subTitle,
      status: 'Pending Admin Review',
      date: new Date().toISOString().split('T')[0]
    };

    setMockDrafts([newDraft, ...mockDrafts]);
    setSubTitle('');
    setSubBody('');
    setSubSuccess(true);
    setTimeout(() => setSubSuccess(false), 5000);
  };

  // Compile full details for current user favorites
  const bookmarkedItems = blogData.filter(post => favorites.includes(post.id));
  const bookmarkedCulture = cultureData.filter(sec => favorites.includes(sec.id));

  if (!isLoggedIn) {
    return (
      <div id="auth-gate-container" className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 ajrak-pattern opacity-[0.03] pointer-events-none" />
          
          <div className="text-center space-y-2 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-saraiki-maroon text-white flex items-center justify-center font-display font-bold text-lg mx-auto shadow-md">
              S
            </div>
            <h1 className="font-display font-bold text-xl text-stone-950 dark:text-zinc-100">
              {isLoginView ? 'Welcome to Saraiki Culture Port' : 'Create Cultural Scholar Account'}
            </h1>
            <p className="text-xs text-stone-500 dark:text-zinc-400">
              {isLoginView ? 'Access saved research papers, favorites, and submission dashboards.' : 'Join the global network of South Punjab heritage researchers.'}
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4 relative z-10">
            {!isLoginView && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-500 uppercase">Username / Display Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 pl-9 pr-4 rounded-xl text-xs text-stone-800 dark:text-zinc-100 focus:outline-none"
                  />
                  <UserIcon className="absolute left-3 top-3 h-3.5 w-3.5 text-stone-400" />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 pl-9 pr-4 rounded-xl text-xs text-stone-800 dark:text-zinc-100 focus:outline-none"
                />
                <Mail className="absolute left-3 top-3 h-3.5 w-3.5 text-stone-400" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 pl-9 pr-4 rounded-xl text-xs text-stone-800 dark:text-zinc-100 focus:outline-none"
                />
                <Lock className="absolute left-3 top-3 h-3.5 w-3.5 text-stone-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-saraiki-maroon hover:bg-maroon-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition shadow-md shadow-maroon-900/10 flex items-center justify-center gap-1.5"
            >
              <LogIn className="h-4 w-4" /> {isLoginView ? 'Login to Portal' : 'Register Account'}
            </button>
          </form>

          <div className="text-center pt-2 relative z-10">
            <button
              onClick={() => setIsLoginView(!isLoginView)}
              className="text-xs text-saraiki-blue dark:text-saraiki-turquoise font-semibold hover:underline"
            >
              {isLoginView ? "Don't have an account? Sign up here" : 'Already have an account? Login here'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="user-dashboard-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in">
      
      {/* Welcome Bar */}
      <div className="bg-gradient-to-r from-saraiki-maroon to-[#4d0010] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg border border-maroon-950/45">
        <div className="absolute inset-0 ajrak-pattern opacity-[0.04] pointer-events-none" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
          <div className="space-y-1">
            <span className="text-xs font-bold text-saraiki-gold tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" /> Scholar Account Panel
            </span>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl">Welcome back, {username}!</h1>
            <p className="text-zinc-300 text-xs">Role: Registered Heritage Enthusiast • Email: {email}</p>
          </div>
          
          <button
            onClick={onLogout}
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white border border-white/10 text-xs font-bold py-2 px-4 rounded-xl transition"
          >
            <LogOut className="h-4 w-4" /> Logout Panel
          </button>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar border-b border-stone-200/50 dark:border-zinc-800 select-none">
        <button
          onClick={() => setActiveSubTab('overview')}
          className={`px-4 py-2 text-xs font-bold flex items-center gap-1.5 ${
            activeSubTab === 'overview'
              ? 'border-b-2 border-saraiki-maroon text-saraiki-maroon dark:text-maroon-400 font-extrabold'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <UserIcon className="h-4 w-4" /> Account Overview
        </button>
        <button
          onClick={() => setActiveSubTab('favorites')}
          className={`px-4 py-2 text-xs font-bold flex items-center gap-1.5 ${
            activeSubTab === 'favorites'
              ? 'border-b-2 border-saraiki-maroon text-saraiki-maroon dark:text-maroon-400 font-extrabold'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Bookmark className="h-4 w-4" /> Bookmarked Guides ({favorites.length})
        </button>
        <button
          onClick={() => setActiveSubTab('submit')}
          className={`px-4 py-2 text-xs font-bold flex items-center gap-1.5 ${
            activeSubTab === 'submit'
              ? 'border-b-2 border-saraiki-maroon text-saraiki-maroon dark:text-maroon-400 font-extrabold'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <UploadCloud className="h-4 w-4" /> Submit Research Paper
        </button>
      </div>

      {/* Tab Contents */}
      <div className="space-y-6">
        {activeSubTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Metrics */}
            <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex flex-col justify-between h-32 shadow-sm">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-wider select-none">Saved Bookmarks</span>
              <h3 className="font-display font-extrabold text-3xl text-saraiki-maroon dark:text-maroon-400">{favorites.length}</h3>
              <p className="text-[10px] text-stone-500">Quick guides you want to revisit</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex flex-col justify-between h-32 shadow-sm">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-wider select-none">Submitted Articles</span>
              <h3 className="font-display font-extrabold text-3xl text-saraiki-blue dark:text-saraiki-turquoise">{mockDrafts.length}</h3>
              <p className="text-[10px] text-stone-500">Academic entries submitted for review</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex flex-col justify-between h-32 shadow-sm">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-wider select-none">Review Moderation Index</span>
              <h3 className="font-display font-extrabold text-xl text-saraiki-gold">Gold Scholar</h3>
              <p className="text-[10px] text-stone-500">Rating based on constructive submissions</p>
            </div>

            {/* Submissions queue summary */}
            <div className="md:col-span-3 bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-display font-bold text-sm text-stone-900 dark:text-zinc-100 uppercase tracking-wider">My Submissions Status</h3>
              <div className="space-y-3">
                {mockDrafts.map(draft => (
                  <div key={draft.id} className="flex justify-between items-center p-3.5 bg-stone-50 dark:bg-zinc-950/20 border border-stone-100 dark:border-zinc-800 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-950/20 text-saraiki-blue flex items-center justify-center">
                        <FileText className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-800 dark:text-zinc-200">{draft.title}</h4>
                        <span className="text-[10px] font-mono text-stone-400">Date: {draft.date}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-saraiki-gold/15 text-saraiki-gold">
                      {draft.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Saved bookmarks listing */}
        {activeSubTab === 'favorites' && (
          <div className="space-y-6">
            {/* Culture Bookmarks */}
            {bookmarkedCulture.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xs text-stone-400 dark:text-zinc-500 uppercase tracking-wider select-none">Culture Encyclopedias</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bookmarkedCulture.map(sec => (
                    <div key={sec.id} className="bg-white dark:bg-zinc-900 border border-stone-200/50 dark:border-zinc-800 rounded-2xl p-4 flex justify-between items-center gap-4">
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-stone-800 dark:text-zinc-200 truncate">{sec.title}</h4>
                        <p className="text-[11px] text-stone-500 dark:text-zinc-400 truncate">{sec.tagline}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button onClick={() => onNavigate('culture', sec.id)} className="text-[10.5px] bg-stone-100 hover:bg-saraiki-maroon hover:text-white px-3 py-1.5 rounded-lg text-stone-700 font-bold transition">View</button>
                        <button onClick={() => onToggleFavorite(sec.id)} className="text-[10.5px] border border-red-100 text-red-500 hover:bg-red-50 px-2 py-1.5 rounded-lg transition" title="Remove Bookmark">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Bookmarks */}
            {bookmarkedItems.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xs text-stone-400 dark:text-zinc-500 uppercase tracking-wider select-none">Research Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bookmarkedItems.map(post => (
                    <div key={post.id} className="bg-white dark:bg-zinc-900 border border-stone-200/50 dark:border-zinc-800 rounded-2xl p-4 flex justify-between items-center gap-4">
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-stone-800 dark:text-zinc-200 truncate">{post.title}</h4>
                        <p className="text-[11px] text-stone-500 dark:text-zinc-400 truncate">Category: {post.category}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button onClick={() => onNavigate('blog')} className="text-[10.5px] bg-stone-100 hover:bg-saraiki-maroon hover:text-white px-3 py-1.5 rounded-lg text-stone-700 font-bold transition font-sans">Read</button>
                        <button onClick={() => onToggleFavorite(post.id)} className="text-[10.5px] border border-red-100 text-red-500 hover:bg-red-50 px-2 py-1.5 rounded-lg transition" title="Remove Bookmark">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {favorites.length === 0 && (
              <div className="bg-stone-50 dark:bg-zinc-900/40 border border-stone-200/50 dark:border-zinc-800 rounded-2xl py-12 text-center text-stone-400">
                You have not bookmarked any heritage articles yet. Click the bookmark ribbon on any culture page or blog to save it here.
              </div>
            )}
          </div>
        )}

        {/* Research submission tab */}
        {activeSubTab === 'submit' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <form onSubmit={handleCreateDraft} className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
                <div>
                  <h3 className="font-display font-bold text-sm text-stone-900 dark:text-zinc-100 uppercase tracking-wider">Draft New Cultural Monograph</h3>
                  <p className="text-xs text-stone-400 mt-1">Submit historical artifacts write-ups or folk tales. Accepted drafts will be formatted and posted under research blogs.</p>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-stone-500 uppercase flex items-center gap-1">
                    <Heading className="h-3.5 w-3.5" /> Proposed Paper Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Archeological remnants of Pattan Minara Buddhist cells"
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}
                    className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 px-4 rounded-xl text-xs text-stone-800 dark:text-zinc-100 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-stone-500 uppercase flex items-center gap-1">
                    <FileCheck className="h-3.5 w-3.5" /> Abstract & Article Body
                  </label>
                  <textarea
                    required
                    rows={8}
                    placeholder="Draft the research contents with references, historical backgrounds, and geographic locations..."
                    value={subBody}
                    onChange={(e) => setSubBody(e.target.value)}
                    className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 px-4 rounded-xl text-xs text-stone-800 dark:text-zinc-100 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-saraiki-maroon hover:bg-maroon-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  <UploadCloud className="h-4.5 w-4.5" /> Submit Draft to Board
                </button>

                {subSuccess && (
                  <div className="text-xs text-green-600 flex items-center gap-1.5 font-bold animate-pulse justify-center">
                    <CheckCircle2 className="h-4 w-4" /> Submitted draft securely. Check status under overview queue.
                  </div>
                )}
              </form>
            </div>

            {/* Instruction Sidecard */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-stone-900 text-stone-300 rounded-2xl p-5 border border-zinc-800 space-y-4">
                <h4 className="font-display font-bold text-xs text-saraiki-gold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="h-4.5 w-4.5" /> Peer Review Criteria
                </h4>
                <ul className="space-y-3 text-[11px] leading-relaxed text-stone-400 font-medium">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-saraiki-gold mt-1.5 shrink-0" />
                    <span><strong>Academic Honesty</strong>: Ensure high reference verification standards on all historical claims.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-saraiki-gold mt-1.5 shrink-0" />
                    <span><strong>Sufi Context</strong>: Align with general non-sectarian universal Sufi philosophical standards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-saraiki-gold mt-1.5 shrink-0" />
                    <span><strong>High Resolution Media</strong>: Include license credits for any visual material uploads.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
