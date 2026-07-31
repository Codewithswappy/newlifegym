'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GYM_DETAILS, NAV_LINKS } from '@/lib/data';
import { Dumbbell } from 'lucide-react';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs py-12 pb-20 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            {!logoError ? (
              <div className="relative h-11 sm:h-13 w-auto flex items-center">
                <Image
                  src="/logo.png"
                  alt={GYM_DETAILS.name}
                  width={160}
                  height={52}
                  className="h-11 sm:h-13 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-lime-400 text-slate-950 font-black rounded-xl flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-black text-slate-900 leading-none">NEW LIFE</span>
                  <span className="text-[10px] font-extrabold text-lime-700 uppercase tracking-widest leading-tight">FITNESS</span>
                </div>
              </div>
            )}
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-slate-900 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {GYM_DETAILS.name}. Sector 24, Kamothe, Panvel.
          </div>
        
        </div>
      </div>
    </footer>
  );
}
