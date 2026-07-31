'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Lock, Car, CheckCircle2 } from 'lucide-react';

export default function Facilities() {
  const items = [
    { title: 'Free weights & power racks', desc: 'Olympic barbells, dumbbells, power racks', icon: <Dumbbell className="w-4 h-4 text-lime-700" /> },
    { title: 'Cardio & conditioning deck', desc: 'Commercial treadmills & cross-trainers', icon: <Activity className="w-4 h-4 text-lime-700" /> },
    { title: 'Clean lockers & showers', desc: 'Private lockers and hot water showers', icon: <Lock className="w-4 h-4 text-lime-700" /> },
    { title: 'Dedicated parking & AC', desc: 'Free parking and full climate control', icon: <Car className="w-4 h-4 text-lime-700" /> },
  ];

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] shadow-xs group">
              {/* TODO: PRIORITY — Replace with real photo of New Life Fitness strength floor */}
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
                alt="New Life Fitness Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between text-xs font-bold text-slate-900">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-600" />
                  <span>Industrial equipment standard</span>
                </span>
                <span className="text-lime-700 font-extrabold">Sector 24, Kamothe</span>
              </div>
            </div>
          </motion.div>

          {/* Infrastructure Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1 rounded-full border border-lime-200/80 inline-block">
                Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built for heavy training and everyday comfort
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pristine machinery, regular sanitation, continuous air circulation, and spacious floor layouts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-lime-500/50 transition-all duration-300 shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-lg bg-lime-100 border border-lime-200/80 shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
