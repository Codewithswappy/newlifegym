'use client';

import React from 'react';
import { ShieldCheck, Dumbbell, Flame, Lock, Car, Snowflake } from 'lucide-react';

export default function TrustBar() {
  const highlights = [
    { title: 'Certified trainers', icon: <ShieldCheck className="w-4 h-4 text-lime-600" /> },
    { title: 'Olympic barbells', icon: <Dumbbell className="w-4 h-4 text-lime-600" /> },
    { title: 'Functional turf', icon: <Flame className="w-4 h-4 text-lime-600" /> },
    { title: 'Clean lockers & showers', icon: <Lock className="w-4 h-4 text-lime-600" /> },
    { title: 'Mita Heights parking', icon: <Car className="w-4 h-4 text-lime-600" /> },
    { title: 'Air conditioned', icon: <Snowflake className="w-4 h-4 text-lime-600" /> },
  ];

  return (
    <section className="py-6 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-slate-700">
          {highlights.map((item) => (
            <div key={item.title} className="flex items-center gap-2 font-semibold">
              <div className="p-1.5 rounded-md bg-white border border-slate-200 shrink-0">
                {item.icon}
              </div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
