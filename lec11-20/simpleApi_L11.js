

const http = require("http");
const { json } = require("stream/consumers");

const userData =[
    {
        name : "Aby",
        age : 20,
        city : "Delhi"
    },
    {
        name : "John",
        age : 30,
        city : "Mumbai"
    },
    {
        name : "Alice",
        age : 25,
        city : "Bangalore"
    }
]

http.createServer((req, res)=>{

    res.setHeader("Content-Type", "application/json");

    res.write(JSON.stringify(userData));
    res.end();

}).listen(6001)