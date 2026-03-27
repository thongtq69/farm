'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

type HeroProps = {
  content: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    foregroundImage: string;
    slides: string[];
  };
};

const Hero = ({ content }: HeroProps) => {
  const ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % content.slides.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [content.slides.length]);

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ y: yBg }}>
        {content.slides.map((slide, index) => (
          <motion.div key={slide} className="hero-bg-slide" initial={false} animate={{ opacity: activeSlide === index ? 1 : 0 }} transition={{ duration: 1.2, ease: 'easeInOut' }}>
            <Image src={slide} alt={`Son Hai Landscape Architecture ${index + 1}`} fill style={{ objectFit: 'cover' }} priority={index === 0} />
          </motion.div>
        ))}
        <div className="hero-overlay"></div>
      </motion.div>

      <div className="container hero-container">
        <motion.div className="hero-glass-panel" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: 'easeOut' }}>
          <span className="subtitle">{content.eyebrow}</span>
          <h1 className="hero-title">
            {content.titleLine1}
            <br />
            <span>{content.titleLine2}</span>
          </h1>

          <div className="hero-description">
            <p>{content.description}</p>
          </div>

          <div className="hero-btns-wrapper-new">
            <Link href={content.primaryCta.href} className="btn-modern-primary">{content.primaryCta.label}</Link>
            <Link href={content.secondaryCta.href} className="btn-modern-outline-white hero-btn-secondary">{content.secondaryCta.label}</Link>
          </div>
        </motion.div>

        <motion.div className="hero-foreground" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 1.5 }}>
          <Image src={content.foregroundImage} alt="Son Hai Landscape Professional Service" width={1200} height={1300} style={{ objectFit: 'contain' }} priority />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
