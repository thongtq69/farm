'use client';

import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Mission from '@/components/Mission';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
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
    }, { threshold: 0.05 }); // Lower threshold for mobile

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => {
      el.classList.add('aos-init');
      observer.observe(el);
    });

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
      <Testimonials />
      <Companion />
      <Contact />
    </>
  );
}

