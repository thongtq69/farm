'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const teamMembers = useMemo(() => [
    {
      name: 'Võ Hữu Hải',
      role: 'Founder / CEO',
      image: '/images/team/Founder.png',
      desc: 'Chuyên gia quy hoạch và kiến trúc cảnh quan với hơn 10 năm kinh nghiệm.'
    },
    {
      name: 'Quản Lý Dự Án',
      role: 'Project Manager',
      image: '/images/team/Manager.png',
      desc: 'Điều hành và đảm bảo tiến độ, chất lượng cho mọi dự án tại Sơn Hải.'
    },
    {
      name: 'Kiến Trúc Sư',
      role: 'Lead Architect',
      image: '/images/team/Architect.png',
      desc: 'Người thổi hồn vào các bản vẽ thiết kế kiến trúc và không gian xanh.'
    },
    {
      name: 'Hành Chính',
      role: 'Finance & Admin',
      image: '/images/team/Administrator.png',
      desc: 'Quản lý vận hành và hỗ trợ tối đa cho đội ngũ kỹ thuật.'
    }
  ], []);

  const coreValues = [
    { title: 'Tâm Huyết', desc: 'Mọi công trình đều được chăm chút từ những chi tiết nhỏ nhất.' },
    { title: 'Sáng Tạo', desc: 'Không ngừng đổi mới để mang lại giải pháp kiến trúc độc bản.' },
    { title: 'Bền Vững', desc: 'Thiết kế thuận tự nhiên, hướng tới giá trị sử dụng lâu dài.' }
  ];

  return (
    <div className="about-v2">
      {/* 1. HERO WITH BACKGROUND */}
      <section className="about-hero-v2">
        <Image 
          src="/images/projects/1-3-b1caaea5db89.jpg" 
          alt="About Us Background" 
          fill 
          className="hero-bg-img"
          priority
        />
        <div className="hero-overlay-dark"></div>
        <div className="container relative z-10">
          <motion.div 
            className="hero-glass-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="subtitle" style={{ color: '#c5a059', paddingLeft: '0' }}>VỀ CHÚNG TÔI</span>
            <h1>Sơn Hải Landscape</h1>
            <p>
              Đơn vị dẫn đầu trong lĩnh vực thiết kế và thi công cảnh quan, kiến tạo những không gian sống xanh bền vững và đậm chất nghệ thuật.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION & MISSION WITH IMAGE BACKGROUND */}
      <section className="about-vision-v2">
        <div className="vision-image-side">
          <Image 
            src="/images/projects/1-4-1971866182c4.jpg" 
            alt="Our Vision" 
            fill 
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="vision-content-side">
          <motion.div 
            className="vision-text-box"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="subtitle">TẦM NHÌN & SỨ MỆNH</span>
            <h2>Kiến tạo sự cân bằng giữa Con người & Thiên nhiên</h2>
            <p>
              Chúng tôi tin rằng kiến trúc thực thụ phải bắt nguồn từ sự thấu hiểu sâu sắc về Đất, Người và Thời điểm. Sứ mệnh của Sơn Hải Landscape là mang thiên nhiên vào từng nhịp sống hiện đại qua những giải pháp quy hoạch thông minh.
            </p>
            <div className="vision-stats">
              <div className="stat-item">
                <strong>10+</strong>
                <span>Năm kinh nghiệm</span>
              </div>
              <div className="stat-item">
                <strong>50+</strong>
                <span>Dự án hoàn thiện</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES WITH DARK BACKGROUND */}
      <section className="about-values-v2 section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <span className="subtitle" style={{ color: '#c5a059' }}>GIÁ TRỊ CỐT LÕI</span>
            <h2 style={{ color: 'white' }}>Nền tảng của sự tin cậy</h2>
          </div>
          <div className="values-grid-v2">
            {coreValues.map((val, idx) => (
              <motion.div 
                className="value-card-v2" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="val-num">0{idx + 1}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="about-team-v2 section">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">ĐỘI NGŨ CỦA CHÚNG TÔI</span>
            <h2>Gặp gỡ những chuyên gia kiến tạo</h2>
          </div>
          <div className="team-grid-v2">
            {teamMembers.map((member, i) => (
              <motion.div 
                className="member-card-v2" 
                key={i}
                whileHover={{ y: -15 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="member-portrait">
                  <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="member-bio">
                  <h3>{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                  <p>{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION WITH BACKGROUND */}
      <section className="about-cta-v2">
        <Image 
          src="/images/projects/coverr-oak-farm-2b0707e1d7e2.jpg" 
          alt="Contact Background" 
          fill 
          className="cta-bg-img"
        />
        <div className="cta-overlay-v2"></div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Bắt đầu hành trình kiến tạo không gian của bạn</h2>
            <p>Liên hệ với các chuyên gia của chúng tôi để được tư vấn quy hoạch và thiết kế chi tiết.</p>
            <div className="cta-flex-btns">
              <Link href="/bao-gia-thiet-ke-farm" className="btn-modern-primary">Nhận Báo Giá</Link>
              <Link href="tel:0888220044" className="btn-modern-outline-white">(+84) 888.22.00.44</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
