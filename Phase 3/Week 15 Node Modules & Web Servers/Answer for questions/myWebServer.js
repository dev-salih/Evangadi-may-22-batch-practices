// 6 (a)
// const http = require("http");

// const server = http.createServer();

// server.listen(1234, ()=> {
//     console.log("server is runnig!")
// })

// 6(c)
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Request received and processed");
});

server.listen(1234, () => {
  console.log("server is runnig!");
});
