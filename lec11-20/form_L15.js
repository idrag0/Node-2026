

const http = require("http");

const fs = require("fs");

// http.createServer((req, res) => {
//     res.writeHead(201, {"Content-Type" : "text/html"})
//     if(req.url == "/"){
//         res.write(
//         ` 
//           <form action="/submit" method ="post">

//             <input type="text" placeholder="Enter your name">
//             <input type="text" placeholder="Enter password">
//             <button>Submit</button> 
//           </form>
//            `
//     )
//     }else if(req.url == "/submit"){
//         res.write("<h1>data submited</h1>")
//     }

// }).listen(8600)


http.createServer((req, res) => {



    fs.readFile("./form_L15.html", "utf-8", (err, data) => {

        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.writable("internal server error");
            res.end();
            return;
        }
        if (req.url == "/") {
            res.writeHead(201, { "Content-Type": "text/html" });
            res.write(data);
        } else if (req.url == "/submit") {

            let databody = [];

            req.on('data', (chunk)=>{
                databody.push(chunk);
            });

            req.on('end', ()=>{
                let rawData = Buffer.concat(databody).toString();
                console.log(rawData);
            });
            
            res.write("<p> data submited guys</p>");
        }

        res.end();

    })



    
}).listen(8600);