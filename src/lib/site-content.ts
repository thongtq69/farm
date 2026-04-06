import { cache } from 'react';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { projects as seededProjects } from '@/data/projects';
import { reelsData as seededReels } from '@/data/reels';
import { categoryLabels, defaultSiteContent, type SiteContent, type ProjectItem, type ReelItem } from '@/lib/site-content-static';

export { categoryLabels, defaultSiteContent, type SiteContent, type ProjectItem, type ReelItem };

function deepMerge<T>(base: T, override: any): T {
  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  if (base && typeof base === 'object') {
    const result: any = { ...base };
    const source = override && typeof override === 'object' ? override : {};

    for (const key of Object.keys(result)) {
      result[key] = deepMerge(result[key], source[key]);
    }

    for (const key of Object.keys(source)) {
      if (!(key in result)) {
        result[key] = source[key];
      }
    }

    return result;
  }

  return override ?? base;
}

let seeded = false;

export const ensureSeededPayload = cache(async () => {
  if (seeded) return;
  const payload = await getPayload({ config });

  try {
    // Seed Site Content
    const siteContent = await payload.findGlobal({
      slug: 'site-content',
    });

    if (!siteContent || Object.keys(siteContent).length <= 1) { 
      await payload.updateGlobal({
        slug: 'site-content',
        data: defaultSiteContent as any,
      });
    }

    // Seed Projects
    const projectCount = await payload.count({
      collection: 'projects',
    });

    if (projectCount.totalDocs === 0) {
      for (const project of seededProjects) {
        await payload.create({
          collection: 'projects',
          data: {
            ...project,
            gallery: project.gallery?.map(img => ({ url: img })) || [],
            info: {
               scale: 'Farmstay & Homestay',
               location: 'Viet Nam',
               completedYear: '2025',
               designConsulting: 'Son Hai Landscape'
            }
          } as any,
        });
      }
    }

    // Seed Reels
    const reelCount = await payload.count({
      collection: 'reels',
    });

    if (reelCount.totalDocs === 0) {
      for (const reel of seededReels) {
        await payload.create({
          collection: 'reels',
          data: reel as any,
        });
      }
    }
    
    seeded = true;
  } catch (err) {
    console.error('Seeding failed:', err);
  }
});

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  await ensureSeededPayload();
  const payload = await getPayload({ config });
  const doc = await payload.findGlobal({
    slug: 'site-content',
  });
  const merged = deepMerge(defaultSiteContent, doc) as SiteContent;

  return {
    ...merged,
    header: {
      ...defaultSiteContent.header,
      ...merged.header,
      navLinks: merged.header?.navLinks?.length ? merged.header.navLinks : defaultSiteContent.header.navLinks,
      projectLinks: merged.header?.projectLinks?.length ? merged.header.projectLinks : defaultSiteContent.header.projectLinks,
    },
    footer: {
      ...merged.footer,
      officeAddress: (() => {
        if (Array.isArray(doc.footer?.officeAddress) && doc.footer.officeAddress.length > 0) {
          const mapped = doc.footer.officeAddress.map((a: any) => typeof a === 'object' ? a.address : a).filter(Boolean);
          if (mapped.length > 0) return mapped;
        }
        // If doc.footer.officeAddress is a non-empty string (backward compatibility)
        if (typeof doc.footer?.officeAddress === 'string' && doc.footer.officeAddress.trim()) {
           return doc.footer.officeAddress;
        }
        return defaultSiteContent.footer.officeAddress;
      })(),
      contactLines: (() => {
        if (Array.isArray(doc.footer?.contactLines) && doc.footer.contactLines.length > 0) {
          const mapped = doc.footer.contactLines.map((l: any) => typeof l === 'object' ? l.line : l).filter(Boolean);
          if (mapped.length > 0) return mapped;
        }
        return defaultSiteContent.footer.contactLines;
      })(),
    }
  };
});

export const getProjects = cache(async (): Promise<ProjectItem[]> => {
  await ensureSeededPayload();
  const payload = await getPayload({ config });
  const docs = await payload.find({
    collection: 'projects',
    limit: 100,
    sort: 'createdAt',
  });
  
  return docs.docs.map(doc => ({
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    meta_description: doc.meta_description || '',
    image: doc.image,
    category: doc.category,
    gallery: doc.gallery?.map((g: any) => g.url) || [],
    info: doc.info
  })) as ProjectItem[];
});

export const getProjectBySlugFromDb = cache(async (slug: string): Promise<ProjectItem | null> => {
  await ensureSeededPayload();
  const payload = await getPayload({ config });
  const docs = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  if (docs.docs.length === 0) return null;
  const doc = docs.docs[0];

  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    meta_description: doc.meta_description || '',
    image: doc.image,
    category: doc.category,
    gallery: doc.gallery?.map((g: any) => g.url) || [],
    info: doc.info
  } as ProjectItem;
});

export const getReels = cache(async (): Promise<ReelItem[]> => {
  await ensureSeededPayload();
  const payload = await getPayload({ config });
  const docs = await payload.find({
    collection: 'reels',
    limit: 100,
    sort: 'createdAt',
  });

  return docs.docs.map(doc => ({
    id: doc.id,
    category: doc.category,
    title: doc.title,
    duration: doc.duration,
    thumbnail: doc.thumbnail,
    videoUrl: doc.videoUrl
  })) as ReelItem[];
});
