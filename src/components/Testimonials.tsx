'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    author: 'Ms. Lan Anh',
    role: 'Chủ đầu tư - Lâm Đồng',
    content: 'Oak Farm đã giúp tôi hiện thực hóa ý tưởng về một Farmstay mang hơi thở bản địa. Quy trình làm việc rất chuyên nghiệp và thấu hiểu khách hàng.',
    image: '/images/icons/member-1-e4905fbc3a31.jpg'
  },
  {
    author: 'Mr. David Smith',
    role: 'Project Manager - Thailand',
    content: 'Professional landscape planning. They understand the terrain and elevation challenges well. Highly recommended for farm projects.',
    image: '/images/icons/member-2-5813f38096f2.jpg'
  },
  {
    author: 'Mr. Hoàng Nam',
    role: 'Chủ đầu tư - Đồng Nai',
    content: 'Hồ sơ kỹ thuật chi tiết và rất dễ hiểu cho đội ngũ thi công. Oak Farm giúp tôi tiết kiệm được rất nhiều chi phí phát sinh không đáng có.',
    image: '/images/icons/member-3-c820986756fd.jpg'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const autoPlayRef = React.useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = React.useCallback(() => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
  }, []);

  const stopAutoPlay = React.useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  React.useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const next = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    startAutoPlay();
  };

  const prev = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    startAutoPlay();
  };

  return (
    <section className="testimonials section bg-pattern" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle">Khách hàng nói gì</span>
          <h2 className="section-title">Niềm tin gửi trao</h2>
        </div>

        <div className="testimonials-slider-container">
          <div className="testimonials-track">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="testimonial-card-single"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="quote-icon">“</div>
                <p className="testimonial-content">{reviews[currentIndex].content}</p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <Image src={reviews[currentIndex].image} alt={reviews[currentIndex].author} width={80} height={80} />
                  </div>
                  <div className="author-info">
                    <h3>{reviews[currentIndex].author}</h3>
                    <span>{reviews[currentIndex].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonials-controls">
            <button onClick={prev} className="t-control-btn">←</button>
            <div className="t-dots">
              {reviews.map((_, i) => (
                <div 
                  key={i} 
                  className={`t-dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    stopAutoPlay();
                    setCurrentIndex(i);
                    startAutoPlay();
                  }}
                />
              ))}
            </div>
            <button onClick={next} className="t-control-btn">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
