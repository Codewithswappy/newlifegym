'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Scale, ArrowRight, Check, Info, Activity } from 'lucide-react';

interface FitnessCalculatorsProps {
  onOpenBooking: (planName?: string) => void;
}

const ACTIVITY_OPTIONS = [
  { value: 1.2, label: 'Sedentary', desc: 'Desk job, little to no workout' },
  { value: 1.375, label: 'Lightly Active', desc: '1–2 gym workouts per week' },
  { value: 1.55, label: 'Moderately Active', desc: '3–5 training sessions / week' },
  { value: 1.725, label: 'Very Active', desc: '6–7 heavy gym / martial arts days' },
  { value: 1.9, label: 'Athlete', desc: 'Double daily training or physical labor' },
];

export default function FitnessCalculators({ onOpenBooking }: FitnessCalculatorsProps) {
  // -------------------------------------------------------------
  // Calorie Target State (String-backed for smooth manual typing)
  // -------------------------------------------------------------
  const [calAge, setCalAge] = useState<string>('24');
  const [calGender, setCalGender] = useState<'male' | 'female'>('male');
  const [calHeight, setCalHeight] = useState<string>('175');
  const [calWeight, setCalWeight] = useState<string>('70');
  const [calActivity, setCalActivity] = useState<number>(1.55);
  const [calGoal, setCalGoal] = useState<'lose' | 'maintain' | 'gain'>('lose');

  const [isActivityDropdownOpen, setIsActivityDropdownOpen] = useState(false);
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

  // Calorie Live Results
  const [calorieResult, setCalorieResult] = useState<{
    bmr: number;
    tdee: number;
    target: number;
    protein: number;
  }>({
    bmr: 1680,
    tdee: 2604,
    target: 2104,
    protein: 140,
  });

  // Calculate Calorie Target dynamically on input change
  useEffect(() => {
    const age = parseFloat(calAge) || 0;
    const height = parseFloat(calHeight) || 0;
    const weight = parseFloat(calWeight) || 0;

    if (age <= 0 || height <= 0 || weight <= 0) return;

    // Mifflin–St Jeor Algorithm
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = calGender === 'male' ? bmr + 5 : bmr - 161;

    const tdee = Math.round(bmr * calActivity);

    let target = tdee;
    if (calGoal === 'lose') target = tdee - 500;
    else if (calGoal === 'gain') target = tdee + 400;

    const protein = Math.round(weight * 2.0);

    setCalorieResult({
      bmr: Math.round(bmr),
      tdee,
      target: Math.max(1200, target),
      protein,
    });
  }, [calAge, calGender, calHeight, calWeight, calActivity, calGoal]);

  // -------------------------------------------------------------
  // BMI Calculator State (String-backed for smooth typing)
  // -------------------------------------------------------------
  const [bmiHeight, setBmiHeight] = useState<string>('175');
  const [bmiWeight, setBmiWeight] = useState<string>('70');
  const [bmiResult, setBmiResult] = useState<{
    bmi: number;
    category: 'Underweight' | 'Healthy Weight' | 'Overweight' | 'Obesity';
    color: string;
    bgBadge: string;
    percent: number;
  }>({
    bmi: 22.9,
    category: 'Healthy Weight',
    color: 'text-emerald-700',
    bgBadge: 'bg-emerald-50 border-emerald-200/80 text-emerald-700',
    percent: 46,
  });

  // Calculate BMI dynamically
  useEffect(() => {
    const height = parseFloat(bmiHeight) || 0;
    const weight = parseFloat(bmiWeight) || 0;

    if (height <= 0 || weight <= 0) return;

    const heightInMeters = height / 100;
    const bmiVal = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));

    let cat: 'Underweight' | 'Healthy Weight' | 'Overweight' | 'Obesity' = 'Healthy Weight';
    let col = 'text-emerald-700';
    let bg = 'bg-emerald-50 border-emerald-200/80 text-emerald-700';
    let pct = 46;

    if (bmiVal < 18.5) {
      cat = 'Underweight';
      col = 'text-blue-600';
      bg = 'bg-blue-50 border-blue-200 text-blue-700';
      pct = Math.max(4, Math.min(24, (bmiVal / 18.5) * 25));
    } else if (bmiVal <= 24.9) {
      cat = 'Healthy Weight';
      col = 'text-emerald-700';
      bg = 'bg-emerald-50 border-emerald-200/80 text-emerald-700';
      pct = 25 + ((bmiVal - 18.5) / 6.4) * 35;
    } else if (bmiVal <= 29.9) {
      cat = 'Overweight';
      col = 'text-amber-700';
      bg = 'bg-amber-50 border-amber-200/80 text-amber-800';
      pct = 60 + ((bmiVal - 25) / 4.9) * 20;
    } else {
      cat = 'Obesity';
      col = 'text-rose-700';
      bg = 'bg-rose-50 border-rose-200/80 text-rose-800';
      pct = Math.min(96, 80 + ((bmiVal - 30) / 10) * 16);
    }

    setBmiResult({
      bmi: bmiVal,
      category: cat,
      color: col,
      bgBadge: bg,
      percent: pct,
    });
  }, [bmiHeight, bmiWeight]);

  const activeActivityObj = ACTIVITY_OPTIONS.find((a) => a.value === calActivity) || ACTIVITY_OPTIONS[2];

  return (
    <section id="calculators" className="py-16 sm:py-28 bg-white border-b border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center sm:text-left space-y-2 max-w-xl">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-2.5 sm:px-3 py-1 rounded-full border border-blue-200/80 inline-block">
            Fitness Calculators
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
            Know Your Numbers. <span className="text-[#3F87FF]">Train With Purpose.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Scientific Mifflin–St Jeor caloric estimations and WHO BMI body metrics to guide your fitness path.
          </p>
        </div>

        {/* 2-Column Compact Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
          
          {/* ========================================================= */}
          {/* CALCULATOR 1: Daily Calorie Target (Mifflin–St Jeor)     */}
          {/* ========================================================= */}
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs space-y-4">
            
            {/* Header & Goal Pills */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-200/80 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#3F87FF] text-white flex items-center justify-center shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] border border-[#1E66E2] shrink-0">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                    Calorie Target
                  </h3>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-slate-500">Mifflin–St Jeor Formula</div>
                </div>
              </div>

              {/* Goal Pills */}
              <div className="flex items-center gap-1 bg-white border border-slate-200/90 p-0.5 rounded-xl shadow-2xs self-start sm:self-auto">
                {(['lose', 'maintain', 'gain'] as const).map((g) => {
                  const isSelected = calGoal === g;
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setCalGoal(g)}
                      className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[9px] sm:text-[10px] font-extrabold transition-all cursor-pointer select-none ${
                        isSelected
                          ? 'bg-[#3F87FF] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {g === 'lose' ? 'Fat Loss' : g === 'maintain' ? 'Maintain' : 'Gain'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                
                {/* Age Input */}
                <div>
                  <label className="block text-[9px] sm:text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                    Age (yrs)
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="24"
                    value={calAge}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      setCalAge(val);
                    }}
                    className="w-full bg-white border border-slate-200 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#3F87FF] shadow-2xs transition-colors"
                  />
                </div>

                {/* Custom Modern Gender Dropdown */}
                <div className="relative">
                  <label className="block text-[9px] sm:text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                    Gender
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsGenderDropdownOpen(!isGenderDropdownOpen);
                      setIsActivityDropdownOpen(false);
                    }}
                    className="w-full bg-white border border-slate-200 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-bold text-slate-900 flex items-center justify-between focus:outline-none focus:border-[#3F87FF] shadow-2xs cursor-pointer select-none"
                  >
                    <span className="capitalize">{calGender}</span>
                    <span className="text-[10px] text-slate-400">▼</span>
                  </button>

                  <AnimatePresence>
                    {isGenderDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4, scale: 0.96 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 right-0 z-30 bg-white border border-slate-200 rounded-xl shadow-xl p-1 space-y-0.5"
                      >
                        {(['male', 'female'] as const).map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => {
                              setCalGender(g);
                              setIsGenderDropdownOpen(false);
                            }}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                              calGender === g ? 'bg-blue-50 text-[#1D4ED8] font-bold' : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <span className="capitalize">{g}</span>
                            {calGender === g && <Check className="w-3 h-3 text-[#3F87FF]" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Height Input */}
                <div>
                  <label className="block text-[9px] sm:text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="175"
                    value={calHeight}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      setCalHeight(val);
                    }}
                    className="w-full bg-white border border-slate-200 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#3F87FF] shadow-2xs transition-colors"
                  />
                </div>

                {/* Weight Input */}
                <div>
                  <label className="block text-[9px] sm:text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="70"
                    value={calWeight}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      setCalWeight(val);
                    }}
                    className="w-full bg-white border border-slate-200 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#3F87FF] shadow-2xs transition-colors"
                  />
                </div>

              </div>

              {/* Custom Modern Animated Activity Selector */}
              <div className="relative">
                <label className="block text-[9px] sm:text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                  Weekly Activity Level
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setIsActivityDropdownOpen(!isActivityDropdownOpen);
                    setIsGenderDropdownOpen(false);
                  }}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 flex items-center justify-between font-semibold focus:outline-none focus:border-[#3F87FF] shadow-2xs cursor-pointer select-none text-left"
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <Activity className="w-3.5 h-3.5 text-[#3F87FF] shrink-0" />
                    <span className="font-bold text-slate-900 truncate">{activeActivityObj.label}</span>
                    <span className="text-[10px] text-slate-500 hidden sm:inline font-normal">({activeActivityObj.desc})</span>
                  </div>
                  <span className="text-[10px] text-slate-400">▼</span>
                </button>

                <AnimatePresence>
                  {isActivityDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 4, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 z-30 bg-white border border-slate-200 rounded-xl shadow-xl p-1 space-y-1 max-h-56 overflow-y-auto"
                    >
                      {ACTIVITY_OPTIONS.map((item) => {
                        const isSelected = calActivity === item.value;
                        return (
                          <button
                            key={item.value}
                            type="button"
                            onClick={() => {
                              setCalActivity(item.value);
                              setIsActivityDropdownOpen(false);
                            }}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                              isSelected ? 'bg-blue-50 text-[#1D4ED8] font-bold' : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <div>
                              <div className="text-xs font-bold text-slate-900">{item.label}</div>
                              <div className="text-[10px] text-slate-500">{item.desc}</div>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#3F87FF] shrink-0" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Live Instant Results Card (Responsive font sizes on mobile) */}
            <motion.div
              layout
              className="bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-4 space-y-2 shadow-2xs"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-1 border-b border-slate-100 pb-1.5">
                <span className="text-[10px] sm:text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                  Target Calories:
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-[#3F87FF] tracking-tight">
                    {calorieResult.target}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 uppercase">kcal / day</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
                <div className="bg-slate-50 rounded-xl p-1.5 sm:p-2 border border-slate-100">
                  <div className="text-[8px] sm:text-[9px] font-extrabold text-slate-500 uppercase">BMR (Rest)</div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">{calorieResult.bmr} kcal</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-1.5 sm:p-2 border border-slate-100">
                  <div className="text-[8px] sm:text-[9px] font-extrabold text-slate-500 uppercase">TDEE (Burn)</div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">{calorieResult.tdee} kcal</div>
                </div>
                <div className="bg-blue-50/80 rounded-xl p-1.5 sm:p-2 border border-blue-100">
                  <div className="text-[8px] sm:text-[9px] font-extrabold text-[#1D4ED8] uppercase">Protein Goal</div>
                  <div className="font-extrabold text-[#3F87FF] text-xs sm:text-sm mt-0.5">{calorieResult.protein}g / day</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* CALCULATOR 2: BMI Calculator & Minimal Gauge               */}
          {/* ========================================================= */}
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs space-y-4">
            
            {/* Header & Category Badge */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#3F87FF] text-white flex items-center justify-center shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] border border-[#1E66E2] shrink-0">
                  <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                    BMI Calculator
                  </h3>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-slate-500">WHO Body Mass Index</div>
                </div>
              </div>

              {/* Minimal Category Pill */}
              <div className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-colors ${bmiResult.bgBadge}`}>
                {bmiResult.category}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Height Input */}
              <div>
                <label className="block text-[9px] sm:text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                  Height (cm)
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="175"
                  value={bmiHeight}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '');
                    setBmiHeight(val);
                  }}
                  className="w-full bg-white border border-slate-200 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#3F87FF] shadow-2xs transition-colors"
                />
              </div>

              {/* Weight Input */}
              <div>
                <label className="block text-[9px] sm:text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                  Weight (kg)
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="70"
                  value={bmiWeight}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '');
                    setBmiWeight(val);
                  }}
                  className="w-full bg-white border border-slate-200 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#3F87FF] shadow-2xs transition-colors"
                />
              </div>
            </div>

            {/* Minimal & Premium BMI Gauge Card */}
            <motion.div
              layout
              className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 space-y-3 shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Your Body Score</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    BMI <span className="text-[#3F87FF]">{bmiResult.bmi}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Classification</div>
                  <div className={`text-[11px] sm:text-xs font-extrabold uppercase tracking-wide ${bmiResult.color}`}>
                    {bmiResult.category}
                  </div>
                </div>
              </div>

              {/* Ultra-Minimal Color Spectrum Progress Bar */}
              <div className="space-y-1.5 pt-1">
                <div className="relative h-2 w-full rounded-full overflow-hidden flex shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]">
                  <div className="bg-blue-400 w-[25%]" title="Underweight (< 18.5)" />
                  <div className="bg-emerald-500 w-[35%]" title="Healthy (18.5 – 24.9)" />
                  <div className="bg-amber-400 w-[20%]" title="Overweight (25 – 29.9)" />
                  <div className="bg-rose-500 w-[20%]" title="Obesity (30+)" />
                </div>

                {/* Animated Indicator Needle */}
                <div className="relative w-full h-2.5">
                  <motion.div
                    initial={{ left: '46%' }}
                    animate={{ left: `${bmiResult.percent}%` }}
                    transition={{ type: 'spring', damping: 25, stiffness: 260 }}
                    className="absolute -top-1 -translate-x-1/2 flex flex-col items-center"
                  >
                    <div className="w-2.5 h-2.5 bg-slate-900 border-2 border-white rounded-full shadow-md" />
                  </motion.div>
                </div>

                {/* Labels */}
                <div className="grid grid-cols-4 text-[8px] sm:text-[9px] font-bold text-slate-500 text-center uppercase tracking-tight">
                  <span className="text-blue-600">&lt; 18.5</span>
                  <span className="text-emerald-700">18.5 – 24.9</span>
                  <span className="text-amber-700">25 – 29.9</span>
                  <span className="text-rose-600">30+</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* Natural Lead-In CTA Banner (Compact on mobile)            */}
        {/* ========================================================= */}
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left w-full sm:w-auto">
            <h3 className="text-sm sm:text-lg font-extrabold tracking-tight">
              Want a personalized diet & workout blueprint?
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-300">
              Get an in-person body composition assessment with a Revamp Fitness certified trainer at Sector 20 Kharghar.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('Free Trainer Consultation & Diet Plan')}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3.5 bg-[#3F87FF] hover:bg-[#2C7AF5] text-white font-bold rounded-full text-xs uppercase tracking-wider border-[2.5px] border-[#1E66E2] hover:border-[#1758CA] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.38)] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6)] transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-95 select-none"
          >
            <span>Talk to a Trainer</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Small Scientific Disclaimer (Icon cleanly aligned with text on mobile) */}
        <div className="flex items-start justify-center gap-1.5 max-w-md mx-auto text-center text-[10px] sm:text-[11px] text-slate-500 font-medium">
          <Info className="w-3.5 h-3.5 text-[#3F87FF] shrink-0 mt-0.5" />
          <span className="text-left sm:text-center leading-normal">
            Calculations use the Mifflin–St Jeor & WHO standards as fitness estimates, not medical advice.
          </span>
        </div>

      </div>
    </section>
  );
}
