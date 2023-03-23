import { rmSync, existsSync } from 'fs';
import scrape from 'website-scraper'

if (existsSync('dist.static')) {
    rmSync('dist.static', {force: true, recursive: true});
}

scrape({
    urls: ['http://localhost:3000'],
    recursive: true,
    maxRecursiveDepth: 10,
    urlFilter: (url) => (/^http:\/\/localhost/).test(url),
    directory: 'dist.static',
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure'
});