// 6 (a)
// const http = require("http");

// const server = http.createServer();

// server.listen(1234, ()=> {
//     console.log("server is runnig!")
// })

// // 6(c)
// const http = require("http");

// const apps = http.createServer((req, res) => {
//   res.setHeader(200, "content-type", "text/plain");

//   // res.writeHead(200, "content-type", "text/html");
//   // res.write("<h1>Hello World</h1>");
//   // res.end("Request received and processed");

//   res.end("Request received and processed");
// });

// apps.listen(1234, () => {
//   console.log("server is runnig! at http://localhost:1234");
// });

// // 7 (a)
// const http = require("http");
// const randomNumber = require("./randomNumber");

// const myServer = http.createServer((req, res) => {
//   res.setHeader(200, "content-type", "text/plain");

//   const number = randomNumber.random();

//   res.end(`Random number: ${number}.`);
// });

// myServer.listen(1234, () => {
//   console.log("server is runnig! at http://localhost:1234");
// });

// 8

// console.log("=====New=====");

// Import Node's built-in HTTP module.
// We use it to create our web server.
const http = require("http");

// Import Node's built-in File System module.
// We use it to read files from our computer.
const fs = require("fs");

// Import Node's built-in Path module.
// We use it to build the correct file path.
const path = require("path");

// Import the third-party MIME module.
// We use it to determine the correct
// Content-Type for HTML, CSS, JS, images, etc.
const mime = require("mime-types");

const server = http.createServer((req, res) => {
  // Get the URL requested by the browser.
  let requestFile = req.url;

  // Check whether the URL begins with "/".
  if (requestFile.startsWith("/")) {
    // Remove the first character.
    requestFile = requestFile.slice(1);
  }

  // In that case, use index.html.
  if (requestFile === "") {
    requestFile = "index.html";
  }

  const filePath = path.join(
    __dirname,
    "static",
    "apple-html-css-replica",
    requestFile,
  );

  // Print the requested file and path
  // so you can see what the server is doing.
  // console.log("Requested file:", requestFile);
  // console.log("File path:", filePath);

  fs.readFile(filePath, (error, data) => {
    const contentType = mime.lookup(filePath);
    console.log(contentType);
    if (error) {
      // Send HTTP 404 status.
      res.statusCode = 404;

      // Tell browser this response is plain text.
      res.setHeader("Content-Type", "text/plain");

      // Send error message.
      res.end("404 - Page not found");

      // Stop executing the callback.
      return;
    }

    // Send HTTP 200 status.
    res.statusCode = 200;

    

    // If MIME type was found, use it.
    // Otherwise use a generic binary type.
    res.setHeader("Content-Type", contentType || "application/octet-stream");

    res.end(data);
  });
});

server.listen(1234, () => {
  console.log("Server running at http://localhost:1234");
});

// console.log("========express 8========");

// const express = require("express");

// const path = require("path");

// const app = express();

// app.use(
//   express.static(path.join(__dirname, "static", "apple-html-css-replica")),
// );

// app.listen(1234, () => {
//   console.log("Server running at http://localhost:1234");
// });
