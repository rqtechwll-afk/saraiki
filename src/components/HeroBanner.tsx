/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Compass, Landmark, Users, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  onSearch: (query: string) => void;
  onNavigate: (tabId: string, subId?: string) => void;
}

export default function HeroBanner({ onSearch, onNavigate }: HeroBannerProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const trendingTopics = [
    { label: 'Multan Blue Pottery', id: 'blue-pottery' },
    { label: 'Derawar Fort', id: 'derawar' },
    { label: 'Sufi poetry', id: 'poetry' },
    { label: 'Ajrak Block printing', id: 'ajrak' }
  ];

  return (
    <div id="hero-banner-container" className="relative rounded-[32px] overflow-hidden bg-[#0d2c54] border-4 border-saraiki-gold shadow-2xl mb-12 h-[500px] md:h-[580px] select-none">
      
      {/* Immersive Background Images with subtle zoom */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590076212876-b6058e577d2f?auto=format&fit=crop&q=80&w=1200"
          alt="Tomb of Shah Rukn-e-Alam"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 transform scale-102 hover:scale-105 transition duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#0D2C54]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 ajrak-pattern opacity-[0.05]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-between p-6 sm:p-12 lg:p-16 text-white">
        
        {/* Upper Floating Tag */}
        <span className="self-start text-[10px] font-bold text-saraiki-gold tracking-widest uppercase bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Gateway to South Punjab
        </span>

        {/* Central Text & Interactive Search */}
        <div className="max-w-2xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-xs uppercase tracking-[0.25em] text-white/80 font-bold font-mono">
              SARAIKI <span className="text-saraiki-gold">CULTURE</span>
            </h1>
            <h2 className="text-saraiki-gold font-serif text-3xl sm:text-5xl lg:text-6xl font-light italic tracking-tight leading-none">
              Soul of the Blue Shrines
            </h2>
            <p className="text-sm sm:text-base text-zinc-200 font-medium max-w-lg leading-relaxed">
              Discover the mystical allure of South Punjab, where ancient traditions blend with vibrant Sufi music, royal architecture, and the legendary Ajrak craftsmanship.
            </p>
          </div>

          {/* Search Box */}
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-lg bg-white p-1.5 rounded-2xl shadow-lg border-2 border-saraiki-gold">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search research topics, sufi saints, shrines..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none py-2 px-3 pl-8 text-xs text-stone-900 focus:outline-none focus:ring-0 placeholder-stone-400 font-bold"
              />
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-stone-400" />
            </div>
            <button
              type="submit"
              className="bg-saraiki-maroon hover:bg-[#4d0505] text-white font-bold text-xs py-2 px-5 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1 border border-saraiki-gold"
            >
              Search
            </button>
          </form>

          {/* Quick links to pre-search filters */}
          <div className="flex flex-wrap items-center gap-2 text-[10px]">
            <span className="text-stone-300 font-bold select-none">Trending:</span>
            {trendingTopics.map((topic, i) => (
              <button
                key={i}
                onClick={() => onSearch(topic.label)}
                className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md text-[10px] font-bold transition border border-white/10"
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lower Stats Indicators */}
        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 max-w-xl select-none">
          <div className="space-y-0.5">
            <h4 className="font-serif font-extrabold text-lg sm:text-2xl text-saraiki-gold">10</h4>
            <p className="text-[9px] sm:text-[10px] font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1">
              <Compass className="h-3 w-3 text-saraiki-turquoise" /> Historical Cities
            </p>
          </div>
          <div className="space-y-0.5">
            <h4 className="font-serif font-extrabold text-lg sm:text-2xl text-saraiki-gold">50+</h4>
            <p className="text-[9px] sm:text-[10px] font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1">
              <Landmark className="h-3 w-3 text-saraiki-turquoise" /> Medieval Shrines
            </p>
          </div>
          <div className="space-y-0.5">
            <h4 className="font-serif font-extrabold text-lg sm:text-2xl text-saraiki-gold">15</h4>
            <p className="text-[9px] sm:text-[10px] font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1">
              <Users className="h-3 w-3 text-saraiki-turquoise" /> Sufi Scholars
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
