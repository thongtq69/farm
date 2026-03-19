'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '../../clone_ready/pages_projects.json';

type Project = {
  url: string;
  title: string;
  meta_description: string | null;
  image?: string;
  category?: string;
  location?: string;
};

const imageMapping: Record<string, string> = {
  'palm-hotel': '/images/projects/1-4-36e82318d518.jpg',
  'rajamaha-country-club': '/images/projects/3-5-5c6de158d98d.jpg',
  'hali-green': '/images/projects/2-2-4018f1a799f1.jpg',
  'pleiku-farm': '/images/projects/2-1-674c891c1137.jpg',
  'farmstay-nha-minh': '/images/projects/1-4bbf0f0013c9.jpg',
  'farm-together': '/images/projects/7-19eda8f21a5d.jpg',
  'doi-de-trang': '/images/projects/0-9-445003300584.jpg',
  'hoa-phu-villa': '/images/projects/0-11-d3a399b2b6ab.jpg',
  'an-binh-farm': '/images/projects/0-989a6d71f023.jpg',
  'happy-life': '/images/projects/5b-90e168bf635f.jpg',
  'haly-farm': '/images/projects/7-2-7970ebe8c7a0.jpg',
  'lang-van-hoa-cong-dong-thon-trlee': '/images/projects/1-178fefd342ff.jpg',
  'hien-garden': '/images/projects/4-6236408f513b.jpg',
  'dai-farm': '/images/projects/coverr-oak-farm-2b0707e1d7e2.jpg',
  'indochine-villa': '/images/projects/0-3-85a5d9147276.jpg',
  'haos-homestay': '/images/projects/1-6-7714047e284b.jpg',
  'cam-ly-view-garder': '/images/projects/0-4b0689f75d23.jpg',
  'holiday-village': '/images/projects/1-4-1971866182c4.jpg',
  'family-village': '/images/projects/10-2-a8e76fdb3886.jpg',
  'tructhuyvien': '/images/projects/11-1-f0a059ce1fb5.jpg',
  'ho-hon-co': '/images/projects/12-1-35e8cb5f3861.jpg',
  'taste-of-issan-farm': '/images/projects/13-0ae900374403.jpg',
  'ta-nung-homestay': '/images/projects/14-5ee1f3344f21.jpg'
};

const categoryMapping: Record<string, string> = {
  'san-vuon-ho-koi': 'Sân Vườn & Hồ Koi',
  'farm-du-lich-nghi-duong': 'Farm & Du Lịch Nghỉ Dưỡng',
  'da-nhan-tao-nghe-thuat': 'Đá Nhân Tạo Nghệ Thuật'
};

const ProjectCatalog = ({ initialCategory }: { initialCategory?: string }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');

  const projects = useMemo(() => {
    return (projectsData as any[])
      .filter(p => p.url !== 'https://oakfarm.vn/project/')
      .map(p => {
        const slug = p.url.split('/').filter(Boolean).pop();
        return {
          ...p,
          slug,
          image: imageMapping[slug] || '/images/projects/coverr-oak-farm-2b0707e1d7e2.jpg',
          title: p.title.replace(' - Son Hai Landscape', ''),
          category: slug === 'palm-hotel' ? 'da-nhan-tao-nghe-thuat' : (slug?.includes('farm') || slug?.includes('village') ? 'farm-du-lich-nghi-duong' : 'san-vuon-ho-koi')
        };
      });
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div className="project-catalog">
      <div className="catalog-filter-bar">
        <div className="container">
          <ul className="filter-list">
            <li 
              className={activeCategory === 'all' ? 'active' : ''} 
              onClick={() => setActiveCategory('all')}
            >
              Tất Cả Dự Án
            </li>
            <li 
              className={activeCategory === 'farm-du-lich-nghi-duong' ? 'active' : ''} 
              onClick={() => setActiveCategory('farm-du-lich-nghi-duong')}
            >
              Farm & Du Lịch Nghỉ Dưỡng
            </li>
            <li 
              className={activeCategory === 'san-vuon-ho-koi' ? 'active' : ''} 
              onClick={() => setActiveCategory('san-vuon-ho-koi')}
            >
              Sân Vườn & Hồ Koi
            </li>
            <li 
              className={activeCategory === 'da-nhan-tao-nghe-thuat' ? 'active' : ''} 
              onClick={() => setActiveCategory('da-nhan-tao-nghe-thuat')}
            >
              Đá Nhân Tạo Nghệ Thuật
            </li>
          </ul>
        </div>
      </div>

      <section className="section catalog-grid-section">
        <div className="container">
          <div className="catalog-grid">
            {filteredProjects.map((project, index) => (
              <Link 
                key={project.slug} 
                href={`/project/${project.slug}`}
                className="project-card-item"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="project-card-image">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="project-card-overlay">
                    <span className="view-details">XEM CHI TIẾT</span>
                  </div>
                </div>
                <div className="project-card-info">
                  <span className="project-card-cat">
                    {categoryMapping[project.category] || 'Dự Án'}
                  </span>
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
