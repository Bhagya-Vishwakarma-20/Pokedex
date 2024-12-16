const fs = require('fs');
const https = require('https');
const path = require('path');

const typeImages = {
    normal: 'https://archives.bulbagarden.net/media/upload/9/95/Normal_icon_SwSh.png',
    fire: 'https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png',
    water: 'https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSh.png',
    electric: 'https://archives.bulbagarden.net/media/upload/7/7b/Electric_icon_SwSh.png',
    grass: 'https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png',
    ice: 'https://archives.bulbagarden.net/media/upload/1/15/Ice_icon_SwSh.png',
    fighting: 'https://archives.bulbagarden.net/media/upload/3/3b/Fighting_icon_SwSh.png',
    poison: 'https://archives.bulbagarden.net/media/upload/8/8d/Poison_icon_SwSh.png',
    ground: 'https://archives.bulbagarden.net/media/upload/2/27/Ground_icon_SwSh.png',
    flying: 'https://archives.bulbagarden.net/media/upload/b/b5/Flying_icon_SwSh.png',
    psychic: 'https://archives.bulbagarden.net/media/upload/7/73/Psychic_icon_SwSh.png',
    bug: 'https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png',
    rock: 'https://archives.bulbagarden.net/media/upload/1/11/Rock_icon_SwSh.png',
    ghost: 'https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png',
    dragon: 'https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png',
    dark: 'https://archives.bulbagarden.net/media/upload/d/d5/Dark_icon_SwSh.png',
    steel: 'https://archives.bulbagarden.net/media/upload/0/09/Steel_icon_SwSh.png',
    fairy: 'https://archives.bulbagarden.net/media/upload/c/c6/Fairy_icon_SwSh.png'
};

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };
        
        https.get(url, options, (response) => {
            if (response.statusCode === 200) {
                const writeStream = fs.createWriteStream(filepath);
                response.pipe(writeStream);
                writeStream.on('finish', () => {
                    writeStream.close();
                    resolve();
                });
            } else {
                reject(`Failed to download ${url} (Status: ${response.statusCode})`);
            }
        }).on('error', reject);
    });
};
async function downloadAllTypes() {
    const targetDir = path.join(__dirname, '../public/images/types');
    
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    for (const [type, url] of Object.entries(typeImages)) {
        const filepath = path.join(targetDir, `${type}.png`);
        console.log(`Downloading ${type} type image...`);
        try {
            await downloadImage(url, filepath);
            console.log(`Successfully downloaded ${type} type image`);
        } catch (error) {
            console.error(`Error downloading ${type} type:`, error);
        }
    }
}

downloadAllTypes();
