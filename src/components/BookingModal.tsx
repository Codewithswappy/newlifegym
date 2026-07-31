'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare, PhoneCall, Sparkles, User, Phone, ChevronDown, Check, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

const GOAL_OPTIONS = [
  'Weight Loss & Fat Burn',
  'Muscle Building & Strength',
  'CrossFit & Functional Fitness',
  '1-on-1 Personal Coaching',
];

export default function BookingModal({ isOpen, onClose, defaultPlan = 'Free Trial Pass' }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('Weight Loss & Fat Burn');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `Hello New Life Fitness!%0A%0AMy Name: ${encodeURIComponent(name)}%0AMy Phone: ${encodeURIComponent(phone)}%0AMy Goal: ${encodeURIComponent(selectedGoal)}%0ARequested Pass: ${encodeURIComponent(defaultPlan)}%0A%0AI would like to claim my free trial pass and visit your Sector 24 Kamothe location!`;
    const whatsappUrl = `https://wa.me/${GYM_DETAILS.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
          />

          {/* Compact Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-sm sm:max-w-md bg-white border border-slate-200/90 rounded-lg p-5 sm:p-6 shadow-2xl z-10 overflow-hidden text-slate-900"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-lime-100 border border-lime-200/80 text-lime-700 rounded-full text-[11px] font-extrabold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Free Walk-In Pass</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Claim Free Trial Pass
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 font-medium">
                Fill in your details below to get instant WhatsApp confirmation.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-14 h-14 bg-lime-100 border border-lime-200 text-lime-700 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h4 className="text-base font-extrabold text-slate-900">Redirecting to WhatsApp...</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto font-medium">
                  Connecting you directly with our manager at New Life Fitness.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:bg-white text-xs font-medium transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98000 00000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:bg-white text-xs font-medium transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Modern Custom Dropdown */}
                <div>
                  <label className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Fitness Goal
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 flex items-center justify-between font-medium focus:outline-none focus:border-lime-500 shadow-2xs cursor-pointer select-none"
                    >
                      <span>{selectedGoal}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-lime-600' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4, scale: 0.98 }}
                          animate={{ opacity: 1, y: 4, scale: 1 }}
                          exit={{ opacity: 0, y: -4, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 right-0 z-30 bg-white border border-slate-200 rounded-xl shadow-xl p-1 space-y-0.5 overflow-hidden"
                        >
                          {GOAL_OPTIONS.map((goal) => {
                            const isSelected = selectedGoal === goal;
                            return (
                              <button
                                key={goal}
                                type="button"
                                onClick={() => {
                                  setSelectedGoal(goal);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                                  isSelected ? 'bg-lime-50 text-slate-950 font-bold' : 'hover:bg-slate-50 text-slate-700'
                                }`}
                              >
                                <span>{goal}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-lime-600" />}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-1.5 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-lime-400 hover:bg-lime-300 text-slate-950 font-black rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none shrink-0" />
                    <span>Claim Offer via WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${GYM_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                    className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider border border-slate-200/80"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-lime-700" />
                    <span>Or Call: {GYM_DETAILS.phone}</span>
                  </a>
                </div>

                <p className="text-center text-[10px] text-slate-500 pt-1 flex items-center justify-center gap-1 font-medium">
                  <ShieldCheck className="w-3 h-3 text-lime-600" />
                  <span>Zero spam guarantee. No payment required upfront.</span>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
