const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, 'docs');
const port = Number(process.env.PORT || 3001);
const clients = new Set();
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.ttc': 'font/collection',
};
const reloadScript = `<script>
  const reload = new EventSource('/__reload');
  reload.onmessage = () => location.reload();
</script>`;

const server = http.createServer(async (req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end('Bad request');
    return;
  }

  if (pathname === '/__reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });
    res.write(': connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) {
    res.writeHead(403).end('Forbidden');
    return;
  }

  try {
    const extension = path.extname(file);
    let content = await fs.promises.readFile(file);
    if (extension === '.html') {
      content = content.toString().replace('</body>', reloadScript + '</body>');
    }
    res.writeHead(200, {
      'Content-Type': types[extension] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(content);
  } catch {
    res.writeHead(404).end('Not found');
  }
});

let reloadTimer;
fs.watch(root, { recursive: true }, () => {
  clearTimeout(reloadTimer);
  reloadTimer = setTimeout(() => {
    for (const client of clients) client.write('data: reload\n\n');
  }, 100);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Tessa: http://localhost:${port} (automatic reload enabled)`);
});
