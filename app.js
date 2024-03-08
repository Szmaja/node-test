// Importing required module 'http'
const http = require('http');

// Define the hostname and port on which the server will listen
const hostname = '127.0.0.1';
const port = 3000;

// Creating a server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response body "I love You!"
  res.end('I love You!\n');
});

// Start the server and make it listen for requests on specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

