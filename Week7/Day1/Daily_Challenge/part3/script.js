const imported = require('./main.js');
let result = imported.myVar;

const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(`The current date and time is ${result}`);
  res.end();
});

server.listen(port, () => {
  console.log("I am listening...");
});
