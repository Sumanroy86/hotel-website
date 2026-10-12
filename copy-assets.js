import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/sroyc/.gemini/antigravity-ide/brain/618b9b19-14e0-4106-814a-da6176e7058d';
const outDir = path.resolve('public/images');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const map = {
  'hero_coastal_stay_1791744199725.jpg': 'hero.jpg',
  'deluxe_hotel_room_1791744218752.jpg': 'hotel-deluxe.jpg',
  'premium_hotel_room_1791744243312.jpg': 'hotel-premium.jpg',
  'family_hotel_room_1791744272882.jpg': 'hotel-family.jpg',
  'guesthouse_standard_room_1791744302269.jpg': 'guesthouse-standard.jpg',
  'guesthouse_ac_room_1791744326776.jpg': 'guesthouse-ac.jpg',
  'guesthouse_family_room_1791744349549.jpg': 'guesthouse-family.jpg',
  'coastal_dining_lounge_1791744386103.jpg': 'dining.jpg',
  'digha_sea_beach_1791744418332.jpg': 'beach.jpg',
  'luxury_bathroom_suite_1791744458220.jpg': 'bathroom.jpg'
};

for (const [src, dest] of Object.entries(map)) {
  const srcPath = path.join(brainDir, src);
  const destPath = path.join(outDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.warn(`Missing ${srcPath}`);
  }
}
console.log('All image assets copied successfully!');
