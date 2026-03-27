'use client';

import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type MissionProps = {
  content: {
    eyebrow: string;
    titleHtml: string;
    description: string;
    features: Array<{ title: string; description: string; icon: string }>;
    cta: { title: string; subtitle: string; phoneLabel: string; phoneHref: string };
    image: string;
    imageAlt: string;
  };
};

const Mission = ({ content }: MissionProps) => {
  const pdfViewerHref = useMemo(() => {
    if (typeof window === 'undefined') {
      return '/docs/sach.pdf';
    }

    const { hostname, origin } = window.location;

    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return '/docs/sach.pdf';
    }

    const pdfUrl = encodeURIComponent(`${origin}/docs/sach.pdf`);
    return `https://docs.google.com/gview?embedded=1&url=${pdfUrl}`;
  }, []);

  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'prefetch';
    preloadLink.href = '/docs/sach.pdf';
    document.head.appendChild(preloadLink);

    fetch('/docs/sach.pdf', { cache: 'force-cache' }).catch(() => undefined);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, []);

  return (
    <section className="mission section">
      <div className="container mission-container">
        <motion.div className="mission-content" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <span className="subtitle">{content.eyebrow}</span>
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: content.titleHtml }} />
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: 'var(--text-muted)' }}>{content.description}</p>

          <div className="mission-features">
            {content.features.map((feature) => (
              <div className="feature-item" key={feature.title}>
                <div className="feature-icon glass-effect">
                  <Image src={feature.icon} alt={feature.title} width={30} height={30} style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(35%) saturate(738%) hue-rotate(69deg) brightness(96%) contrast(89%)' }} />
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.div className="mission-cta" whileHover={{ scale: 1.02 }}>
            <div className="cta-txt">
              <p>{content.cta.title}</p>
              <span>{content.cta.subtitle}</span>
            </div>
            <a href={pdfViewerHref} className="view-pdf-btn mission-read-btn" target="_blank" rel="noopener noreferrer">Đọc ngay</a>
          </motion.div>
        </motion.div>

        <motion.div className="mission-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
          <div className="image-wrapper" style={{ borderRadius: 0, height: 'auto' }}>
            <Image 
              src={content.image} 
              alt={content.imageAlt} 
              width={1600} 
              height={2000} 
              sizes="(max-width: 991px) 100vw, 50vw" 
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 0 }} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
