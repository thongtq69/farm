'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

const cases = [
  {
    name: 'Thiết kế Sân Vườn Biệt Thự',
    location: 'Dự án thực tế 2025',
    before: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426281/farm/images/beforeafter/safynyrs2dtzxlewmeux.jpg',
    after: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426280/farm/images/beforeafter/vngvkvqvm1zhvq00zaog.jpg'
  },
  {
    name: 'Cảnh quan Hồ Koi & Đá Nghệ Thuật',
    location: 'Công trình tiêu biểu',
    before: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426275/farm/images/beforeafter/hc9vsxfqvlsnerqzvtfh.png',
    after: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426276/farm/images/beforeafter/wvhc6pdkyp248tytrmko.png'
  },
  {
    name: 'Quy hoạch Farmstay Nghỉ Dưỡng',
    location: 'Sơn Hải Landscape Execution',
    before: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426279/farm/images/beforeafter/n4mehqwtzql491dt2uyx.png',
    after: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426277/farm/images/beforeafter/tw93p66rxwxqgzp19i9s.png'
  }
];

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, position)));
    }
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
          <span className="subtitle" style={{ color: '#a8d89a' }}>Hiện trạng & Quy hoạch</span>
          <h2 className="section-title">Hành trình biến đổi</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Sử dụng thanh trượt để so sánh trực quan sự thay đổi từ hiện trạng đến quy hoạch chi tiết.
          </p>
        </div>

        <div className="cases-tabs" data-aos="fade-up">
          {cases.map((item, index) => (
            <button 
              key={index} 
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(index);
                setSliderPosition(50);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div 
          className={`ba-comparison-wrapper ${isDragging ? 'is-dragging' : ''}`}
          ref={containerRef}
        >
          <div className="ba-image-after">
            <Image 
              src={cases[activeTab].after} 
              alt="After" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
            <div className="ba-label after">QUY HOẠCH</div>
          </div>
          
          <div 
            className="ba-image-before" 
            style={{ 
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
            }}
          >
            <Image 
              src={cases[activeTab].before} 
              alt="Before" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
            <div className="ba-label before">HIỆN TRẠNG</div>
          </div>

          <div className="ba-handle" style={{ left: `${sliderPosition}%` }}>
            <div className="ba-handle-line"></div>
            <button
              type="button"
              className={`ba-handle-button ${isDragging ? 'is-dragging' : ''}`}
              aria-label="Kéo thanh so sánh"
              onMouseDown={(event) => {
                event.preventDefault();
                setIsDragging(true);
                updateSliderPosition(event.clientX);
              }}
              onTouchStart={(event) => {
                if (event.touches.length === 0) return;
                setIsDragging(true);
                updateSliderPosition(event.touches[0].clientX);
              }}
            >
              <span>↔</span>
            </button>
          </div>

          <div className={`active-case-info ${isDragging ? 'is-hidden' : ''}`}>
            <div className="active-case-meta">
              <span className="active-case-kicker">Dự án</span>
              <h3>{cases[activeTab].name}</h3>
            </div>
            <div className="active-case-meta">
              <span className="active-case-kicker">Địa điểm</span>
              <p>{cases[activeTab].location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
