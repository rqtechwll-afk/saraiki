/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronRight, Facebook, Twitter, Instagram, Youtube, Send, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (tabId: string, subId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer id="site-footer" className="bg-[#1a1a1a] text-stone-300 border-t-4 border-saraiki-gold pt-16 pb-8 relative">
      <div className="absolute inset-0 ajrak-pattern opacity-[0.025] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        
        {/* About Section */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-saraiki-maroon text-saraiki-gold flex items-center justify-center font-display font-bold border border-saraiki-gold">
              S
            </div>
            <span className="font-serif italic font-extrabold text-lg text-white tracking-tight">
              SaraikiCulture<span className="text-saraiki-gold">.com</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed text-stone-400 font-medium">
            Dedicated to the scientific preservation, documentation, and international celebration of the rich 5000-year-old heritage, Sufi wisdom, languages, handicraft arts, and cities of the Saraiki people of South Punjab, Pakistan.
          </p>
          <div className="flex items-center gap-2.5 pt-2">
            <a href="https://facebook.com" className="h-8.5 w-8.5 rounded-full bg-white/10 hover:bg-saraiki-gold text-white hover:text-black flex items-center justify-center transition-all" title="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" className="h-8.5 w-8.5 rounded-full bg-white/10 hover:bg-saraiki-gold text-white hover:text-black flex items-center justify-center transition-all" title="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" className="h-8.5 w-8.5 rounded-full bg-white/10 hover:bg-saraiki-gold text-white hover:text-black flex items-center justify-center transition-all" title="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" className="h-8.5 w-8.5 rounded-full bg-white/10 hover:bg-saraiki-gold text-white hover:text-black flex items-center justify-center transition-all" title="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-serif italic font-bold text-sm text-saraiki-gold tracking-wider border-l-2 border-saraiki-maroon pl-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-stone-400 font-bold">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> About Us
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('tourism')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> Tourism Guides
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('gallery')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> Rich Gallery
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('events')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> Cultural Events
              </button>
            </li>
          </ul>
        </div>

        {/* Popular Cities */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-serif italic font-bold text-sm text-saraiki-gold tracking-wider border-l-2 border-saraiki-maroon pl-2">
            Cities Guide
          </h4>
          <ul className="space-y-2 text-xs text-stone-400 font-bold">
            <li>
              <button onClick={() => onNavigate('places', 'multan')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> Multan
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('places', 'bahawalpur')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> Bahawalpur
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('places', 'dera-ghazi-khan')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> D.G. Khan
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('places', 'muzaffargarh')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> Muzaffargarh
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('places', 'rahim-yar-khan')} className="hover:text-saraiki-turquoise flex items-center gap-1 transition-colors">
                <ChevronRight className="h-3.5 w-3.5 text-saraiki-maroon" /> Rahim Yar Khan
              </button>
            </li>
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-serif italic font-bold text-sm text-saraiki-gold tracking-wider border-l-2 border-saraiki-maroon pl-2">
            Newsletter
          </h4>
          <p className="text-xs text-stone-400 leading-relaxed font-medium">
            Subscribe to our monthly newsletter to receive historic folk tales, poetry translations, and invitations to South Punjab festivals.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-stone-900 border-2 border-stone-800 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-saraiki-gold text-white font-bold"
            />
            <button type="submit" className="p-2.5 bg-saraiki-maroon hover:bg-maroon-800 text-white rounded-xl transition-all border border-saraiki-gold">
              <Send className="h-4 w-4" />
            </button>
          </form>
          {subscribed && (
            <div className="text-xs text-saraiki-gold flex items-center gap-1 animate-pulse font-bold">
              <ShieldCheck className="h-4 w-4" /> Thank you for subscribing to our portal!
            </div>
          )}

          <div className="space-y-2 pt-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-saraiki-gold" />
              <span>contact@saraikiculture.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-saraiki-gold" />
              <span>+92 301 4447777</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-saraiki-gold" />
              <span>Multan Heritage Quarter, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-stone-800 my-10 max-w-7xl mx-auto px-4" />

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-stone-500 font-medium flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} SaraikiCulture.com. All Rights Reserved. Preserving South Punjab Heritage.
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <button onClick={() => alert('Sitemap XML:\n- /sitemap-index.xml\n- /sitemap-cities.xml\n- /sitemap-culture.xml')} className="hover:text-stone-300">XML Sitemap</button>
          <button onClick={() => alert('Robots.txt:\nUser-agent: *\nAllow: /\nSitemap: https://saraikiculture.com/sitemap.xml')} className="hover:text-stone-300">Robots.txt</button>
          <button onClick={() => alert('Disclaimer:\nThis portal is built for cultural research and tourist guide facilitation. All assets are safely stored inside local memory arrays.')} className="hover:text-stone-300">Disclaimer</button>
          <span className="text-stone-700">|</span>
          <button onClick={() => alert('Privacy Policy:\nYour privacy is sacred. Local user profiles and favorite arrays are secured purely in your local browser storage cache.')} className="hover:text-stone-300">Privacy Policy</button>
          <button onClick={() => alert('Terms & Conditions:\nUsage is permitted for academic, creative, and travel planning purposes.')} className="hover:text-stone-300 font-bold">Terms</button>
        </div>
      </div>
    </footer>
  );
}
