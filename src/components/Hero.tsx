'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowRight, MessageSquare, Dumbbell, Sparkles, Shield, HeartPulse, Flame, Music } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

interface HeroProps {
  onOpenBooking: (planName?: string) => void;
}

const quickPills = [
  { name: 'Weight Training', icon: Dumbbell },
  { name: 'Cardio Training', icon: HeartPulse },
  { name: 'Functional Turf', icon: Flame },
  { name: 'Yoga & Pilates', icon: Sparkles },
  { name: 'Zumba Dance', icon: Music },
  { name: 'Taekwondo', icon: Shield },
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const whatsappHeroUrl = `https://wa.me/${GYM_DETAILS.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(GYM_DETAILS.whatsappMessage)}`;

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[92vh] pt-28 sm:pt-36 pb-14 sm:pb-24 flex items-center overflow-hidden bg-white">
      {/* Full Background Image: hero.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Revamp Fitness Sector 20 Kharghar Gym Interior"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover object-right sm:object-center"
        />
        {/* Soft, crisp horizontal gradient overlay for 100% text contrast on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/70 sm:to-transparent" />
        
        {/* Bottom Mask Fade Blur to seamlessly merge the photo with the sections below */}
        <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-44 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-between min-h-[55vh] sm:min-h-[64vh]">
        
        {/* Top & Middle Section: Headline, Subheading, Pills */}
        <div className="max-w-3xl space-y-4 sm:space-y-5 text-left">
          
          {/* Top Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="relative overflow-hidden inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs rounded-full group cursor-default"
          >
            <motion.div
              animate={{ x: ['-100%', '250%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', repeatDelay: 1 }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 pointer-events-none"
            />
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500 shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-slate-900 tracking-tight">
              {GYM_DETAILS.googleRating}.0 rating on Google · Sector 20, Kharghar
            </span>
          </motion.div>

          {/* Official Branding Slogan Headline (Responsive font sizing for perfect mobile/desktop rendering) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[26px] sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold text-slate-900 tracking-tight leading-[1.18] uppercase"
          >
            <span className="block sm:whitespace-nowrap">Revamp your fitness.</span>
            <span className="block mt-0.5 sm:mt-1.5">
              <span className="bg-[#3F87FF] text-white px-2 sm:px-2.5 py-0.5 rounded-lg inline-block shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.35)] border border-[#1E66E2]">
                The change
              </span>{' '}
              you need.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold max-w-xl"
          >
            {GYM_DETAILS.subheading}
          </motion.p>

          {/* Quick Service Badges Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap gap-1.5 sm:gap-2 pt-1"
          >
            {quickPills.map((pill) => {
              const IconComponent = pill.icon;
              return (
                <button
                  key={pill.name}
                  type="button"
                  onClick={() => onOpenBooking(`Service: ${pill.name}`)}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-white/95 hover:bg-blue-50 backdrop-blur-xs border border-slate-200/90 hover:border-[#3F87FF] text-slate-800 hover:text-[#1D4ED8] rounded-full text-[10px] sm:text-[11px] font-bold tracking-tight transition-colors cursor-pointer shadow-2xs"
                >
                  <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3F87FF] shrink-0" />
                  <span>{pill.name}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Row: Right-aligned CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3.5 w-full"
        >
          <button
            onClick={() => onOpenBooking('Book free trial')}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-[#3F87FF] hover:bg-[#2C7AF5] text-white font-bold rounded-full text-xs uppercase tracking-wider border-[2.5px] border-[#1E66E2] hover:border-[#1758CA] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 select-none shrink-0"
          >
            <span>Book free trial pass</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-slate-900/95 hover:bg-slate-900 backdrop-blur-md text-white font-bold rounded-full text-xs uppercase tracking-wider border-[2px] border-slate-700 shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white stroke-none shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
