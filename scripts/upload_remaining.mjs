import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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

const uploadFile = async (filePath, folder) => {
  const res = await cloudinary.uploader.upload(filePath, {
    folder: `farm/${folder}`,
    resource_type: 'auto'
  });
  return res.secure_url;
};

async function run() {
  const results = {};

  // 1. Upload sanvuonhokoi.png
  const sanvuonPath = path.resolve(ROOT_DIR, 'public/sanvuonhokoi.png');
  if (fs.existsSync(sanvuonPath)) {
    console.log('Uploading sanvuonhokoi.png...');
    results['sanvuonhokoi'] = await uploadFile(sanvuonPath, 'images/home');
    console.log('  →', results['sanvuonhokoi']);
  }

  // 2. Upload Đồng hành images
  const dongHanhDir = path.resolve(ROOT_DIR, 'public/Đồng hành');
  if (fs.existsSync(dongHanhDir)) {
    for (const file of ['1.png', '2.png', '3.png']) {
      const fp = path.join(dongHanhDir, file);
      if (fs.existsSync(fp)) {
        console.log(`Uploading Đồng hành/${file}...`);
        results[`donhanh_${file}`] = await uploadFile(fp, 'images/dong-hanh');
        console.log('  →', results[`donhanh_${file}`]);
      }
    }
  }

  // 3. Upload remaining public/images subfolders
  const publicImagesDir = path.resolve(ROOT_DIR, 'public/images');
  if (fs.existsSync(publicImagesDir)) {
    const walkSync = (dir) => {
      const files = [];
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) files.push(...walkSync(full));
        else files.push(full);
      }
      return files;
    };
    const allFiles = walkSync(publicImagesDir);
    for (const fp of allFiles) {
      const rel = path.relative(path.resolve(ROOT_DIR, 'public'), fp).replace(/\\/g, '/');
      const key = `/${rel}`;
      console.log(`Uploading ${rel}...`);
      try {
        results[key] = await uploadFile(fp, rel.replace(/^images/, 'images/legacy'));
        console.log('  →', results[key]);
      } catch (e) {
        console.error(`  ✗ Failed: ${e.message}`);
      }
    }
  }

  fs.writeFileSync(path.resolve(ROOT_DIR, 'tmp/remaining_uploads.json'), JSON.stringify(results, null, 2));
  console.log('\nDone! Results saved to tmp/remaining_uploads.json');
}

run().catch(console.error);
