// importing http module that provides functionalities needed to create a HTTP server
const http = require('http');

// create a server app and manage incoming HTTP requests and responses
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
