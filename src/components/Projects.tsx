'use client';

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Taste of Issan Farm',
    location: 'Udon Thani - Thailand',
    image: '/images/projects/1-3-b1caaea5db89.jpg',
    category: 'Du lịch trải nghiệm'
  },
  {
    title: 'Hali Green',
    location: 'Bình Phước',
    image: '/images/projects/0-6-b7d7e9b283ab.jpg',
    category: 'Resort nghỉ dưỡng'
  },
  {
    title: 'Farmstay Nhà Mình',
    location: 'Lâm Đồng',
    image: '/images/projects/1-4bbf0f0013c9.jpg',
    category: 'Farm-Homestay'
  },
  {
    title: 'Palm Hotel',
    location: 'Bà Rịa - Vũng Tàu',
    image: '/images/projects/1-4-36e82318d518.jpg',
    category: 'Resort nghỉ dưỡng'
  },
  {
    title: 'Rajamaha Country Club',
    location: 'Koh Phangan - Thailand',
    image: '/images/projects/3-5-5c6de158d98d.jpg',
    category: 'Dự án quy hoạch'
  }
];

const Projects = () => {
  return (
    <section className="projects section" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Những dự án thiết kế Farm nổi bật</h2>
          <p className="section-subtitle">
            Oak Farm vinh hạnh được các chủ đầu tư tin tưởng giao phó thiết kế những dự án tâm huyết của mình.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-image">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="project-overlay">
                  <span className="project-cat">{project.category}</span>
                  <div className="project-meta">
                    <h3>{project.title}</h3>
                    <p>{project.location}</p>
                  </div>
                  <a href="#" className="btn-details">More Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer" data-aos="fade-up">
          <a href="/project" className="btn btn-primary">Xem thêm Dự án</a>
        </div>
      </div>

    </section>
  );
};

export default Projects;
