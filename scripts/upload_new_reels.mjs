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

const VIDEO_DIR = path.resolve(ROOT_DIR, 'public/1 Sân vườn -  hồ koi/1 Sân vườn -  hồ koi/2 Video thực tế');

const uploadFile = async (filePath, isVideo = false) => {
  try {
    const res = await cloudinary.uploader.upload(filePath, {
      folder: 'farm/reels/new',
      resource_type: isVideo ? 'video' : 'image'
    });
    return res.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error.message);
    return null;
  }
};

async function start() {
  const reels = [];
  
  // Hardcoded list based on list_dir output
  const pairs = [
    { n: '1',  thumb: '1A.png',  vid: '1B.mp4' },
    { n: '2',  thumb: '2A.png',  vid: '2B.mp4' },
    { n: '3',  thumb: '3A.png',  vid: '3B.mp4' },
    { n: '4',  thumb: '4A.png',  vid: '4B.mp4' },
    { n: '5',  thumb: '5A.png',  vid: '5B.mp4' },
    { n: '6',  thumb: '6A.png',  vid: '6B.mp4' },
    { n: '7',  thumb: '7A.png',  vid: '7B.mp4' },
    { n: '8',  thumb: '8A.png',  vid: '8B.mp4' },
    { n: '9',  thumb: '9A.png',  vid: '9C.mp4' },
    { n: '10', thumb: '10A.png', vid: '10B.mp4' },
    { n: '11', thumb: '11A.png', vid: '11B.mp4' },
    { n: '12', thumb: '12A.png', vid: '12B.mp4' },
    { n: '13', thumb: '13A.png', vid: '13B.mp4' },
    { n: '14', thumb: '14A.png', vid: '14B.mp4' },
    { n: '15', thumb: '15A.png', vid: '15B.mp4' }
  ];

  for (const pair of pairs) {
    console.log(`Processing Reel ${pair.n}...`);
    const thumbPath = path.join(VIDEO_DIR, pair.thumb);
    const vidPath = path.join(VIDEO_DIR, pair.vid);

    const thumbUrl = await uploadFile(thumbPath, false);
    const vidUrl = await uploadFile(vidPath, true);

    if (thumbUrl && vidUrl) {
      reels.push({
        category: 'SÂN VƯỜN & HỒ KOI',
        title: `Video thực tế hồ koi ${pair.n}`,
        duration: '0:15', // Placeholder, Cloudinary can provide duration if needed but I'll skip for speed
        thumbnail: thumbUrl,
        videoUrl: vidUrl
      });
    }
  }

  const outputPath = path.resolve(ROOT_DIR, 'tmp/new_reels_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(reels, null, 2));
  console.log(`Done! Results saved to ${outputPath}`);
}

start();
