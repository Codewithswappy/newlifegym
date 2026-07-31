'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeBanner from '@/components/MarqueeBanner';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Trainers from '@/components/Trainers';
import ProgressStats from '@/components/ProgressStats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import FloatingCTA from '@/components/FloatingCTA';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Book free trial');

  const handleOpenBooking = (planName?: string) => {
    setSelectedPlan(planName || 'Book free trial');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 relative selection:bg-lime-400 selection:text-slate-950 overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero — CTA #1: "Book free trial" */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Angled Criss-Cross Marquee Banner */}
      <MarqueeBanner />

      {/* About & Mission */}
      <About onOpenBooking={handleOpenBooking} />

      {/* Disciplines & Services — CTA #2: "Book free trial" */}
      <Programs onOpenBooking={handleOpenBooking} />

      {/* Coaching Team */}
      <Trainers />

      {/* Progress & Google Rating Stats */}
      <ProgressStats />

      {/* Community Testimonials & Reviews */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Contact & Map — CTA #3: "Book walk-in visit" */}
      <Contact onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp & mobile action bar */}
      <FloatingCTA onOpenBooking={handleOpenBooking} />

      {/* Booking & Lead Generation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultPlan={selectedPlan}
      />
    </main>
  );
}
