'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="mission section">
      <div className="container mission-container">
        <motion.div 
          className="mission-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="subtitle">Lý do chọn Oak Farm</span>
          <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Chúng tôi thiết kế Farm <br/>để bạn thực hiện ước mơ</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--text-muted)' }}>
            Bạn có khu đất và dự định thực hiện ước mơ làm farmstay, homestay... mà chưa biết bắt đầu từ đâu? Oak Farm sẽ là người bạn đồng hành biến ý tưởng thành hiện thực.
          </p>
          
          <div className="mission-features">
            <div className="feature-item">
              <div className="feature-icon glass-effect">
                 <Image src="/images/icons/hotline.png" alt="Icon" width={30} height={30} style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(35%) saturate(738%) hue-rotate(69deg) brightness(96%) contrast(89%)' }} />
              </div>
              <div className="feature-text">
                <h3>Quản trị rủi ro</h3>
                <p>Hạn chế sai sót trong xây dựng và tối ưu chi phí vận hành sau này.</p>
              </div>
            </div>
            <div className="feature-item">
               <div className="feature-icon glass-effect">
                 <Image src="/images/icons/footer-icon-2-240be6c70168.png" alt="Icon" width={30} height={30} style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(35%) saturate(738%) hue-rotate(69deg) brightness(96%) contrast(89%)' }} />
              </div>
              <div className="feature-text">
                <h3>Thẩm mỹ riêng biệt</h3>
                <p>Mỗi dự án là một câu chuyện độc bản, mang hơi thở của đất và người.</p>
              </div>
            </div>
          </div>

          <motion.div 
            className="mission-cta"
            whileHover={{ scale: 1.02 }}
          >
            <div className="cta-txt">
                <p>Tư vấn quy hoạch ngay</p>
                <span>Sẵn sàng lắng nghe 24/7</span>
            </div>
            <a href="tel:0888220044" className="cta-phone">0888.22.00.44</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mission-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="image-wrapper">
            <Image 
              src="/images/other/huong-oak-ba5b2e166c78.png" 
              alt="Oak Farm Mission" 
              width={700}
              height={900}
              style={{ objectFit: 'cover' }}
            />
            <div className="mission-watermark">OAK FARM</div>
            <motion.div 
              className="mission-badge"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              🌿
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
