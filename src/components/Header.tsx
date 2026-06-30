/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Search, Globe, User as UserIcon, Settings, ChevronDown, Landmark, Sparkles, BookOpen } from 'lucide-react';
import { citiesData } from '../data/citiesData';
import { cultureData } from '../data/cultureData';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tabId: string, subId?: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  isLoggedIn: boolean;
  onOpenAuth: () => void;
  language: 'en' | 'sk';
  onToggleLanguage: () => void;
}

export default function Header({
  activeTab,
  onNavigate,
  isDarkMode,
  onToggleDarkMode,
  isLoggedIn,
  onOpenAuth,
  language,
  onToggleLanguage
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cultureOpen, setCultureOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    onNavigate('blog', `search:${searchQuery}`);
    setSearchQuery('');
    setSearchOpen(false);
  };

  return (
    <header id="site-header" className="sticky top-0 z-50 bg-saraiki-maroon text-white border-b-4 border-saraiki-gold shadow-lg transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Identity */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="h-11 w-11 rounded-xl bg-saraiki-gold text-saraiki-maroon flex items-center justify-center relative shadow-md overflow-hidden">
              <span className="font-display font-extrabold text-xl relative z-10">S</span>
              <div className="absolute inset-0 ajrak-pattern opacity-10 group-hover:opacity-20 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-tight text-white group-hover:text-saraiki-gold transition-colors">
                SARAIKI <span className="text-saraiki-gold">CULTURE</span>
              </span>
              <p className="text-[9px] text-white/80 font-semibold uppercase tracking-[0.15em] leading-none mt-0.5">
                {language === 'en' ? 'Preserving South Punjab Heritage' : 'وسيبے دی ثقافت دی سنڄاݨ'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1.5 relative">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                activeTab === 'home'
                  ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                  : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                activeTab === 'about'
                  ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                  : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
              }`}
            >
              About
            </button>

            {/* Culture Dropdown */}
            <div className="relative group/culture" onMouseEnter={() => setCultureOpen(true)} onMouseLeave={() => setCultureOpen(false)}>
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                  activeTab === 'culture'
                    ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                    : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
                }`}
              >
                Culture
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <div className={`absolute top-full left-0 w-80 bg-[#fcfbfa] dark:bg-zinc-900 border-2 border-saraiki-gold rounded-xl shadow-2xl py-3 px-2 grid grid-cols-2 gap-1 transition-all duration-200 origin-top-left z-50 ${
                cultureOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
              }`}>
                {cultureData.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      onNavigate('culture', sec.id);
                      setCultureOpen(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-stone-800 dark:text-zinc-200 hover:bg-saraiki-maroon/5 dark:hover:bg-zinc-800/50 hover:text-saraiki-maroon dark:hover:text-maroon-400 text-left transition"
                  >
                    <BookOpen className="h-3.5 w-3.5 opacity-60 text-saraiki-blue shrink-0" />
                    <span className="truncate">{sec.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Places Dropdown */}
            <div className="relative group/cities" onMouseEnter={() => setCitiesOpen(true)} onMouseLeave={() => setCitiesOpen(false)}>
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                  activeTab === 'places'
                    ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                    : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
                }`}
              >
                Places
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <div className={`absolute top-full left-0 w-80 bg-[#fcfbfa] dark:bg-zinc-900 border-2 border-saraiki-gold rounded-xl shadow-2xl py-3 px-2 grid grid-cols-2 gap-1 transition-all duration-200 origin-top-left z-50 ${
                citiesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
              }`}>
                {citiesData.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => {
                      onNavigate('places', city.id);
                      setCitiesOpen(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-stone-800 dark:text-zinc-200 hover:bg-saraiki-maroon/5 dark:hover:bg-zinc-800/50 hover:text-saraiki-maroon dark:hover:text-maroon-400 text-left transition"
                  >
                    <Landmark className="h-3.5 w-3.5 opacity-60 text-saraiki-maroon shrink-0" />
                    <span className="truncate">{city.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate('tourism')}
              className={`px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                activeTab === 'tourism'
                  ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                  : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
              }`}
            >
              Tourism
            </button>

            <button
              onClick={() => onNavigate('gallery')}
              className={`px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                activeTab === 'gallery'
                  ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                  : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
              }`}
            >
              Gallery
            </button>

            <button
              onClick={() => onNavigate('events')}
              className={`px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                activeTab === 'events'
                  ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                  : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
              }`}
            >
              Events
            </button>

            <button
              onClick={() => onNavigate('blog')}
              className={`px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                activeTab === 'blog'
                  ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                  : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => onNavigate('directory')}
              className={`px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                activeTab === 'directory'
                  ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                  : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
              }`}
            >
              Directory
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                activeTab === 'contact'
                  ? 'text-saraiki-gold border-b-2 border-saraiki-gold rounded-none'
                  : 'text-white/95 hover:text-saraiki-turquoise hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Quick Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search Trigger */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white dark:bg-zinc-800 rounded-lg p-1 border-2 border-saraiki-gold w-48 sm:w-60 z-20 shadow-xl">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none text-xs w-full focus:outline-none pl-2 py-1 text-stone-800 dark:text-zinc-100 font-bold"
                    autoFocus
                  />
                  <button type="submit" className="p-1.5 bg-saraiki-maroon text-white rounded-md hover:bg-maroon-800 shrink-0">
                    <Search className="h-3 w-3" />
                  </button>
                  <button type="button" onClick={() => setSearchOpen(false)} className="p-1 text-stone-400 hover:text-stone-600 ml-1">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 rounded-xl hover:bg-white/10 text-white transition-all"
                  title="Search"
                >
                  <Search className="h-4.5 w-4.5 text-saraiki-gold" />
                </button>
              )}
            </div>

            {/* Language Toggle */}
            <button
              onClick={onToggleLanguage}
              className="p-2.5 rounded-xl hover:bg-white/10 text-white flex items-center gap-1 text-xs font-bold transition-all select-none"
              title="Toggle Language"
            >
              <Globe className="h-4.5 w-4.5 text-saraiki-gold" />
              <span className="hidden sm:inline uppercase">{language}</span>
            </button>

            {/* Dark Mode */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl hover:bg-white/10 text-white transition-all"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="h-4.5 w-4.5 text-saraiki-gold" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* Auth / Dashboard */}
            {isLoggedIn ? (
              <button
                onClick={() => onNavigate('dashboard')}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-inner transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-saraiki-gold text-saraiki-maroon'
                    : 'bg-saraiki-blue text-white hover:bg-saraiki-blue/80'
                }`}
              >
                <UserIcon className="h-4 w-4" />
                <span className="hidden md:inline">Profile</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1 px-5 py-2 bg-saraiki-blue text-white hover:bg-[#12396b] rounded-full text-xs font-bold uppercase tracking-widest shadow-inner transition-all"
              >
                <UserIcon className="h-4 w-4" />
                <span>Join Port</span>
              </button>
            )}

            {/* Admin Link (Sandboxed) */}
            <button
              onClick={() => onNavigate('admin')}
              className={`p-2.5 rounded-xl hover:bg-white/10 text-white transition-all ${
                activeTab === 'admin' ? 'text-saraiki-gold bg-white/10' : ''
              }`}
              title="Admin Panel"
            >
              <Settings className="h-4.5 w-4.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl hover:bg-white/10 text-white transition-all"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-zinc-950 border-t border-stone-200 dark:border-zinc-800 py-4 px-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-semibold text-stone-700 dark:text-zinc-200 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-900"
          >
            Home
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-semibold text-stone-700 dark:text-zinc-200 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-900"
          >
            About
          </button>

          {/* Collapsible Culture */}
          <div>
            <div className="flex justify-between items-center px-4 py-2 font-semibold text-sm text-stone-700 dark:text-zinc-200">
              <span>Culture Pages</span>
            </div>
            <div className="pl-6 grid grid-cols-2 gap-1 bg-stone-50 dark:bg-zinc-900/30 p-2 rounded-xl">
              {cultureData.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => {
                    onNavigate('culture', sec.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-1 text-xs text-stone-600 dark:text-zinc-400 hover:text-saraiki-maroon"
                >
                  {sec.title}
                </button>
              ))}
            </div>
          </div>

          {/* Collapsible Places */}
          <div>
            <div className="flex justify-between items-center px-4 py-2 font-semibold text-sm text-stone-700 dark:text-zinc-200">
              <span>Cities Guide</span>
            </div>
            <div className="pl-6 grid grid-cols-2 gap-1 bg-stone-50 dark:bg-zinc-900/30 p-2 rounded-xl">
              {citiesData.map((city) => (
                <button
                  key={city.id}
                  onClick={() => {
                    onNavigate('places', city.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-1 text-xs text-stone-600 dark:text-zinc-400 hover:text-saraiki-maroon"
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              onNavigate('tourism');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-semibold text-stone-700 dark:text-zinc-200 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-900"
          >
            Tourism
          </button>

          <button
            onClick={() => {
              onNavigate('gallery');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-semibold text-stone-700 dark:text-zinc-200 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-900"
          >
            Gallery
          </button>

          <button
            onClick={() => {
              onNavigate('events');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-semibold text-stone-700 dark:text-zinc-200 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-900"
          >
            Events
          </button>

          <button
            onClick={() => {
              onNavigate('blog');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-semibold text-stone-700 dark:text-zinc-200 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-900"
          >
            Blog
          </button>

          <button
            onClick={() => {
              onNavigate('directory');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-semibold text-stone-700 dark:text-zinc-200 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-900"
          >
            Directory
          </button>

          <button
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-semibold text-stone-700 dark:text-zinc-200 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-900"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
