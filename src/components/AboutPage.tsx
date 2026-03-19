'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import pagesContentPages from '../../clone_ready/pages_content_pages.json';

type ContentPageEntry = {
  url: string;
  title: string;
  h1: string;
  meta_description: string | null;
};

const aboutEntry = (pagesContentPages as ContentPageEntry[]).find((entry) => entry.url.includes('/chung-toi/'));

const whyUsItems = [
  {
    icon: '📐',
    title: 'Tư vấn Chuyên sâu',
    description:
      'Đội ngũ kiến trúc sư Sơn Hải Landscape luôn sẵn sàng lắng nghe, thấu hiểu để đưa ra giải pháp quy hoạch tối ưu nhất cho khu đất của bạn.'
  },
  {
    icon: '⛰️',
    title: 'Đọc vị Địa hình',
    description:
      'Mỗi dự án đều được khảo sát thực tế để ghi nhận địa hình, hướng nắng, gió và đặc thù thổ nhưỡng, đảm bảo thiết kế thuận tự nhiên.'
  },
  {
    icon: '📜',
    title: 'Hồ sơ Chi tiết',
    description:
      'Chúng tôi cung cấp bộ hồ sơ thiết kế kỹ thuật hoàn chỉnh, từ quy hoạch tổng thể đến chi tiết cấu tạo, giúp thi công chính xác nhất.'
  },
  {
    icon: '✨',
    title: 'Bản sắc Độc bản',
    description:
      'Không sao chép, không rập khuôn. Mỗi công trình là một tác phẩm nghệ thuật mang đậm dấu ấn cá nhân của chủ sở hữu.'
  }
];

const faqItems = [
  {
    question: 'Sơn Hải Landscape có nhận dự án ở các tỉnh xa không?',
    answer:
      'Chúng tôi có trụ sở tại Đà Nẵng nhưng hoạt động trên toàn quốc. Đội ngũ sẵn sàng di chuyển đến trực tiếp khu đất để khảo sát và làm việc.'
  },
  {
    question: 'Quy trình tư vấn thiết kế tại đây như thế nào?',
    answer:
      'Quy trình gồm 7 giai đoạn: Tiếp nhận thông tin -> Khảo sát thực tế -> Ý tưởng sơ phác -> Quy hoạch 1/500 -> Thiết kế kiến trúc -> Thiết kế cảnh quan -> Bàn giao hồ sơ.'
  },
  {
    question: 'Chi phí khảo sát được tính như thế nào?',
    answer:
      'Chi phí này phụ thuộc vào vị trí và quy mô khu đất. Chúng tôi sẽ báo giá minh bạch trước khi thực hiện để quý khách chủ động ngân sách.'
  }
];

const AboutPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const teamMembers = useMemo(() => [
    {
      slug: 'founder',
      name: 'Võ Hữu Hải',
      role: 'Founder / CEO',
      image: '/images/team/Founder.png',
      desc: 'Chuyên gia quy hoạch và kiến trúc cảnh quan với hơn 10 năm kinh nghiệm.'
    },
    {
      slug: 'manager',
      name: 'Quản Lý Dự Án',
      role: 'Project Manager',
      image: '/images/team/Manager.png',
      desc: 'Điều hành và đảm bảo tiến độ, chất lượng cho mọi dự án tại Sơn Hải.'
    },
    {
      slug: 'architect',
      name: 'Kiến Trúc Sư',
      role: 'Lead Architect',
      image: '/images/team/Architect.png',
      desc: 'Người thổi hồn vào các bản vẽ thiết kế kiến trúc và không gian xanh.'
    },
    {
      slug: 'administrator',
      name: 'Hành Chính',
      role: 'Finance & Admin',
      image: '/images/team/Administrator.png',
      desc: 'Quản lý vận hành và hỗ trợ tối đa cho đội ngũ kỹ thuật.'
    }
  ], []);

  return (
    <div className="about-modern-wrapper">
      {/* 1. ARCHITECTURAL HERO */}
      <section className="about-hero-modern">
        <div className="container hero-grid-modern">
          <motion.div 
            className="hero-text-modern"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="modern-eyebrow">Architecture & Landscape</span>
            <h1 className="modern-title-main">
              Kiến tạo <br/>
              <span className="accent-text">Giá trị bền vững</span>
            </h1>
            <p className="modern-desc-main">
              Sơn Hải Landscape không chỉ thiết kế, chúng tôi kiến tạo những không gian sống thuận tự nhiên, nơi con người và thiên nhiên giao hòa làm một.
            </p>
            <div className="hero-modern-cta">
              <Link href="/bao-gia-thiet-ke-farm" className="btn-modern-primary">Nhận Tư Vấn Ngay</Link>
              <Link href="/project" className="btn-modern-link">Xem Dự Án Dự Thực Hiện →</Link>
            </div>
          </motion.div>

          <motion.div 
            className="hero-images-modern"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="main-img-box">
              <img src="/images/banners/about-banner-1-dd024296e966.jpg" alt="About Son Hai Landscape" />
              <div className="floating-stat-box">
                <strong>50+</strong>
                <span>Dự án hoàn thiện</span>
              </div>
            </div>
            <div className="sub-img-box">
              <img src="/images/projects/coverr-oak-farm-2b0707e1d7e2.jpg" alt="Landscape Design" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY */}
      <section className="about-philosophy">
        <div className="container">
          <motion.div 
            className="philosophy-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              "Chúng tôi tin rằng kiến trúc thực thụ phải bắt nguồn từ sự thấu hiểu sâu sắc về <strong>Đất, Người và Thời điểm</strong>. Mỗi dự án của Sơn Hải Landscape là một lời giải độc bản cho bài toán cân bằng giữa công năng và cảm xúc."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERT TEAM */}
      <section className="about-team-modern">
        <div className="container">
          <div className="modern-header-centered">
            <span className="modern-eyebrow">The Brains</span>
            <h2>Đội Ngũ Chuyên Gia</h2>
            <p>Hội tụ những con người nhiệt huyết, giàu kinh nghiệm trong lĩnh vực quy hoạch và thiết kế cảnh quan.</p>
          </div>

          <div className="team-modern-grid">
            {teamMembers.map((member, i) => (
              <motion.div 
                className="team-modern-card" 
                key={member.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="team-card-img-modern">
                  <img src={member.image} alt={member.name} />
                  <div className="img-overlay-modern">
                    <p>{member.desc}</p>
                  </div>
                </div>
                <div className="team-card-info-modern">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY SON HAI */}
      <section className="about-values-modern">
        <div className="container box-values-modern">
          <div className="values-modern-header">
            <span className="modern-eyebrow">Our Values</span>
            <h2>Giá Trị Làm Nên Khác Biệt</h2>
            <Link href="/project" className="btn-modern-outline">Khám phá phong cách thiết kế</Link>
          </div>

          <div className="values-modern-grid">
            {whyUsItems.map((item, i) => (
              <div className="value-modern-item" key={i}>
                <div className="value-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ MODERN */}
      <section className="about-faq-modern">
        <div className="container">
          <div className="faq-modern-inner">
            <div className="faq-modern-left">
              <span className="modern-eyebrow">Q&A</span>
              <h2>Bạn còn <br/> thắc mắc?</h2>
              <p>Chúng tôi luôn minh bạch trong quy trình làm việc để khách hàng hoàn toàn yên tâm khi đồng hành.</p>
            </div>
            
            <div className="faq-modern-right">
              {faqItems.map((item, index) => (
                <div 
                  className={`faq-modern-item ${openFaqIndex === index ? 'active' : ''}`} 
                  key={index}
                  onClick={() => setOpenFaqIndex(index)}
                >
                  <div className="faq-modern-q">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h4>{item.question}</h4>
                  </div>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div 
                        className="faq-modern-a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MODERN FOOTER CTA */}
      <section className="about-cta-modern">
        <div className="container">
          <div className="cta-modern-box">
            <div className="cta-modern-content">
              <h2>Ghé thăm Fanpage để cập nhật dự án mới nhất</h2>
              <p>Hàng ngàn hình ảnh thực tế và ý tưởng thiết kế đang chờ đón bạn.</p>
              <div className="cta-modern-btns">
                <a href="https://www.facebook.com/oakfarm.vn" target="_blank" rel="noreferrer" className="btn-fb-modern">
                  Theo dõi trên Facebook
                </a>
                <Link href="/contact" className="btn-contact-modern">Gửi lời nhắn ngay</Link>
              </div>
            </div>
            <div className="cta-modern-visual">
              <img src="/images/banners/contact-banner-2-1-0d9975b71001.png" alt="Contact Us" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
