/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronRight, Bookmark, BookOpen, Calendar, HelpCircle, CheckCircle, Search, Sparkles, Code, Globe, ShieldCheck } from 'lucide-react';
import { CultureSection } from '../types';
import { cultureData } from '../data/cultureData';

interface CultureDetailProps {
  sectionId: string;
  onNavigate: (tabId: string, subId?: string) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
}

export default function CultureDetail({ sectionId, onNavigate, onToggleFavorite, isFavorite }: CultureDetailProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showSeoPanel, setShowSeoPanel] = useState(false);

  const currentSection = cultureData.find(sec => sec.id === sectionId) || cultureData[0];

  // Generate dynamic JSON-LD Schema.org metadata for SEO
  const schemaJsonLD = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": currentSection.seoMeta.title,
    "description": currentSection.seoMeta.description,
    "image": currentSection.images[0],
    "author": {
      "@type": "Organization",
      "name": "SaraikiCulture.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SaraikiCulture.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saraikiculture.com/logo.png"
      }
    },
    "mainEntityOfPage": `https://saraikiculture.com/culture/${currentSection.id}`
  };

  return (
    <div id="culture-detail-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-zinc-400 mb-8 select-none">
        <button onClick={() => onNavigate('home')} className="hover:text-saraiki-maroon transition">Home</button>
        <ChevronRight className="h-3 w-3" />
        <span className="text-stone-400 dark:text-zinc-500">Culture</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-saraiki-maroon dark:text-maroon-400 font-bold">{currentSection.title}</span>
      </nav>

      {/* Main Grid: Side Nav & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left sidebar: Culture navigation rail */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-stone-200/60 dark:border-zinc-800 p-4 sticky top-28">
            <h3 className="font-display font-bold text-sm text-stone-800 dark:text-zinc-200 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
              <BookOpen className="h-4.5 w-4.5 text-saraiki-maroon" />
              Culture Topics
            </h3>
            <div className="space-y-1">
              {cultureData.map((sec) => {
                const isActive = sec.id === currentSection.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => onNavigate('culture', sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-maroon-500 text-white font-bold shadow-md shadow-maroon-900/10'
                        : 'text-stone-600 dark:text-zinc-400 hover:bg-stone-50 dark:hover:bg-zinc-800/40 hover:text-stone-900 dark:hover:text-white'
                    }`}
                  >
                    {sec.title}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Center/Right: Deep Content */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* Main Hero Header */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200/60 dark:border-zinc-800 overflow-hidden shadow-sm relative">
            <div className="h-72 w-full relative">
              <img
                src={currentSection.images[0]}
                alt={currentSection.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs font-bold text-saraiki-gold tracking-widest uppercase flex items-center gap-1.5 mb-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  Saraiki Heritage Portal
                </span>
                <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {currentSection.title}
                </h1>
                <p className="text-zinc-300 text-sm sm:text-base mt-2 font-medium max-w-2xl leading-relaxed">
                  {currentSection.tagline}
                </p>
              </div>
              
              {/* Floating Favorite Action */}
              <button
                onClick={() => onToggleFavorite(currentSection.id)}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-lg backdrop-blur-md transition-all ${
                  isFavorite 
                    ? 'bg-saraiki-maroon text-white scale-110' 
                    : 'bg-black/40 text-white hover:bg-black/60'
                }`}
                title="Save to Favorite"
              >
                <Bookmark className="h-5 w-5" />
              </button>
            </div>

            {/* Introduction and Core details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                <h2 className="font-display text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
                  <div className="h-1.5 w-3 bg-saraiki-maroon rounded" />
                  Introduction
                </h2>
                <p className="text-sm leading-relaxed text-stone-600 dark:text-zinc-300">
                  {currentSection.introduction}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
                  <div className="h-1.5 w-3 bg-saraiki-blue dark:bg-saraiki-turquoise rounded" />
                  Historical Overview & Evolution
                </h2>
                <p className="text-sm leading-relaxed text-stone-600 dark:text-zinc-300 whitespace-pre-line">
                  {currentSection.history}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
                  <div className="h-1.5 w-3 bg-saraiki-gold rounded" />
                  Cultural Importance
                </h2>
                <p className="text-sm leading-relaxed text-stone-600 dark:text-zinc-300">
                  {currentSection.importance}
                </p>
              </div>
            </div>
          </div>

          {/* Interesting Facts Block */}
          <div className="bg-gradient-to-br from-maroon-900 to-[#4d0010] text-stone-100 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg border border-maroon-950/40">
            <div className="absolute inset-0 ajrak-pattern opacity-[0.04] pointer-events-none" />
            <h3 className="font-display font-bold text-lg text-saraiki-gold tracking-wide mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Did You Know? (Interesting Facts)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {currentSection.facts.map((fact, idx) => (
                <div key={idx} className="bg-black/15 p-4 rounded-xl border border-white/5 space-y-2 flex flex-col justify-between">
                  <div className="font-mono text-2xl font-bold text-saraiki-gold">0{idx + 1}</div>
                  <p className="text-xs leading-relaxed text-zinc-200">{fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          {currentSection.faqs.length > 0 && (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200/60 dark:border-zinc-800 p-6 sm:p-8 space-y-6">
              <h3 className="font-display text-xl font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
                <HelpCircle className="text-saraiki-maroon h-5.5 w-5.5" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {currentSection.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-stone-100 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex justify-between items-center p-4 text-left font-semibold text-xs sm:text-sm text-stone-800 dark:text-zinc-200 hover:bg-stone-50 dark:hover:bg-zinc-800/30"
                      >
                        <span>{faq.question}</span>
                        <ChevronRight className={`h-4 w-4 text-stone-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-stone-600 dark:text-zinc-400 bg-stone-50/55 dark:bg-zinc-950/20 border-t border-stone-100/50 dark:border-zinc-800/50 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related articles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-100 dark:bg-zinc-900/40 p-5 rounded-2xl border border-stone-200/40 dark:border-zinc-800">
            <div>
              <h4 className="font-display font-bold text-sm text-stone-800 dark:text-zinc-200">Want to read more?</h4>
              <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1">Explore our curated expert research blogs related to {currentSection.title}.</p>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="bg-saraiki-blue hover:bg-opacity-95 text-white py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-1"
            >
              Browse Research Blog
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* SEO Metadata and Schema Inspector Module */}
          <div className="bg-stone-950 text-stone-400 rounded-3xl p-6 border border-zinc-800 space-y-4">
            <div className="flex justify-between items-center flex-wrap gap-2 border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Code className="text-saraiki-turquoise h-5 w-5" />
                <h4 className="font-display font-bold text-sm text-white">Advanced SEO Meta Inspector</h4>
              </div>
              <button
                onClick={() => setShowSeoPanel(!showSeoPanel)}
                className="bg-zinc-800 hover:bg-zinc-700 text-stone-200 text-[10px] font-bold px-3 py-1 rounded-lg transition"
              >
                {showSeoPanel ? 'Hide Metadata Console' : 'Show Generated Metadata'}
              </button>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              This portal compiles search-engine compliant schemas dynamically for each route to satisfy Core Web Vitals, Structured Data (Schema.org), Open Graph headers, and indexing rules.
            </p>

            {showSeoPanel && (
              <div className="space-y-4 pt-2">
                {/* Meta properties */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-[10px] bg-zinc-900 p-4 rounded-xl border border-zinc-800/80">
                  <div>
                    <span className="text-saraiki-gold">Meta Title:</span>
                    <p className="text-stone-200 mt-0.5">{currentSection.seoMeta.title} | SaraikiCulture</p>
                  </div>
                  <div>
                    <span className="text-saraiki-gold">Meta Description:</span>
                    <p className="text-stone-200 mt-0.5">{currentSection.seoMeta.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-saraiki-gold">Focus Keywords:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {currentSection.seoMeta.keywords.map((kw, i) => (
                        <span key={i} className="bg-zinc-800 text-stone-300 px-1.5 py-0.5 rounded">{kw}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-saraiki-turquoise">Canonical URL:</span>
                    <p className="text-stone-300 mt-0.5">https://saraikiculture.com/culture/{currentSection.id}</p>
                  </div>
                  <div>
                    <span className="text-saraiki-turquoise">Robots Directive:</span>
                    <p className="text-stone-300 mt-0.5">index, follow, max-image-preview:large</p>
                  </div>
                </div>

                {/* Schema code blocks */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-bold text-zinc-200 flex items-center gap-1">
                    <Globe className="h-3.5 w-3.5 text-saraiki-turquoise" />
                    Generated JSON-LD Structured Data Schema:
                  </div>
                  <pre className="bg-black/90 text-saraiki-turquoise p-4 rounded-xl overflow-x-auto text-[9.5px] font-mono border border-zinc-800 leading-normal max-h-48">
                    {JSON.stringify(schemaJsonLD, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
