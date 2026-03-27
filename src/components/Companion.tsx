'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type CompanionProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    intro: string;
    items: Array<{ num: string; title: string; desc: string; image: string }>;
  };
};

const Companion = ({ content }: CompanionProps) => {
  return (
    <section className="companion section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle">{content.eyebrow}</span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.description}</p>
        </div>

        <motion.p className="companion-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {content.intro}
        </motion.p>

        <div className="companion-grid">
          {content.items.map((item, index) => (
            <motion.div className="companion-card" key={item.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.8 }}>
              <div className="card-image-box">
                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                <motion.div className="card-num-badge" whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'var(--primary-dark)' }}>{item.num}</motion.div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companion;
