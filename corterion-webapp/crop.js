const sharp = require('sharp');
const fs = require('fs');

async function processLogo() {
  try {
    const inputPath = 'public/logo-source.png';
    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width;
    const height = metadata.height;

    // 1. Remove white background (make it transparent)
    // Create a mask of non-white pixels
    const image = sharp(inputPath);
    
    // We will just do a simple thresholding or just use the image as is 
    // and rely on CSS mix-blend-mode or just do a basic split for now.
    // Let's assume it has a white background. We can make white transparent:
    // But since sharp's trim handles similar colors, let's just extract the regions.

    // Let's assume the icon is in the top 60% and text is in the bottom 40%
    const splitY = Math.floor(height * 0.65);
    
    // Icon
    await sharp(inputPath)
      .extract({ left: 0, top: 0, width: width, height: splitY })
      .trim() // remove whitespace around the icon
      .toFile('public/logo-icon-raw.png');

    // Text
    await sharp(inputPath)
      .extract({ left: 0, top: splitY, width: width, height: height - splitY })
      .trim() // remove whitespace around the text
      .toFile('public/logo-text-raw.png');

    console.log('Successfully cropped logo icon and text.');

  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processLogo();
