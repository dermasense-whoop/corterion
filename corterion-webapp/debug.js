const sharp = require('sharp');

async function debugLogo() {
  try {
    const metadata = await sharp('public/logo-source.png').metadata();
    console.log(metadata);
  } catch (err) {
    console.error(err);
  }
}
debugLogo();
