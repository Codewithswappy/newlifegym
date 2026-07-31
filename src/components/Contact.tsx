'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GYM_DETAILS } from '@/lib/data';
import { MapPin, Phone, MessageSquare, Clock, User, ChevronDown, Check, ExternalLink } from 'lucide-react';

interface ContactProps {
  onOpenBooking: (topic?: string) => void;
}

const TIMING_OPTIONS = [
  'Morning (6 AM - 11 AM)',
  'Afternoon (11 AM - 4 PM)',
  'Evening (4 PM - 11 PM)',
];

export default function Contact({ onOpenBooking }: ContactProps) {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formTiming, setFormTiming] = useState('Morning (6 AM - 11 AM)');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    const message = `Hello New Life Fitness!%0A%0AName: ${encodeURIComponent(formName)}%0APhone: ${encodeURIComponent(formPhone)}%0APferred Timing: ${encodeURIComponent(formTiming)}%0A%0AI would like to book a free walk-in trial pass at your Sector 24 Kamothe location!`;
    const whatsappUrl = `https://wa.me/${GYM_DETAILS.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;

    setIsSent(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSent(false);
      setFormName('');
      setFormPhone('');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1 rounded-full border border-lime-200 inline-block">
            Visit & Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
            Location & Hours
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Stop by for a free walk-in tour anytime during operational hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Cards & Light Mode Form */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Address & Hours Info Card (Light Mode) */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-5 text-xs shadow-xs">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4 text-lime-600" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">Physical Address</div>
                  <div className="text-slate-600 mt-0.5 leading-snug font-medium">{GYM_DETAILS.address}</div>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3.5 border-t border-slate-200/80">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                    <Phone className="w-4 h-4 text-lime-600" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">Phone Call</div>
                    <a
                      href={`tel:${GYM_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-slate-800 hover:text-lime-700 font-bold mt-0.5 inline-block"
                    >
                      {GYM_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                    <MessageSquare className="w-4 h-4 text-lime-600" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">WhatsApp Direct</div>
                    <a
                      href={`https://wa.me/${GYM_DETAILS.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-700 hover:underline font-bold mt-0.5 inline-block"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 pt-3.5 border-t border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                  <Clock className="w-4 h-4 text-lime-600" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">Operational Hours</div>
                  <div className="text-slate-600 font-medium mt-0.5">Mon – Sat: {GYM_DETAILS.hours.weekdays}</div>
                  <div className="text-slate-600 font-medium">Sunday: {GYM_DETAILS.hours.sunday}</div>
                </div>
              </div>
            </div>

            {/* Quick Walk-In Form (100% LIGHT MODE — NO DARK COLORS) */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 shadow-xs">
              <div>
                <h3 className="text-base font-extrabold uppercase tracking-wide text-slate-900">
                  Book Free Walk-In Pass
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Get instant trial pass sent directly to your WhatsApp.
                </p>
              </div>

              <form onSubmit={handleQuickInquiry} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-white border border-slate-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-lime-500 shadow-2xs"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Number"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-white border border-slate-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-lime-500 shadow-2xs"
                    />
                  </div>
                </div>

                {/* Custom Ultra-Clean Animated Dropdown (NO UGLY BLUE SELECT) */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-3 text-xs text-slate-900 flex items-center justify-between font-semibold focus:outline-none focus:border-lime-500 shadow-2xs cursor-pointer select-none"
                  >
                    <span>{formTiming}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-lime-600' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 right-0 z-30 bg-white border border-slate-200/90 rounded-xl shadow-lg p-1 space-y-0.5 overflow-hidden"
                      >
                        {TIMING_OPTIONS.map((option) => {
                          const isSelected = formTiming === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setFormTiming(option);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                                isSelected ? 'bg-lime-50 text-slate-950 font-bold' : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span>{option}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-lime-600" />}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  disabled={isSent}
                  className="w-full py-3.5 px-4 bg-lime-400 hover:bg-lime-300 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none shrink-0" />
                  <span>{isSent ? 'Redirecting to WhatsApp...' : 'Get Trial Pass on WhatsApp'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (Exact Pinpoint Location) */}
          <div className="lg:col-span-6 rounded-md overflow-hidden border border-slate-200 bg-slate-100 min-h-[440px] relative shadow-xs flex flex-col">
            <div className="p-3 bg-white border-b border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-900">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-lime-600" />
                <span>New Life Fitness — Sector 24, Kamothe</span>
              </span>
              <a
                href="https://maps.google.com/?q=New+Life+Fitness+Sector+24+Kamothe+Panvel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-700 hover:underline inline-flex items-center gap-1 text-[11px]"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <iframe
              title="New Life Fitness Location Map Pinpoint"
              src="https://maps.google.com/maps?q=New+Life+Fitness+Sector+24+Kamothe+Panvel+Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-1 min-h-[400px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
