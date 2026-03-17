'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import projectsData from '../../clone_ready/pages_projects.json';

type CloneReadyProject = {
  url: string;
  title: string;
  meta_description: string | null;
};

const featuredProjectMeta = {
  'palm-hotel': {
    image: '/images/projects/1-4-36e82318d518.jpg',
    location: 'Bà Rịa - Vũng Tàu'
  },
  'rajamaha-country-club': {
    image: '/images/projects/3-5-5c6de158d98d.jpg',
    location: 'Koh Phangan - Thailand'
  },
  'hali-green': {
    image: '/images/projects/2-2-4018f1a799f1.jpg',
    location: 'Gia Lai'
  },
  'pleiku-farm': {
    image: '/images/projects/2-1-674c891c1137.jpg',
    location: 'Pleiku - Gia Lai'
  },
  'farmstay-nha-minh': {
    image: '/images/projects/1-4bbf0f0013c9.jpg',
    location: 'Lâm Đồng'
  }
} as const;

const featuredProjectOrder = [
  'palm-hotel',
  'rajamaha-country-club',
  'hali-green',
  'pleiku-farm',
  'farmstay-nha-minh'
] as const;

const projectEntries = projectsData as CloneReadyProject[];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const projects = useMemo(
    () =>
      featuredProjectOrder.map((slug) => {
        const project = projectEntries.find((entry) => entry.url.includes(`/${slug}/`));
        const meta = featuredProjectMeta[slug];

        return {
          slug,
          title: project?.title.replace(/ - Oak Farm$/, '') ?? slug,
          description: project?.meta_description ?? '',
          href: project?.url.replace('https://oakfarm.vn', '') ?? '/project',
          image: meta.image,
          location: meta.location
        };
      }),
    []
  );

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
  }, [isHovering, projects.length]);

  return (
    <section
      className="projects section section-tight"
      style={{ background: '#1e3318', overflow: 'hidden' }}
    >
      <div className="container">
        <div className="projects-split-header" data-aos="fade-up">
          <div className="projects-header-left">
            <span className="projects-badge">🌿 Dự Án Mới</span>
            <h2 className="projects-main-title">
              Những dự án thiết kế<br />Farm nổi bật
            </h2>
          </div>
          <div className="projects-header-right">
            <p>
              Oak Farm vinh hạnh được các chủ đầu tư tin tưởng giao phó thiết kế những dự án tâm huyết của mình. Với nhiều dự án trải dài trên hơn 20 Tỉnh thành dọc miền Đất Nước, dưới đây là một vài dự án nổi bật mà chúng tôi được phép chia sẻ:
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
                  sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 20vw"
                  style={{ objectFit: 'cover' }}
                />

                <div className="exp-label-vert">
                  <span>{project.title}</span>
                </div>

                <div className="exp-info">
                  <div className="exp-info-content">
                    <div className="exp-info-loc">{project.location}</div>
                    <h3 className="exp-info-name">{project.title}</h3>
                    {project.description && <p className="exp-info-desc">{project.description}</p>}
                  </div>
                  <div className="exp-arrow">→</div>
                </div>

                <div className="exp-overlay-bottom">OAK FARM</div>
              </div>
            </a>
          ))}
        </div>

        <div className="projects-footer" data-aos="fade-up" data-aos-delay="400" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a href="/project" className="btn-view-projects">
            Xem Thêm Dự Án <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
