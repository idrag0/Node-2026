

const http = require("http");
const fs = require("fs");

http.createServer( (req,res)=>{
    fs.readFile("./web_L14.html", "utf-8",(err, data)=>{
        if(err){
            res.writeHead(500, {"Content-Type" : "text/html"});
            res.writable("internal server error");
            res.end();
            return;
        }

        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(data);
        res.end();
    })

}).listen(8600);