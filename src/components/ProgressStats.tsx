'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Asterisk, Star, ShieldCheck, Clock, MapPin, Users } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

export default function ProgressStats() {
  const statItems = [
    { label: 'GOOGLE RATING', value: `${GYM_DETAILS.googleRating} STAR RATING`, icon: <Star className="w-4 h-4 text-slate-950 fill-slate-950 inline shrink-0" /> },
    { label: 'VERIFIED REVIEWS', value: `${GYM_DETAILS.googleReviewsCount}+ REVIEWS`, icon: <ShieldCheck className="w-4 h-4 text-slate-950 inline shrink-0" /> },
    { label: 'OPERATIONAL TIMINGS', value: '6:00 AM – 11:00 PM', icon: <Clock className="w-4 h-4 text-slate-950 inline shrink-0" /> },
    { label: 'LOCATION', value: 'SECTOR 24 KAMOTHE PANVEL', icon: <MapPin className="w-4 h-4 text-slate-950 inline shrink-0" /> },
    { label: 'CERTIFIED COACHES', value: '15+ EXPERT TRAINERS', icon: <Users className="w-4 h-4 text-slate-950 inline shrink-0" /> },
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden select-none">
      {/* Angled Lime Green Ribbon Banner (-rotate-2) Inspired by Image 2 */}
      <div className="w-[120%] -ml-[10%] -rotate-2 bg-lime-400 text-slate-950 py-3.5 shadow-md border-y border-lime-500 overflow-hidden flex whitespace-nowrap z-10 relative">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
          className="flex items-center gap-8 shrink-0"
        >
          {[...statItems, ...statItems, ...statItems, ...statItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-xs sm:text-sm font-black uppercase tracking-widest text-slate-950">
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.value}</span>
              </div>
              <Asterisk className="w-4 h-4 text-slate-950 shrink-0 stroke-[3]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
