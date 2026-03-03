

const http = require("http");

const fs = require("fs");

const querystring = require("querystring");

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
            res.write("internal server error");
            res.end();
            return;
        }
        if (req.url == "/") {
            res.writeHead(201, { "Content-Type": "text/html" });
            res.write(data);
        } else if (req.url == "/submit") {    // Lecture 16

            let databody = [];

            req.on('data', (chunk)=>{
                databody.push(chunk);
            });

            req.on('end', ()=>{
                let rawData = Buffer.concat(databody).toString();
                let readable =  querystring.parse(rawData);
                let str  = "name : " + readable.name + " Email : " + readable.email + " Phone : " + readable.phone + " Country : " + readable.country + " Message : " + readable.message;
                console.log(str);

                // fs.writeFileSync(readable.name + ".txt", str);

                fs.writeFile("./data.txt", str + "\n", {flag: "a"}, (err) => {
                    if(err){
                        console.log("error writing file");
                    }
                })

                console.log("data addedd to file");
            });
            
            res.write("<p> data submited guys</p>");
        }

        res.end();

    })



    
}).listen(8600);