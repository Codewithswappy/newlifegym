'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GYM_DETAILS } from '@/lib/data';
import { MapPin, Phone, MessageSquare, Clock, User, ChevronDown, Check, ExternalLink } from 'lucide-react';

interface ContactProps {
  onOpenBooking: (topic?: string) => void;
}

const TIMING_OPTIONS = [
  'Morning (5 AM - 10 AM)',
  'Afternoon (10 AM - 4 PM)',
  'Evening (4 PM - 11 PM)',
];

export default function Contact({ onOpenBooking }: ContactProps) {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formTiming, setFormTiming] = useState('Morning (5 AM - 10 AM)');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    const message = `Hello Revamp Fitness!%0A%0AName: ${encodeURIComponent(formName)}%0APhone: ${encodeURIComponent(formPhone)}%0APreferred Timing: ${encodeURIComponent(formTiming)}%0A%0AI would like to book a free walk-in trial pass at your Mita Heights, Sector 20 Kharghar location!`;
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
            Visit & Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
            Location & <span className="text-[#3F87FF]">Hours</span>
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Stop by for a free walk-in tour at Mita Heights anytime during operational hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Cards & Light Mode Form */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Address & Hours Info Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-5 text-xs shadow-xs">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#3F87FF]" />
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
                    <Phone className="w-4 h-4 text-[#3F87FF]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">Phone Call</div>
                    <a
                      href={`tel:${GYM_DETAILS.phoneRaw}`}
                      className="text-slate-800 hover:text-[#1D4ED8] font-bold mt-0.5 inline-block"
                    >
                      {GYM_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                    <MessageSquare className="w-4 h-4 text-[#3F87FF]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">WhatsApp Direct</div>
                    <a
                      href={`https://wa.me/${GYM_DETAILS.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1D4ED8] hover:underline font-bold mt-0.5 inline-block"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 pt-3.5 border-t border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                  <Clock className="w-4 h-4 text-[#3F87FF]" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">Operational Hours</div>
                  <div className="text-slate-600 font-medium mt-0.5">Mon – Sat: {GYM_DETAILS.hours.weekdays}</div>
                  <div className="text-slate-600 font-medium">Sunday: {GYM_DETAILS.hours.sunday}</div>
                </div>
              </div>
            </div>

            {/* Quick Walk-In Form with exact Button */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 shadow-xs">
              <div>
                <h3 className="text-base font-extrabold uppercase tracking-wide text-slate-900">
                  Book Free Walk-In Pass
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Get instant trial pass confirmation sent directly to your WhatsApp.
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
                      className="w-full bg-white border border-slate-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3F87FF] shadow-2xs"
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
                      className="w-full bg-white border border-slate-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3F87FF] shadow-2xs"
                    />
                  </div>
                </div>

                {/* Custom Animated Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-white border border-slate-200/90 rounded-xl px-4 py-3 text-xs text-slate-900 flex items-center justify-between font-semibold focus:outline-none focus:border-[#3F87FF] shadow-2xs cursor-pointer select-none"
                  >
                    <span>{formTiming}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#3F87FF]' : ''}`} />
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
                                isSelected ? 'bg-blue-50 text-[#1D4ED8] font-bold' : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span>{option}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#3F87FF]" />}
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
                  className="w-full py-3.5 px-4 bg-[#3F87FF] hover:bg-[#2C7AF5] text-white font-bold rounded-full text-xs uppercase tracking-wider border-[2.5px] border-[#1E66E2] hover:border-[#1758CA] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 select-none"
                >
                  <MessageSquare className="w-4 h-4 fill-white stroke-none shrink-0" />
                  <span>{isSent ? 'Redirecting to WhatsApp...' : 'Get Trial Pass on WhatsApp'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-6 rounded-md overflow-hidden border border-slate-200 bg-slate-100 min-h-[440px] relative shadow-xs flex flex-col">
            <div className="p-3 bg-white border-b border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-900">
              <span className="flex items-center gap-1.5 truncate">
                <MapPin className="w-4 h-4 text-[#3F87FF] shrink-0" />
                <span className="truncate">Revamp Fitness — Sector 20, Kharghar</span>
              </span>
              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D4ED8] hover:underline inline-flex items-center gap-1 text-[11px] shrink-0"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <iframe
              title="Revamp Fitness Location Map Pinpoint"
              src="https://maps.google.com/maps?q=Revamp+Fitness+Mita+Heights+Plot+51B+Sector+20+Kharghar+Navi+Mumbai+410210&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
