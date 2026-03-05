

const http = require('http');


http.createServer( (req, res)=>{
    res.write("page checking");
    res.end();
}).listen(8600);