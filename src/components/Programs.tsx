'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PROGRAMS } from '@/lib/data';
import { Dumbbell, HeartPulse, Flame, Sparkles, Music, Activity, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProgramsProps {
  onOpenBooking: (programTitle?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="w-5 h-5 text-white" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-white" />,
  Flame: <Flame className="w-5 h-5 text-white" />,
  Sparkles: <Sparkles className="w-5 h-5 text-white" />,
  Music: <Music className="w-5 h-5 text-white" />,
  Activity: <Activity className="w-5 h-5 text-white" />,
  Shield: <Shield className="w-5 h-5 text-white" />,
};

export default function Programs({ onOpenBooking }: ProgramsProps) {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80 inline-block">
            Services & Training
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
            All Training <span className="text-[#3F87FF]">Programs & Disciplines</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Explore all 7 core programs: heavy Olympic weightlifting, cardio, functional turf, Yoga, Zumba, Pilates, and Taekwondo martial arts.
          </p>
        </div>

        {/* 7-Card Comprehensive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              onClick={() => onOpenBooking(`Service: ${prog.title}`)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 hover:border-[#3F87FF]/80 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 min-h-[350px] flex flex-col justify-between p-6 select-none"
            >
              {/* Photo Background */}
              <Image
                src={prog.image}
                alt={prog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/20 group-hover:from-slate-950 transition-colors" />

              {/* Top Controls */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#3F87FF] text-white flex items-center justify-center shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] border border-[#1E66E2] shrink-0 transition-transform group-hover:scale-110">
                  {iconMap[prog.icon] || <Dumbbell className="w-5 h-5 text-white" />}
                </div>

                <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-slate-900 font-extrabold text-[10px] uppercase tracking-wider rounded-lg shadow-xs border border-slate-200">
                  {prog.tag}
                </span>
              </div>

              {/* Bottom Details Overlay */}
              <div className="relative z-10 text-white space-y-2.5">
                <h3 className="text-xl font-black uppercase tracking-wide leading-tight text-white group-hover:text-[#3F87FF] transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-2">
                  {prog.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/15">
                  {prog.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5 text-[11px] text-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3F87FF] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#3F87FF] group-hover:text-blue-300">
                  <span>Book free trial class</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
