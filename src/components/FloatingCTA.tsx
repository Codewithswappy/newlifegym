'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

interface FloatingCTAProps {
  onOpenBooking: (topic?: string) => void;
}

export default function FloatingCTA({ onOpenBooking }: FloatingCTAProps) {
  const whatsappUrl = `https://wa.me/${GYM_DETAILS.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(GYM_DETAILS.whatsappMessage)}`;

  return (
    /* Floating WhatsApp Action Bubble (Visible on BOTH Mobile and Desktop) */
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5"
    >
      {/* Small & Compact Badge (Hidden on mobile, visible on desktop) */}
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-900 text-[9px] uppercase font-bold tracking-wider px-2.5 py-1.5 rounded-full shadow-md hidden md:flex items-center gap-1.5 select-none">
        <div className="w-2 h-2 animate-pulse rounded-full bg-lime-600 stroke-none shrink-0" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Lime/Green Circular Floating Action Bubble */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 sm:w-14 sm:h-14 bg-lime-400 hover:bg-lime-300 text-slate-950 rounded-full flex items-center justify-center shadow-xl shadow-lime-500/25 hover:scale-110 active:scale-95 transition-all group"
        aria-label="Chat on WhatsApp"
      >
        {/* Speech Bubble Icon */}
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950 stroke-none" />
        
        {/* Notification Indicator Dot */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-500 border-2  border-white rounded-full" />
      </a>
    </motion.div>
  );
}
