'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
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
      className="projects section section-tight" 
      style={{ background: '#1e3318', overflow: 'hidden' }}
    >
      <div className="container">
        {/* Two-column header like reference */}
        <div className="projects-split-header" data-aos="fade-up">
          <div className="projects-header-left">
            <span className="projects-badge">🌿 Dự Án Mới</span>
            <h2 className="projects-main-title">
              Những dự án thiết kế<br />Farm nổi bật
            </h2>
          </div>
          <div className="projects-header-right">
            <p>
              Oak Farm vinh hạnh được các chủ đầu tư tin tưởng giao phó thiết kế những dự án tâm huyết của mình. Với nhiều dự án trải dài trên hơn 20 Tỉnh thành dọc miền Đất Nước, dưới đây là một vài dự án nổi bật mà chúng tôi được phép chia sẻ:
            </p>
          </div>
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

                <div className="exp-label-vert">
                  <span>{project.title}</span>
                </div>

                <div className="exp-info">
                  <div className="exp-info-content">
                    <div className="exp-info-loc">{project.location}</div>
                    <h3 className="exp-info-name">{project.title}</h3>
                  </div>
                  <div className="exp-arrow">→</div>
                </div>

                <div className="exp-overlay-bottom">OAK FARM</div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer" data-aos="fade-up" data-aos-delay="400" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a href="/project" className="btn-view-projects">
            Xem Thêm Dự Án <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
