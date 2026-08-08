'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Shield, Lock, Music, CheckCircle2, ArrowRight } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

interface WhyChooseUsProps {
  onOpenBooking?: (planName?: string) => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const whyUsCards = [
    {
      title: 'Top-Quality Modern Equipment',
      desc: 'Olympic power racks, barbells, dumbbells up to 50kg, and smooth commercial cardio & isolation machines.',
      icon: <Dumbbell className="w-5 h-5 text-white" />,
      badge: 'Industrial Grade',
    },
    {
      title: 'All-In-One Diverse Disciplines',
      desc: 'Weight Training, Cardio Deck, Functional Turf, Yoga, Zumba, Pilates, and certified Taekwondo martial arts.',
      icon: <Shield className="w-5 h-5 text-white" />,
      badge: '7+ Disciplines',
    },
    {
      title: 'Spotless Cleanliness & Showers',
      desc: 'Sanitized washrooms, private changing cubicles, hot showers, and secure member lockers maintained continuously.',
      icon: <Lock className="w-5 h-5 text-white" />,
      badge: 'Sanitized 24/7',
    },
    {
      title: 'Energetic Music & Motivating Vibe',
      desc: 'High-energy sound setup, clean air conditioning, welcoming community, and certified coaches who support you.',
      icon: <Music className="w-5 h-5 text-white" />,
      badge: 'High Energy',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-slate-50/80 border-b border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
            Why Choose <span className="text-[#3F87FF]">Revamp Fitness</span>?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            The premier all-in-one gym, studio, and martial arts center at Mita Heights, Sector 20, Kharghar.
          </p>
        </div>

        {/* 4 Feature Cards with Top Circular Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {whyUsCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200/90 hover:border-[#3F87FF]/80 rounded-2xl p-6 text-center space-y-3 transition-all duration-300 shadow-xs hover:shadow-md relative pt-10 flex flex-col justify-between"
            >
              {/* Top Circular Badge in #3F87FF with Inner Shadow */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#3F87FF] text-white border-2 border-white flex items-center justify-center shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)]">
                {card.icon}
              </div>

              <div className="space-y-2">
                <div className="inline-block px-2 py-0.5 bg-blue-50 border border-blue-200 text-[#1D4ED8] rounded-md text-[10px] font-extrabold uppercase tracking-wider">
                  {card.badge}
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{card.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#1D4ED8]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3F87FF]" />
                <span>Sector 20 Kharghar standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Trial Pass Callout Banner with exact inner-border button */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
              Ready to experience Revamp Fitness for yourself?
            </h3>
            <p className="text-xs text-slate-300">
              Claim a complimentary 1-day pass. Test our strength floor, cardio deck, or martial arts batch.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking && onOpenBooking('Why Choose Us - Free Trial Pass')}
            className="px-7 py-3.5 bg-[#3F87FF] hover:bg-[#2C7AF5] text-white font-bold rounded-full text-xs uppercase tracking-wider border-[2.5px] border-[#1E66E2] hover:border-[#1758CA] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6)] transition-all flex items-center gap-2 shrink-0 cursor-pointer active:scale-95 select-none"
          >
            <span>Claim Free Pass</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
