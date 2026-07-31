'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Dumbbell, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

interface AboutProps {
  onOpenBooking: (planName?: string) => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const whyUsCards = [
    {
      title: 'Certified Coaches',
      desc: 'Certified and experienced professionals who guide your form, mechanics, and workout progression at every step.',
      icon: <ShieldCheck className="w-6 h-6 text-slate-950" />,
    },
    {
      title: 'World-Class Equipment',
      desc: 'Modern machines, Olympic barbells, power racks, and functional conditioning tools for every fitness target.',
      icon: <Dumbbell className="w-6 h-6 text-slate-950" />,
    },
    {
      title: 'Results-Driven Programs',
      desc: 'We focus on real progress, body recomposition, posture correction, and long-term sustainable fitness habits.',
      icon: <Trophy className="w-6 h-6 text-slate-950" />,
    },
  ];

  const facilityPhotos = [
    {
      title: 'Cardio Deck',
      desc: 'Treadmills & ellipticals',
      // TODO: Replace stock photography with real photo
      src: '/image1.jpg',
    },
    {
      title: 'Free Weights Zone',
      desc: 'Dumbbells & Olympic racks',
      // TODO: Replace stock photography with real photo
      src: '/image2.jpg',
    },
    {
      title: 'CrossFit Turf',
      desc: 'Battle ropes & sled track',
      // TODO: Replace stock photography with real photo
      src: '/image3.jpg',
    },
    {
      title: 'Strength Floor',
      desc: 'Pin-loaded isolation machines',
      // TODO: Replace stock photography with real photo
      src: '/image4.jpg',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* ========================================================================= */}
        {/* SUB-SECTION 1: Why Choose New Life Fitness? */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          {/* Centered Heading */}
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1 rounded-full border border-lime-200/80 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Why Choose <span className="text-lime-600">New Life Fitness</span>?
            </h2>
            <p className="text-xs text-slate-600">
              The premier results-driven fitness club in Sector 24, Kamothe, Panvel.
            </p>
          </div>

          {/* 3 Column Cards with Top Circular Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {whyUsCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-slate-50/80 border border-slate-200/80 hover:border-lime-500/60 hover:bg-white rounded-2xl p-6 text-center space-y-3 transition-all duration-300 shadow-xs hover:shadow-md relative pt-10"
              >
                {/* Top Circular Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-lime-400 text-slate-950 border-2 border-white flex items-center justify-center shadow-xs">
                  {card.icon}
                </div>

                <h3 className="text-base font-extrabold text-slate-900 pt-2">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SUB-SECTION 2: Quick Facility Overview (4 Photo Grid) */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-8 border-t border-slate-100">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Quick <span className="bg-lime-400 text-slate-950 px-2 py-0.5 rounded-md">Facility</span> Overview
            </h2>
            <p className="text-xs text-slate-600">
              Clean air-conditioned floor, industrial equipment, and dedicated parking in Sector 24.
            </p>
          </div>

          {/* Photo Collage Grid (100% Height Aligned) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            {/* Left Tall Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 group shadow-xs min-h-[300px] h-full"
            >
              <Image
                src={facilityPhotos[0].src}
                alt={facilityPhotos[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-extrabold uppercase">{facilityPhotos[0].title}</div>
                <div className="text-xs text-slate-300">{facilityPhotos[0].desc}</div>
              </div>
            </motion.div>

            {/* Right Column (3 Photos Grid) */}
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              {/* Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] group shadow-xs"
              >
                <Image
                  src={facilityPhotos[1].src}
                  alt={facilityPhotos[1].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-bold uppercase">{facilityPhotos[1].title}</div>
                  <div className="text-[10px] text-slate-300">{facilityPhotos[1].desc}</div>
                </div>
              </motion.div>

              {/* Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] group shadow-xs"
              >
                <Image
                  src={facilityPhotos[2].src}
                  alt={facilityPhotos[2].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-bold uppercase">{facilityPhotos[2].title}</div>
                  <div className="text-[10px] text-slate-300">{facilityPhotos[2].desc}</div>
                </div>
              </motion.div>

              {/* Bottom Wide */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-2 relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/7] group shadow-xs"
              >
                <Image
                  src={facilityPhotos[3].src}
                  alt={facilityPhotos[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-bold uppercase">{facilityPhotos[3].title}</div>
                  <div className="text-[10px] text-slate-300">{facilityPhotos[3].desc}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SUB-SECTION 3: Mission Statement & Quote Callout Banner */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-slate-100">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                New Life Fitness is not just a gym — it&apos;s a lifestyle transformation center
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We combine expert coaching, industrial-grade equipment, and a supportive community atmosphere to help you achieve your full potential in Kamothe, Panvel. Whether you are just starting out or pushing for your next strength milestone, New Life Fitness is where real progress happens.
              </p>

              <div className="pt-2">
                <blockquote className="text-base sm:text-lg font-bold text-slate-900 border-l-4 border-lime-500 pl-4 py-1.5 italic bg-lime-50/50 rounded-r-xl">
                  &ldquo;First session free. No obligations. Just real progress.&rdquo;
                </blockquote>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenBooking('Book free trial')}
                  className="px-6 py-3.5 bg-lime-400 hover:bg-lime-300 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Book free trial pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Overlapping Photo Frame */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] shadow-xs">
              {/* TODO: Replace stock photo */}
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
                alt="New Life Fitness Coaching Session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400" />
                <span>Sector 24, Kamothe, Panvel</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
