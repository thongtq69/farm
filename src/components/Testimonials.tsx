'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const reviews = [
  {
    author: 'Ms. Lan Anh',
    role: 'Chủ đầu tư - Lâm Đồng',
    project: 'Dự án Farmstay bản địa',
    content:
      'Son Hai Landscape đã giúp tôi hiện thực hóa ý tưởng về một Farmstay mang hơi thở bản địa. Quy trình làm việc rất chuyên nghiệp và thấu hiểu khách hàng.',
  },
  {
    author: 'Mr. David Smith',
    role: 'Project Manager - Thailand',
    project: 'Dự án nghỉ dưỡng đồi dốc',
    content:
      'Professional landscape planning. They understand the terrain and elevation challenges very well, then translate everything into a clear and workable master plan.',
  },
  {
    author: 'Mr. Hoàng Nam',
    role: 'Chủ đầu tư - Đồng Nai',
    project: 'Dự án quy hoạch nông trại',
    content:
      'Hồ sơ kỹ thuật chi tiết và dễ hiểu cho đội thi công. Son Hai Landscape giúp tôi tiết kiệm nhiều chi phí phát sinh, đồng thời giữ được tính thẩm mỹ cho toàn bộ dự án.',
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const autoPlayRef = React.useRef<NodeJS.Timeout | null>(null);

  const stopAutoPlay = React.useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const startAutoPlay = React.useCallback(() => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6500);
  }, [stopAutoPlay]);

  React.useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const goTo = (index: number) => {
    stopAutoPlay();
    setCurrentIndex(index);
    startAutoPlay();
  };

  const prev = () => {
    goTo((currentIndex - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    goTo((currentIndex + 1) % reviews.length);
  };

  const activeReview = reviews[currentIndex];
  const avatarLabel = activeReview.author
    .replace(/^(Mr\.?|Ms\.?|Mrs\.?|Anh|Chị)\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  return (
    <section className="testimonials section section-dark-alt" style={{ overflow: 'hidden' }}>
      <div className="container testimonials-shell">
        <div className="section-header testimonial-header" data-aos="fade-up">
          <span className="subtitle" style={{ color: '#c9ef83' }}>Khách hàng nói gì</span>
          <h2 className="section-title" style={{ color: '#f7f5ef' }}>Niềm tin gửi trao</h2>
        </div>

        <div className="testimonials-stage" data-aos="fade-up" data-aos-delay="100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-scene"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="testimonial-copy">
                <div className="testimonial-quote-mark">“</div>
                <p className="testimonial-content">{activeReview.content}</p>
                <div className="testimonial-meta">
                  <div className="testimonial-avatar" aria-hidden="true">{avatarLabel}</div>
                  <h3>{activeReview.author}</h3>
                  <span>{activeReview.project}</span>
                  <strong>{activeReview.role}</strong>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials-controls testimonials-controls-modern">
            <div className="t-dots t-dots-modern">
              {reviews.map((review, index) => (
                <button
                  key={review.author}
                  type="button"
                  className={`t-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={`Xem đánh giá ${review.author}`}
                />
              ))}
            </div>

            <div className="testimonial-nav-pair">
              <button onClick={prev} className="t-control-btn t-control-btn-dark" aria-label="Đánh giá trước">
                ←
              </button>
              <button onClick={next} className="t-control-btn t-control-btn-dark" aria-label="Đánh giá tiếp theo">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
