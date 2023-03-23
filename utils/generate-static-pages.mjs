import scrape from 'website-scraper'

scrape({
    urls: ['http://localhost:3000'],
    recursive: true,
    maxRecursiveDepth: 10,
    urlFilter: (url) => (/^http:\/\/localhost/).test(url),
    directory: 'dist.static',
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure'
});