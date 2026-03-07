

const http = require('http');
const fs = require('fs');




http.createServer( (req, res)=>{

    let collectHeaderData = fs.readFileSync("./home_L22.html", "utf-8");

    let file = "/home_L22";


    if(req.url != "/"){
        file = req.url;
    }


    if(req.url !== '/style.css'){
        fs.readFile("."+file+".html", "utf-8", (err, data)=>{

            if(err){
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("internal server error");
                return false;
            }

            res.write(collectHeaderData+""+data);
            res.end();
        });

    }
    else if(req.url === '/style.css'){
        fs.readFile("./style.css", "utf-8", (err, data)=>{
            if(err){
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("css not found");
                return false;
            }

            res.writeHead(200, {"Content-Type": "text/css"});
            res.write(data);
            res.end();
        })
    }
    
    // res.end() removed to prevent ERR_HTTP_HEADERS_SENT

}).listen(8600);