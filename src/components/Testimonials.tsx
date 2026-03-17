'use client';

import React from 'react';
import Image from 'next/image';

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
  return (
    <section className="testimonials section bg-pattern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle">Khách hàng nói gì</span>
          <h2 className="section-title">Niềm tin gửi trao</h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((item, index) => (
            <div className="testimonial-card" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="quote-icon">“</div>
              <p className="testimonial-content">{item.content}</p>
              <div className="testimonial-author">
                <div className="author-image">
                  <Image src={item.image} alt={item.author} width={60} height={60} />
                </div>
                <div className="author-info">
                  <h3>{item.author}</h3>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
