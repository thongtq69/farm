'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type BeforeAfterItem = { name: string; location: string; before: string; after: string };

type BeforeAfterProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: BeforeAfterItem[];
  };
};

const BeforeAfter = ({ content }: BeforeAfterProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(event.clientX);
    };
    const handleTouchMove = (event: TouchEvent) => {
      if (!isDragging || event.touches.length === 0) return;
      updateSliderPosition(event.touches[0].clientX);
    };
    const stopDragging = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', stopDragging);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, updateSliderPosition]);

  return (
    <section className="before-after section section-dark" style={{ background: '#0b1a15' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle" style={{ color: '#a8d89a' }}>{content.eyebrow}</span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>{content.description}</p>
        </div>

        <div className="cases-tabs" data-aos="fade-up">
          {content.items.map((item, index) => (
            <button key={item.name} className={`tab-btn ${activeTab === index ? 'active' : ''}`} onClick={() => { setActiveTab(index); setSliderPosition(50); }}>{item.name}</button>
          ))}
        </div>

        <div className={`ba-comparison-wrapper ${isDragging ? 'is-dragging' : ''}`} ref={containerRef}>
          <div className="ba-image-after">
            <Image src={content.items[activeTab].after} alt="After" fill style={{ objectFit: 'cover' }} priority />
            <div className="ba-label after">QUY HOẠCH</div>
          </div>

          <div className="ba-image-before" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
            <Image src={content.items[activeTab].before} alt="Before" fill style={{ objectFit: 'cover' }} priority />
            <div className="ba-label before">HIỆN TRẠNG</div>
          </div>

          <div className="ba-handle" style={{ left: `${sliderPosition}%` }}>
            <div className="ba-handle-line"></div>
            <button type="button" className={`ba-handle-button ${isDragging ? 'is-dragging' : ''}`} aria-label="Kéo thanh so sánh" onMouseDown={(event) => { event.preventDefault(); setIsDragging(true); updateSliderPosition(event.clientX); }} onTouchStart={(event) => { if (event.touches.length === 0) return; setIsDragging(true); updateSliderPosition(event.touches[0].clientX); }}>
              <span>↔</span>
            </button>
          </div>

          <div className={`active-case-info ${isDragging ? 'is-hidden' : ''}`}>
            <div className="active-case-meta">
              <span className="active-case-kicker">Dự án</span>
              <h3>{content.items[activeTab].name}</h3>
            </div>
            <div className="active-case-meta">
              <span className="active-case-kicker">Địa điểm</span>
              <p>{content.items[activeTab].location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
