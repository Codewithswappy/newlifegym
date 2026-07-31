'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

interface FloatingCTAProps {
  onOpenBooking: (topic?: string) => void;
}

export default function FloatingCTA({ onOpenBooking }: FloatingCTAProps) {
  const whatsappUrl = `https://wa.me/${GYM_DETAILS.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(GYM_DETAILS.whatsappMessage)}`;

  return (
    <>
      {/* Desktop & Tablet Bottom Right Sticky WhatsApp Floating Button (Matching Second Image) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50 hidden sm:flex items-center gap-2.5"
      >
        {/* Small & Compact Badge */}
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-900 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1.5 rounded-full shadow-md hidden md:flex items-center gap-1.5 select-none">
          <MessageSquare className="w-3.5 h-3.5 fill-lime-600 stroke-none shrink-0" />
          <span>Chat on WhatsApp</span>
        </div>

        {/* Lime/Green Circular Floating Action Bubble (Inspired by Second Image) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-lime-400 hover:bg-lime-300 text-slate-950 rounded-full flex items-center justify-center shadow-xl shadow-lime-500/25 hover:scale-110 active:scale-95 transition-all group"
          aria-label="Chat on WhatsApp"
        >
          {/* Speech Bubble Icon */}
          <MessageSquare className="w-7 h-7 fill-slate-950 stroke-none" />
          
          {/* Notification Red/Emerald Dot */}
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-emerald-600 border-2 border-white rounded-full" />
        </a>
      </motion.div>

      {/* Mobile-Only Sticky Bottom Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-slate-200 p-2.5 backdrop-blur-lg sm:hidden grid grid-cols-2 gap-2 shadow-2xl">
        <a
          href={`tel:${GYM_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
          className="py-3 px-4 bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 text-lime-700" />
          <span>Call Gym</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-4 bg-lime-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
