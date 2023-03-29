const SitemapGenerator = require('sitemap-generator');

const generator = SitemapGenerator('https://lexmihaylov.github.io', {
  stripQuerystring: false,
  filepath: 'dist.static/localhost_3000/sitemap.xml'
});
 
// start the crawler
generator.start();