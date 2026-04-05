export type ProjectItem = {
  id?: string;
  slug: string;
  title: string;
  meta_description?: string;
  image: string;
  category: string;
  gallery?: string[];
  info?: {
    scale?: string;
    location?: string;
    completedYear?: string;
    designConsulting?: string;
  };
};

export const categorySlugs = [
  'san-vuon-ho-koi',
  'farm-du-lich-nghi-duong',
  'da-nhan-tao-nghe-thuat',
  'mau-da-3d'
] as const;

export const projects: ProjectItem[] = [];

export const getProjectBySlug = (slug: string): ProjectItem | undefined => {
  return projects.find((p) => p.slug === slug);
};
