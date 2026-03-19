'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    slug: 'vuon-thien-nhien',
    title: 'Vườn thiên nhiên',
    location: 'Hồ Tràm, Xuyên Mộc',
    description: 'Tọa lạc tại Hồ Tràm, Xuyên Mộc, dự án là một farmstay rộng 1000m2 kết hợp vườn cây ăn trái và không gian cảnh quan thư giãn. Thiết kế hướng đến sự gần gũi tự nhiên với suối đá, hồ nước và hệ thực vật nhiệt đới phong phú.',
    image: '/images/home/project-1.jpg',
    href: '/project'
  },
  {
    slug: 'san-vuon-nha-lan',
    title: 'Sân vườn nhà Lan',
    location: 'Bình Trưng, Hồ Chí Minh',
    description: 'Dự án là sân vườn nhà phố thiết kế theo phong cách vườn Nhật hiện đại. Không gian tổ chức khéo léo với lối dạo stepping stone, sỏi rải, cụm đá tự nhiên và đèn đá truyền thống, kết hợp cây bonsai tinh tế.',
    image: '/images/home/project-2.jpg',
    href: '/project'
  },
  {
    slug: 'ca-phe-thi',
    title: 'Cà phê Thị',
    location: 'Nhơn Trạch, Đồng Nai',
    description: 'Không gian cà phê sân vườn uốn lượn tự nhiên, kết hợp giữa khu ngồi ngoài trời và cảnh quan mặt nước. Hồ cá trung tâm đóng vai trò điểm nhấn, liên kết các khu vực bàn ngồi và lối dạo xung quanh.',
    image: '/images/home/project-3.png',
    href: '/project'
  },
  {
    slug: 'ho-koi-tri-lam',
    title: 'Hồ Koi Trí Lâm',
    location: 'Tp Buôn Ma Thuột',
    description: 'Thiết kế theo phong cách vườn Nhật hiện đại, tập trung vào sự tinh giản và cân bằng không gian. Hồ koi kết hợp thác đá tự nhiên, đèn đá truyền thống và hệ cây bonsai mang đến không gian thư giãn tinh tế.',
    image: '/images/home/project-4.png',
    href: '/project'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      return undefined;
    }

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovering]);

  return (
    <section
      className="projects section section-tight"
      style={{ background: '#0d1e19', overflow: 'hidden' }}
    >
      <div className="container">
        <div className="projects-split-header" data-aos="fade-up">
          <div className="projects-header-left">
            <span className="projects-badge">🌿 Dự Án Tiêu Biểu</span>
            <h2 className="projects-main-title" style={{ color: 'white' }}>
              Những công trình <br />đầy tâm huyết
            </h2>
          </div>
          <div className="projects-header-right">
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              Sơn Hải Landscape tự hào được đồng hành cùng các chủ đầu tư để kiến tạo nên những không gian sống và nghỉ dưỡng mang đậm bản sắc riêng. Dưới đây là những dự án tiêu biểu phản ánh tư duy "Timeless Design" của chúng tôi.
            </p>
          </div>
        </div>

        <div
          className={`expand-cards ${isHovering ? 'is-hovering' : ''}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {projects.map((project, index) => (
            <a
              className={`exp-card ${activeIndex === index ? 'active' : ''}`}
              href={project.href}
              key={project.slug}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => {
                setIsHovering(true);
                setActiveIndex(index);
              }}
              onBlur={() => setIsHovering(false)}
            >
              <div className="exp-card-inner">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />

                <div className="exp-label-vert">
                  <span>{project.title}</span>
                </div>

                <div className="exp-info">
                  <div className="exp-info-content">
                    <div className="exp-info-loc">{project.location}</div>
                    <h3 className="exp-info-name">{project.title}</h3>
                    <p className="exp-info-desc">{project.description}</p>
                  </div>
                  <div className="exp-arrow">→</div>
                </div>

                <div className="exp-overlay-bottom">SON HAI LANDSCAPE</div>
              </div>
            </a>
          ))}
        </div>

        <div className="projects-footer" data-aos="fade-up" data-aos-delay="400" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a href="/project" className="btn-modern-outline-white">
            Khám Phá Thêm Dự Án <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
