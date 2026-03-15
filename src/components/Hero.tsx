'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content container">
        <h6 className="hero-subtitle" data-aos="fade-up">Tải về hồ sơ thiết kế Farm mẫu [16.5 MB]</h6>
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
          Hồ sơ thiết kế Farm<br />Chuẩn từng giai đoạn
        </h1>
        <div className="hero-actions" data-aos="fade-up" data-aos-delay="200">
          <a href="#" className="btn btn-primary">Tải về hồ sơ mẫu</a>
          <a href="tel:0901122022" className="btn btn-outline">Tư vấn ngay</a>
        </div>
      </div>

      <div className="hero-image">
        <Image 
          src="/images/banners/h1-banner01-c38f6e852c91.png" 
          alt="Hero Banner" 
          fill
          style={{ objectFit: 'contain', objectPosition: 'right bottom' }}
          priority
        />
      </div>

    </section>
  );
};

export default Hero;
