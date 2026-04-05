import React from 'react';
import ProjectCatalog from '@/components/ProjectCatalog';
import { getProjects, getReels } from '@/lib/site-content';

export const metadata = {
  title: 'Dự Án Nổi Bật | Son Hai Landscape - Thiết Kế Farmstay Toàn Quốc',
  description: 'Khám phá danh sách các dự án thiết kế Farmstay, sân vườn, hồ koi và đá nhân tạo nghệ thuật tiêu biểu của Son Hai Landscape trên toàn quốc.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  const reels = await getReels();

  return (
    <main className="projects-page-main" style={{ background: '#f8fafc', minHeight: '100vh', padding: '6rem 0' }}>
      <ProjectCatalog projects={projects} reels={reels} />
    </main>
  );
}
