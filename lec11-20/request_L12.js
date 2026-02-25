

const http = require("http");

const server = http.createServer((req, res)=>{
    
    console.log(req.method);

    if(req.url == "/"){
        res.write("<h1>home page</h1>");
    }else if(req.url == "/about"){
        res.write("<h1>about page</h1>");
    }else if(req.url == "/contact"){
        res.write("<h1>contact page</h1>");
    }else if(req.url == "/login"){
        res.write("<h1>login page</h1>");
    }

    res.end();
})

server.listen(8600);