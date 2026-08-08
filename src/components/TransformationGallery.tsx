'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TRANSFORMATIONS } from '@/lib/data';
import { SlidersHorizontal } from 'lucide-react';

interface TransformationProps {
  onOpenBooking: (storyName?: string) => void;
}

export default function TransformationGallery({ onOpenBooking }: TransformationProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section id="transformations" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1 rounded-full border border-lime-200/80 inline-block">
            Member Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Proven Consistency & Transformations
          </h2>
          <p className="text-sm text-slate-600">
            Real everyday members in Kharghar who followed structured lifting and nutrition guidelines at Revamp Fitness.
          </p>
        </div>

        {/* Drag Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-6 shadow-xs"
        >
          <div className="flex items-center justify-between gap-2 mb-4 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 text-lime-700">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Interactive Drag Comparison</span>
            </span>
            <span className="text-slate-500 font-normal">Slide left or right to inspect</span>
          </div>

          <div className="relative h-72 sm:h-[380px] w-full rounded-xl overflow-hidden select-none border border-slate-300">
            {/* After Image */}
            <Image
              src={TRANSFORMATIONS[0].afterImg}
              alt="After Transformation"
              fill
              className="object-cover object-center"
            />
            <div className="absolute top-3 right-3 px-3 py-1 bg-lime-500 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-md z-10 shadow-xs">
              AFTER (Goal Met)
            </div>

            {/* Before Image Overlay */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <Image
                src={TRANSFORMATIONS[0].beforeImg}
                alt="Before Transformation"
                fill
                className="object-cover object-center max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-slate-900 text-white font-bold text-[10px] uppercase tracking-wider rounded-md z-10 shadow-xs">
                BEFORE (Day 1)
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-lime-500 z-20 cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-lime-500 text-slate-950 font-black flex items-center justify-center border-2 border-white text-xs shadow-md">
                ↔
              </div>
            </div>

            {/* Range Input for Drag */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs border-t border-slate-200/80 pt-3">
            <div>
              <span className="font-extrabold text-slate-900">{TRANSFORMATIONS[0].name}</span>
              <span className="text-lime-700 font-bold ml-2">({TRANSFORMATIONS[0].stats})</span>
            </div>
            <p className="text-slate-500 italic max-w-md">
              &ldquo;{TRANSFORMATIONS[0].quote}&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
