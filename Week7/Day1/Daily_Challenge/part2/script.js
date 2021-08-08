const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('My module is:\n 361\n');
  res.end('Hi there at the frontend');
});

server.listen(port, () => {
  console.log("I am listening...");
});
