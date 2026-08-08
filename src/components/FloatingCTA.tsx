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
        <div className="w-2 h-2 animate-pulse rounded-full bg-[#3F87FF] stroke-none shrink-0" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Action Bubble in #3F87FF with exact inner border */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[#3F87FF] hover:bg-[#2C7AF5] text-white rounded-full flex items-center justify-center border-[2.5px] border-[#1E66E2] hover:border-[#1758CA] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95 transition-all group cursor-pointer"
        aria-label="Chat on WhatsApp with Revamp Fitness"
      >
        {/* Speech Bubble Icon */}
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none" />
        
        {/* Notification Indicator Dot */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-500 border-2 border-white rounded-full" />
      </a>
    </motion.div>
  );
}
