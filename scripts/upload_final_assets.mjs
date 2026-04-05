import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const videoDir = 'e:\\farm new\\farm\\public\\1 Sân vườn -  hồ koi\\1 Sân vườn -  hồ koi\\2 Video thực tế';
const threeDDir = 'e:\\farm new\\farm\\public\\1 Sân vườn -  hồ koi\\1 Sân vườn -  hồ koi\\3 Mẫu thác';

async function uploadFiles() {
  const results = {
    reels: [],
    threeD: []
  };

  // Upload Videos and Thumbnails
  const videoFiles = fs.readdirSync(videoDir);
  const videoGroups = {};
  
  videoFiles.forEach(file => {
    const match = file.match(/^(\d+)[A-C]\.(png|mp4)$/);
    if (match) {
      const id = match[1];
      const ext = match[2];
      if (!videoGroups[id]) videoGroups[id] = {};
      if (ext === 'png') videoGroups[id].thumbnail = file;
      if (ext === 'mp4') videoGroups[id].video = file;
    }
  });

  console.log('Uploading Reels...');
  for (const id in videoGroups) {
    const group = videoGroups[id];
    if (group.thumbnail && group.video) {
        console.log(`Uploading Reel group ${id}...`);
        const thumbUpload = await cloudinary.uploader.upload(path.join(videoDir, group.thumbnail), {
            folder: 'farm/reels/san-vuon-ho-koi',
            resource_type: 'image'
        });
        const videoUpload = await cloudinary.uploader.upload(path.join(videoDir, group.video), {
            folder: 'farm/reels/san-vuon-ho-koi',
            resource_type: 'video'
        });
        results.reels.push({
            id,
            thumbnail: thumbUpload.secure_url,
            videoUrl: videoUpload.secure_url
        });
    }
  }

  // Upload 3D Models
  console.log('Uploading 3D Models...');
  const threeDFiles = fs.readdirSync(threeDDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  for (const file of threeDFiles) {
    console.log(`Uploading 3D model ${file}...`);
    const upload = await cloudinary.uploader.upload(path.join(threeDDir, file), {
        folder: 'farm/3d-models/san-vuon-ho-koi',
        resource_type: 'image'
    });
    results.threeD.push({
        name: file,
        url: upload.secure_url
    });
  }

  fs.writeFileSync('tmp/upload_results_v2.json', JSON.stringify(results, null, 2));
  console.log('Upload complete! Results saved to tmp/upload_results_v2.json');
}

uploadFiles().catch(console.error);
