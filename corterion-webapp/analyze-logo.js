const fs = require('fs');

async function main() {
  try {
    // Try to load sharp dynamically. It should be in node_modules
    let sharp;
    try {
      sharp = require('sharp');
    } catch(e) {
      // Try next.js built-in sharp if available or global
      sharp = require(process.cwd() + '/node_modules/sharp');
    }
    
    const metadata = await sharp('public/logo-source.png').metadata();
    console.log(`Dimensions: ${metadata.width}x${metadata.height}`);
    
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
