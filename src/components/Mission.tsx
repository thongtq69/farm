'use client';

import React from 'react';
import Image from 'next/image';

const Mission = () => {
  return (
    <section className="mission section">
      <div className="container mission-container">
        <div className="mission-content" data-aos="fade-right" data-aos-duration="1200">
          <span className="subtitle">Lý do chọn Oak Farm</span>
          <h2>Chuẩn mực trong từng nét vẽ Farm</h2>
          <p>
            Với kinh nghiệm thực chiến trong quy hoạch và vận hành, Oak Farm thấu hiểu những khó khăn của chủ đầu tư để đưa ra giải pháp thiết kế tối ưu nhất.
          </p>
          
          <div className="mission-features">
            <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                 <Image src="/images/icons/hotline.png" alt="Icon" width={30} height={30} style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(35%) saturate(738%) hue-rotate(69deg) brightness(96%) contrast(89%)' }} />
              </div>
              <div className="feature-text">
                <h3>Quản trị rủi ro</h3>
                <p>Hạn chế sai sót trong xây dựng và tối ưu chi phí vận hành sau này.</p>
              </div>
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
               <div className="feature-icon">
                 <Image src="/images/icons/footer-icon-2-240be6c70168.png" alt="Icon" width={30} height={30} style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(35%) saturate(738%) hue-rotate(69deg) brightness(96%) contrast(89%)' }} />
              </div>
              <div className="feature-text">
                <h3>Thẩm mỹ riêng biệt</h3>
                <p>Mỗi dự án là một câu chuyện độc bản, mang hơi thở của đất và người.</p>
              </div>
            </div>
          </div>

          <div className="mission-cta" data-aos="zoom-in" data-aos-delay="600">
            <div className="cta-txt">
                <p>Tư vấn quy hoạch ngay</p>
                <span>Sẵn sàng lắng nghe 24/7</span>
            </div>
            <a href="tel:0888220044" className="cta-phone">0888.22.00.44</a>
          </div>
        </div>

        <div className="mission-image" data-aos="fade-left" data-aos-duration="1200">
          <div className="image-wrapper">
            <Image 
              src="/images/other/huong-oak-ba5b2e166c78.png" 
              alt="Oak Farm Mission" 
              width={700}
              height={800}
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
