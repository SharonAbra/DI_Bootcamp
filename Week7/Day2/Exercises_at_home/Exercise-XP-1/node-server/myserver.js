const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is my first response</h1>');
    res.write('<h2>This is my second response</h2>');
    res.end('<h4>This is my third response</h4>');
});
server.listen(3000);
