
import express from 'express';

const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res)=>{
    res.render("home",{
        name : "aby",
        college : "galgotias",
        age :"22",
    });
})

app.listen(8600, ()=>{
    console.log("server is running on port 8600");
})