'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ y: yBg }}>
        <Image 
          src="/images/projects/1-3-b1caaea5db89.jpg" 
          alt="Son Hai Landscape Architecture" 
          fill
          style={{ objectFit: 'cover', opacity: 0.7 }}
          priority
        />
        <div className="hero-overlay"></div>
      </motion.div>

      <div className="container hero-container">
        <motion.div 
          className="hero-glass-panel" 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="subtitle">Architecture & Landscape</span>
          <h1 className="hero-title">
            Slow thinking.<br />
            <span>Timeless design.</span>
          </h1>
          
          <div className="hero-description">
            <p>
              Sơn Hải Landscape cung cấp dịch vụ tư vấn, thiết kế và thi công cảnh quan chuyên nghiệp, bao gồm sân vườn, hồ koi, farm, homestay và công viên. Chúng tôi kiến tạo những không gian hài hòa giữa thẩm mỹ và công năng, đảm bảo chất lượng thi công và giá trị bền vững cho từng dự án.
            </p>
          </div>

          <div className="hero-btns-wrapper-new">
            <Link href="/bao-gia-thiet-ke-farm" className="btn-modern-primary">
              Nhận Báo Giá
            </Link>
            <Link href="/project" className="btn-modern-outline-white">
              Xem dự án
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="hero-foreground"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1.5 }}
        >
          <Image 
            src="/images/home/hero-main.png" 
            alt="Son Hai Landscape Professional Service" 
            width={1200}
            height={1300}
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
