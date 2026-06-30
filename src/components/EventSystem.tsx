/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Users, ArrowRight, X, AlertCircle, Sparkles, Plus, Send } from 'lucide-react';
import { EventItem } from '../types';
import { eventData as initialEvents } from '../data/eventData';

export default function EventSystem() {
  const [events, setEvents] = useState<EventItem[]>(initialEvents);
  const [viewMode, setViewMode] = useState<'cards' | 'calendar'>('cards');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Registration Modal State
  const [registerEvent, setRegisterEvent] = useState<EventItem | null>(null);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Submit Event State
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventCity, setNewEventCity] = useState('');
  const [newEventLocation, setNewEventLocation] = useState('');
  const [newEventDesc, setNewEventDesc] = useState('');
  const [newEventSuccess, setNewEventSuccess] = useState(false);

  const categories = ['All', 'Festival', 'Sufi', 'Exhibition', 'Workshop', 'Concert'];

  const filteredEvents = useMemo(() => {
    if (selectedCategory === 'All') return events;
    return events.filter(e => e.category === selectedCategory);
  }, [events, selectedCategory]);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerEvent || !attendeeName || !attendeeEmail) return;

    // Increment registered count
    setEvents(prev => prev.map(ev => {
      if (ev.id === registerEvent.id) {
        return { ...ev, registeredCount: ev.registeredCount + 1 };
      }
      return ev;
    }));

    setRegistrationSuccess(true);
    setAttendeeName('');
    setAttendeeEmail('');
    setAttendeePhone('');
    setTimeout(() => {
      setRegistrationSuccess(false);
      setRegisterEvent(null);
    }, 4000);
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle || !newEventDate || !newEventCity || !newEventLocation) return;

    const submittedEvent: EventItem = {
      id: `ev_sub_${Date.now()}`,
      title: newEventTitle,
      description: newEventDesc || 'A community-sponsored cultural gathering Celebrating Saraiki heritage.',
      date: newEventDate,
      time: '04:00 PM - 09:00 PM',
      location: newEventLocation,
      city: newEventCity,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
      category: 'Festival',
      organizer: 'Local Community Chieftains',
      registeredCount: 1
    };

    setEvents(prev => [submittedEvent, ...prev]);
    setNewEventTitle('');
    setNewEventDate('');
    setNewEventCity('');
    setNewEventLocation('');
    setNewEventDesc('');
    setNewEventSuccess(true);
    setTimeout(() => {
      setNewEventSuccess(false);
      setShowSubmitForm(false);
    }, 4000);
  };

  // Simulated calendar dates for June 2026
  const calendarDays = useMemo(() => {
    const days = [];
    // Start of month padding (June 2026 starts on a Monday, 0 padding if Monday index 1)
    // June 1st, 2026 is Monday.
    for (let i = 1; i <= 30; i++) {
      const dateString = `2026-06-${i < 10 ? '0' + i : i}`;
      const dayEvents = events.filter(e => e.date === dateString);
      days.push({ dayNum: i, dateString, dayEvents });
    }
    return days;
  }, [events]);

  return (
    <div id="events-system-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
            <CalendarIcon className="text-saraiki-maroon h-7 w-7" />
            Saraiki Cultural Calendar
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400 mt-1">
            Browse upcoming Sufi Urs events, regional music concerts, desert camel festivals, and art craft masterclasses.
          </p>
        </div>

        {/* Action button & Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex bg-stone-100 dark:bg-zinc-950 p-1 rounded-xl border border-stone-200/50 dark:border-zinc-800 text-xs font-semibold select-none">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'cards' ? 'bg-saraiki-maroon text-white shadow-sm' : 'text-stone-600 dark:text-zinc-400'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'calendar' ? 'bg-saraiki-maroon text-white shadow-sm' : 'text-stone-600 dark:text-zinc-400'
              }`}
            >
              Monthly Calendar
            </button>
          </div>

          <button
            onClick={() => setShowSubmitForm(!showSubmitForm)}
            className="flex items-center gap-1 bg-saraiki-blue hover:bg-opacity-95 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md transition-all"
          >
            <Plus className="h-4 w-4" /> Submit Event
          </button>
        </div>
      </div>

      {/* Collapsible community event form */}
      {showSubmitForm && (
        <form onSubmit={handleEventSubmit} className="bg-stone-50 dark:bg-zinc-900 border border-stone-200/60 dark:border-zinc-800 rounded-3xl p-6 space-y-4 max-w-2xl mx-auto animate-fade-in">
          <div className="flex justify-between items-center border-b border-stone-200/40 dark:border-zinc-800 pb-3">
            <h3 className="font-display font-bold text-sm text-stone-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Sparkles className="text-saraiki-gold h-4.5 w-4.5" />
              Propose Regional Cultural Event
            </h3>
            <button type="button" onClick={() => setShowSubmitForm(false)} className="text-stone-400 hover:text-stone-600">
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Event Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Uch Sharif Sufi Gathering"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Proposed Date (YYYY-MM-DD)</label>
              <input
                type="text"
                required
                placeholder="e.g. 2026-06-15"
                value={newEventDate}
                onChange={(e) => setNewEventDate(e.target.value)}
                className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">City Location</label>
              <input
                type="text"
                required
                placeholder="e.g. Bahawalpur"
                value={newEventCity}
                onChange={(e) => setNewEventCity(e.target.value)}
                className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-500 uppercase">Address / Venue</label>
              <input
                type="text"
                required
                placeholder="e.g. Uch Sharif Shrines Square"
                value={newEventLocation}
                onChange={(e) => setNewEventLocation(e.target.value)}
                className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-stone-500 uppercase">Brief Description</label>
            <textarea
              placeholder="Provide agenda details, guest speakers, Sufi singers scheduled, and entry details..."
              rows={3}
              value={newEventDesc}
              onChange={(e) => setNewEventDesc(e.target.value)}
              className="w-full bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 py-1.5 px-3 rounded-lg text-xs"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-1.5 w-full bg-saraiki-maroon hover:bg-maroon-800 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all"
          >
            Propose Event <Send className="h-3.5 w-3.5" />
          </button>
          {newEventSuccess && (
            <div className="text-xs text-green-600 flex items-center gap-1 font-semibold text-center animate-pulse">
              Event proposed successfully. Sent to admin moderation cue for validation.
            </div>
          )}
        </form>
      )}

      {/* Segment Category Filters (Only for List view) */}
      {viewMode === 'cards' && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 select-none border-b border-stone-200/50 dark:border-zinc-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-saraiki-maroon text-white font-bold'
                  : 'text-stone-600 dark:text-zinc-400 hover:bg-stone-100 dark:hover:bg-zinc-800/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Main Events Presentation Area */}
      {viewMode === 'cards' ? (
        /* Event Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-stone-200/60 dark:border-zinc-800/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 relative overflow-hidden bg-stone-100">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-bold bg-saraiki-maroon text-white px-2.5 py-0.5 rounded-full uppercase">
                    {ev.category}
                  </span>
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md rounded-lg py-1 px-2.5 text-white flex items-center gap-1 font-mono text-[10.5px]">
                    <CalendarIcon className="h-3.5 w-3.5 text-saraiki-gold" />
                    <span>{ev.date}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="font-display font-bold text-stone-900 dark:text-zinc-100 group-hover:text-saraiki-maroon dark:group-hover:text-maroon-400 transition text-sm sm:text-base">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {ev.description}
                  </p>
                  
                  <div className="pt-3 grid grid-cols-2 gap-3 text-xs text-stone-600 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="h-4 w-4 text-saraiki-blue shrink-0" />
                      <span className="truncate">{ev.location}, {ev.city}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-saraiki-blue shrink-0" />
                      <span className="truncate">{ev.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex justify-between items-center border-t border-stone-100/50 dark:border-zinc-800/50 mt-4">
                <div className="flex items-center gap-1 text-[11px] font-mono text-stone-400">
                  <Users className="h-3.5 w-3.5" />
                  <span>{ev.registeredCount} Devotees Registered</span>
                </div>
                <button
                  onClick={() => setRegisterEvent(ev)}
                  className="flex items-center gap-1 bg-saraiki-maroon hover:bg-maroon-800 text-white text-[11px] font-extrabold py-2 px-3.5 rounded-xl transition"
                >
                  Register Spot <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
          {filteredEvents.length === 0 && (
            <div className="col-span-2 py-12 text-center text-stone-500">No events found in this category.</div>
          )}
        </div>
      ) : (
        /* Calendar Grid View */
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200/60 dark:border-zinc-800 p-6 space-y-4 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center pb-2 border-b border-stone-100 dark:border-zinc-800">
            <h3 className="font-display font-extrabold text-base text-stone-900 dark:text-zinc-100">June 2026</h3>
            <span className="text-xs font-mono text-saraiki-maroon uppercase font-bold">Standard Summer Schedule</span>
          </div>
          
          <div className="grid grid-cols-7 gap-1 bg-stone-100 dark:bg-zinc-800 rounded-xl overflow-hidden text-center text-[10px] font-bold text-stone-500 uppercase tracking-wider py-2 select-none">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>

          <div className="grid grid-cols-7 gap-1.5 h-[350px]">
            {calendarDays.map((day) => {
              const hasEvents = day.dayEvents.length > 0;
              return (
                <div
                  key={day.dayNum}
                  onClick={() => {
                    if (hasEvents) {
                      setRegisterEvent(day.dayEvents[0]);
                    } else {
                      alert(`No events scheduled for June ${day.dayNum}, 2026.`);
                    }
                  }}
                  className={`rounded-xl p-1.5 border flex flex-col justify-between transition-all cursor-pointer ${
                    hasEvents
                      ? 'bg-maroon-500 border-saraiki-maroon text-white font-bold'
                      : 'bg-stone-50/50 dark:bg-zinc-950/20 border-stone-100 dark:border-zinc-800 hover:bg-stone-100'
                  }`}
                >
                  <span className={`text-[11px] ${hasEvents ? 'text-saraiki-gold' : 'text-stone-400 dark:text-zinc-500'}`}>{day.dayNum}</span>
                  {hasEvents && (
                    <span className="text-[9px] truncate tracking-tighter block text-white/90">
                      {day.dayEvents[0].title}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Interactive Registration Modal Popup */}
      {registerEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-stone-200/60 dark:border-zinc-800 p-6 max-w-md w-full relative space-y-5 shadow-2xl animate-scale-up">
            <button
              onClick={() => setRegisterEvent(null)}
              className="absolute top-4 right-4 p-2.5 rounded-xl text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-all"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <span className="text-[10px] font-extrabold uppercase bg-maroon-50 text-saraiki-maroon px-2.5 py-0.5 rounded-full border border-maroon-100">
                {registerEvent.category} Spot Reservation
              </span>
              <h3 className="font-display font-bold text-stone-950 dark:text-zinc-100 mt-2 text-base sm:text-lg">
                {registerEvent.title}
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-zinc-400 mt-1 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-saraiki-maroon" /> {registerEvent.location}, {registerEvent.city}
              </p>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-500 uppercase">Attendee Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  className="w-full bg-stone-100 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700/80 rounded-xl py-2 px-4 text-xs text-stone-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-500 uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={attendeeEmail}
                  onChange={(e) => setAttendeeEmail(e.target.value)}
                  className="w-full bg-stone-100 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700/80 rounded-xl py-2 px-4 text-xs text-stone-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-500 uppercase">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={attendeePhone}
                  onChange={(e) => setAttendeePhone(e.target.value)}
                  className="w-full bg-stone-100 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700/80 rounded-xl py-2 px-4 text-xs text-stone-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-saraiki-maroon"
                />
              </div>

              <div className="p-3 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-950 flex gap-2 text-xs">
                <AlertCircle className="h-4.5 w-4.5 text-saraiki-blue shrink-0 mt-0.5" />
                <span className="text-stone-600 dark:text-zinc-300">Admission is entirely free and sponsored by Auqaf, but pre-registration is required to regulate crowd control bounds.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-saraiki-maroon hover:bg-maroon-800 text-white py-2 px-4 rounded-xl text-xs font-bold transition-all"
              >
                Confirm Spot Registration
              </button>
            </form>

            {registrationSuccess && (
              <div className="p-3 bg-green-50 text-green-700 rounded-xl border border-green-100 flex items-center justify-center gap-2 text-xs font-bold animate-pulse">
                Ticket Reserved! Details sent to {attendeeEmail || 'your email'}.
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
