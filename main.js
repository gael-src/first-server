////////////////////////////////////////////////////////////////
// EXERCISE 1:

// const http = require("http");

// http
//   .createServer((request, response) => {
//     console.log(request);
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Hallo Welt");
//     response.end();
//   })
//   .listen(3000);

////////////////////////////////////////////////////////////////
// EXERCISE 2:

const http = require("http");
const fs = require("fs");
const url = require("url");
http
  .createServer((request, response) => {
    const path = url.parse(request.url).pathname;
    fs.readFile(__dirname + path, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(path);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    });
  })
  .listen(3000);
