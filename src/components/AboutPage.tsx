'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type AboutPageProps = {
  content: {
    hero: { backgroundImage: string; eyebrow: string; title: string; description: string };
    philosophy: string;
    team: {
      backgroundImage: string;
      eyebrow: string;
      title: string;
      members: Array<{ name: string; role: string; image: string; desc: string }>;
    };
    vision: {
      backgroundImage: string;
      eyebrow: string;
      title: string;
      description: string;
      stats: Array<{ value: string; label: string }>;
    };
    values: {
      eyebrow: string;
      title: string;
      ctaLabel: string;
      ctaHref: string;
      items: Array<{ icon: string; title: string; desc: string }>;
    };
    faq: {
      eyebrow: string;
      titleHtml: string;
      description: string;
      items: Array<{ question: string; answer: string }>;
    };
    cta: {
      backgroundImage: string;
      title: string;
      description: string;
      primaryCta: { label: string; href: string };
      secondaryCta: { label: string; href: string };
    };
  };
};

const AboutPage = ({ content }: AboutPageProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="about-v2">
      <section className="about-hero-v2">
        <Image src={content.hero.backgroundImage} alt="About Us Background" fill className="hero-bg-img" priority />
        <div className="hero-overlay-dark"></div>
        <div className="container relative z-10">
          <motion.div className="hero-glass-box" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <span className="subtitle" style={{ color: 'var(--secondary)', paddingLeft: '0' }}>{content.hero.eyebrow}</span>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="about-philosophy-simple section-tight">
        <div className="container">
          <motion.div className="philosophy-text-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p dangerouslySetInnerHTML={{ __html: content.philosophy }} />
          </motion.div>
        </div>
      </section>

      <section className="about-team-v2 section">
        <Image src={content.team.backgroundImage} alt="Team section background" fill className="about-team-bg" />
        <div className="about-team-overlay"></div>
        <div className="container">
          <div className="section-header text-center team-header-v2">
            <span className="subtitle">{content.team.eyebrow}</span>
            <h2>{content.team.title}</h2>
          </div>
          <div className="team-grid-v2">
            {content.team.members.map((member) => (
              <motion.div className="member-card-v2" key={member.name} whileHover={{ y: -15 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="member-portrait">
                  <div className="member-portrait-glow"></div>
                  <Image src={member.image} alt={member.name} fill />
                </div>
                <div className="member-bio">
                  <h3>{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                  <p>{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-vision-v2">
        <div className="vision-image-side">
          <Image src={content.vision.backgroundImage} alt="Our Vision" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="vision-content-side">
          <motion.div className="vision-text-box" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="subtitle">{content.vision.eyebrow}</span>
            <h2>{content.vision.title}</h2>
            <p>{content.vision.description}</p>
            <div className="vision-stats">
              {content.vision.stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-values-v2 section-dark">
        <div className="container">
          <div className="values-v2-header">
            <div className="v-header-left">
              <span className="subtitle" style={{ color: 'var(--secondary)' }}>{content.values.eyebrow}</span>
              <h2 style={{ color: 'white' }}>{content.values.title}</h2>
            </div>
            <div className="v-header-right">
              <Link href={content.values.ctaHref} className="btn-modern-outline-white">{content.values.ctaLabel}</Link>
            </div>
          </div>
          <div className="values-grid-v2">
            {content.values.items.map((val, idx) => (
              <motion.div className="value-card-v2" key={val.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="val-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-faq-v2 section-tight bg-light">
        <div className="container">
          <div className="faq-v2-grid">
            <div className="faq-v2-info">
              <span className="subtitle" style={{ color: 'var(--secondary)' }}>{content.faq.eyebrow}</span>
              <h2 dangerouslySetInnerHTML={{ __html: content.faq.titleHtml }} />
              <p>{content.faq.description}</p>
            </div>
            <div className="faq-v2-list">
              {content.faq.items.map((item, index) => (
                <div key={item.question} className={`faq-v2-item ${openFaqIndex === index ? 'active' : ''}`} onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
                  <div className="faq-v2-q">
                    <span className="q-num">0{index + 1}</span>
                    <h4>{item.question}</h4>
                    <span className="q-arrow">{openFaqIndex === index ? '−' : '+'}</span>
                  </div>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div className="faq-v2-a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="faq-a-inner">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta-v2">
        <Image src={content.cta.backgroundImage} alt="Contact Background" fill className="cta-bg-img" />
        <div className="cta-overlay-v2"></div>
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>{content.cta.title}</h2>
            <p>{content.cta.description}</p>
            <div className="cta-flex-btns">
              <Link href={content.cta.primaryCta.href} className="btn-modern-primary">{content.cta.primaryCta.label}</Link>
              <Link href={content.cta.secondaryCta.href} className="btn-modern-outline-white">{content.cta.secondaryCta.label}</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
