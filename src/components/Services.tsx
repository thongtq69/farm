'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

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

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className={`service-card${activeIndex === index ? ' is-active' : ''}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              tabIndex={0}
              onMouseEnter={() => {
                setActiveIndex(index);
                setIsPaused(true);
              }}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => {
                setActiveIndex(index);
                setIsPaused(true);
              }}
              onBlur={() => setIsPaused(false)}
            >
              <div className="service-image">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="service-overlay" />
              <div className="service-info glass-effect">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#" className="service-link">
                  <span>Chi tiết dự án</span>
                  <i className="arrow-right">&rarr;</i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
