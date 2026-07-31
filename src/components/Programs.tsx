'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PROGRAMS } from '@/lib/data';
import { Dumbbell, Zap, Flame, Users, CheckCircle2 } from 'lucide-react';

interface ProgramsProps {
  onOpenBooking: (programTitle?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="w-5 h-5 text-slate-950" />,
  Zap: <Zap className="w-5 h-5 text-slate-950" />,
  Flame: <Flame className="w-5 h-5 text-slate-950" />,
  Users: <Users className="w-5 h-5 text-slate-950" />,
};

export default function Programs({ onOpenBooking }: ProgramsProps) {
  // Map 4 programs to asymmetrical Bento grid spans (8-4 / 4-8)
  const bentoSpans = [
    'md:col-span-8', // Card 1: Large Wide Bento Block
    'md:col-span-4', // Card 2: Medium Bento Block
    'md:col-span-4', // Card 3: Medium Bento Block
    'md:col-span-8', // Card 4: Large Wide Bento Block
  ];

  return (
    <section id="programs" className="py-20 sm:py-28 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1 rounded-full border border-lime-200/80 inline-block">
              Training Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Services We Provide
            </h2>
          </div>
        </div>

        {/* Real Asymmetrical Bento Grid (8-4 / 4-8 Span Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {PROGRAMS.map((prog, idx) => {
            const spanClass = bentoSpans[idx % bentoSpans.length];

            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                onClick={() => onOpenBooking(`Program: ${prog.title}`)}
                className={`${spanClass} relative rounded-md overflow-hidden bg-slate-900 border border-slate-200/80 hover:border-lime-500/70 cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300 min-h-[280px] sm:h-72 select-none flex flex-col justify-between p-6`}
              >
                {/* Photo Background */}
                {/* TODO: PRIORITY — Replace with real photo of this service */}
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20 group-hover:from-slate-950/95 transition-colors" />

                {/* Top Controls: Icon left, Category pill right */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center shadow-xs shrink-0">
                    {iconMap[prog.icon] || <Dumbbell className="w-5 h-5 text-slate-950" />}
                  </div>

                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-slate-900 font-extrabold text-[10px] uppercase tracking-wider rounded-lg shadow-xs border border-slate-200">
                    {prog.category}
                  </span>
                </div>

                {/* Bottom Details Overlay (NO BUTTON) */}
                <div className="relative z-10 text-white space-y-2 max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide leading-tight text-white group-hover:text-lime-400 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-2">
                    {prog.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-white/15">
                    {prog.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-[11px] text-slate-200 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
