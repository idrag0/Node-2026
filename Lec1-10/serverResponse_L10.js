

const http = require("http");

// const server = http.createServer((req, res)=>{

//     res.setHeader("Content-Type", "text/html");
//     res.write("<h2>hello world</h2>");
//     res.write("<p>this is my first server</p>");

//     res.end("abtout us page");
// })
let age = 20;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write(
        `<html>
    <head>
        <title>my first server</title>
    </head> 
    <body>
        <h1>hello world</h1>
        <h2>`+age+`</h2>
        <h3>`+new Date()+`</h3>
        <p>this is my first server</p>
    </body> 
        </html>`
    )

    res.end();
})

server.listen(4600)
