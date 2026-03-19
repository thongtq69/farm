import React from 'react';
import ProjectDetail from '@/components/ProjectDetail';
import ProjectCatalog from '@/components/ProjectCatalog';
import { notFound } from 'next/navigation';
import { categorySlugs, getProjectBySlug, projects } from '@/data/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projectParams = projects.map((project) => ({ slug: project.slug }));

  const categoryParams = categorySlugs.map((slug) => ({ slug }));

  return [...categoryParams, ...projectParams];
}

const ProjectPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (categorySlugs.includes(slug as (typeof categorySlugs)[number])) {
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
  
  // Find project in the manifest
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  return <ProjectDetail slug={slug} projectSummary={project} />;
};

export default ProjectPage;
