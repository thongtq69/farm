'use client';

import { useEffect } from 'react';

export default function AosBootstrap() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const timer = window.setTimeout(() => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((el) => {
        el.classList.add('aos-init');
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
