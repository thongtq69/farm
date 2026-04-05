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

const IMAGE_DIR = path.resolve(ROOT_DIR, 'public/2 Đá nhân tạo nghệ thuật/1 Hình ảnh');
const REAL_DIR = path.resolve(ROOT_DIR, 'public/2 Đá nhân tạo nghệ thuật/2 Thực tế');
const THREED_DIR = path.resolve(ROOT_DIR, 'public/2 Đá nhân tạo nghệ thuật/3 Mẫu đá 3d');

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
  const threeDItems = [];

  console.log('Uploading Gallery Images...');
  if (fs.existsSync(IMAGE_DIR)) {
    const imageFiles = fs.readdirSync(IMAGE_DIR).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png'));
    for (const file of imageFiles) {
      console.log(`Uploading ${file}...`);
      const url = await uploadFile(path.join(IMAGE_DIR, file), 'projects/da-nhan-tao-new');
      if (url) projectGallery.push(url);
    }
  }

  console.log('Uploading Reels (Videos & Thumbs)...');
  if (fs.existsSync(REAL_DIR)) {
    const realFiles = fs.readdirSync(REAL_DIR);
    const videoFiles = realFiles.filter(f => f.toLowerCase().endsWith('.mp4') || f.toLowerCase().endsWith('.mov'));
    
    for (const video of videoFiles) {
      const baseName = video.split('_VIDEO')[0]; // e.g., "HOAN CHINH 1"
      const thumbFile = realFiles.find(f => f.startsWith(baseName) && (f.includes('_THUMB') || f.includes('_TRUMB')));
      
      console.log(`Uploading video ${video}...`);
      const videoUrl = await uploadFile(path.join(REAL_DIR, video), 'reels/da-nhan-tao', 'video');
      
      let thumbUrl = '';
      if (thumbFile) {
        console.log(`Uploading thumb ${thumbFile}...`);
        thumbUrl = await uploadFile(path.join(REAL_DIR, thumbFile), 'reels/da-nhan-tao/thumbs');
      }

      if (videoUrl) {
        reels.push({
          category: 'Video Thực Tế Đá Nhân Tạo',
          title: `Đá nhân tạo nghệ thuật - ${baseName}`,
          duration: '0:30', // Default
          thumbnail: thumbUrl || 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426595/farm/images/projects/nymwhku7vdxhge1isoly.jpg',
          videoUrl: videoUrl
        });
      }
    }
  }

  console.log('Uploading 3D Models...');
  if (fs.existsSync(THREED_DIR)) {
    const threedFiles = fs.readdirSync(THREED_DIR).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png'));
    for (const file of threedFiles) {
        console.log(`Uploading ${file}...`);
      const url = await uploadFile(path.join(THREED_DIR, file), '3d-models/da-nhan-tao');
      if (url) {
        threeDItems.push({
          title: file.includes('Map') ? 'Map đá nghệ thuật' : 'Mẫu đá 3D nghệ thuật',
          image: url
        });
      }
    }
  }

  const output = {
    gallery: projectGallery,
    reels: reels,
    threeD: threeDItems
  };

  fs.writeFileSync(path.resolve(ROOT_DIR, 'tmp/da_nhan_tao_data.json'), JSON.stringify(output, null, 2));
  console.log('Done! Results saved to tmp/da_nhan_tao_data.json');
}

start();
