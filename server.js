const http = require('http');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');

const eventEmitter = require('events');

class Emitter extends eventEmitter {}

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  const extension = path.extname(req.url);
  let contentType = getContentType(extension);

  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
    case '.wav':
      contentType = 'audio/wav';
      break;
    case '.mp4':
      contentType = 'video/mp4';
      break;
    case '.woff':
      contentType = 'application/font-woff';
      break;
    case '.ttf':
      contentType = 'application/font-ttf';
      break;
    case '.eot':
      contentType = 'application/vnd.ms-fontobject';
      break;
    case '.otf':
      contentType = 'application/font-otf';
      break;
    case '.wasm':
      contentType = 'application/wasm';
      break;
    default:
      contentType = 'text/html';
  }

  let filePath =
    contentType === 'text/html' && req.url === '/'
      ? path.join(__dirname, 'views', 'index.html')
      : contentType === 'text/html' && req.url.slice(-1) === '/'
      ? path.join(__dirname, 'views', req.url, 'index.html')
      : contentType === 'text/html'
      ? path.join(__dirname, 'views', req.url)
      : path.join(__dirname, req.url);

  if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    // serve the file
  } else {
    // 404 or 301 redirect
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// initialize object

const myEmitter = new Emitter();
