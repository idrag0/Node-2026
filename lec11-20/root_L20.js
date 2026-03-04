

const http = require('http');

const  userForm = require('./userForm_L20');
const userDataSubmit = require('./userDataSubmit_L20');


http.createServer( (req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === '/'){
        userForm(req, res);

    }else if(req.url == '/submit'){
        userDataSubmit(req, res);
        
        
    }
    res.end();
}).listen(8600);