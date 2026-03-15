'use client';

import React from 'react';
import Image from 'next/image';

const Mission = () => {
  return (
    <section className="mission section">
      <div className="container mission-container">
        <div className="mission-content" data-aos="fade-right">
          <span className="subtitle">Sứ mệnh</span>
          <h2>Chúng tôi thiết kế Farm để bạn thực hiện ước mơ</h2>
          <p>
            Bạn có khu đất và dự định thực hiện ước mơ làm farmstay, homestay, du lịch nghỉ dưỡng hay du lịch trải nghiệm… mà chưa biết bắt đầu từ đâu?
          </p>
          
          <div className="mission-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Khảo sát tận chỗ</h3>
                <p>Đội ngũ KTS trực tiếp khảo sát địa hình, địa mạo dự án.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Thiết kế tận tâm</h3>
                <p>Nhiều giai đoạn thiết kế từ tổng thể đến chi tiết.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Tư vấn tận nơi</h3>
                <p>Kinh nghiệm lâu năm trong quy hoạch và vận hành Farm.</p>
              </div>
            </div>
          </div>

          <div className="mission-cta">
            <p>Bạn cần tư vấn thiết kế Farm?</p>
              <a href="tel:0888220044" className="cta-phone">0888.22.00.44</a>
          </div>
        </div>

        <div className="mission-image" data-aos="fade-left">
          <div className="image-wrapper">
            <Image 
              src="/images/other/huong-oak-ba5b2e166c78.png" 
              alt="Oak Farm Mission" 
              width={500}
              height={600}
              style={{ objectFit: 'cover' }}
            />
            <div className="image-decoration">
               <Image 
                src="/images/other/h1-mask01-bbda12d4d320.png" 
                alt="Decoration" 
                fill
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Mission;
