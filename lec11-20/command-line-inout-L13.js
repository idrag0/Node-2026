
const http = require("http");

const arg = process.argv;
const port = arg[2] || 8600;
http.createServer( (req, res) => {
    console.log(arg[2]);
    res.write("testing command line input");    
    res.end();

}).listen(port);

console.log("----------", arg);
