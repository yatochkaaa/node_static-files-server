import http from 'http';

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/f'
};

http.get(options, (res) => {
  res.setEncoding('utf-8');
  res.on('data', console.log);
});
