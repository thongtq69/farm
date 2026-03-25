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

const mappingPath = path.resolve(ROOT_DIR, 'src/data/cloudinary_mapping.json');
let mapping = {};
if (fs.existsSync(mappingPath)) {
  try {
    mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
  } catch (e) {
    console.warn('Error reading existing mapping, starting fresh.');
  }
}

const saveMapping = () => {
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
};

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

const walkSync = (dir, fileList = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkSync(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
};

async function migrate() {
  // 1. Migrate public/images
  console.log('Migrating public/images...');
  const publicImagesDir = path.resolve(ROOT_DIR, 'public/images');
  if (fs.existsSync(publicImagesDir)) {
    const allImages = walkSync(publicImagesDir);
    for (const imgPath of allImages) {
      const relPath = path.relative(path.resolve(ROOT_DIR, 'public'), imgPath).replace(/\\/g, '/');
      const key = `/${relPath}`;
      if (mapping[key]) {
        console.log(`Skipping already uploaded: ${key}`);
        continue;
      }
      const folderPath = path.dirname(relPath).replace(/^images/, '').replace(/^\//, '');
      console.log(`Uploading ${relPath}...`);
      const cloudUrl = await uploadFile(imgPath, `images/${folderPath}`);
      if (cloudUrl) {
        mapping[key] = cloudUrl;
        saveMapping();
      }
    }
  }

  // 2. Migrate the new folder
  console.log('Migrating the new folder...');
  const newFolder = path.resolve(ROOT_DIR, 'hình ảnh video mục (Sân vườn & Hồ Koi)');
  if (fs.existsSync(newFolder)) {
    const allFiles = fs.readdirSync(newFolder);
    for (const file of allFiles) {
      const imgPath = path.join(newFolder, file);
      if (fs.statSync(imgPath).isDirectory()) continue;
      const key = `NEW_FOLDER/${file}`;
      if (mapping[key]) {
        console.log(`Skipping already uploaded from new folder: ${file}`);
        continue;
      }
      console.log(`Uploading from new folder: ${file}...`);
      const cloudUrl = await uploadFile(imgPath, 'reels');
      if (cloudUrl) {
        mapping[key] = cloudUrl;
        saveMapping();
      }
    }
  }

  console.log('Migration step complete! Mapping saved to:', mappingPath);
}

migrate();
