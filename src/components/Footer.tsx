'use client';

import React from 'react';
import Image from 'next/image';
import { GYM_DETAILS, NAV_LINKS } from '@/lib/data';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs py-12 pb-20 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Official Brand Logo from /logo.png + Brand Typography */}
          <a href="#hero" className="flex items-center gap-2.5 group select-none shrink-0">
            <div className="relative h-10 w-12 sm:h-11 sm:w-14 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Revamp Fitness Logo Emblem"
                fill
                className="object-contain object-center"
                sizes="60px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 leading-none">
                REVAMP
              </span>
              <span className="text-[10px] font-extrabold text-[#3F87FF] uppercase tracking-widest leading-tight">
                FITNESS
              </span>
            </div>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#3F87FF] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#3F87FF] shrink-0" />
            <span>© {new Date().getFullYear()} {GYM_DETAILS.name} ({GYM_DETAILS.legalName}). {GYM_DETAILS.shortAddress}.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${GYM_DETAILS.phoneRaw}`}
              className="hover:text-slate-900 font-semibold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#3F87FF]" />
              <span>{GYM_DETAILS.phone}</span>
            </a>
            <a
              href={`https://wa.me/${GYM_DETAILS.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D4ED8] hover:underline font-semibold flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#3F87FF]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
