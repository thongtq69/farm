'use client';

import React from 'react';
import { motion } from 'framer-motion';

type HighlightItem = { title: string; desc: string; icon: string };

const renderIcon = (icon: string) => {
  if (icon === 'shield') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.8 18.2 6.4v5.4c0 4.4-2.5 8-6.2 9.4-3.7-1.4-6.2-5-6.2-9.4V6.4L12 3.8Z" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
        <path d="m9.3 12.2 1.7 1.7 3.7-4.1" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === 'spark') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.55" />
        <path d="M12 4.7v2.2M12 17.1v2.2M4.7 12h2.2M17.1 12h2.2M6.8 6.8l1.6 1.6M15.6 15.6l1.6 1.6M17.2 6.8l-1.6 1.6M8.4 15.6l-1.6 1.6" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
        <path d="M10 12.1c.8-1.9 2.2-3.4 4.1-4.4-.4 2.1-1.5 4-3.3 5.5" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="2.7" fill="none" stroke="currentColor" strokeWidth="1.55" />
      <path d="M7.8 18.7c.6-2.6 2-4 4.2-4s3.6 1.4 4.2 4" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      <path d="M6.2 6.4 4.7 7.9 6.2 9.4M17.8 6.4l1.5 1.5-1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const HomeHighlights = ({ items }: { items: HighlightItem[] }) => {
  return (
    <section className="home-highlights section-tight">
      <div className="container">
        <div className="home-highlights-shell">
          <div className="home-highlights-grid">
            {items.map((item, index) => (
              <motion.div key={item.title} className="home-highlight-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: index * 0.1 }} whileHover={{ y: -6 }}>
                <div className="home-highlight-icon">{renderIcon(item.icon)}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;
