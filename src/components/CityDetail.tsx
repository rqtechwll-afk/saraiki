/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronRight, Landmark, Compass, Coffee, Hotel, ArrowLeft, ExternalLink, Star, Phone, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { City } from '../types';
import { citiesData } from '../data/citiesData';

interface CityDetailProps {
  cityId: string;
  onNavigate: (tabId: string, subId?: string) => void;
}

export default function CityDetail({ cityId, onNavigate }: CityDetailProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'shrines' | 'historical' | 'other'>('all');
  const currentCity = citiesData.find(c => c.id === cityId) || citiesData[0];

  const filteredAttractions = currentCity.touristAttractions.filter(attr => {
    if (activeTab === 'all') return true;
    if (activeTab === 'shrines') return attr.type === 'Shrine' || attr.type === 'Sufi';
    if (activeTab === 'historical') return attr.type === 'Historical' || attr.type === 'Museum';
    return attr.type === 'Park' || attr.type === 'Other';
  });

  return (
    <div id="city-detail-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Back Link and Breadcrumbs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-zinc-400 select-none">
          <button onClick={() => onNavigate('home')} className="hover:text-saraiki-maroon transition">Home</button>
          <ChevronRight className="h-3 w-3" />
          <span className="text-stone-400 dark:text-zinc-500">Places</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-saraiki-maroon dark:text-maroon-400 font-bold">{currentCity.name}</span>
        </nav>
        
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1 text-xs font-bold text-stone-600 dark:text-zinc-300 hover:text-saraiki-maroon transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Interactive Map
        </button>
      </div>

      {/* Hero Header Area */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl mb-12 h-[350px] md:h-[450px]">
        <img
          src={currentCity.gallery[0] || 'https://images.unsplash.com/photo-1590076212876-b6058e577d2f?auto=format&fit=crop&q=80&w=1200'}
          alt={currentCity.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col justify-end p-6 sm:p-10">
          <span className="text-xs font-bold text-saraiki-gold tracking-widest uppercase flex items-center gap-1.5 mb-1.5">
            <Compass className="h-4 w-4" />
            Discover South Punjab
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentCity.name}
          </h1>
          <p className="text-zinc-300 text-sm sm:text-lg mt-2 font-medium max-w-2xl leading-relaxed">
            {currentCity.tagline}
          </p>
        </div>
      </div>

      {/* Two Column Layout: Main Content vs Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
        
        {/* Left Column: History & Geography */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* History */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <div className="h-2 w-4 bg-saraiki-maroon rounded" />
              History of {currentCity.name}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-stone-600 dark:text-zinc-300">
              {currentCity.history}
            </p>
          </div>

          {/* Geography */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <div className="h-2 w-4 bg-saraiki-blue rounded" />
              Geography & Climate
            </h3>
            <p className="text-sm leading-relaxed text-stone-600 dark:text-zinc-300">
              {currentCity.geography}
            </p>
          </div>

          {/* Local Culture */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <div className="h-2 w-4 bg-saraiki-gold rounded" />
              Local Crafts & Heritage Arts
            </h3>
            <p className="text-sm leading-relaxed text-stone-600 dark:text-zinc-300">
              {currentCity.localCulture}
            </p>
          </div>

        </div>

        {/* Right Column: Mini Map Embed & Delicacies */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Google Maps Wrapper */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-stone-200/60 dark:border-zinc-800 p-4 shadow-sm space-y-3">
            <h3 className="font-display font-bold text-sm text-stone-800 dark:text-zinc-200 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="text-saraiki-maroon h-4 w-4" />
              Google Map Integration
            </h3>
            <div className="h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/50 dark:border-zinc-800">
              {currentCity.mapEmbedUrl ? (
                <iframe
                  title={`Map of ${currentCity.name}`}
                  src={currentCity.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-6 text-center text-stone-500 bg-stone-50 dark:bg-zinc-950">
                  <Compass className="h-8 w-8 text-stone-400 animate-spin-slow mb-2" />
                  <p className="text-xs">Location Coordinates:</p>
                  <p className="text-xs font-mono font-bold mt-1 text-saraiki-maroon">
                    {currentCity.coordinates.lat}° N, {currentCity.coordinates.lng}° E
                  </p>
                </div>
              )}
            </div>
            <div className="text-[10px] text-stone-500 dark:text-zinc-400 flex items-start gap-1">
              <AlertCircle className="h-3.5 w-3.5 text-saraiki-blue shrink-0 mt-0.5" />
              <span>Map provides precise driving navigation routes and tourist nodes inside {currentCity.name} city limits.</span>
            </div>
          </div>

          {/* Traditional Foods */}
          <div className="bg-stone-900 text-stone-200 rounded-2xl p-6 border border-zinc-800 space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 ajrak-pattern opacity-[0.03] pointer-events-none" />
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <Coffee className="text-saraiki-gold h-4 w-4" />
              Traditional Delicacies
            </h3>
            <ul className="space-y-3">
              {currentCity.traditionalFoods.map((food, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs font-medium">
                  <div className="h-5 w-5 rounded-full bg-saraiki-gold/15 text-saraiki-gold flex items-center justify-center font-mono text-[10px] font-bold">
                    {i + 1}
                  </div>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Tourist Attractions Segment */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 space-y-8 mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <Landmark className="text-saraiki-maroon h-6 w-6" />
              Tourist Attractions & Landmarks
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400 mt-1">Explore historical buildings, shrines, palaces, and beautiful gardens.</p>
          </div>
          
          {/* Tabs */}
          <div className="flex bg-stone-100 dark:bg-zinc-950/60 p-1.5 rounded-xl border border-stone-200/40 dark:border-zinc-800 select-none">
            {([
              { id: 'all', label: 'All Sites' },
              { id: 'shrines', label: 'Shrines & Sufi' },
              { id: 'historical', label: 'Historical' }
            ] as const).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-saraiki-maroon text-white shadow-sm'
                    : 'text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAttractions.map((attr, idx) => (
            <div
              key={idx}
              className="group bg-stone-50 dark:bg-zinc-800/20 rounded-2xl overflow-hidden border border-stone-200/40 dark:border-zinc-800/80 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-44 relative">
                <img
                  src={attr.image}
                  alt={attr.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-2 left-2 text-[9px] font-bold bg-saraiki-maroon text-white px-2 py-0.5 rounded-full uppercase">
                  {attr.type}
                </span>
              </div>
              <div className="p-4 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-stone-900 dark:text-zinc-100 group-hover:text-saraiki-maroon dark:group-hover:text-maroon-400 transition text-sm">
                    {attr.name}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1.5 line-clamp-4 leading-relaxed">
                    {attr.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-saraiki-blue dark:text-saraiki-turquoise">
                  <Sparkles className="h-3.5 w-3.5" /> Must-visit Heritage Site
                </div>
              </div>
            </div>
          ))}
          {filteredAttractions.length === 0 && (
            <div className="col-span-2 py-12 text-center text-stone-500">No landmarks match the selected filter.</div>
          )}
        </div>
      </div>

      {/* Recommended Accommodations & Restaurants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Hotels */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 space-y-6">
          <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
            <Hotel className="text-saraiki-blue dark:text-saraiki-turquoise h-5 w-5" />
            Recommended Accommodations
          </h3>
          <div className="space-y-4">
            {currentCity.hotels.map((hotel, idx) => (
              <div key={idx} className="flex gap-4 p-3 rounded-xl border border-stone-100 dark:border-zinc-800/80 bg-stone-50/50 dark:bg-zinc-950/20">
                <img src={hotel.image} alt={hotel.name} referrerPolicy="no-referrer" className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="text-xs font-bold text-stone-800 dark:text-zinc-200 truncate">{hotel.name}</h4>
                      <div className="flex items-center gap-0.5 text-saraiki-gold shrink-0">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="text-[10px] font-bold font-mono text-stone-700 dark:text-zinc-300">{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-stone-500 dark:text-zinc-400 font-medium flex items-center gap-1 mt-0.5">
                      <Phone className="h-3 w-3" /> {hotel.contact}
                    </p>
                  </div>
                  <button onClick={() => alert(`Dialing hotel reservation office:\n${hotel.contact}`)} className="text-[10px] font-extrabold text-saraiki-blue hover:text-saraiki-maroon self-start flex items-center gap-0.5 mt-1">
                    Book Stay <ExternalLink className="h-2.5 w-2.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 space-y-6">
          <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
            <Coffee className="text-saraiki-maroon h-5 w-5" />
            Recommended Restaurants & Dining
          </h3>
          <div className="space-y-4">
            {currentCity.restaurants.map((rest, idx) => (
              <div key={idx} className="flex gap-4 p-3 rounded-xl border border-stone-100 dark:border-zinc-800/80 bg-stone-50/50 dark:bg-zinc-950/20">
                <img src={rest.image} alt={rest.name} referrerPolicy="no-referrer" className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="text-xs font-bold text-stone-800 dark:text-zinc-200 truncate">{rest.name}</h4>
                      <div className="flex items-center gap-0.5 text-saraiki-gold shrink-0">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="text-[10px] font-bold font-mono text-stone-700 dark:text-zinc-300">{rest.rating}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-stone-500 dark:text-zinc-400 font-medium mt-0.5">
                      Cuisine: <span className="font-bold text-stone-600 dark:text-zinc-300">{rest.cuisine}</span>
                    </p>
                  </div>
                  <span className="text-[10px] font-extrabold text-saraiki-maroon flex items-center gap-0.5 mt-1 select-none">
                    Recommended Desi Menu
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
