const http = require('http')
const fs = require('fs')

const port  = process.env.PORT || 3000
const hostname = process.env.HOSTNAME || "0.0.0.0"

const server = http.createServer((req, res) => {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
})

server.listen(port, hostname, callback=function() {
  console.log(`Listening to connexions on ${hostname}:${port}`)
})
