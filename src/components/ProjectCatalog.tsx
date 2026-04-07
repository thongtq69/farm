'use client';

import React, { useMemo, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects as projectList, ProjectItem } from '@/data/projects';
import { reelsData, ReelItem } from '@/data/reels';
import ToastNotification from './ToastNotification';
import { defaultSiteContent } from '@/lib/site-content-static';
import './ProjectCatalog.css';

type Project = ProjectItem & {
  url: string;
};

const categoryOrder = [
  'san-vuon-ho-koi',
  'da-nhan-tao-nghe-thuat',
  'farm-du-lich-nghi-duong'
] as const;

const categoryMapping: Record<string, string> = {
  'san-vuon-ho-koi': 'Sân Vườn & Hồ Koi',
  'farm-du-lich-nghi-duong': 'Farm & Du Lịch Nghỉ Dưỡng',
  'da-nhan-tao-nghe-thuat': 'Đá Nhân Tạo Nghệ Thuật'
};

interface ProjectCatalogProps {
  initialCategory?: string;
}

const ProjectCatalog = ({ initialCategory }: ProjectCatalogProps) => {
  const [activeSection, setActiveSection] = useState<'image' | 'video' | '3d'>('image');
  const [selectedVideo, setSelectedVideo] = useState<ReelItem | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'all');
  const [notification, setNotification] = useState<{ isVisible: boolean; message: string; subMessage?: string; type: 'success' | 'error' | 'info' }>({ 
    isVisible: false, 
    message: '', 
    subMessage: '', 
    type: 'success' 
  });

  const imageRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLElement>(null);
  const threeDRef = useRef<HTMLElement>(null);
  const { catalog } = defaultSiteContent.projectPages;

  const projects = useMemo<Project[]>(
    () =>
      projectList.map((project) => ({
        ...project,
        url: `/project/${project.slug}`
      })),
    []
  );

  const filteredProjects = useMemo(() => {
    // Filter out 3D models from the main images grid
    const list = projects.filter(p => p.category !== 'mau-da-3d');
    if (activeCategory === 'all') return list;
    return list.filter(p => p.category === activeCategory);
  }, [projects, activeCategory]);

  const threeDProjects = useMemo(() => {
    const all3D = projects.filter(p => p.category === 'mau-da-3d');
    if (activeCategory === 'all') return all3D;
    
    // Filter 3D models relevant to the active category
    if (activeCategory === 'san-vuon-ho-koi') {
      return all3D.filter(p => !p.slug.includes('da-nhan-tao'));
    }
    if (activeCategory === 'da-nhan-tao-nghe-thuat') {
      return all3D.filter(p => p.slug.includes('da-nhan-tao'));
    }
    return all3D;
  }, [projects, activeCategory]);

  const projectVideos = useMemo(() => {
    // Filter out reels that are missing a videoUrl
    const validReels = reelsData.filter(r => r.videoUrl && r.videoUrl.trim() !== '');

    if (activeCategory === 'all') return validReels;
    
    if (activeCategory === 'san-vuon-ho-koi') {
      return validReels.filter(r => 
        r.category.includes('Hồ Koi') || 
        r.category.includes('Thi Công') || 
        (!r.category.includes('Đá Nhân Tạo') && !r.category.includes('Farm'))
      );
    }
    if (activeCategory === 'da-nhan-tao-nghe-thuat') {
      return validReels.filter(r => r.category.includes('Đá Nhân Tạo'));
    }
    if (activeCategory === 'farm-du-lich-nghi-duong') {
      return validReels.filter(r => r.category.includes('Farm'));
    }
    return validReels;
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const imageTop = imageRef.current?.offsetTop || 0;
      const videoTop = videoRef.current?.offsetTop || 0;
      const threeDTop = threeDRef.current?.offsetTop || 0;

      if (scrollPosition >= threeDTop && threeDTop > 0) {
        setActiveSection('3d');
      } else if (scrollPosition >= videoTop && videoTop > 0) {
        setActiveSection('video');
      } else {
        setActiveSection('image');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: 'image' | 'video' | '3d') => {
    let top = 0;
    if (section === 'image' && imageRef.current) top = imageRef.current.offsetTop - 100;
    if (section === 'video' && videoRef.current) top = videoRef.current.offsetTop - 100;
    if (section === '3d' && threeDRef.current) top = threeDRef.current.offsetTop - 100;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  };

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    if (project.isGalleryOnly) {
      e.preventDefault();
      setSelectedGalleryImage(project.image);
    }
  };

  return (
    <div className="project-catalog-v2">
      <ToastNotification 
        isVisible={notification.isVisible}
        message={notification.message}
        subMessage={notification.subMessage}
        type={notification.type}
        onClose={() => setNotification({ ...notification, isVisible: false })}
      />

      <div className="catalog-container">
        
        {/* Section: Hình Ảnh */}
        <section ref={imageRef} className="catalog-section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
          <div className="catalog-header text-center" style={{ marginBottom: '3rem' }}>
            <span className="subtitle subtitle-pill" style={{ color: '#00c689', background: 'rgba(0,198,137,0.1)', padding: '0.5rem 1.5rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1rem', fontWeight: 600 }}>{catalog.imageSection.pill}</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#0d3f32', fontFamily: 'Playfair Display, serif', fontWeight: 800, marginBottom: '1rem' }}>
              {catalog.imageSection.title}
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem' }}>{catalog.imageSection.description}</p>
          </div>

          <div className="category-filter-tabs">
            <button
              className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Tất Cả Dự Án
            </button>
            {categoryOrder.map((catSlug) => (
              <button
                key={catSlug}
                className={`category-tab ${activeCategory === catSlug ? 'active' : ''}`}
                onClick={() => setActiveCategory(catSlug)}
              >
                {categoryMapping[catSlug]}
              </button>
            ))}
          </div>

          <div className="catalog-grid-v2">
            {filteredProjects.map((project, index) => (
              <Link 
                key={`img-${project.slug}`} 
                href={project.url} 
                className="catalog-card-v2"
                onClick={(e) => handleProjectClick(e, project)}
              >
                <div className="card-image-wrapper">
                  <Image src={project.image || 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426773/farm/images/projects/molvc1tmfxfobqqhagnf.jpg'} alt={project.title} fill style={{ objectFit: 'cover' }} />
                  <div className="card-overlay-hover">
                    <div className="eye-icon">
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="card-title-bottom">
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: Video */}
        <section ref={videoRef} className="catalog-section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="catalog-header text-center" style={{ marginBottom: '3rem' }}>
            <span className="subtitle subtitle-pill" style={{ color: '#00c689', background: 'rgba(0,198,137,0.1)', padding: '0.5rem 1.5rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1rem', fontWeight: 600 }}>{catalog.videoSection.pill}</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#0d3f32', fontFamily: 'Playfair Display, serif', fontWeight: 800, marginBottom: '1rem' }}>
              {catalog.videoSection.title}
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem' }}>{catalog.videoSection.description}</p>
          </div>

          <div className="catalog-grid-v2">
            {projectVideos.map((reel, index) => (
              <div key={`vid-${index}`} className="catalog-card-v2" onClick={() => reel.videoUrl && setSelectedVideo(reel)}>
                <div className="card-image-wrapper">
                  <Image src={reel.thumbnail} alt={reel.title} fill style={{ objectFit: 'cover' }} />
                  <div className="card-overlay-play">
                    <div className="play-icon-circle">
                      <svg viewBox="0 0 24 24" width="36" height="36" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="video-duration">{reel.duration}</div>
                  <div className="card-title-bottom" style={{ zIndex: 10 }}>
                    <h3>{reel.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 3D */}
        <section ref={threeDRef} className="catalog-section" style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
          <div className="catalog-header text-center" style={{ marginBottom: '3rem' }}>
            <span className="subtitle subtitle-pill" style={{ color: '#00c689', background: 'rgba(0,198,137,0.1)', padding: '0.5rem 1.5rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1rem', fontWeight: 600 }}>{catalog.threeDSection.pill}</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#0d3f32', fontFamily: 'Playfair Display, serif', fontWeight: 800, marginBottom: '1rem' }}>
              {catalog.threeDSection.title}
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem' }}>{catalog.threeDSection.description}</p>
          </div>

          <div className="catalog-grid-v2">
            {threeDProjects.map((project, index) => (
               <div key={`3d-${project.slug}`} className="catalog-card-v2" onClick={() => setSelectedGalleryImage(project.image)}>
                <div className="card-image-wrapper">
                  <Image src={project.image || ''} alt={project.title} fill style={{ objectFit: 'cover' }} />
                  <div className="card-overlay-hover">
                    <div className="eye-icon">
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="card-title-bottom" style={{ zIndex: 10 }}>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Sticky Bottom Navigation */}
      <div className="sticky-bottom-nav">
        <div className="nav-pill">
          <button className={`nav-btn ${activeSection === 'image' ? 'active' : ''}`} onClick={() => scrollToSection('image')}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginRight: '8px' }}><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            {catalog.stickyNav.image}
          </button>
          <button className={`nav-btn ${activeSection === 'video' ? 'active' : ''}`} onClick={() => scrollToSection('video')}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginRight: '8px' }}><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
            {catalog.stickyNav.video}
          </button>
          <button className={`nav-btn ${activeSection === '3d' ? 'active' : ''}`} onClick={() => scrollToSection('3d')}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginRight: '8px' }}><circle cx="12" cy="12" r="8" /></svg>
            {catalog.stickyNav.threeD}
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="video-modal-close"
                onClick={() => setSelectedVideo(null)}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <video src={selectedVideo.videoUrl} className="reel-video-player" controls autoPlay playsInline />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal (Lightbox) */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryImage(null)}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="video-modal-close"
                onClick={() => setSelectedGalleryImage(null)}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
                <Image src={selectedGalleryImage} alt="Gallery view" fill style={{ objectFit: 'contain' }} unoptimized />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCatalog;
