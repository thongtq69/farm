'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '@/data/projects';

interface ProjectDetailProps {
  slug: string;
  projectSummary: {
    title: string;
    meta_description: string | null;
    image?: string;
    gallery?: string[];
  };
}

const ProjectDetail = ({ slug, projectSummary }: ProjectDetailProps) => {
  const fallbackProject = getProjectBySlug(slug);
  const projectImages = projectSummary.gallery?.length
    ? projectSummary.gallery
    : fallbackProject?.gallery?.length
      ? fallbackProject.gallery
      : [projectSummary.image || fallbackProject?.image || 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426383/farm/images/projects/pza6uvhukxq0x5hzi2nh.jpg'];

  const mainTitle = projectSummary.title.replace(' - Oak Farm', '');
  const description =
    projectSummary.meta_description ||
    'Sơn Hải Landscape vinh dự được làm đơn vị đồng hành cùng chủ đầu tư trong thiết kế và kiến trúc.';
  const heroImage = projectImages[0] || projectSummary.image || fallbackProject?.image || 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426383/farm/images/projects/pza6uvhukxq0x5hzi2nh.jpg';

  const projectInfo = [
    { label: 'QUY MÔ', value: 'Farmstay & Homestay' },
    { label: 'ĐỊA ĐIỂM', value: 'Việt Nam' },
    { label: 'NĂM HOÀN THÀNH', value: '2022' },
    { label: 'TƯ VẤN THIẾT KẾ', value: 'Sơn Hải Landscape' }
  ];

  return (
    <div className="project-detail-modern">
      <section className="project-hero">
        <div className="hero-bg-wrapper">
          <Image src={heroImage} alt={mainTitle} fill className="hero-img-parallax" priority />
          <div className="hero-overlay-project"></div>
        </div>

        <div className="container project-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="project-category-badge">ARCHITECTURE & LANDSCAPE</span>
            <h1 className="project-main-title">{mainTitle}</h1>
            <p className="project-subtitle-desc">{description}</p>
          </motion.div>
        </div>
      </section>

      <section className="project-info-section bg-secondary">
        <div className="container">
          <div className="project-info-grid">
            {projectInfo.map((info, idx) => (
              <div className="info-item" key={idx}>
                <span className="info-label">{info.label}</span>
                <span className="info-value">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-gallery section">
        <div className="container">
          <div className="gallery-header text-center">
            <span className="subtitle">Visual Story</span>
            <h2 className="section-title">Hành trình kiến tạo</h2>
          </div>

          <div className="gallery-layout-modern">
            {projectImages.map((img, index) => (
              <motion.div
                className={`gallery-item ${index % 5 === 0 ? 'large' : index % 3 === 0 ? 'medium' : 'regular'}`}
                key={`${img}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="gallery-img-wrapper">
                  <Image
                    src={img}
                    alt={`Project visualization ${index + 1}`}
                    fill
                    className="gallery-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="gallery-img-overlay">
                    <span>SƠN HẢI LANDSCAPE</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-related-cta section">
        <div className="container">
          <div className="cta-modern-dark">
            <div className="cta-content">
              <h3>Bạn muốn kiến tạo không gian riêng?</h3>
              <p>Liên hệ Sơn Hải Landscape để được tư vấn quy hoạch và thiết kế kiến trúc theo định hướng "Timeless Design".</p>
            </div>
            <div className="cta-actions">
              <Link href="tel:0888220044" className="btn-modern-primary">0888 22 00 44</Link>
              <Link href="/project" className="btn-modern-outline-white">Xem dự án khác</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
