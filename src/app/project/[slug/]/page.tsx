'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';
import ProjectCatalog from '@/components/ProjectCatalog';

export default function ProjectRoute() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const categories = [
    'san-vuon-ho-koi',
    'farm-du-lich-nghi-duong',
    'da-nhan-tao-nghe-thuat'
  ];

  if (categories.includes(slug)) {
    return (
      <main className="projects-page-main">
        <div className="page-header section-dark">
          <div className="container">
            <div className="page-header-content" data-aos="fade-up">
              <span className="subtitle" style={{ color: '#E9D28B' }}>DỰ ÁN THEO CHUYÊN MỤC</span>
              <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                {slug.replace(/-/g, ' ')}
              </h1>
              <p className="page-desc arsenal" style={{ maxWidth: '700px', fontSize: '1.2rem', opacity: 0.9 }}>
                Khám phá tuyển tập các dự án tiêu biểu thuộc lĩnh vực {slug.replace(/-/g, ' ')} do Son Hai Landscape kiến tạo.
              </p>
            </div>
          </div>
        </div>
        <ProjectCatalog initialCategory={slug} />
      </main>
    );
  }

  return (
    <main className="single-project-main">
      <ProjectDetail />
    </main>
  );
}
