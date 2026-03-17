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
    }, { 
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before it enters fully
    });

    // Small delay to ensure styles are applied
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach(el => {
        el.classList.add('aos-init');
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };

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

