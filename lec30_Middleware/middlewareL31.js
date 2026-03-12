
import express from 'express';

const app = express();

function ageCheck(req,res, next){
    const ip = req.socket.remoteAddress;
    if( !req.query.age || req.query.age < 18){
        res.send("you are not allowed to access this page");
    }else{
        
        next();
        console.log(ip);
        
    }

}

app.use(ageCheck);


app.get('/',(req,res)=>{
    res.write("<h1>Home page </h1>" );
})

app.get("/login", (req,res)=>{
    res.write("<h1>Login page </h1>")
})

app.get("admin", (req,res)=>{
    res.write("<h1>Admin page </h1>")
})


app.listen(8600,()=>{
    console.log("server is running on port 8600");
})