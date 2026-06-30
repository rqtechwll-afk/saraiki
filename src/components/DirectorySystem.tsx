/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Globe, Star, Landmark, ChevronRight, Plus, X, Sparkles, Send } from 'lucide-react';
import { DirectoryEntry } from '../types';
import { directoryData as initialDirectory } from '../data/directoryData';
import { citiesData } from '../data/citiesData';

export default function DirectorySystem() {
  const [entries, setEntries] = useState<DirectoryEntry[]>(initialDirectory);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Submit Listing State
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState<'Hotels' | 'Restaurants' | 'Museums' | 'Handicraft Shops' | 'Tour Guides' | 'Cultural Centers' | 'Libraries'>('Handicraft Shops');
  const [newCity, setNewCity] = useState('Multan');
  const [newAddress, setNewAddress] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = ['All', 'Hotels', 'Restaurants', 'Museums', 'Handicraft Shops', 'Tour Guides', 'Cultural Centers', 'Libraries'];

  const filteredEntries = useMemo(() => {
    return entries.filter(entry => {
      const matchesSearch = entry.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            entry.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' ? true : entry.category === selectedCategory;
      const matchesCity = selectedCity === 'All' ? true : entry.city === selectedCity;
      return matchesSearch && matchesCategory && matchesCity;
    });
  }, [entries, searchQuery, selectedCategory, selectedCity]);

  const handleSubmitListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newAddress || !newPhone) return;

    const newEntry: DirectoryEntry = {
      id: `dir_sub_${Date.now()}`,
      name: newName,
      category: newCategory,
      city: newCity,
      description: newDesc || 'A regional resource supporting travelers and patrons in South Punjab.',
      address: newAddress,
      phone: newPhone,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400',
      approved: true // Approved for sandbox
    };

    setEntries(prev => [newEntry, ...prev]);
    setNewName('');
    setNewAddress('');
    setNewPhone('');
    setNewDesc('');
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowSubmitForm(false);
    }, 4000);
  };

  return (
    <div id="directory-system-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
            <Landmark className="text-saraiki-maroon h-7 w-7" />
            Business & Artisan Directory
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400 mt-1">
            Discover local hotels, authentic restaurants, regional libraries, handicraft shops, and certified cultural tour guides.
          </p>
        </div>

        <button
          onClick={() => setShowSubmitForm(!showSubmitForm)}
          className="flex items-center gap-1 bg-saraiki-maroon hover:bg-maroon-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md transition-all"
        >
          <Plus className="h-4 w-4" /> Add Local Listing
        </button>
      </div>

      {/* Collapsible Listing Form */}
      {showSubmitForm && (
        <form onSubmit={handleSubmitListing} className="bg-stone-50 dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 rounded-3xl p-6 space-y-4 max-w-2xl mx-auto animate-fade-in">
          <div className="flex justify-between items-center border-b border-stone-200/40 dark:border-zinc-800 pb-3">
            <h3 className="font-display font-bold text-sm text-stone-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Sparkles className="text-saraiki-gold h-4.5 w-4.5" />
              Submit Local Resource Listing
            </h3>
            <button type="button" onClick={() => setShowSubmitForm(false)} className="text-stone-400 hover:text-stone-600">
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Resource Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Rohi Clay Art Shop"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs text-stone-800 dark:text-zinc-100"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Category</label>
              <select
                value={newCategory}
                onChange={(e: any) => setNewCategory(e.target.value)}
                className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs text-stone-800 dark:text-zinc-100"
              >
                <option value="Hotels">Hotels</option>
                <option value="Restaurants">Restaurants</option>
                <option value="Museums">Museums</option>
                <option value="Handicraft Shops">Handicraft Shops</option>
                <option value="Tour Guides">Tour Guides</option>
                <option value="Cultural Centers">Cultural Centers</option>
                <option value="Libraries">Libraries</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">City</label>
              <select
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs text-stone-800 dark:text-zinc-100"
              >
                {citiesData.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="e.g. +92 301 4447777"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs text-stone-800 dark:text-zinc-100"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-stone-500 uppercase">Full Address</label>
            <input
              type="text"
              required
              placeholder="e.g. Shop 4, Hussain Agahi Bazar, Multan"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs text-stone-800 dark:text-zinc-100"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-stone-500 uppercase">Description</label>
            <textarea
              placeholder="Describe what services you provide, special regional offerings, or handicraft varieties..."
              rows={3}
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs text-stone-800 dark:text-zinc-100"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-1.5 w-full bg-saraiki-maroon hover:bg-maroon-800 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all"
          >
            Submit Listing <Send className="h-3.5 w-3.5" />
          </button>
          {submitSuccess && (
            <div className="text-xs text-green-600 flex items-center gap-1 font-semibold text-center animate-pulse">
              Listing submitted successfully. Registered into live directory array.
            </div>
          )}
        </form>
      )}

      {/* Double Filter Toolbar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-stone-200/60 dark:border-zinc-800">
        
        {/* Category select */}
        <div className="md:col-span-4 space-y-1">
          <label className="text-[10px] font-bold text-stone-400 dark:text-zinc-500 uppercase select-none">Filter Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-xl text-xs text-stone-800 dark:text-zinc-200 focus:outline-none"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* City select */}
        <div className="md:col-span-4 space-y-1">
          <label className="text-[10px] font-bold text-stone-400 dark:text-zinc-500 uppercase select-none">Filter City</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-xl text-xs text-stone-800 dark:text-zinc-200 focus:outline-none"
          >
            <option value="All">All Cities</option>
            {citiesData.map(c => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* Text Search */}
        <div className="md:col-span-4 space-y-1">
          <label className="text-[10px] font-bold text-stone-400 dark:text-zinc-500 uppercase select-none">Search Keyword</label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. hotel, clay..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-xl text-xs text-stone-800 dark:text-zinc-200 focus:outline-none"
            />
            <Search className="absolute right-3 top-2.5 h-3.5 w-3.5 text-stone-400" />
          </div>
        </div>

      </div>

      {/* Directory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-stone-200/60 dark:border-zinc-800/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-44 relative overflow-hidden bg-stone-100 border-b border-stone-100 dark:border-zinc-800">
                <img
                  src={entry.image}
                  alt={entry.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                />
                <span className="absolute top-3 left-3 text-[9px] font-bold bg-saraiki-maroon text-white px-2.5 py-0.5 rounded-full uppercase">
                  {entry.category}
                </span>
                <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-zinc-900/95 py-0.5 px-2 rounded-lg flex items-center gap-0.5 text-saraiki-gold text-[10.5px] font-bold border border-stone-100 dark:border-zinc-800">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-stone-800 dark:text-zinc-200">{entry.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-saraiki-blue dark:text-saraiki-turquoise font-mono uppercase">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{entry.city}</span>
                </div>
                <h3 className="font-display font-bold text-stone-900 dark:text-zinc-100 text-sm sm:text-base">
                  {entry.name}
                </h3>
                <p className="text-xs text-stone-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                  {entry.description}
                </p>
                
                <div className="pt-3 space-y-1.5 text-xs text-stone-600 dark:text-zinc-400 border-t border-stone-100/50 dark:border-zinc-800/50 mt-4">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="h-4 w-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>{entry.address}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-stone-400 shrink-0" />
                    <span>{entry.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => alert(`Dialing listing phone number:\n${entry.phone}`)}
                className="w-full flex items-center justify-center gap-1 bg-stone-100 dark:bg-zinc-800 hover:bg-saraiki-maroon dark:hover:bg-maroon-700 hover:text-white text-stone-700 dark:text-zinc-300 py-2 px-4 rounded-xl text-xs font-bold transition-all"
              >
                Contact Resource <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
        {filteredEntries.length === 0 && (
          <div className="col-span-3 py-12 text-center text-stone-500">No directory matches. Try updating your filters.</div>
        )}
      </div>

    </div>
  );
}
