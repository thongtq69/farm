'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const cases = [
  {
    name: 'Taste Of Issan Farm',
    location: 'Udon Thani - Thailand',
    before: '/images/other/before-1-3eaf349019db.jpg',
    after: '/images/other/after-1-dce66f94aacb.jpg'
  },
  {
    name: 'Farm Together',
    location: 'Lam Dong, Viet Nam',
    before: '/images/other/before-2-8fb935ad82c0.jpg',
    after: '/images/other/after-2-543f0951941f.jpg'
  },
  {
    name: 'Maharaja Country Club',
    location: 'Koh Phangan - Thailand',
    before: '/images/other/before-3-75031d1cc19a.jpg',
    after: '/images/other/after-3-720495691273.jpg'
  }
];

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="before-after section section-dark">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle">Hiện trạng & Quy hoạch</span>
          <h2 className="section-title">Hành trình biến đổi</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Từ những khu đất trống hay vườn chè già cỗi, Oak Farm đã kiến tạo nên những không gian nghỉ dưỡng đẳng cấp.
          </p>
        </div>

        <div className="cases-tabs" data-aos="fade-up" data-aos-delay="200">
          {cases.map((item, index) => (
            <button 
              key={index} 
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="comparison-container" key={activeTab} data-aos="zoom-in" data-aos-duration="1000">
          <div className="comparison-item">
            <span className="label">Hiện trạng</span>
            <div className="image-box">
              <Image src={cases[activeTab].before} alt="Before" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="comparison-item">
            <span className="label">Quy hoạch</span>
            <div className="image-box">
              <Image src={cases[activeTab].after} alt="After" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div className="active-case-info" data-aos="fade-up">
          <h3>Dự án {cases[activeTab].name}</h3>
          <p>{cases[activeTab].location}</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
