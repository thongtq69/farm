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
        <div className="hero-glass-panel" data-aos="fade-right" data-aos-duration="1200">
          <span className="subtitle">Kiến tạo Farmstay</span>
          <h1 className="hero-title">
            Hồ sơ thiết kế <br />Farm chuyên nghiệp
          </h1>
          
          <div className="hero-cta-box" data-aos="fade-up" data-aos-delay="600">
            <div className="cta-thumb">
              <Image 
                src="/images/other/ho-so-1-d6f4ac33bb75.jpg" 
                alt="Profile Thumbnail" 
                width={120}
                height={120}
              />
            </div>
            <div className="cta-info">
              <p>Hồ sơ thiết kế Farm mẫu chuẩn Oak Farm</p>
              <div className="hero-btns-wrapper">
                <a href="/docs/oakfarm-profile.pdf" target="_blank" className="view-pdf-btn">Xem ngay</a>
                <span className="cta-size">[16.5 MB]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foreground" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1500">
          <Image 
            src="/images/banners/h1-banner01-c38f6e852c91.png" 
            alt="Oak Farm Gardener" 
            width={1200}
            height={1300}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>

      {/* Decorative leaf/shape if available */}
      <div className="hero-decoration mobile-hide" data-aos="zoom-in" data-aos-delay="1000">
         <Image 
          src="/images/other/h1-mask01-bbda12d4d320.png" 
          alt="Decoration" 
          width={400}
          height={400}
          style={{ opacity: 0.2 }}
        />
      </div>
    </section>
  );
};


export default Hero;
