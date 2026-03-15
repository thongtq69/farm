'use client';

import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Mission from '@/components/Mission';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import BeforeAfter from '@/components/BeforeAfter';
import Companion from '@/components/Companion';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    // Simple intersection observer for AOS-like effect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Mission />
      <Projects />
      <Process />
      <BeforeAfter />
      <Companion />
      <Contact />
    </>
  );
}
