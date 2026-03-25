'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroSlides = [
  'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426277/farm/images/beforeafter/tw93p66rxwxqgzp19i9s.png',
  'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426280/farm/images/beforeafter/vngvkvqvm1zhvq00zaog.jpg',
  'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426276/farm/images/beforeafter/wvhc6pdkyp248tytrmko.png'
];

const Hero = () => {
  const ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ y: yBg }}>
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide}
            className="hero-bg-slide"
            initial={false}
            animate={{ opacity: activeSlide === index ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src={slide}
              alt={`Son Hai Landscape Architecture ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </motion.div>
        ))}
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
            src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426303/farm/images/home/jhfe2t09sjur4xnj1ui1.png" 
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
