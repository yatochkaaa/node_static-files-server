'use strict';
import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
  const path =  normalizedURL.pathname;
  const parts = normalizedURL.pathname.split('/').splice(2).join('/');

  if (path === '/file/' || path === '/file') {
    console.log('public/index.html');
  } else if (path.includes('/file/')) {
    console.log('public/' + parts);
  } else {
    res.statusCode = 404;
    console.log(res.statusCode, 'Write correct path (/file/ + your path)');
  }

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
