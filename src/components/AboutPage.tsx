'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const AboutPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
    { 
      icon: '📐', 
      title: 'Tư vấn Chuyên sâu', 
      desc: 'Đội ngũ kiến trúc sư Sơn Hải Landscape luôn sẵn sàng lắng nghe, thấu hiểu để đưa ra giải pháp quy hoạch tối ưu nhất cho khu đất của bạn.' 
    },
    { 
      icon: '⛰️', 
      title: 'Đọc vị Địa hình', 
      desc: 'Mỗi dự án đều được khảo sát thực tế để ghi nhận địa hình, hướng nắng, gió và đặc thù thổ nhưỡng, đảm bảo thiết kế thuận tự nhiên.' 
    },
    { 
      icon: '📜', 
      title: 'Hồ sơ Chi tiết', 
      desc: 'Chúng tôi cung cấp bộ hồ sơ thiết kế kỹ thuật hoàn chỉnh, từ quy hoạch tổng thể đến chi tiết cấu tạo, giúp thi công chính xác nhất.' 
    },
    { 
      icon: '✨', 
      title: 'Bản sắc Độc bản', 
      desc: 'Không sao chép, không rập khuôn. Mỗi công trình là một tác phẩm nghệ thuật mang đậm dấu ấn cá nhân của chủ sở hữu.' 
    }
  ];

  const faqItems = [
    {
      question: 'Sơn Hải Landscape có nhận dự án ở các tỉnh xa không?',
      answer: 'Chúng tôi có trụ sở tại Đà Nẵng nhưng hoạt động trên toàn quốc. Đội ngũ sẵn sàng di chuyển đến trực tiếp khu đất để khảo sát và làm việc.'
    },
    {
      question: 'Quy trình tư vấn thiết kế tại đây như thế nào?',
      answer: 'Quy trình gồm 7 giai đoạn: Tiếp nhận thông tin -> Khảo sát thực tế -> Ý tưởng sơ phác -> Quy hoạch 1/500 -> Thiết kế kiến trúc -> Thiết kế cảnh quan -> Bàn giao hồ sơ.'
    },
    {
      question: 'Chi phí khảo sát được tính như thế nào?',
      answer: 'Chi phí này phụ thuộc vào vị trí và quy mô khu đất. Chúng tôi sẽ báo giá minh bạch trước khi thực hiện để quý khách chủ động ngân sách.'
    }
  ];

  return (
    <div className="about-v2">
      {/* 1. HERO WITH BACKGROUND */}
      <section className="about-hero-v2">
        <Image 
          src="/images/home/project-1.jpg" 
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

      {/* 1.1 PHILOSOPHY TEXT BLOCK */}
      <section className="about-philosophy-simple section-tight">
        <div className="container">
          <motion.div 
            className="philosophy-text-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              "Chúng tôi tin rằng kiến trúc thực thụ phải bắt nguồn từ sự thấu hiểu sâu sắc về <strong>Đất, Người và Thời điểm</strong>. Mỗi dự án của Sơn Hải Landscape là một lời giải độc bản cho bài toán cân bằng giữa công năng và cảm xúc."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION & MISSION WITH IMAGE BACKGROUND */}
      <section className="about-vision-v2">
        <div className="vision-image-side">
          <Image 
            src="/images/home/project-3.png" 
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
              Chúng tôi không chỉ phối phối cảnh, chúng tôi quy hoạch những giá trị sống dài hạn. Sứ mệnh của Sơn Hải Landscape là mang thiên nhiên vào từng nhịp sống hiện đại qua những giải pháp thiết kế "Slow Thinking".
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
          <div className="values-v2-header">
            <div className="v-header-left">
              <span className="subtitle" style={{ color: '#c5a059' }}>OUR VALUES</span>
              <h2 style={{ color: 'white' }}>Giá Trị Làm Nên Khác Biệt</h2>
            </div>
            <div className="v-header-right">
               <Link href="/project" className="btn-modern-outline-white">Khám phá phong cách thiết kế</Link>
            </div>
          </div>
          <div className="values-grid-v2">
            {coreValues.map((val, idx) => (
              <motion.div 
                className="value-card-v2" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="val-icon">{val.icon}</div>
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
                  <Image src={member.image} alt={member.name} fill />
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

      {/* 5. Q&A SECTION */}
      <section className="about-faq-v2 section-tight bg-light">
        <div className="container">
          <div className="faq-v2-grid">
            <div className="faq-v2-info">
              <span className="subtitle" style={{ color: '#c5a059' }}>Q&A</span>
              <h2>Bạn còn <br/> thắc mắc?</h2>
              <p>Chúng tôi luôn minh bạch trong quy trình làm việc để khách hàng hoàn toàn yên tâm khi đồng hành.</p>
            </div>
            <div className="faq-v2-list">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`faq-v2-item ${openFaqIndex === index ? 'active' : ''}`}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <div className="faq-v2-q">
                    <span className="q-num">0{index + 1}</span>
                    <h4>{item.question}</h4>
                    <span className="q-arrow">{openFaqIndex === index ? '−' : '+'}</span>
                  </div>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div 
                        className="faq-v2-a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="faq-a-inner">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION WITH BACKGROUND */}
      <section className="about-cta-v2">
        <Image 
          src="/images/home/project-4.png" 
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
