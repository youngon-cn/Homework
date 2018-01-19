  const http = require('http')
  const fs = require('fs')
  const path = require('path')
  const url = require('url')

  const mime = {
      "css": "text/css",
      "gif": "image/gif",
      "html": "text/html",
      "ico": "image/x-icon",
      "jpeg": "image/jpeg",
      "jpg": "image/jpeg",
      "js": "text/javascript",
      "json": "application/json",
      "pdf": "application/pdf",
      "png": "image/png",
      "svg": "image/svg+xml",
      "swf": "application/x-shockwave-flash",
      "tiff": "image/tiff",
      "txt": "text/plain",
      "wav": "audio/x-wav",
      "wma": "audio/x-ms-wma",
      "wmv": "video/x-ms-wmv",
      "xml": "text/xml"
  };

  const server = http.createServer( (req, res) => {
      const req_path = url.path(req.url).pathname;
      const req_paths = decodeURI(req_path);
      const fileR = path.resolve(__dirname + file)
      readContext(req, res, fileR)
  })
  server.listen(8000)


  const readContext = async function (req, res, fileP){
      if(endsWith(fileP)){
      const DIR = 1;
        fs.stat(fileP, (err, stats) => {
          if(err){
            response.writeHead(404, { "content-type": "text/html" });
            response.end("<h1>404 Not Found</h1>");        
          }
          if(!err && stats.isDirectory()) await readfiles(req, res, fileP, DIR);
        })
      }
      if(!endsWith(fileP)) {
          const FILE = 2
          const ext = path.extname(file)
          const extname = ext? ext.slice(1): 'unknown'
          const fileType = mime.extname || 'text/plain'
          fs.stat(fileP, (err, stats) => {
            if(err){
              response.writeHead(404, { "content-type": "text/html" });
              response.end("<h1>404 Not Found</h1>");        
            }
            if(!err && stats.isFile()) await readfiles(req, res, fileP, FILE, fileType);
            if(!err && path.extname(pathName) === ''){
              pathName += '/';
              let redirect = "http://" + req.headers.host + pathName;
              res.writeHead(301, {
              location: redirect
              });
              res.end();
            }
          })
      }

  }

  function endsWith(path) {
    if( path.lastIndexof('/') === 0 ) return true;
    return false;
  }

  let readfiles = function (req, res, fileP, file_dir, fileType) {
  let promise = new Promise((resolve, reject) => {
      if(file_dir === 1) {
        fs.readdir(fileP, (err, files) => {
          if(err) reject();
          if(files) {
            files.map((file) => {
                if(file === 'index.html') resolve(file);
            })  
          }
        })
      }
      if(file_dir === 2) {
        fs.readFile(fileP, (err, data) => {
          if(err) {
            res.writeHead(404, {"content-type":"text/html"})
            res.end('NOT FOUND')
          }
          else {
            req.writeHead(200, {'content-type': fileType})
            res.end(data); 
            resolve()
          }
        })
      }
  })
  }

  readfiles.then((data) => {
    fs.readFile(fileP, (err, data) => {
      const ext = path.extname(file)
      const extname = ext? ext.slice(1): 'unknown'
      const fileType = mime.extname || 'text/plain'
      if(err) {
        res.writeHead(404, {"content-type":"text/html"})
        res.end('NOT FOUND')
      }
      req.writeHead(200, {'content-type': fileType})
      res.end(data); 
      resolve()
    })
  }).catch((err) => {
    console.log(`${err}`)
  })