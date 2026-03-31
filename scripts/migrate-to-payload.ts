import { getPayload } from 'payload';
import configPromise from '../src/payload.config.ts';
import { defaultSiteContent } from '../src/lib/site-content.ts';
import { projects as seededProjects } from '../src/data/projects.ts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TMP_DIR = path.join(__dirname, '../tmp/migration');

if (!fs.existsSync(TMP_DIR)) {
  fs.mkdirSync(TMP_DIR, { recursive: true });
}

async function downloadImage(url) {
  if (!url || typeof url !== 'string' || !url.startsWith('http')) return null;
  const fileName = path.basename(new URL(url).pathname);
  const filePath = path.join(TMP_DIR, fileName);
  
  if (fs.existsSync(filePath)) return filePath;

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filePath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filePath);
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode} for ${url}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function migrate() {
  const payload = await getPayload({ config: configPromise });
  const urlToId = {};

  async function uploadImage(url, alt = 'Site Image') {
    if (!url || typeof url !== 'string' || !url.startsWith('http')) return null;
    if (urlToId[url]) return urlToId[url];

    try {
      const filePath = await downloadImage(url);
      if (!filePath) return null;
      console.log(`Uploading: ${path.basename(filePath)}`);
      const media = await payload.create({
        collection: 'media',
        data: {
          alt: alt,
        },
        filePath: filePath,
      });
      urlToId[url] = media.id;
      return media.id;
    } catch (err) {
      console.error(`Error uploading ${url}:`, err.message);
      return null;
    }
  }

  // Clear existing to avoid duplicates during dev
  await payload.db.deleteMany({ collection: 'projects', where: {} });

  // Migrate Projects
  console.log('Migrating Projects...');
  for (const p of seededProjects) {
      console.log(`Processing project: ${p.title}`);
      const mainImageId = await uploadImage(p.image, p.title);
      const gallery = [];
      if (p.gallery) {
          for (let img of p.gallery) {
              const id = await uploadImage(img, p.title + ' Gallery');
              if (id) gallery.push({ image: id });
          }
      }
      
      await payload.create({
          collection: 'projects',
          data: {
              ...p,
              image: mainImageId,
              gallery: gallery,
              info: {
                scale: 'Farmstay & Homestay',
                location: 'Viet Nam',
                completedYear: '2025',
                designConsulting: 'Son Hai Landscape'
              }
          }
      });
  }

  // Migrate Global Site Content
  console.log('Migrating Site Content...');
  const headerLogo = await uploadImage(defaultSiteContent.header.logoUrl, 'Logo Header');
  const footerLogo = await uploadImage(defaultSiteContent.footer.logoUrl, 'Logo Footer');

  const siteData = {
    header: {
      logo: headerLogo,
      logoAlt: defaultSiteContent.header.logoAlt,
      mobileMenuTitle: defaultSiteContent.header.mobileMenuTitle,
      contactPhone: defaultSiteContent.header.contactPhone,
      contactLabel: defaultSiteContent.header.contactLabel,
      navLinks: defaultSiteContent.header.navLinks.map(l => ({ ...l })),
      projectLinks: defaultSiteContent.header.projectLinks.map(l => ({ ...l })),
    },
    footer: {
      logo: footerLogo,
      logoAlt: defaultSiteContent.footer.logoAlt,
      description: defaultSiteContent.footer.description,
      officeTitle: defaultSiteContent.footer.officeTitle,
      officeAddress: defaultSiteContent.footer.officeAddress,
      contactTitle: defaultSiteContent.footer.contactTitle,
      contactLines: defaultSiteContent.footer.contactLines.map(line => ({ line })),
      copyright: defaultSiteContent.footer.copyright,
      menuTitle: defaultSiteContent.footer.menuTitle,
      menuLinks: defaultSiteContent.footer.menuLinks.map(l => ({ ...l })),
      socialLinks: []
    },
    home: {
      hero: {
          eyebrow: defaultSiteContent.home.hero.eyebrow,
          titleLine1: defaultSiteContent.home.hero.titleLine1,
          titleLine2: defaultSiteContent.home.hero.titleLine2,
          description: defaultSiteContent.home.hero.description,
          primaryCtaLabel: defaultSiteContent.home.hero.primaryCta.label,
          primaryCtaHref: defaultSiteContent.home.hero.primaryCta.href,
          secondaryCtaLabel: defaultSiteContent.home.hero.secondaryCta.label,
          secondaryCtaHref: defaultSiteContent.home.hero.secondaryCta.href,
          foregroundImage: await uploadImage(defaultSiteContent.home.hero.foregroundImage, 'Hero FG'),
          slides: []
      }
    }
  };

  if (defaultSiteContent.footer.socialLinks) {
     for (let raw of defaultSiteContent.footer.socialLinks) {
        siteData.footer.socialLinks.push({
           label: raw.label,
           href: raw.href,
           type: raw.type === 'facebook' || raw.type === 'instagram' ? raw.type : 'image',
           image: await uploadImage(raw.imageUrl, raw.label) || undefined,
        });
     }
  }

  if (defaultSiteContent.home.hero.slides) {
      for (let s of defaultSiteContent.home.hero.slides) {
          const id = await uploadImage(s, 'Hero Slide');
          if (id) siteData.home.hero.slides.push({ image: id });
      }
  }

  await payload.updateGlobal({
    slug: 'site-content',
    data: siteData,
  });

  console.log('Migration complete!');
  process.exit(0);
}

migrate();
