'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Sân Vườn - Hồ Koi',
    desc: 'Chuyên thiết kế, thi công và vận hành – bảo trì hồ cá Koi cùng cảnh quan sân vườn trên toàn quốc.',
    image: '/images/home/service-1.jpg'
  },
  {
    title: 'Farm & Du Lịch',
    desc: 'Chuyên tư vấn, thiết kế và thi công farm nghỉ dưỡng, khu du lịch sinh thái và cảnh quan đồng bộ.',
    image: '/images/home/service-2.jpg'
  },
  {
    title: 'Đá Nhân Tạo & Tiểu cảnh',
    desc: 'Chuyên thiết kế, thi công đá nhân tạo nghệ thuật và tiểu cảnh, tạo điểm nhấn thẩm mỹ cho không gian cảnh quan.',
    image: '/images/home/service-3.jpg'
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const showCount = 3;

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % services.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + services.length) % services.length);
  }, []);

  const visibleServices = useMemo(
    () => Array.from({ length: showCount }, (_, offset) => services[(activeIndex + offset) % services.length]),
    [activeIndex]
  );

  const featuredIndex = hoveredIndex;

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      goNext();
    }, 3200);

    return () => window.clearInterval(interval);
  }, [goNext, isPaused]);

  return (
    <section className="services section bg-pattern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle">Dịch vụ Son Hai Landscape</span>
          <h2 className="section-title">Dịch vụ Chuyên nghiệp</h2>
          <p className="section-subtitle">
            Chúng tôi kiến tạo những không gian hài hòa giữa thẩm mỹ và công năng, đảm bảo chất lượng cho từng dự án.
          </p>
        </div>

        <div
          className="services-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIndex(null);
          }}
        >
          <div className="services-grid">
            {visibleServices.map((service, index) => (
              <div
                className={`service-card${index === featuredIndex ? ' is-featured' : ''}`}
                key={`${index}-${service.title}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onFocus={() => {
                  setIsPaused(true);
                  setHoveredIndex(index);
                }}
                onBlur={() => {
                  setIsPaused(false);
                  setHoveredIndex(null);
                }}
                tabIndex={0}
              >
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 991px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="service-info service-info-static">
                  <h3>{service.title}</h3>
                  {index === featuredIndex && (
                    <>
                      <p>{service.desc}</p>
                      <a href="#" className="service-card-arrow" aria-label={`Chi tiết ${service.title}`}>
                        &rarr;
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="services-controls">
            <span className="services-controls-line" />
            <button type="button" className="services-control-btn" onClick={goPrev} aria-label="Dự án trước">
              &larr;
            </button>
            <button type="button" className="services-control-btn" onClick={goNext} aria-label="Dự án tiếp theo">
              &rarr;
            </button>
            <span className="services-controls-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
