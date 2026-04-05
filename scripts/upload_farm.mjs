import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');

// Load environment variables manually
const envPath = path.resolve(ROOT_DIR, '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    const k = key.trim();
    const v = value.trim();
    if (k && v) env[k] = v;
  }
});

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET
});

const IMAGE_DIR = path.resolve(ROOT_DIR, 'public/3 Farm - du lịch nghỉ dưỡng/1 Hình ảnh');
const REAL_DIR = path.resolve(ROOT_DIR, 'public/3 Farm - du lịch nghỉ dưỡng/2 Thực tế');

const uploadFile = async (filePath, folder, resourceType = 'image') => {
  try {
    const res = await cloudinary.uploader.upload(filePath, {
      folder: `farm/${folder}`,
      resource_type: resourceType
    });
    return res.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error.message);
    return null;
  }
};

async function start() {
  const projectGallery = [];
  const reels = [];

  console.log('Uploading Gallery Images...');
  if (fs.existsSync(IMAGE_DIR)) {
    const imageFiles = fs.readdirSync(IMAGE_DIR).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png'));
    for (const file of imageFiles) {
      console.log(`Uploading ${file}...`);
      const url = await uploadFile(path.join(IMAGE_DIR, file), 'projects/farm-new');
      if (url) projectGallery.push(url);
    }
  }

  console.log('Uploading Reels (Videos)...');
  if (fs.existsSync(REAL_DIR)) {
    const videoFiles = fs.readdirSync(REAL_DIR).filter(f => f.toLowerCase().endsWith('.mp4') || f.toLowerCase().endsWith('.mov'));
    
    for (let i = 0; i < videoFiles.length; i++) {
        const video = videoFiles[i];
      console.log(`Uploading video ${video}...`);
      const videoUrl = await uploadFile(path.join(REAL_DIR, video), 'reels/farm', 'video');

      if (videoUrl) {
        reels.push({
          category: 'Video Thực Tế Farm',
          title: `Farm & Du lịch nghỉ dưỡng ${i + 1}`,
          duration: '1:00', // Default
          thumbnail: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426595/farm/images/projects/nymwhku7vdxhge1isoly.jpg', // Placeholder since user said no thumbnail
          videoUrl: videoUrl
        });
      }
    }
  }

  const output = {
    gallery: projectGallery,
    reels: reels
  };

  fs.writeFileSync(path.resolve(ROOT_DIR, 'tmp/farm_data.json'), JSON.stringify(output, null, 2));
  console.log('Done! Results saved to tmp/farm_data.json');
}

start();
