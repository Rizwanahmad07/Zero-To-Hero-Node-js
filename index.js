const http = require("http");

const PORT = 2000;
const hostname = "localhost";

const server = http.createServer((req, res) => {

   if(req.url ==="/"){
    res.end("<h1>HOME PAGE</h1>");
    }
     if(req.url=== "/about"){
        res.end("<h1>ABOUT PAGE</h1>");
    }
    if(req.url=== "/contact"){
        res.end("<h1>CONTACT PAGE</h1>");
    }
    if(req.url=== "/service"){
        res.end("<h1>SERVICE PAGE</h1>");
    }
});


server.listen(PORT, hostname,() => {
  console.log(`server is working on http://${hostname}:${PORT})`);
});

