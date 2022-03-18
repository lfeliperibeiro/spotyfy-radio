import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const currentDir = dirname(fileURLToPath(import.meta.url));
const root = join(currentDir, '../');
const audioDirectory = join(root, 'audio');
const publicDirectory = join(root, 'puclic');

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    publicDirectory,
    audioDirectory,
    songsDirectory: join(audioDirectory, 'songs'),
    fxDirectory: join(audioDirectory, 'fx'),
  },
  pages: {
    homeHTML: 'home/index.html',
    controllerFTML: 'controller/index.html',
  },
  location: '/home',
};
