'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';

interface NavbarProps {
  onOpenBooking: (planName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for both desktop and mobile
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      setTimeout(() => {
        const headerOffset = 75;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 50);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2.5 shadow-sm'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Official Brand Logo from /logo.png + Brand Typography */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2.5 group select-none shrink-0 cursor-pointer">
          <div className="relative h-10 w-12 sm:h-11 sm:w-14 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Revamp Fitness Logo Emblem"
              fill
              className="object-contain object-center"
              priority
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

        {/* Minimal Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold text-slate-700 hover:text-[#3F87FF] transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions Group: CTA Button + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* CTA Button with Exact Inner Border & Hover Effect */}
          <button
            onClick={() => onOpenBooking('Book free trial')}
            className="hidden sm:inline-flex px-5 py-2.5 bg-[#3F87FF] hover:bg-[#2C7AF5] text-white font-bold rounded-full text-xs tracking-wide transition-all border-[2.5px] border-[#1E66E2] hover:border-[#1758CA] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6)] items-center gap-1.5 cursor-pointer active:scale-95 select-none shrink-0"
          >
            <span>Book free trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:text-slate-950 rounded-xl bg-white/90 backdrop-blur-xs hover:bg-white border border-slate-200/80 transition-colors md:hidden cursor-pointer flex items-center justify-center shrink-0 shadow-2xs"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Smooth Nav Redirection */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2.5 text-sm font-bold text-slate-800 hover:text-[#3F87FF] transition-colors border-b border-slate-100 last:border-none cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking('Book free trial');
                  }}
                  className="w-full py-3 bg-[#3F87FF] hover:bg-[#2C7AF5] text-white font-bold rounded-full text-xs text-center border-[2.5px] border-[#1E66E2] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] cursor-pointer active:scale-95 transition-all"
                >
                  Book free trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
