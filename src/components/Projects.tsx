'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type FeaturedProject = {
  slug: string;
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
};

type ProjectsProps = {
  content: {
    badge: string;
    titleHtml: string;
    description: string;
    cta: { label: string; href: string };
    items: FeaturedProject[];
  };
};

const Projects = ({ content }: ProjectsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return undefined;
    }

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.items.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [content.items.length, isHovering]);

  return (
    <section className="projects section section-tight" style={{ background: '#16320a', overflow: 'hidden' }}>
      <div className="container">
        <div className="projects-split-header" data-aos="fade-up">
          <div className="projects-header-left">
            <span className="projects-badge">{content.badge}</span>
            <h2 className="projects-main-title" style={{ color: 'white' }} dangerouslySetInnerHTML={{ __html: content.titleHtml }} />
            <p className="projects-header-caption">Những dự án được chọn lọc để thể hiện rõ tư duy thiết kế, chất lượng thi công và bản sắc riêng của Son Hai Landscape.</p>
          </div>
          <div className="projects-header-right">
            <div className="projects-header-panel">
              <span className="projects-header-kicker">Timeless Design</span>
              <p>{content.description}</p>
              <div className="projects-header-tags">
                <span>Cảnh quan</span>
                <span>Hồ koi</span>
                <span>Nghỉ dưỡng</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`expand-cards ${isHovering ? 'is-hovering' : ''}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          {content.items.map((project, index) => (
            <a className={`exp-card ${activeIndex === index ? 'active' : ''}`} href={`/project/${project.slug}`} key={project.slug} onMouseEnter={() => setActiveIndex(index)} onFocus={() => { setIsHovering(true); setActiveIndex(index); }} onBlur={() => setIsHovering(false)}>
              <div className="exp-card-inner">
                <Image src={project.image} alt={project.title} fill priority={index < 3} sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                <div className="exp-label-vert"><span>{project.title}</span></div>
                <div className="exp-info">
                  <div className="exp-info-content">
                    <div className="exp-info-loc">{project.location}</div>
                    <h3 className="exp-info-name">{project.title}</h3>
                    <p className="exp-info-desc">{project.description}</p>
                  </div>
                  <div className="exp-arrow">→</div>
                </div>
                <div className="exp-overlay-bottom">SON HẢI LANDSCAPE</div>
              </div>
            </a>
          ))}
        </div>

        <div className="projects-footer" data-aos="fade-up" data-aos-delay="400" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a href={content.cta.href} className="btn-modern-outline-white">{content.cta.label} <span className="btn-arrow">→</span></a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
