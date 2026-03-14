

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));


app.get('/',(req,res)=>{
    res.send("Home page " );
})

app.get("/user", (req,res)=>{
    res.send("user page")

})

app.get('/wait', (req,res)=>{
    setTimeout(()=>{
        res.send("wait page")
    }, 2000)
})


app.listen(8600,()=>{
    console.log("server is running on port 8600");
})