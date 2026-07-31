'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Dumbbell, MessageSquare, Sparkles } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

interface HeroProps {
  onOpenBooking: (planName?: string) => void;
}

const gymPhotos = [
  {
    id: 1,
    src: '/image1.jpg',
    label: 'Spacious Gym Floor',
    tag: '1st Floor',
    // Desktop layout position & rotation
    desktopClass: 'w-48 sm:w-56 h-60 sm:h-72 top-0 left-12 sm:left-20 rotate-3 z-30',
    mobileClass: 'z-30 scale-100 rotate-0',
  },
  {
    id: 2,
    src: '/image2.jpg',
    label: 'Strength & Barbells',
    tag: 'Olympic Racks',
    desktopClass: 'w-44 sm:w-52 h-56 sm:h-64 top-4 right-0 sm:right-4 -rotate-6 z-20',
    mobileClass: 'z-20 -rotate-12 -translate-x-10 scale-90',
  },
  {
    id: 3,
    src: '/image3.jpg',
    label: 'Functional CrossFit',
    tag: 'Group WOD',
    desktopClass: 'w-44 sm:w-52 h-56 sm:h-64 top-24 -left-4 sm:left-0 -rotate-12 z-20',
    mobileClass: 'z-10 rotate-12 translate-x-10 scale-90',
  },
  {
    id: 4,
    src: '/image4.jpg',
    label: '1-on-1 Personal Coaching',
    tag: 'Certified Staff',
    desktopClass: 'w-48 sm:w-56 h-60 sm:h-72 bottom-0 left-16 sm:left-24 rotate-6 z-40',
    mobileClass: 'z-0 scale-75 -translate-y-4 opacity-80',
  },
  {
    id: 5,
    src: '/image5.jpg',
    label: 'Locker & Clean Showers',
    tag: 'Amenities',
    desktopClass: 'w-44 sm:w-52 h-56 sm:h-64 bottom-4 right-2 sm:right-8 -rotate-3 z-10',
    mobileClass: 'z-0 scale-75 translate-y-4 opacity-80',
  },
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  // Auto cycle mobile stack every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMobileIndex((prev) => (prev + 1) % gymPhotos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Top Rating Badge with Inner Shadow & Shimmer Effect */}
            <div className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] rounded-full group cursor-default">
              {/* Shimmer Light Shine Animation */}
              <motion.div
                animate={{ x: ['-100%', '250%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', repeatDelay: 1 }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 pointer-events-none"
              />
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
              <span className="text-xs font-bold text-slate-900 tracking-tight">
                4.9 rating on Google · Kamothe, Panvel
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase">
              Build your{' '}
              <span className="bg-lime-400 text-slate-950 px-2 py-0.5 rounded-md inline-block">
                strongest
              </span>{' '}
              self.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {GYM_DETAILS.subheading}
            </p>

            {/* Action CTAs (1 Booking + 1 WhatsApp Chat) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenBooking('Book free trial')}
                className="px-6 py-3.5 bg-lime-400 hover:bg-lime-300 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book free trial pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919999999999?text=Hi%20New%20Life%20Fitness%2C%20I%20want%20to%20inquire%20about%20gym%20membership"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white stroke-none shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Micro Stats Strip */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs">
              <div>
                <div className="font-extrabold text-slate-900 text-base">6 AM – 11 PM</div>
                <div className="text-slate-500 font-medium mt-0.5">Mon–Sat timing</div>
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-base">Sector 24</div>
                <div className="text-slate-500 font-medium mt-0.5">Kamothe location</div>
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-base">Free parking</div>
                <div className="text-slate-500 font-medium mt-0.5">On-site space</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Scattered & Stacked Image Collage */}
          <div className="lg:col-span-6 relative w-full">
            
            {/* Desktop View: Scattered Interactive Fan Deck (Hover to Pop Front) */}
            <div className="hidden sm:block relative w-full h-[460px] sm:h-[500px] select-none">
              {gymPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  whileHover={{
                    scale: 1.12,
                    zIndex: 60,
                    rotate: 0,
                    y: -12,
                    transition: { type: 'spring', stiffness: 450, damping: 25 },
                  }}
                  className={`absolute rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-900 cursor-pointer transition-shadow ${photo.desktopClass}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Label overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-black uppercase tracking-wide leading-tight drop-shadow-sm">
                      {photo.label}
                    </div>
                    <div className="text-[10px] font-bold text-lime-400 uppercase tracking-wider">
                      {photo.tag}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile View: Stack Deck Inspired by Image 2 (Tap or Auto Cycle) */}
            <div className="block sm:hidden relative w-full h-80 flex items-center justify-center select-none pt-4">
              {gymPhotos.map((photo, index) => {
                const isCurrent = index === activeMobileIndex;
                const isNext = index === (activeMobileIndex + 1) % gymPhotos.length;
                const isPrev = index === (activeMobileIndex - 1 + gymPhotos.length) % gymPhotos.length;

                let mobileStyle = 'scale-75 opacity-0 z-0';
                if (isCurrent) mobileStyle = 'z-30 scale-100 rotate-0 shadow-2xl border-4 border-white';
                else if (isNext) mobileStyle = 'z-20 rotate-12 translate-x-10 scale-90 opacity-90 border-2 border-white';
                else if (isPrev) mobileStyle = 'z-10 -rotate-12 -translate-x-10 scale-90 opacity-90 border-2 border-white';

                return (
                  <motion.div
                    key={photo.id}
                    layout
                    onClick={() => setActiveMobileIndex(index)}
                    className={`absolute w-52 h-64 rounded-2xl overflow-hidden bg-slate-900 transition-all duration-500 ease-out cursor-pointer ${mobileStyle}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-xs font-black uppercase tracking-wide leading-tight">
                        {photo.label}
                      </div>
                      <div className="text-[10px] font-bold text-lime-400 uppercase tracking-wider">
                        {photo.tag}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
