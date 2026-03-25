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
  if (key && value) env[key.trim()] = value.trim();
});

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET
});

const uploadFile = async (filePath, targetFolder) => {
  try {
    const res = await cloudinary.uploader.upload(filePath, {
      folder: `farm/${targetFolder}`,
      resource_type: 'auto'
    });
    return res.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error.message);
    return null;
  }
};

async function migrateReels() {
  const mappingPath = path.resolve(ROOT_DIR, 'src/data/cloudinary_mapping.json');
  let mapping = {};
  if (fs.existsSync(mappingPath)) {
    mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
  }

  const saveMapping = () => {
    fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  };

  const newFolder = path.resolve(ROOT_DIR, 'hình ảnh video mục (Sân vườn & Hồ Koi)');
  if (fs.existsSync(newFolder)) {
    const allFiles = fs.readdirSync(newFolder);
    for (const file of allFiles) {
      const imgPath = path.join(newFolder, file);
      if (fs.statSync(imgPath).isDirectory()) continue;
      const key = `NEW_FOLDER/${file}`;
      if (mapping[key]) continue;
      console.log(`Uploading from new folder: ${file}...`);
      const cloudUrl = await uploadFile(imgPath, 'reels');
      if (cloudUrl) {
        mapping[key] = cloudUrl;
        saveMapping();
      }
    }
  }

  console.log('Reels migration complete!');
}

migrateReels();
