const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  // Mirrors _redirects: the demo moved from /demo.html to /demo/.
  if (urlPath === '/demo.html') {
    res.writeHead(301, { Location: '/demo/' });
    res.end();
    return;
  }

  let filePath = path.join(ROOT, urlPath);
  // SPA fallback for the interactive demo, mirroring _redirects in production:
  // any /demo/ path that isn't a real file is served the app's index.html.
  if (urlPath.startsWith('/demo/') && !path.extname(urlPath)) {
    filePath = path.join(ROOT, 'demo', 'index.html');
  }
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}).listen(PORT, () => {
  console.log(`Opvion website running at http://localhost:${PORT}`);
});
