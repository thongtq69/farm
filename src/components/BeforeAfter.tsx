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
    <section className="before-after section" style={{ backgroundColor: '#1A1A1A', color: 'white' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title" style={{ color: 'white' }}>Explore Before & Afters</h2>
          <p className="section-subtitle" style={{ color: '#aaa' }}>Cảm nhận sự thay đổi kỳ diệu từ hiện trạng thực tế đến bản thiết kế hoàn thiện.</p>
        </div>

        <div className="cases-tabs">
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

        <div className="comparison-container" key={activeTab} data-aos="zoom-in">
          <div className="comparison-item">
            <span className="label">Before</span>
            <div className="image-box">
              <Image src={cases[activeTab].before} alt="Before" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="comparison-item">
            <span className="label">After</span>
            <div className="image-box">
              <Image src={cases[activeTab].after} alt="After" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div className="active-case-info">
          <h3>{cases[activeTab].name}</h3>
          <p>{cases[activeTab].location}</p>
        </div>
      </div>

    </section>
  );
};

export default BeforeAfter;
