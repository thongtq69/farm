'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects as projectList } from '@/data/projects';

type Project = {
  slug: string;
  url: string;
  title: string;
  meta_description: string | null;
  image?: string;
  category?: string;
};

const categoryMapping: Record<string, string> = {
  'san-vuon-ho-koi': 'Sân Vườn & Hồ Koi',
  'farm-du-lich-nghi-duong': 'Farm & Du Lịch Nghỉ Dưỡng',
  'da-nhan-tao-nghe-thuat': 'Đá Nhân Tạo Nghệ Thuật'
};

const ProjectCatalog = ({ initialCategory }: { initialCategory?: string }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');

  const projects = useMemo<Project[]>(
    () =>
      projectList.map((project) => ({
        ...project,
        url: `/project/${project.slug}`
      })),
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div className="project-catalog">
      <div className="catalog-filter-bar">
        <div className="container">
          <ul className="filter-list">
            <li className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>
              Tất Cả Dự Án
            </li>
            <li className={activeCategory === 'farm-du-lich-nghi-duong' ? 'active' : ''} onClick={() => setActiveCategory('farm-du-lich-nghi-duong')}>
              Farm & Du Lịch Nghỉ Dưỡng
            </li>
            <li className={activeCategory === 'san-vuon-ho-koi' ? 'active' : ''} onClick={() => setActiveCategory('san-vuon-ho-koi')}>
              Sân Vườn & Hồ Koi
            </li>
            <li className={activeCategory === 'da-nhan-tao-nghe-thuat' ? 'active' : ''} onClick={() => setActiveCategory('da-nhan-tao-nghe-thuat')}>
              Đá Nhân Tạo Nghệ Thuật
            </li>
          </ul>
        </div>
      </div>

      <section className="section catalog-grid-section">
        <div className="container">
          <div className="catalog-grid">
            {filteredProjects.map((project, index) => (
              <Link key={project.slug} href={project.url} className="project-card-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="project-card-image">
                  <Image src={project.image || 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426773/farm/images/projects/molvc1tmfxfobqqhagnf.jpg'} alt={project.title} fill style={{ objectFit: 'cover' }} />
                  <div className="project-card-overlay">
                    <span className="view-details">XEM CHI TIẾT</span>
                  </div>
                </div>
                <div className="project-card-info">
                  <span className="project-card-cat">{categoryMapping[project.category || ''] || 'Dự Án'}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.meta_description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCatalog;
