'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, ArrowRight } from 'lucide-react';
import { NAV_LINKS, GYM_DETAILS } from '@/lib/data';

interface NavbarProps {
  onOpenBooking: (planName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          {!logoError ? (
            <div className="relative h-11 sm:h-13 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt={GYM_DETAILS.name}
                width={160}
                height={52}
                className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105"
                onError={() => setLogoError(true)}
                priority
              />
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-lime-400 text-slate-950 font-black rounded-xl flex items-center justify-center shadow-xs">
                <Dumbbell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-none">
                  NEW LIFE
                </span>
                <span className="text-[10px] font-extrabold text-lime-700 uppercase tracking-widest leading-tight">
                  FITNESS
                </span>
              </div>
            </div>
          )}
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenBooking('Book free trial')}
            className="px-4 py-2 bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold rounded-lg text-xs tracking-wide transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book free trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => onOpenBooking('Book free trial')}
            className="sm:hidden px-3 py-1.5 bg-lime-500 text-slate-950 font-bold rounded-lg text-xs"
          >
            Trial
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking('Book free trial');
                  }}
                  className="w-full py-2.5 bg-lime-500 text-slate-950 font-bold rounded-lg text-xs text-center"
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
