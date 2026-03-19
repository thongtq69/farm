import React from 'react';
import ProjectDetail from '@/components/ProjectDetail';
import { notFound } from 'next/navigation';
import pagesProjects from '../../../../clone_ready/pages_projects.json';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return pagesProjects
    .filter(p => p.url.includes('/project/'))
    .map((p) => ({
      slug: p.url.split('/project/')[1].replace('/', '')
    }));
}

const ProjectPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  
  // Find project in the manifest
  const project = pagesProjects.find(p => p.url.includes(`/project/${slug}/`));

  if (!project) {
    return notFound();
  }

  return <ProjectDetail slug={slug} projectSummary={project} />;
};

export default ProjectPage;
