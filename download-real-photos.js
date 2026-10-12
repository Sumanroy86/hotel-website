import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  // Slideshow
  {
    name: 'slide-1.jpg',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'slide-2.jpg',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'slide-3.jpg',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'slide-4.jpg',
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'slide-5.jpg',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80'
  },
  // Hotel Rooms
  {
    name: 'hotel-deluxe-real.jpg',
    url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'hotel-premium-real.jpg',
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'hotel-family-real.jpg',
    url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
  },
  // Guest House Rooms
  {
    name: 'guesthouse-standard-real.jpg',
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'guesthouse-ac-real.jpg',
    url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'guesthouse-family-real.jpg',
    url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
  },
  // Facilities & Gallery
  {
    name: 'hotel-bathroom-real.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'hotel-dining-real.jpg',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'hotel-lounge-real.jpg',
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'hotel-exterior-real.jpg',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
  }
];

const destDir = path.resolve('public/images/real');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Follow redirect
        return downloadImage(response.headers.location, destPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
      }
      const fileStream = fs.createWriteStream(destPath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(true);
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading realistic hotel photographs from Unsplash...');
  for (const item of images) {
    const destPath = path.join(destDir, item.name);
    try {
      await downloadImage(item.url, destPath);
      console.log(`✓ Downloaded ${item.name}`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('Completed downloading images!');
}

run();
