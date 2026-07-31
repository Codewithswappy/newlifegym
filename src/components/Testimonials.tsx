'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/data';
import { Star, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  // Divide testimonials into 2 rows for opposite scrolling marquee
  const row1 = TESTIMONIALS.slice(0, 3);
  const row2 = TESTIMONIALS.slice(3, 6);

  const renderCard = (review: (typeof TESTIMONIALS)[0], idx: number) => (
    <div
      key={`${review.id}-${idx}`}
      className="w-64 sm:w-72 shrink-0 bg-white border border-slate-200/90 hover:border-lime-500/60 rounded-2xl p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3.5 select-none"
    >
      {/* Top 5-Star Rating & Badge */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500 stroke-[1.5]" />
            ))}
          </div>
          <span className="text-[10px] font-extrabold text-lime-700 bg-lime-100/90 px-2 py-0.5 rounded-full border border-lime-200/80 uppercase tracking-wider">
            Verified Review
          </span>
        </div>

        {/* Review Comment Body */}
        <p className="text-xs text-slate-800 leading-relaxed font-medium">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      {/* Reviewer Profile */}
      <div className="flex items-center gap-2.5 pt-2.5 border-t border-slate-100">
        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1 truncate">
            <span className="truncate">{review.name}</span>
            <CheckCircle2 className="w-3 h-3 text-lime-600 shrink-0" />
          </div>
          <div className="text-[10px] font-semibold text-slate-500 truncate">{review.role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50/80 border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1 rounded-full border border-lime-200/80 inline-block">
              Member Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Verified Community Feedback
            </h2>
          </div>
        </div>
      </div>

      {/* Marquee Container with Left & Right Blur Fade Masks */}
      <div className="relative w-full mt-10 space-y-4">
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20" />
        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20" />

        {/* Row 1: Marquee Left */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
            className="flex items-center gap-4 shrink-0"
          >
            {[...row1, ...row1, ...row1, ...row1, ...row1].map((review, idx) =>
              renderCard(review, idx)
            )}
          </motion.div>
        </div>

        {/* Row 2: Marquee Right */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-1200, 0] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 32 }}
            className="flex items-center gap-4 shrink-0"
          >
            {[...row2, ...row2, ...row2, ...row2, ...row2].map((review, idx) =>
              renderCard(review, idx)
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
