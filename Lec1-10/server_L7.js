

const http = require('http');

http.createServer((req  , res) =>{
    res.write("<h1>hello world</h1>");
    res.end("<p>this is my first server</p>");
}).listen(3800);




http.createServer((req  , res) =>{
    res.write("<h1>hello other world</h1>");
    res.end("<p>this is my first server</p>");
}).listen(5800);


// lec 7 , 8 ,9