'use client';

import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
              {visibleServices.map((service, index) => {
                // Ensure link points to the specific category for sub-navigation
                let targetHref = service.href || '/project';
                if (targetHref === '/project') {
                  if (service.title.toLowerCase().includes('sân vườn') || service.title.toLowerCase().includes('hồ koi')) {
                    targetHref = '/project/san-vuon-ho-koi';
                  } else if (service.title.toLowerCase().includes('farm') || service.title.toLowerCase().includes('du lịch')) {
                    targetHref = '/project/farm-du-lich-nghi-duong';
                  } else if (service.title.toLowerCase().includes('đá nhân tạo')) {
                    targetHref = '/project/da-nhan-tao-nghe-thuat';
                  }
                }

                return (
                  <Link
                    className={`service-card${index === featuredIndex ? ' is-featured' : ''}`}
                    key={`${index}-${service.title}`}
                    href={targetHref}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
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
                  </Link>
                );
              })}
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
