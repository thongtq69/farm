'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Resort nghỉ dưỡng',
    desc: 'Quy hoạch, thiết kế chi tiết một khu nghỉ dưỡng với đầy đủ các hạng mục. Quy mô đề xuất từ 8ha – 20ha cho dự án resort.',
    image: '/images/blogs/dichvu-6-bcb63e69dc69.jpg'
  },
  {
    title: 'Du lịch trải nghiệm',
    desc: 'Đa dạng hình thức tùy theo đặc trưng từng vùng, có thể kết hợp du lịch nông nghiệm trải nghiệm, du lịch dưới tán rừng.',
    image: '/images/blogs/dichvu-4-60a8762ae7ee.jpg'
  },
  {
    title: 'Quy hoạch dự án',
    desc: 'Thực hiện thiết kế, quy hoạch các bước để thực hiện dự án. Từ khảo sát, thiết kế ý tưởng đến quy hoạch hồ sơ 1/500.',
    image: '/images/blogs/dichvu-7-5d957b58a6c9.jpg'
  },
  {
    title: 'Cảnh quan nhà vườn',
    desc: 'Thiết kế trọn gói nhà vườn, cảnh quan sân vườn với quy mô gia đình sử dụng. Áp dụng với các khu đất dưới 9000m2.',
    image: '/images/blogs/dichvu-9-6589c292446f.jpg'
  },
  {
    title: 'Farm-Homestay',
    desc: 'Hoạch định, thiết kế trọn gói mô hình Farmstay, Homestay đặc trưng cho từng vùng miền. Quy mô từ 1-3ha.',
    image: '/images/blogs/dichvu-5-eeec5f838131.jpg'
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
          <span className="subtitle">Dịch vụ Oak Farm</span>
          <h2 className="section-title">Nâng tầm mô hình Farmstay</h2>
          <p className="section-subtitle">
            Chúng tôi không chỉ thiết kế, chúng tôi kiến tạo những giá trị bền vững cho mô hình du lịch nông nghiệp của bạn.
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
