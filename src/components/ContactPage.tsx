/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Shield, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Heritage Preservation Volunteer');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Simulate sending
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div id="contact-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold text-saraiki-gold uppercase tracking-widest flex items-center justify-center gap-1">
          <Sparkles className="h-4 w-4" /> Get In Touch
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-zinc-100">
          Contact Our Secretariat
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400 leading-relaxed">
          Reach out for research collaborations, cultural site preservation reporting, volunteer applications, or general feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex items-start gap-4 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-saraiki-maroon/10 text-saraiki-maroon flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-900 dark:text-zinc-100 uppercase tracking-wider">Email Inquiry Center</h4>
              <p className="text-xs text-stone-500 mt-0.5">Response target is within 48 academic hours.</p>
              <a href="mailto:contact@saraikiculture.com" className="text-xs font-bold text-saraiki-blue hover:text-saraiki-maroon transition block mt-1.5">
                contact@saraikiculture.com
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex items-start gap-4 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-saraiki-blue/10 text-saraiki-blue flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-900 dark:text-zinc-100 uppercase tracking-wider">Secretariat Hotline</h4>
              <p className="text-xs text-stone-500 mt-0.5">Available Mon-Fri, 09:00 AM - 05:00 PM PST.</p>
              <a href="tel:+923014447777" className="text-xs font-bold text-saraiki-blue hover:text-saraiki-maroon transition block mt-1.5">
                +92 301 4447777
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 p-5 rounded-2xl flex items-start gap-4 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-saraiki-gold/10 text-saraiki-gold flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-900 dark:text-zinc-100 uppercase tracking-wider">HQ Directorate Address</h4>
              <p className="text-xs text-stone-500 mt-0.5">South Punjab Cultural Directorate Office.</p>
              <p className="text-xs font-medium text-stone-700 dark:text-zinc-300 mt-1.5">
                Near Qila Kohna Qasim Bagh, Multan, South Punjab, Pakistan.
              </p>
            </div>
          </div>

          {/* Verification Shield */}
          <div className="bg-stone-900 text-stone-300 rounded-2xl p-5 border border-zinc-800/80 flex items-start gap-3.5 relative overflow-hidden">
            <div className="absolute inset-0 ajrak-pattern opacity-[0.03] pointer-events-none" />
            <Shield className="h-8 w-8 text-saraiki-gold shrink-0" />
            <div className="space-y-1 relative z-10 text-[11px] font-medium text-stone-400">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Citizen Data Privacy</h4>
              <p className="leading-relaxed">All submissions are cryptographically cataloged in the portal database to safeguard against external marketing spam bots.</p>
            </div>
          </div>

        </div>

        {/* Right Column: Submission Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
            <h3 className="font-display font-bold text-sm text-stone-900 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="h-4.5 w-4.5 text-saraiki-maroon" /> Send Digital Message
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-500 uppercase">My Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ali Raza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 px-3.5 rounded-xl text-xs text-stone-850 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon focus:border-transparent dark:text-zinc-100"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-500 uppercase">My Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="ali@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 px-3.5 rounded-xl text-xs text-stone-850 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon focus:border-transparent dark:text-zinc-100"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Inquiry Category</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 px-3.5 rounded-xl text-xs text-stone-800 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon focus:border-transparent"
              >
                <option value="Heritage Preservation Volunteer">Heritage Preservation Volunteer</option>
                <option value="Sufi Research Submission Help">Sufi Research Submission Help</option>
                <option value="Museum Artifact Sourcing">Museum Artifact Sourcing</option>
                <option value="Technical Website Feedback">Technical Website Feedback</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Detailed Message Content</label>
              <textarea
                required
                rows={5}
                placeholder="Write your constructive message details, volunteer background, or questions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-2 px-3.5 rounded-xl text-xs text-stone-850 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon focus:border-transparent dark:text-zinc-100"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-saraiki-maroon hover:bg-maroon-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-1.5"
            >
              Submit Inquiry Form <Send className="h-4 w-4" />
            </button>

            {success && (
              <div className="text-xs text-green-600 font-bold flex items-center justify-center gap-1.5 animate-pulse">
                Inquiry sent successfully. Check your email for further instructions.
              </div>
            )}
          </form>
        </div>
      </div>

    </div>
  );
}
