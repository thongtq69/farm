'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    content: "Tôi rất hài lòng với quy trình làm việc của Oak Farm. Từ kháo sát đến thiết kế đều rất chuyên nghiệp và minh bạch.",
    author: "Anh Tuấn",
    location: "Sơn La",
    image: "/images/content/h1-testimonial-1-27912072eb28.jpg"
  },
  {
    content: "Team Oak Farm đã giúp tôi hiện thực hóa ước mơ về một khu farmstay xanh mát, bền vững.",
    author: "Chị Hằng",
    location: "Lâm Đồng",
    image: "/images/content/h1-testimonial-2-e5820839e5e3.jpg"
  },
  {
    content: "Thiết kế của Oak Farm không chỉ đẹp mà còn rất thực tế, tối ưu được công năng sử dụng đất.",
    author: "Anh Hải",
    location: "Đồng Nai",
    image: "/images/content/h1-testimonial-3-2bb6f6abf603.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials section" style={{ backgroundColor: '#FDFCFA' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle">Khách hàng nói gì</span>
          <h2 className="section-title">Đánh giá từ chủ đầu tư</h2>
          <p className="section-subtitle">Sự hài lòng của khách hàng là động lực lớn nhất để Oak Farm không ngừng hoàn thiện.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="quote-icon">"</div>
              <p className="testimonial-content">{item.content}</p>
              <div className="testimonial-author">
                <div className="author-image">
                  <Image src={item.image} alt={item.author} width={60} height={60} />
                </div>
                <div className="author-info">
                  <h3>{item.author}</h3>
                  <span>{item.location}</span>
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
