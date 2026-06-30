/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import InteractiveMap from './components/InteractiveMap';
import CultureDetail from './components/CultureDetail';
import CityDetail from './components/CityDetail';
import BlogSystem from './components/BlogSystem';
import GallerySystem from './components/GallerySystem';
import EventSystem from './components/EventSystem';
import DirectorySystem from './components/DirectorySystem';
import UserDashboard from './components/UserDashboard';
import AdminPanel from './components/AdminPanel';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

import { blogData } from './data/blogData';
import { cultureData } from './data/cultureData';
import { citiesData } from './data/citiesData';
import { User } from './types';
import { Landmark, Compass, Sparkles, BookOpen, Calendar, HelpCircle, ArrowRight, Heart } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [subTabId, setSubTabId] = useState<string | undefined>(undefined);
  const [searchFilter, setSearchFilter] = useState<string | undefined>(undefined);

  // Styling and Dark Mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<'en' | 'sk'>('en');

  // Authenticated User states
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // User bookmarked favorites list
  const [favorites, setFavorites] = useState<string[]>(['poetry_01', 'shakir_01', 'multan_halwa_01']);

  // Handle systemic dark mode side effects on document body
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleNavigate = (tabId: string, subId?: string) => {
    setCurrentTab(tabId);
    setSubTabId(subId);
    setSearchFilter(undefined);
    
    // Scroll smoothly to top on any tab trigger
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchTrigger = (query: string) => {
    setCurrentTab('blog');
    setSearchFilter(`search:${query}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleLogin = (user: User) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
    // Redirect back to dashboard after successful gate pass
    setCurrentTab('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentTab('home');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-saraiki-sand dark:bg-zinc-950 transition-colors duration-250 select-text">
      
      {/* Dynamic Header */}
      <Header
        activeTab={currentTab}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        isLoggedIn={isLoggedIn}
        onOpenAuth={() => handleNavigate('dashboard')}
        language={language}
        onToggleLanguage={() => setLanguage(prev => prev === 'en' ? 'sk' : 'en')}
      />

      {/* Main Content Sections */}
      <main className="flex-grow pb-16">
        {currentTab === 'home' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
            
            {/* Top Branding Section */}
            <HeroBanner onSearch={handleSearchTrigger} onNavigate={handleNavigate} />

            {/* Interactive Geographical Map */}
            <div className="space-y-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-saraiki-maroon uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                  <Compass className="h-4 w-4 animate-spin-slow text-saraiki-gold" /> Geographical Nodes
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-light italic text-stone-900 dark:text-zinc-100 mt-1">
                  Interactive Territory Map
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400 mt-1 font-medium">
                  Hover over active pins to view real-time regional coordinate telemetry and historical summaries. Click to explore each city limit.
                </p>
              </div>
              
              <div className="bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-3xl border-2 border-saraiki-gold shadow-md">
                <InteractiveMap onSelectCity={(cityId) => handleNavigate('places', cityId)} isDarkMode={isDarkMode} />
              </div>
            </div>

            {/* Explore Major Culture Encyclopedias */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                <div>
                  <span className="text-xs font-bold text-saraiki-maroon uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="h-4 w-4 text-saraiki-gold" /> Comprehensive Guides
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-light italic text-stone-900 dark:text-zinc-100 mt-1">
                    Explore Saraiki Cultural Columns
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400 mt-1 font-medium">
                    Academic catalogs covering regional history, sufi folklore, classic music, and traditional handicrafts.
                  </p>
                </div>
                
                <button
                  onClick={() => handleNavigate('about')}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-saraiki-maroon hover:text-maroon-800 hover:translate-x-0.5 transition"
                >
                  Read Historical Overview <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Grid of Culture Subjects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.slice(0, 6).map((sec) => (
                  <div
                    key={sec.id}
                    onClick={() => handleNavigate('culture', sec.id)}
                    className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border-b-4 border-saraiki-maroon dark:border-saraiki-maroon hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[190px] shadow-md"
                  >
                    <div className="p-5 space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 ajrak-pattern opacity-[0.03] pointer-events-none" />
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-bold text-stone-400 font-mono tracking-wider uppercase">ID: {sec.id}</span>
                        <BookOpen className="h-4 w-4 text-saraiki-blue dark:text-saraiki-turquoise group-hover:scale-110 transition" />
                      </div>
                      <h3 className="font-serif font-bold text-stone-900 dark:text-zinc-100 group-hover:text-saraiki-maroon dark:group-hover:text-maroon-400 transition text-sm sm:text-base">
                        {sec.title}
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-zinc-400 line-clamp-2 leading-relaxed font-medium">
                        {sec.tagline}
                      </p>
                    </div>

                    <div className="p-5 pt-0 border-t border-stone-50 dark:border-zinc-800/40 text-[10.5px] font-bold text-saraiki-maroon uppercase tracking-wider flex items-center gap-1">
                      Explore Encyclopedia <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Cities Directory Strip */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-saraiki-maroon uppercase tracking-widest flex items-center gap-1">
                  <Landmark className="h-4 w-4 text-saraiki-gold" /> Historical Places
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-light italic text-stone-900 dark:text-zinc-100 mt-1">
                  Settleable Regional Capitals
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400 mt-1 font-medium">
                  Click on any of the regional nodes to inspect tourist itineraries, hotel booking contacts, and historical shrines.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {citiesData.slice(0, 10).map((city) => (
                  <div
                    key={city.id}
                    onClick={() => handleNavigate('places', city.id)}
                    className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border-b-4 border-saraiki-turquoise dark:border-saraiki-turquoise hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition p-5 relative text-center shadow-md"
                  >
                    <div className="h-10 w-10 bg-saraiki-turquoise/10 text-saraiki-turquoise rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <Landmark className="h-5 w-5" />
                    </div>
                    <h3 className="text-xs font-bold text-stone-900 dark:text-zinc-100 truncate group-hover:text-saraiki-maroon dark:group-hover:text-maroon-400 transition">
                      {city.name}
                    </h3>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-saraiki-turquoise mt-1">Explore City →</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Research Blogs Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: 2 Featured Blogs */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-end">
                  <h3 className="font-serif font-bold italic text-stone-900 dark:text-zinc-100 text-lg sm:text-xl flex items-center gap-1.5">
                    <BookOpen className="text-saraiki-maroon h-5 w-5" /> Trending Monographs
                  </h3>
                  <button onClick={() => handleNavigate('blog')} className="text-xs font-bold uppercase tracking-wider text-saraiki-blue hover:underline">View All Articles</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {blogData.slice(0, 2).map((post) => (
                    <article
                      key={post.id}
                      onClick={() => handleNavigate('blog')}
                      className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border-b-4 border-saraiki-maroon cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-[370px] flex flex-col justify-between shadow-md"
                    >
                      <div>
                        <div className="h-40 overflow-hidden relative">
                          <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-102 transition duration-500" />
                          <span className="absolute top-2 left-2 text-[9px] font-bold bg-saraiki-maroon text-white px-2 py-0.5 rounded uppercase border border-saraiki-gold">
                            {post.category}
                          </span>
                        </div>
                        <div className="p-4 space-y-1.5">
                          <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-zinc-100 group-hover:text-saraiki-maroon transition line-clamp-2 leading-tight">
                            {post.title}
                          </h4>
                          <p className="text-xs text-stone-500 dark:text-zinc-400 line-clamp-3 leading-relaxed font-medium">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0 text-[10px] font-bold font-mono text-stone-400 flex justify-between">
                        <span>{post.date}</span>
                        <span className="text-saraiki-maroon">Read Paper →</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Right Column: Sufi Shrine Event highlight list */}
              <div className="bg-saraiki-blue text-zinc-100 rounded-3xl p-6 border-b-4 border-saraiki-gold flex flex-col justify-between space-y-6 relative overflow-hidden h-full shadow-2xl">
                <div className="absolute inset-0 ajrak-pattern opacity-[0.05] pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <span className="text-[10px] font-bold text-saraiki-gold tracking-widest uppercase flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> Upcoming Gathering
                  </span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl leading-snug text-white italic">
                    Urs Hazrat Bahauddin Zakariya (Multan)
                  </h3>
                  <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                    Join thousands of devotees, scholars, and Sufi singers scheduled for the annual commemoration inside Multan city boundaries. Focuses on peace, tolerance, and historical chants.
                  </p>
                </div>

                <button
                  onClick={() => handleNavigate('events')}
                  className="bg-saraiki-gold hover:bg-yellow-600 text-saraiki-maroon font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 relative z-10 font-sans uppercase tracking-widest border border-white/10"
                >
                  View Event Schedule <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Culture Encyclopedia Details Tab Router */}
        {currentTab === 'culture' && (
          <CultureDetail
            sectionId={subTabId || 'history'}
            onNavigate={handleNavigate}
            isFavorite={favorites.includes(subTabId || 'history')}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {/* Cities/Places Template Detail Router */}
        {currentTab === 'places' && (
          <CityDetail
            cityId={subTabId || 'multan'}
            onNavigate={handleNavigate}
          />
        )}

        {/* Research Blog System Router */}
        {currentTab === 'blog' && (
          <BlogSystem
            onNavigate={handleNavigate}
            searchFilterQuery={searchFilter}
            onClearSearchFilter={() => setSearchFilter(undefined)}
          />
        )}

        {/* Media Gallery Router */}
        {currentTab === 'gallery' && (
          <GallerySystem />
        )}

        {/* Event System Router */}
        {currentTab === 'events' && (
          <EventSystem />
        )}

        {/* Business Directory Resource Router */}
        {currentTab === 'directory' && (
          <DirectorySystem />
        )}

        {/* User dashboard Portal Router */}
        {currentTab === 'dashboard' && (
          <UserDashboard
            isLoggedIn={isLoggedIn}
            onLogin={handleLogin}
            onLogout={handleLogout}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onNavigate={handleNavigate}
          />
        )}

        {/* Admin Management Dashboard Router */}
        {currentTab === 'admin' && (
          <AdminPanel />
        )}

        {/* Secretariat Contact page Router */}
        {currentTab === 'contact' && (
          <ContactPage />
        )}

        {/* Academic About page Router */}
        {currentTab === 'about' && (
          <AboutPage />
        )}
      </main>

      {/* Dynamic Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
