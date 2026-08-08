'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FACILITY_HIGHLIGHTS } from '@/lib/data';
import { Dumbbell, Zap, Sparkles, Shield, Lock, Music } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="w-5 h-5 text-white" />,
  Zap: <Zap className="w-5 h-5 text-white" />,
  Sparkles: <Sparkles className="w-5 h-5 text-white" />,
  Shield: <Shield className="w-5 h-5 text-white" />,
  Lock: <Lock className="w-5 h-5 text-white" />,
  Music: <Music className="w-5 h-5 text-white" />,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80 inline-block">
            Amenities & Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
            Facility <span className="text-[#3F87FF]">Highlights & Spaces</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Spacious air-conditioned floors, dedicated Taekwondo dojang, quiet yoga studio, and spotless washrooms.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITY_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 hover:border-[#3F87FF]/80 shadow-xs hover:shadow-xl transition-all duration-300 min-h-[300px] flex flex-col justify-end p-5 select-none"
            >
              {/* Photo Background */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 text-white space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#3F87FF] text-white flex items-center justify-center shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] border border-[#1E66E2]">
                  {iconMap[item.icon] || <Dumbbell className="w-5 h-5 text-white" />}
                </div>

                <h3 className="text-base font-black uppercase tracking-wide leading-tight group-hover:text-[#3F87FF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
