'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
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
          alt="Garden Background" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="hero-overlay"></div>
      </motion.div>

      <div className="container hero-container">
        <motion.div 
          className="hero-glass-panel" 
          initial={{ opacity: 0, x: -50, rotateX: 10, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ 
            rotateX: 5, 
            rotateY: 5, 
            boxShadow: "0 50px 120px rgba(0,0,0,0.8)",
            transition: { duration: 0.4 }
          }}
          style={{ perspective: 1000 }}
        >
          <span className="subtitle">Kiến tạo Farmstay</span>
          <h1 className="hero-title">
            Hồ sơ thiết kế <br />Farm chuyên nghiệp
          </h1>
          
          <motion.div 
            className="hero-cta-box"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="cta-thumb">
              <Image 
                src="/images/projects/0-1-680f9a3ba1ae.jpg" 
                alt="Profile Thumbnail" 
                width={120}
                height={120}
              />
            </div>
            <div className="cta-info">
              <p>Hồ sơ thiết kế Farm mẫu chuẩn Oak Farm</p>
              <div className="hero-btns-wrapper">
                <motion.a 
                  href="/docs/oakfarm-profile.pdf" 
                  target="_blank" 
                  className="view-pdf-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Xem ngay
                </motion.a>
                <span className="cta-size">[16.5 MB]</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-foreground"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1.5 }}
        >
          <Image 
            src="/images/banners/h1-banner01-c38f6e852c91.png" 
            alt="Oak Farm Gardener" 
            width={1200}
            height={1300}
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </div>

      <motion.div 
        className="hero-decoration mobile-hide"
        initial={{ opacity: 0, scale: 0.8, y: 0 }}
        animate={{ 
          opacity: [0, 0.2, 0.2, 0.2], 
          scale: [0.8, 1, 1, 1],
          y: [0, -20, 0] 
        }}
        transition={{ 
          opacity: { delay: 1, duration: 2 },
          scale: { delay: 1, duration: 2 },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }
        }}
      >
         <Image 
          src="/images/other/h1-mask01-bbda12d4d320.png" 
          alt="Decoration" 
          width={400}
          height={400}
          style={{ opacity: 0.2 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
