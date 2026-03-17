'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Taste of Issan Farm',
    location: 'Udon Thani - Thailand',
    image: '/images/projects/1-3-b1caaea5db89.jpg',
    category: 'Du lịch trải nghiệm'
  },
  {
    title: 'Hali Green',
    location: 'Bình Phước',
    image: '/images/projects/0-6-b7d7e9b283ab.jpg',
    category: 'Resort nghỉ dưỡng'
  },
  {
    title: 'Farmstay Nhà Mình',
    location: 'Lâm Đồng',
    image: '/images/projects/1-4bbf0f0013c9.jpg',
    category: 'Farm-Homestay'
  },
  {
    title: 'Palm Hotel',
    location: 'Bà Rịa - Vũng Tàu',
    image: '/images/projects/1-4-36e82318d518.jpg',
    category: 'Resort nghỉ dưỡng'
  },
  {
    title: 'Rajamaha Country',
    location: 'Koh Phangan - Thailand',
    image: '/images/projects/3-5-5c6de158d98d.jpg',
    category: 'Dự án quy hoạch'
  },
  {
    title: 'Oak Garden View',
    location: 'Đồng Nai',
    image: '/images/projects/0-3-06a09ad15004.jpg',
    category: 'Cảnh quan'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  useEffect(() => {
    if (!isHovering) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isHovering]);

  return (
    <section 
      className="projects section section-tight bg-pattern" 
      style={{ background: '#1e3318', overflow: 'hidden' }}
    >
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle" style={{ color: '#a8d89a' }}>Dự án tiêu biểu</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Hành trình kiến tạo Farm</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Khám phá những dự án đã được Oak Farm thổi hồn qua từng nét vẽ quy hoạch.
          </p>
        </div>

        <div 
          className={`expand-cards ${isHovering ? 'is-hovering' : ''}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {projects.map((project, index) => (
            <div 
              className={`exp-card ${activeIndex === index ? 'active' : ''}`} 
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="exp-card-inner">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index < 3}
                />
                
                {/* Vertical Label (only visible when collapsed or not hovering) */}
                <div className="exp-label-vert">
                  <span>{project.title}</span>
                </div>

                {/* Info Panel (visible when active) */}
                <div className="exp-info">
                  <div className="exp-info-content">
                    <div className="exp-info-category">{project.category}</div>
                    <div className="exp-info-loc">{project.location}</div>
                    <h3 className="exp-info-name">{project.title}</h3>
                  </div>
                  <div className="exp-arrow">→</div>
                </div>

                {/* Floating tooltip like in screenshot */}
                <div className="exp-tooltip">{project.category}</div>
                
                {/* Bottom Watermark Overlay */}
                <div className="exp-overlay-bottom">OAK FARM</div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer" data-aos="fade-up" data-aos-delay="400" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a href="/project" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px' }}>
            Xem Thêm Dự Án <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
