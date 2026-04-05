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

const IMAGE_DIR = path.resolve(ROOT_DIR, 'public/1 Sân vườn -  hồ koi/1 Sân vườn -  hồ koi/1 Hình ảnh');
const THREED_DIR = path.resolve(ROOT_DIR, 'public/1 Sân vườn -  hồ koi/1 Sân vườn -  hồ koi/3 Mẫu thác');

const uploadFile = async (filePath, folder) => {
  try {
    const res = await cloudinary.uploader.upload(filePath, {
      folder: `farm/${folder}`,
      resource_type: 'image'
    });
    return res.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error.message);
    return null;
  }
};

async function start() {
  const projectGallery = [];
  const threeDItems = [];

  console.log('Uploading Gallery Images...');
  const imageFiles = fs.readdirSync(IMAGE_DIR).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  for (const file of imageFiles) {
    const url = await uploadFile(path.join(IMAGE_DIR, file), 'projects/san-vuon-ho-koi-new');
    if (url) projectGallery.push(url);
  }

  console.log('Uploading 3D Models...');
  const threedFiles = fs.readdirSync(THREED_DIR).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  for (const file of threedFiles) {
    const url = await uploadFile(path.join(THREED_DIR, file), '3d-models');
    if (url) {
      threeDItems.push({
        title: file.split('_')[0] || 'Mẫu đá 3D',
        image: url
      });
    }
  }

  const output = {
    gallery: projectGallery,
    threeD: threeDItems
  };

  fs.writeFileSync(path.resolve(ROOT_DIR, 'tmp/new_project_data.json'), JSON.stringify(output, null, 2));
  console.log('Done! Results saved to tmp/new_project_data.json');
}

start();
