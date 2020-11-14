const http = require('http')
const fs = require('fs')

const port  = process.env.PORT || 3000
const hostname = process.env.HOSTNAME || "0.0.0.0"
const staticFilesDir = '/assets'

const server = http.createServer((req, res) => {
  const isAsset = ['woff', 'woff2'].includes(req.url.split('.').slice(-1)[0] )
  const sourceFile = isAsset ? `${__dirname}${staticFilesDir}${req.url}` : __dirname + req.url

  fs.readFile(sourceFile, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    console.log(req.url, isAsset ? 'isAsset' :'')

    res.writeHead(200);
    res.end(data);
  });
})

server.listen(port, hostname, callback=function() {
  console.log(`Listening to connexions on ${hostname}:${port}`)
})
