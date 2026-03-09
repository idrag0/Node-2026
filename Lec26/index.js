
import express from 'express';
import about, {contact} from './about.js';
import service from './service.js';
import home from './home.js';

const app = express();

app.get("/",(req,res)=>{
    res.send(home());
});

app.get("/about",(req,res)=>{
    res.send(about());
});

app.get("/service",(req,res)=>{
    res.send(service());
});

app.get("/contact",(req,res)=>{
    res.send(contact());
});

app.listen(8600,()=>{
    console.log("server is running on port 8600");
});