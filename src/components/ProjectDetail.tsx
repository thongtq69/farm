'use client';

import React, { useMemo, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import projectsData from '../../clone_ready/pages_projects.json';
import assetsProjects from '../../clone_ready/assets_projects.json';

const ProjectDetail = () => {
  const { slug } = useParams();
  
  const project = useMemo(() => {
    return (projectsData as any[]).find(p => p.url.includes(`/${slug}/`));
  }, [slug]);

  const images = useMemo(() => {
    return (assetsProjects as any[])
      .filter(a => a.page_url.includes(`/${slug}/`))
      .map(a => {
        // Map local_path to /images/projects/...
        const fileName = a.local_path.split('/').pop();
        return `/images/projects/${fileName}`;
      });
  }, [slug]);

  if (!project) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Không tìm thấy dự án</h2>
        <Link href="/project" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-hero section-dark">
        <div className="container grid-2">
          <div className="project-hero-text" data-aos="fade-right">
            <Link href="/project" className="back-link">← TRỞ LẠI DỰ ÁN</Link>
            <h1 className="project-title">{project.title.replace(' - Son Hai Landscape', '')}</h1>
            <p className="project-description arsenal">{project.meta_description || 'Phù hợp với ngân sách và phân bổ giai đoạn thực hiện của chủ đầu tư. Từ ý tưởng đến thực tế, Son Hai Landscape đồng hành cùng bạn trong mọi giai đoạn.'}</p>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">DỰ ÁN</span>
                <span className="meta-value">Son Hai Landscapestead</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">TRẠNG THÁI</span>
                <span className="meta-value">Hoàn thành thiết kế</span>
              </div>
            </div>
          </div>
          <div className="project-hero-image" data-aos="fade-left">
            <div className="image-wrapper shadow-lg">
              <Image 
                src={images[0] || '/images/projects/coverr-oak-farm-2b0707e1d7e2.jpg'} 
                alt={project.title} 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section project-content-section bg-pattern">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
            <span className="subtitle">HÌNH ẢNH THỰC TẾ</span>
            <h2>Phối cảnh chi tiết</h2>
          </div>
          
          <div className="project-gallery-grid">
            {images.slice(1).map((img, idx) => (
              <div 
                key={idx} 
                className={`gallery-item ${idx % 5 === 0 ? 'large' : ''}`}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
              >
                <div className="gallery-img-wrapper">
                  <Image 
                    src={img} 
                    alt={`${project.title} - Highlight ${idx + 1}`} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-cta" style={{ background: 'var(--primary-dark)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '2rem' }}>Bạn có một dự án tương tự?</h2>
          <p className="arsenal" style={{ maxWidth: '600px', margin: '0 auto 3rem', opacity: 0.9 }}>
            Hãy liên hệ ngay với đội ngũ Son Hai Landscape để nhận được sự tư vấn chuyên sâu về thiết kế và thi công farmstay, nghỉ dưỡng.
          </p>
          <div className="cta-buttons">
            <a href="tel:0888220044" className="btn btn-primary">GỌI (+84) 888.22.00.44</a>
            <a href="/bao-gia-thiet-ke-farm" className="btn btn-secondary" style={{ border: '2px solid var(--secondary)' }}>NHẬN BÁO GIÁ THIẾT KẾ</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
