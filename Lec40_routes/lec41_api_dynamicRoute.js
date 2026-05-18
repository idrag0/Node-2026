

import express from 'express';
import userData from './user.json' with { type: "json" };


const app = express();

 app.get("/", (req, res)=>{

    console.log(userData);

    res.send(userData);

 });

 app.get("/user/:id", (req, resp)=>{
    const id = req.params.id;

    const user = userData.filter((user)=> user.id == id);

    resp.send(user); 
 });

app.listen(3500, ()=>{
    console.log("server is running on port 3500");
});