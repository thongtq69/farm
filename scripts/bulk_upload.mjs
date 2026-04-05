import fs from 'fs';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFile = async (filePath, folder) => {
  try {
    const isVideo = filePath.endsWith('.mp4') || filePath.endsWith('.mov');
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: isVideo ? 'video' : 'image',
    });
    console.log(`Uploaded: ${filePath} -> ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`Failed to upload ${filePath}:`, error);
    return null;
  }
};

const processDir = async (dir, folder) => {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => !fs.lstatSync(path.join(dir, f)).isDirectory());
  const urls = [];
  for (const file of files) {
    const url = await uploadFile(path.join(dir, file), folder);
    if (url) urls.push({ name: file, url });
  }
  return urls;
};

const main = async () => {
  const data = {};

  // 1. Root Hình ảnh video mục
  console.log('Processing Root Hình ảnh video mục...');
  data.root_extra = await processDir('e:/farm new/farm/hình ảnh video mục (Sân vườn & Hồ Koi)', 'farm/extra');

  // 2. Tâm huyết
  console.log('Processing Tâm huyết...');
  data.tam_huyet = [];
  data.tam_huyet.push(...await processDir('e:/farm new/farm/Hình công trình tâm huyêt/1', 'farm/projects/tam-huyet'));
  data.tam_huyet.push(...await processDir('e:/farm new/farm/Hình công trình tâm huyêt/2', 'farm/projects/tam-huyet'));
  data.tam_huyet.push(...await processDir('e:/farm new/farm/Hình công trình tâm huyêt/3', 'farm/projects/tam-huyet'));
  data.tam_huyet.push(...await processDir('e:/farm new/farm/Hình công trình tâm huyêt/4', 'farm/projects/tam-huyet'));

  // 3. Truoc sau
  console.log('Processing Truoc sau...');
  data.truoc_sau = await processDir('e:/farm new/farm/Truoc sau', 'farm/projects/truoc-sau');

  // 4. Nhân sự
  console.log('Processing Nhân sự...');
  data.nhan_su = await processDir('e:/farm new/farm/NHÂN SỰ', 'farm/team');

  fs.writeFileSync('e:/farm new/farm/tmp/bulk_upload_results.json', JSON.stringify(data, null, 2));
  console.log('Done! Data saved to e:/farm new/farm/tmp/bulk_upload_results.json');
};

main();
