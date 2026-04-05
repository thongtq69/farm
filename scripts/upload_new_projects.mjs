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
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
    });
    console.log(`Uploaded: ${filePath} -> ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`Failed to upload ${filePath}:`, error);
    return null;
  }
};

const main = async () => {
  const dir = 'e:/farm new/farm/public/1 Sân vườn -  hồ koi/1 Sân vườn -  hồ koi/1 Hình ảnh';
  const folder = 'farm/projects/san-vuon-ho-koi-new';
  
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir).filter(f => !fs.lstatSync(path.join(dir, f)).isDirectory());
  const urls = [];
  for (const file of files) {
    const url = await uploadFile(path.join(dir, file), folder);
    if (url) urls.push({ name: file, url });
  }

  const resultPath = 'e:/farm new/farm/tmp/san_vuon_ho_koi_new.json';
  fs.writeFileSync(resultPath, JSON.stringify({ san_vuon_ho_koi_new: urls }, null, 2));
  console.log(`Done! Results saved to ${resultPath}`);
};

main();
