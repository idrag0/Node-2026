

const exprees = require('express');

const app = exprees();

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.get("/about",(req,res)=>{
    res.send("about page")
}); 

app.listen(8600);