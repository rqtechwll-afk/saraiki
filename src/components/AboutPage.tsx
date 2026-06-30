/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, BookOpen, Star, Sparkles, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div id="about-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in text-stone-700 dark:text-zinc-300">
      
      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-saraiki-gold uppercase tracking-widest flex items-center justify-center gap-1">
          <Sparkles className="h-4 w-4" /> Academic Overview
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-zinc-100 leading-tight">
          SaraikiCulture.com — Preserving South Punjab's Heritage
        </h1>
        <p className="text-sm sm:text-lg text-stone-500 dark:text-zinc-400 font-medium leading-relaxed">
          Uncovering the layers of one of the oldest civilizational hubs in the Indus River Valley basin.
        </p>
      </div>

      {/* Visual Showcase */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 sm:h-96">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200"
          alt="Ancient Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
          <p className="text-saraiki-gold font-bold text-xs uppercase tracking-widest">Civilizational Nexus</p>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold mt-1">Older than Harappa and Mohenjo-Daro</h2>
        </div>
      </div>

      {/* Three Column Academic Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        
        <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm">
          <div className="h-10 w-10 bg-saraiki-maroon/10 text-saraiki-maroon rounded-xl flex items-center justify-center shrink-0">
            <Compass className="h-5.5 w-5.5" />
          </div>
          <h3 className="font-display font-bold text-stone-900 dark:text-zinc-100 text-sm sm:text-base">Geographical Boundaries</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-stone-500 dark:text-zinc-400">
            The Saraiki-speaking region, historically termed <strong>Waseb</strong>, spans South Punjab, the border belts of Balochistan, and Dera Ismail Khan in Khyber Pakhtunkhwa. This sand-rich plain is nourished by the Indus, Chenab, and Sutlej rivers.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm">
          <div className="h-10 w-10 bg-saraiki-blue/10 text-saraiki-blue rounded-xl flex items-center justify-center shrink-0">
            <BookOpen className="h-5.5 w-5.5" />
          </div>
          <h3 className="font-display font-bold text-stone-900 dark:text-zinc-100 text-sm sm:text-base">Linguistic Splendor</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-stone-500 dark:text-zinc-400">
            Saraiki is an ancient Indo-Aryan language spoken by over <strong>20 million people</strong>. It possesses a remarkably rich literary pool, dominated by complex Sufi metaphorical poetry (Kafis) penned by intellectual stalwarts like Khwaja Ghulam Farid.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm">
          <div className="h-10 w-10 bg-saraiki-gold/15 text-saraiki-gold rounded-xl flex items-center justify-center shrink-0">
            <Globe className="h-5.5 w-5.5" />
          </div>
          <h3 className="font-display font-bold text-stone-900 dark:text-zinc-100 text-sm sm:text-base">Historical Nexus</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-stone-500 dark:text-zinc-400">
            As a prime transit gateway for central Asian caravans, South Punjab has been ruled by Persian, Greco-Bactrian, Maurya, Kushan, Hindu Shahi, Ghaznavid, and Mughal dynasties, creating an unparalleled, pluralistic syncretic culture.
          </p>
        </div>

      </div>

      {/* Mission Statement Box */}
      <div className="bg-stone-50 dark:bg-zinc-900/40 border border-stone-200/60 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="font-display font-bold text-stone-950 dark:text-zinc-100 text-base sm:text-lg flex items-center gap-1.5">
          <Award className="text-saraiki-gold h-5 w-5" /> Our Digital Manifesto
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-zinc-400">
          SaraikiCulture.com is an independent academic, non-profit initiative dedicated to indexing, safeguarding, and celebrating the material and spiritual artifacts of South Punjab. Our active objectives include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-stone-700 dark:text-zinc-300 pt-2">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-saraiki-maroon text-white flex items-center justify-center font-mono text-[9px] font-bold">✓</div>
            <span>Digitizing Sufi Poetry Manuscripts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-saraiki-maroon text-white flex items-center justify-center font-mono text-[9px] font-bold">✓</div>
            <span>Cataloging Desert Fortifications</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-saraiki-maroon text-white flex items-center justify-center font-mono text-[9px] font-bold">✓</div>
            <span>Empowering Blue Pottery Artisans</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-saraiki-maroon text-white flex items-center justify-center font-mono text-[9px] font-bold">✓</div>
            <span>Providing Guided Ecotourism Routing</span>
          </div>
        </div>
      </div>

    </div>
  );
}
