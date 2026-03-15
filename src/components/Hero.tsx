'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image 
          src="/images/banners/h1-bg-01.jpg" 
          alt="Garden Background" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="hero-overlay"></div>
      </div>


      <div className="container hero-container">
        <div className="hero-glass-panel" data-aos="fade-right">
          <h1 className="hero-title">
            Hồ sơ thiết kế Farm<br />Chuẩn từng giai đoạn
          </h1>
          
          <div className="hero-cta-box">
            <div className="cta-thumb">
              <Image 
                src="/images/other/ho-so-1-d6f4ac33bb75.jpg" 
                alt="Profile Thumbnail" 
                width={80}
                height={80}
              />
            </div>
            <div className="cta-info">
              <p>Tải về hồ sơ thiết kế Farm mẫu</p>
              <span>[16.5 MB]</span>
            </div>
            <a href="#" className="download-btn">
              <span className="icon">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-foreground" data-aos="fade-up" data-aos-delay="300">
          <Image 
            src="/images/banners/h1-banner01-c38f6e852c91.png" 
            alt="Oak Farm Gardener" 
            width={700}
            height={800}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

      </div>
    </section>
  );
};


export default Hero;
