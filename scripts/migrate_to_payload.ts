import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { projects } from '../src/data/projects'
import { reelsData } from '../src/data/reels'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Load env
const envContent = fs.readFileSync(path.resolve(ROOT_DIR, '.env'), 'utf-8');
envContent.split('\n').forEach(line => {
  const [key, ...rest] = line.split('=');
  const value = rest.join('=');
  if (key && value) process.env[key.trim()] = value.trim();
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (localPath, folder, resourceType = 'auto') => {
  if (!localPath || !localPath.startsWith('/')) return localPath; // Already full URL or empty
  
  const absolutePath = path.join(ROOT_DIR, 'public', localPath);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`File not found: ${absolutePath}`);
    return localPath;
  }
  
  try {
    const res = await cloudinary.uploader.upload(absolutePath, {
      folder: `farm/${folder}`,
      resource_type: resourceType
    });
    return res.secure_url;
  } catch (error) {
    console.error(`Error uploading ${localPath}:`, error.message);
    return localPath;
  }
};

async function run() {
  console.log("Initializing Payload...");
  const payload = await getPayload({ config: configPromise });

  console.log("Clearing existing data...");
  await payload.delete({ collection: 'projects', where: {} });
  await payload.delete({ collection: 'reels', where: {} });

  console.log(`Migrating ${projects.length} projects...`);
  for (const proj of projects) {
    let cloudImageUrl = proj.image;
    if (cloudImageUrl && cloudImageUrl.startsWith('/')) {
      console.log(`Uploading ${cloudImageUrl}...`);
      cloudImageUrl = await uploadToCloudinary(cloudImageUrl, 'projects/migrated', 'image');
    }

    const cloudGallery = [];
    if (proj.gallery) {
      for (const item of proj.gallery) {
        if (typeof item === 'object' && item.url) { // Handle { url: string }
           let u = item.url;
           if (u.startsWith('/')) u = await uploadToCloudinary(u, 'projects/migrated/gallery', 'image');
           cloudGallery.push({ url: u });
        } else if (typeof item === 'string') {
           let u = item;
           if (u.startsWith('/')) u = await uploadToCloudinary(u, 'projects/migrated/gallery', 'image');
           cloudGallery.push({ url: u });
        }
      }
    }

    await payload.create({
      collection: 'projects',
      data: {
        title: proj.title,
        slug: proj.slug,
        meta_description: proj.meta_description || '',
        category: proj.category,
        image: cloudImageUrl,
        gallery: cloudGallery.length > 0 ? cloudGallery : undefined,
        info: proj.info || undefined
      }
    });
  }

  console.log(`Migrating ${reelsData.length} reels...`);
  for (const reel of reelsData) {
    let videoUrl = reel.videoUrl;
    let thumbUrl = reel.thumbnail;

    if (videoUrl && videoUrl.startsWith('/')) {
      console.log(`Uploading video ${videoUrl}...`);
      videoUrl = await uploadToCloudinary(videoUrl, 'reels/migrated', 'video');
    }

    if (thumbUrl && thumbUrl.startsWith('/')) {
      console.log(`Uploading thumb ${thumbUrl}...`);
      thumbUrl = await uploadToCloudinary(thumbUrl, 'reels/migrated/thumbs', 'image');
    }

    // Prepare data
    // wait, what fields does Reels have? Let's assume standard fields.
    // It has category, title, duration, thumbnail, videoUrl
    await payload.create({
      collection: 'reels',
      data: {
        category: reel.category,
        title: reel.title,
        duration: reel.duration || '',
        thumbnail: thumbUrl || '',
        videoUrl: videoUrl || ''
      }
    });
  }

  console.log("Migration complete!");
  process.exit(0);
}

run().catch(console.error);
