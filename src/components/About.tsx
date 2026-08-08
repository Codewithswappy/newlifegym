'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Shield, Users, Award } from 'lucide-react';

interface AboutProps {
  onOpenBooking?: (planName?: string) => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Top Header & Core Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Section Badge & Context */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80 inline-block">
              About Revamp Fitness
            </span>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Sector 20, Kharghar · Mita Heights
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Established as a premier unisex fitness and martial arts destination in Navi Mumbai, engineered for real body transformations, functional endurance, and lifelong health.
            </p>
          </div>

          {/* Right Column: Large Manifesto & Mission/Vision Split */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Primary Large Statement */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.25]"
            >
              At Revamp Fitness, we believe fitness is more than just working out — it’s a{' '}
              <span className="text-[#3F87FF] underline decoration-blue-300 underline-offset-4">
                lifestyle
              </span>{' '}
              that empowers you to become stronger.
            </motion.h2>

            {/* Mission & Vision 2-Column Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
              
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-2.5"
              >
                <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg sm:text-xl">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#3F87FF] flex items-center justify-center shrink-0 border border-blue-200/60">
                    <Dumbbell className="w-4 h-4 text-[#3F87FF]" />
                  </div>
                  <span>Our mission</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our mission is to inspire and empower individuals across Kharghar to lead healthier, stronger, and more confident lives through structured weight training, positive community support, and expert coaching.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-2.5"
              >
                <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg sm:text-xl">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#3F87FF] flex items-center justify-center shrink-0 border border-blue-200/60">
                    <Shield className="w-4 h-4 text-[#3F87FF]" />
                  </div>
                  <span>Our vision</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our vision is to be Kharghar’s leading all-in-one fitness destination that transforms lives by integrating heavy strength, cardio endurance, serene Yoga, high-energy Zumba, and certified Taekwondo martial arts.
                </p>
              </motion.div>

            </div>

          </div>

        </div>

        {/* 3 Impactful Metric Cards across the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Card 1: Active Community (Light Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 flex flex-col justify-between min-h-[190px] shadow-xs relative overflow-hidden group hover:border-[#3F87FF]/60 transition-colors"
          >
            <div className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest">
              Community Members
            </div>

            <div className="flex items-end justify-between mt-6">
              <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-none">
                2,500<span className="text-[#3F87FF]">+</span>
              </div>
              <Users className="w-10 h-10 text-slate-300 stroke-[1.5] group-hover:text-[#3F87FF] transition-colors" />
            </div>
          </motion.div>

          {/* Card 2: Core Programs & Disciplines (Dark Accent Card in Middle) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col justify-between min-h-[190px] shadow-xl relative overflow-hidden group"
          >
            <div className="text-[11px] font-extrabold text-[#3F87FF] uppercase tracking-widest flex items-center justify-between">
              <span>Fitness & Martial Arts Disciplines</span>
              <span className="w-2 h-2 rounded-full bg-[#3F87FF] animate-pulse" />
            </div>

            <div className="flex items-end justify-between mt-6">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                7<span className="text-[#3F87FF]">+</span>
              </div>
              <Dumbbell className="w-10 h-10 text-[#3F87FF] stroke-[2] group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: Certified Coaches & Masters (Light Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 flex flex-col justify-between min-h-[190px] shadow-xs relative overflow-hidden group hover:border-[#3F87FF]/60 transition-colors"
          >
            <div className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest">
              Expert Coaches & Masters
            </div>

            <div className="flex items-end justify-between mt-6">
              <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-none">
                8<span className="text-[#3F87FF]">+</span>
              </div>
              <Award className="w-10 h-10 text-slate-300 stroke-[1.5] group-hover:text-[#3F87FF] transition-colors" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
