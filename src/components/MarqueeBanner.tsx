'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Asterisk } from 'lucide-react';

export default function MarqueeBanner() {
  const items = [
    'PERSONAL TRAINING',
    'WEIGHT TRAINING',
    'FUNCTIONAL TRAINING',
    'BODY TRANSFORMATION',
    'CROSSFIT WODS',
    'FAT LOSS & CONDITIONING',
    'NUTRITION GUIDANCE',
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden select-none">
      <div className="relative w-full py-8 flex flex-col justify-center items-center gap-2">
        
        {/* Ribbon 1: Angled Slate Ribbon (-rotate-2) */}
        <div className="w-[120%] -rotate-2 bg-slate-900 text-white py-3 shadow-md z-10 overflow-hidden flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            className="flex items-center gap-6 shrink-0"
          >
            {[...items, ...items, ...items, ...items].map((text, idx) => (
              <div key={idx} className="flex items-center gap-6 text-xs sm:text-sm font-black uppercase tracking-widest">
                <span>{text}</span>
                <Asterisk className="w-4 h-4 text-lime-400 shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Ribbon 2: Angled Lime Ribbon (rotate-2 crossing over) */}
        <div className="w-[120%] rotate-2 bg-lime-400 text-slate-950 py-3 shadow-md z-20 overflow-hidden flex whitespace-nowrap -mt-6">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 22 }}
            className="flex items-center gap-6 shrink-0"
          >
            {[...items, ...items, ...items, ...items].map((text, idx) => (
              <div key={idx} className="flex items-center gap-6 text-xs sm:text-sm font-black uppercase tracking-widest">
                <span>{text}</span>
                <Asterisk className="w-4 h-4 text-slate-950 shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
