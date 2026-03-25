import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');

const mappingPath = path.resolve(ROOT_DIR, 'src/data/cloudinary_mapping.json');
if (!fs.existsSync(mappingPath)) {
  console.error('Mapping file not found! Run migration first.');
  process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));

// Keys sorted by length (longest first) to avoid partial replacements (e.g., /images/projects before /images/projects/1.jpg)
const keys = Object.keys(mapping).sort((a, b) => b.length - a.length);

const walkSync = (dir, callback) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file === '.next' || file === 'node_modules' || file === '.git') return;
      walkSync(filePath, callback);
    } else {
      callback(filePath);
    }
  });
};

const processFile = (filePath) => {
  const ext = path.extname(filePath);
  if (!['.ts', '.tsx', '.js', '.jsx', '.json', '.css'].includes(ext)) return;
  if (filePath.endsWith('cloudinary_mapping.json')) return;
  if (filePath.includes('migrate')) return;

  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  for (const key of keys) {
    // Escape special characters in key for regex
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Using a simple global replace first.
    // If it's a JSON file, we might want to be more specific, but global string replace usually works for paths.
    // We added leading slash to local paths in mapping like '/images/...'
    const regex = new RegExp(escapedKey, 'g');
    content = content.replace(regex, mapping[key]);
  }

  if (content !== originalContent) {
    console.log(`Updated: ${filePath}`);
    fs.writeFileSync(filePath, content);
  }
};

console.log('Starting bulk replacement of local paths with Cloudinary URLs...');
walkSync(path.resolve(ROOT_DIR, 'src'), processFile);
console.log('Replacement complete!');
