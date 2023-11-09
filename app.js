const http = require("http");
const fs = require("fs");
const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("page/home.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("page/about.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/create-file") {
    const data = "<h1>This is test file</h1>";
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.writeFile("temp/test.html", data, (err) => {
      if (err) throw err;
      res.write("<h1>file is created</h1>");
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("page/PageNotFound.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

console.log(`server is running at http://localhost:${PORT}`);
server.listen(PORT);
