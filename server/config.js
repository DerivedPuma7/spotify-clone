import { join, dirname } from 'path';
import { fileURLToPath } from 'url';


const currentDir = dirname(fileURLToPath(import.meta.url));
const root = join(currentDir, '../');

const audioDirectory = join(root, 'audio');
const fxDirectory = join(audioDirectory, 'fx');
const songsDirectory = join(audioDirectory, 'songs');

const publicDirectory = join(root, 'public');

export default {
    port: process.env.PORT || 3000,
    dir: {
        root,
        publicDirectory,
        audioDirectory,
        fxDirectory,
        songsDirectory
    },
    pages: {
        homeHTML: 'home/index.html',
        controllerHTML: 'controller/index.html',
        landingHTML: 'landing/index.html'
    },
    location:{
        home: '/home',
        landing: '/landing'
    },
    constants: {
        CONTENT_TYPE: {
            '.svg': 'svg',
            '.jpg': 'jpeg',
            '.html': 'text/html',
            '.png': 'png',
            '.css': 'text/css',
            '.js': 'text/javascript'
        },
        audioMediaType: 'mp3',
        songVolume: '0.99',
        fxVolume: '0.1',
        fallbackBitRate: '128000',
        bitRateDivisor: 8,
        englishConversation: join(songsDirectory, 'conversation.mp3')
    }
}
