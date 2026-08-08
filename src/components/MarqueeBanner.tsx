'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Asterisk } from 'lucide-react';

export default function MarqueeBanner() {
  const items = [
    'WEIGHT TRAINING',
    'CARDIO TRAINING',
    'FUNCTIONAL TURF',
    'YOGA SESSIONS',
    'ZUMBA DANCE FITNESS',
    'PILATES CORE',
    'TAEKWONDO MARTIAL ARTS',
    'TOP-QUALITY EQUIPMENT',
    'CLEAN RESTROOMS & SHOWERS',
    'MOTIVATING MUSIC & VIBE',
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden select-none">
      <div className="relative w-full py-8 flex flex-col justify-center items-center gap-2">
        
        {/* Ribbon 1: Angled Slate Ribbon (-rotate-2) */}
        <div className="w-[120%] -rotate-2 bg-slate-900 text-white py-3 shadow-md z-10 overflow-hidden flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            className="flex items-center gap-6 shrink-0"
          >
            {[...items, ...items, ...items].map((text, idx) => (
              <div key={idx} className="flex items-center gap-6 text-xs sm:text-sm font-black uppercase tracking-widest">
                <span>{text}</span>
                <Asterisk className="w-4 h-4 text-[#3F87FF] shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Ribbon 2: Angled #3F87FF Ribbon (rotate-2 crossing over) */}
        <div className="w-[120%] rotate-2 bg-[#3F87FF] text-white py-3 shadow-md z-20 overflow-hidden flex whitespace-nowrap -mt-6 border-y border-[#1E66E2]">
          <motion.div
            animate={{ x: [-1200, 0] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 22 }}
            className="flex items-center gap-6 shrink-0"
          >
            {[...items, ...items, ...items].map((text, idx) => (
              <div key={idx} className="flex items-center gap-6 text-xs sm:text-sm font-black uppercase tracking-widest">
                <span>{text}</span>
                <Asterisk className="w-4 h-4 text-white shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
