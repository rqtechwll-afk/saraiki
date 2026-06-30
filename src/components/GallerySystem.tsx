/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Image as ImageIcon, Video, Calendar, Landmark, Coffee, Music, Play, X, ChevronLeft, ChevronRight, Camera, User, Download } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'Photos' | 'Videos' | 'Festivals' | 'Historical Places' | 'Food' | 'Music';
  url: string;
  author: string;
  likes: number;
}

export default function GallerySystem() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Tomb of Shah Rukn-e-Alam Glazed Tiles',
      description: 'Intricate close-up of cobalt blue and white mosaic terracotta tilework (Kashi Gari) on the medieval octagonal brick walls in Multan.',
      category: 'Historical Places',
      url: 'https://images.unsplash.com/photo-1590076212876-b6058e577d2f?auto=format&fit=crop&q=80&w=1200',
      author: 'Naveed Shafi',
      likes: 124
    },
    {
      id: 'g2',
      title: 'Noor Mahal Palace at Dusk',
      description: 'Stunning Italianate chateau architectural lighting illumination at Noor Mahal Palace, Bahawalpur.',
      category: 'Historical Places',
      url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200',
      author: 'Ayesha Khan',
      likes: 240
    },
    {
      id: 'g3',
      title: 'Derawar Fort Bastions',
      description: 'Colossal 30-meter high medieval brick bastions rising from the salt flats of the Cholistan Desert (Rohi).',
      category: 'Festivals',
      url: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&q=80&w=1200',
      author: 'Zainab Fatima',
      likes: 310
    },
    {
      id: 'g4',
      title: 'Multani Sohan Halwa Ghee Layer',
      description: 'Fresh walnut-infused Multani Sohan Halwa cooling inside round traditional silver tins at Hussain Agahi bazaar.',
      category: 'Food',
      url: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=1200',
      author: 'Fatima Malik',
      likes: 95
    },
    {
      id: 'g5',
      title: 'Cholistan Desert Rally Jump',
      description: 'High-octane off-road racing truck jumping over golden sand dunes near Derawar Fort.',
      category: 'Videos',
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
      author: 'Yousuf Abbasi',
      likes: 420
    },
    {
      id: 'g6',
      title: 'Sufi Kafi performance on Yaktara',
      description: 'A wandering dervish in traditional patchwork robes playing the one-stringed Yaktara at Mithankot shrine.',
      category: 'Music',
      url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1200',
      author: 'Dr. Sajid Farooq',
      likes: 180
    },
    {
      id: 'g7',
      title: 'Traditional Saraiki Ajrak Hand Blocks',
      description: 'Craftsman hand-stamping organic madder root maroon dyes on long sheets of handloom cotton.',
      category: 'Photos',
      url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200',
      author: 'Sarfraz Ahmed',
      likes: 142
    },
    {
      id: 'g8',
      title: 'Taunsa Barrage Wetland Birds',
      description: 'Flock of migratory Siberian cranes taking flight over the lotus-filled Indus wetlands at sunset.',
      category: 'Photos',
      url: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&q=80&w=1200',
      author: 'Kamran Shah',
      likes: 88
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const categories = [
    { id: 'All', label: 'All Media', icon: ImageIcon },
    { id: 'Photos', label: 'Photos', icon: ImageIcon },
    { id: 'Videos', label: 'Videos', icon: Video },
    { id: 'Festivals', label: 'Festivals', icon: Calendar },
    { id: 'Historical Places', label: 'Historical Places', icon: Landmark },
    { id: 'Food', label: 'Food', icon: Coffee },
    { id: 'Music', label: 'Music', icon: Music }
  ];

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div id="gallery-system-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
          <ImageIcon className="text-saraiki-maroon h-7 w-7" />
          Rich Media Galleries
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400 mt-1">
          A high-definition visual archive documenting the landscapes, monuments, crafts, and musical maestros of South Punjab.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 select-none border-b border-stone-200/50 dark:border-zinc-800">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-saraiki-maroon text-white font-bold'
                : 'text-stone-600 dark:text-zinc-400 hover:bg-stone-100 dark:hover:bg-zinc-800/50'
            }`}
          >
            {React.createElement(cat.icon, { className: "h-3.5 w-3.5" })}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, idx) => {
          const isVideo = item.category === 'Videos';
          return (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-stone-200/60 dark:border-zinc-800/80 hover:shadow-lg cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden bg-stone-100">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                
                {/* Media Play overlay for video */}
                {isVideo ? (
                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-saraiki-maroon/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                )}

                <span className="absolute top-2.5 right-2.5 text-[9px] font-bold bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded-full uppercase">
                  {item.category}
                </span>
              </div>

              <div className="p-4 space-y-1.5">
                <h3 className="font-display font-bold text-stone-800 dark:text-zinc-200 group-hover:text-saraiki-maroon dark:group-hover:text-maroon-400 text-xs sm:text-sm truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-500 dark:text-zinc-400 line-clamp-2 leading-relaxed h-8">
                  {item.description}
                </p>
                
                <div className="flex justify-between items-center text-[10px] text-stone-400 pt-1">
                  <span className="flex items-center gap-1 font-sans">
                    <Camera className="h-3 w-3 text-saraiki-blue" /> By {item.author}
                  </span>
                  <span className="font-mono">♥ {item.likes}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full screen Lightbox / Video Player */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Core Media Showcase */}
          <div className="max-w-4xl w-full flex flex-col items-center space-y-6">
            <div className="w-full relative rounded-2xl overflow-hidden bg-black flex items-center justify-center max-h-[60vh] md:max-h-[70vh]">
              {filteredItems[lightboxIndex].category === 'Videos' ? (
                /* Simulated Video Player */
                <div className="relative w-full aspect-video flex flex-col items-center justify-center">
                  <img
                    src={filteredItems[lightboxIndex].url}
                    alt={filteredItems[lightboxIndex].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="relative z-10 flex flex-col items-center p-6 bg-black/75 rounded-2xl max-w-md text-center border border-zinc-800 space-y-4">
                    <div className="h-16 w-16 rounded-full bg-saraiki-gold text-stone-900 flex items-center justify-center shadow-2xl">
                      <Play className="h-8 w-8 fill-current ml-1" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-white">Streaming Media Server Link</h4>
                      <p className="text-xs text-stone-400 mt-1">This video is pre-compressed to optimize Core Web Vitals loading budgets on mobile networks.</p>
                    </div>
                    <button onClick={() => alert('Starting video play simulation...')} className="bg-saraiki-maroon text-white text-xs font-bold py-2 px-4 rounded-xl">Play High-Def Streaming</button>
                  </div>
                </div>
              ) : (
                <img
                  src={filteredItems[lightboxIndex].url}
                  alt={filteredItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain"
                />
              )}
            </div>

            {/* Captions */}
            <div className="text-center space-y-2 max-w-2xl px-6">
              <span className="text-[10px] font-bold tracking-widest bg-zinc-800 text-saraiki-gold px-3 py-1 rounded-full uppercase">
                {filteredItems[lightboxIndex].category}
              </span>
              <h2 className="font-display text-lg sm:text-2xl font-extrabold text-white">
                {filteredItems[lightboxIndex].title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
              
              <div className="flex justify-center items-center gap-6 text-[11px] text-stone-500 font-mono pt-2 border-t border-zinc-800 max-w-xs mx-auto">
                <div className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  <span>By {filteredItems[lightboxIndex].author}</span>
                </div>
                <button onClick={() => alert('Downloading original full-resolution RAW image file from digital library assets.')} className="hover:text-white flex items-center gap-1 transition">
                  <Download className="h-3.5 w-3.5" /> RAW File
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
