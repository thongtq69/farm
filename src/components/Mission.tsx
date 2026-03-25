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
          <span className="subtitle">Giới thiệu về Sơn Hải Landscape</span>
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Chuyên nghiệp. <br/>Bền vững. Chiều sâu.</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: 'var(--text-muted)' }}>
            Sơn Hải Landscape là đơn vị tư vấn, thiết kế và thi công cảnh quan theo định hướng chuyên nghiệp và bền vững. Chúng tôi áp dụng tư duy thiết kế "slow thinking", ưu tiên nghiên cứu chiều sâu và giải pháp phù hợp trong dài hạn cho từng dự án. Mỗi công trình được phát triển theo nguyên tắc "timeless design", hướng đến giá trị thẩm mỹ ổn định, hài hòa giữa công năng và bối cảnh tự nhiên. Sứ mệnh của chúng tôi là kiến tạo những không gian có giá trị bền vững, gia tăng chất lượng sống theo thời gian.
          </p>
          
          <div className="mission-features">
            <div className="feature-item">
              <div className="feature-icon glass-effect">
                 <Image src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426317/farm/images/icons/xbcpud1rwcre6oprnuae.png" alt="Icon" width={30} height={30} style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(35%) saturate(738%) hue-rotate(69deg) brightness(96%) contrast(89%)' }} />
              </div>
              <div className="feature-text">
                <h3>Quản trị rủi ro</h3>
                <p>Hạn chế sai sót trong xây dựng và tối ưu chi phí vận hành sau này.</p>
              </div>
            </div>
            <div className="feature-item">
               <div className="feature-icon glass-effect">
                 <Image src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426316/farm/images/icons/weraoflu7t86ft9p1kso.png" alt="Icon" width={30} height={30} style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(35%) saturate(738%) hue-rotate(69deg) brightness(96%) contrast(89%)' }} />
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
              src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426270/farm/images/banners/xqh8hfat7lsie0no5d8l.png" 
              alt="Võ Hữu Hải - Son Hai Landscape" 
              width={700}
              height={900}
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
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
