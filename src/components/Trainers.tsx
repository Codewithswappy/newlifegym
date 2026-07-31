'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TRAINERS } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function Trainers() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="trainers" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1 rounded-full border border-lime-200/80 inline-block">
              Coaching Staff
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Team of <span className="text-lime-600">Expert Coaches</span>
            </h2>
          </div>
        </div>

        {/* 6-Card Balanced Grid (3 Columns × 2 Rows) Matching Reference Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAINERS.slice(0, 6).map((trainer, idx) => {
            const isHovered = hoveredId === trainer.id;

            return (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                onMouseEnter={() => setHoveredId(trainer.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Photo */}
                {/* TODO: PRIORITY — Replace with real trainer photo */}
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Permanent Bottom Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Experience Badge Top Right */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 bg-lime-400 text-slate-950 rounded-md font-black text-[10px] uppercase tracking-wider z-10 shadow-xs">
                  {trainer.experience}
                </div>

                {/* Default Text Overlay (Bottom Left) */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white flex items-end justify-between">
                  <div>
                    {/* TODO: Replace with real trainer name */}
                    <div className="text-base font-extrabold uppercase tracking-wide leading-tight">
                      {trainer.name}
                    </div>
                    <div className="text-[11px] font-bold text-lime-400 uppercase tracking-wider mt-0.5">
                      {trainer.role}
                    </div>
                  </div>

                  {/* Red/Lime Arrow Button Icon */}
                  <div className="w-7 h-7 rounded-lg bg-lime-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>

                {/* On Hover Animated Text Overlay — Transparent backdrop, no background box */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs p-5 flex flex-col justify-end text-white z-20"
                    >
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-bold text-lime-400 uppercase tracking-wider">
                          {trainer.role} · {trainer.experience}
                        </div>
                        <h3 className="text-base font-black uppercase tracking-wide leading-tight">
                          {trainer.name}
                        </h3>
                        <p className="text-[11px] text-slate-200 leading-snug font-medium line-clamp-3">
                          {trainer.bio}
                        </p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {trainer.specialization.map((spec) => (
                            <span
                              key={spec}
                              className="px-2 py-0.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-[9px] font-bold uppercase text-white"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
