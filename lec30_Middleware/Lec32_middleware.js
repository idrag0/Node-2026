import express from "express";

const app = express();

function checkAgeRouteMiddleware(req,res, next){

    if(!req.query.age || req.query.age < 18){
        res.send("you are not allowed to access this page");
    }else{
        next();
    }   

}

function checkUrl(req,res, next){
    console.log("user is accessing " + req.url + " page");
    next();
}




app.get('/',(req,res)=>{
    res.send("<h1>Home page </h1>" );
})

app.get("/login",checkUrl, (req,res)=>{
    res.send("<h1>Login page </h1>")
})

app.get('/user', checkUrl,checkAgeRouteMiddleware, (req,res)=>{
    res.send("<h1>User page </h1>")
})

app.get("/product",checkAgeRouteMiddleware,checkUrl, (req,res)=>{
    res.send("<h1>Product page </h1>")
})


app.listen(8600,()=>{
    console.log("server is running on port 8600");
})