'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TRAINERS } from '@/lib/data';
import { Award } from 'lucide-react';

const FILTER_ROLES = ['All Coaches', 'Male Coaches', 'Female Coaches'];

export default function Trainers() {
  const [selectedRole, setSelectedRole] = useState('All Coaches');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredTrainers = selectedRole === 'All Coaches'
    ? TRAINERS
    : selectedRole === 'Male Coaches'
    ? TRAINERS.filter((t) => t.gender === 'male')
    : TRAINERS.filter((t) => t.gender === 'female');

  return (
    <section id="trainers" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80 inline-block">
              Certified Coaching Staff
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Team of <span className="text-[#3F87FF]">Expert Coaches</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Certified male & female personal trainers, Taekwondo black-belt masters, Yoga instructors, and Zumba coaches.
            </p>
          </div>

          {/* Filter Pills with smooth sliding layout animation */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 border border-slate-200/80 rounded-xl sm:rounded-2xl self-center sm:self-auto">
            {FILTER_ROLES.map((role) => {
              const isSelected = selectedRole === role;
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`relative px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-extrabold tracking-tight transition-colors duration-200 cursor-pointer select-none ${
                    isSelected ? 'text-[#1D4ED8]' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeTrainerFilter"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 bg-white rounded-lg sm:rounded-xl shadow-xs border border-blue-200"
                    />
                  )}
                  <span className="relative z-10">{role}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 8-Card Balanced Grid */}
        <motion.div
          layout="position"
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[380px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredTrainers.map((trainer) => {
              const isHovered = hoveredId === trainer.id;

              return (
                <motion.div
                  key={trainer.id}
                  layout="position"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  onMouseEnter={() => setHoveredId(trainer.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative rounded-2xl overflow-hidden aspect-[4/4.8] bg-slate-900 cursor-pointer group shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/90 hover:border-[#3F87FF]/80 select-none flex flex-col justify-end p-4"
                >
                  {/* Real Coach Portrait Image (User's AVIF Asset) */}
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Permanent Bottom Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                  {/* Experience Badge Top Right with #3F87FF and inner shadow */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#3F87FF] text-white rounded-lg font-black text-[10px] uppercase tracking-wider z-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] border border-[#1E66E2] flex items-center gap-1">
                    <Award className="w-3 h-3 text-white" />
                    <span>{trainer.experience}</span>
                  </div>

                  {/* Gender Tag Top Left */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 backdrop-blur-md text-white border border-white/20 rounded-md font-bold text-[9px] uppercase tracking-wider z-10">
                    {trainer.gender === 'female' ? 'Female Coach' : 'Male Coach'}
                  </div>

                  {/* Always-Visible Bottom Info */}
                  <div className="relative z-10 text-white space-y-1">
                    <div className="text-base font-extrabold uppercase tracking-wide leading-tight group-hover:text-[#3F87FF] transition-colors">
                      {trainer.name}
                    </div>
                    <div className="text-[11px] font-bold text-[#3F87FF] uppercase tracking-wider">
                      {trainer.role}
                    </div>

                    {/* Specialization Tags Strip */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {trainer.specialization.map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-white/20 rounded-md text-[9px] font-bold uppercase text-slate-100 tracking-tight"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Bio Reveal on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px] text-slate-200 leading-snug font-medium pt-1 line-clamp-2"
                        >
                          {trainer.bio}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
