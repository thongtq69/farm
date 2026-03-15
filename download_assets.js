
const fs = require('fs');
const path = require('path');
const https = require('https');

const jsonFiles = [
    'E:/farm/farm/clone_ready/homepage_all_assets.json',
    'E:/farm/farm/clone_ready/assets_projects.json',
    'E:/farm/farm/clone_ready/assets_branding.json',
    'E:/farm/farm/clone_ready/assets_banners.json',
    'E:/farm/farm/clone_ready/assets_icons.json'
];

async function download(url, filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
                return;
            }
            const fileStream = fs.createWriteStream(filePath);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function main() {
    for (const jsonFile of jsonFiles) {
        if (!fs.existsSync(jsonFile)) continue;
        console.log(`Processing ${jsonFile}...`);
        const assets = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
        
        for (const asset of assets) {
            if (!asset.local_path || !asset.image_url) continue;
            
            const relativePath = asset.local_path.split('/assets/')[1];
            if (!relativePath) continue;
            
            const targetPath = path.join('E:/farm/farm/public', relativePath);
            if (fs.existsSync(targetPath)) continue;

            console.log(`Downloading ${asset.image_url} to ${targetPath}`);
            try {
                await download(asset.image_url, targetPath);
            } catch (err) {
                console.error(`Error downloading ${asset.image_url}: ${err.message}`);
            }
        }
    }
}

main();

