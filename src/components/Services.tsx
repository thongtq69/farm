'use client';

import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type ServiceItem = { title: string; desc: string; image: string; href?: string };

type ServicesProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
};

const Services = ({ content }: ServicesProps) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const showCount = 3;

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % content.items.length);
  }, [content.items.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + content.items.length) % content.items.length);
  }, [content.items.length]);

  const visibleServices = useMemo(() => Array.from({ length: showCount }, (_, offset) => content.items[(activeIndex + offset) % content.items.length]), [activeIndex, content.items]);
  const featuredIndex = hoveredIndex;

  return (
    <section className="services section bg-pattern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle">{content.eyebrow}</span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.description}</p>
        </div>

        <div className="services-carousel" onMouseLeave={() => setHoveredIndex(null)}>
          <div className="services-grid">
            {visibleServices.map((service, index) => (
              <div
                className={`service-card${index === featuredIndex ? ' is-featured' : ''}`}
                key={`${index}-${service.title}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                onClick={() => router.push(service.href || '/project')}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    router.push(service.href || '/project');
                  }
                }}
                tabIndex={0}
                role="link"
              >
                <div className="service-image">
                  <Image src={service.image} alt={service.title} fill priority={index === 0} sizes="(max-width: 991px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="service-info service-info-static">
                  <h3>{service.title}</h3>
                  {index === featuredIndex && (
                    <>
                      <p>{service.desc}</p>
                      <span className="service-card-arrow" aria-label={`Chi tiết ${service.title}`}>&rarr;</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="services-controls">
            <span className="services-controls-line" />
            <button type="button" className="services-control-btn" onClick={goPrev} aria-label="Dự án trước">&larr;</button>
            <button type="button" className="services-control-btn" onClick={goNext} aria-label="Dự án tiếp theo">&rarr;</button>
            <span className="services-controls-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
