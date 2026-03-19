import React from 'react';
import ProjectCatalog from '@/components/ProjectCatalog';

export const metadata = {
  title: 'Dự Án Nổi Bật | Son Hai Landscape - Thiết Kế Farmstay Toàn Quốc',
  description: 'Khám phá danh sách các dự án thiết kế Farmstay, sân vườn, hồ koi và đá nhân tạo nghệ thuật tiêu biểu của Son Hai Landscape trên toàn quốc.',
};

export default function ProjectsPage() {
  return (
    <main className="projects-page-main">
      <div className="page-header section-dark">
        <div className="container">
          <div className="page-header-content" data-aos="fade-up">
            <span className="subtitle" style={{ color: '#E9D28B' }}>CHÚNG TÔI ĐÃ THỰC HIỆN</span>
            <h1 className="page-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem' }}>
              Dự án thiết kế
            </h1>
            <p className="page-desc arsenal" style={{ maxWidth: '700px', fontSize: '1.2rem', opacity: 0.9 }}>
              Với hơn 45 dự án trải dài trên khắp các tỉnh thành Việt Nam, Son Hai Landscape tự hào mang đến những giải pháp quy hoạch và kiến trúc bền vững, tôn trọng thiên nhiên.
            </p>
          </div>
        </div>
      </div>
      
      <ProjectCatalog />
    </main>
  );
}
