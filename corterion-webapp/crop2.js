const sharp = require('sharp');

async function crop() {
  const inputPath = 'public/logo-source.png';
  try {
    const splitY = 665;
    
    // Icon
    await sharp(inputPath)
      .extract({ left: 0, top: 0, width: 1536, height: splitY })
      .toFile('public/logo-icon.png');

    // Text
    await sharp(inputPath)
      .extract({ left: 0, top: splitY, width: 1536, height: 1024 - splitY })
      .toFile('public/logo-text.png');

    console.log('Successfully cropped!');
  } catch (e) {
    console.error(e);
  }
}
crop();
