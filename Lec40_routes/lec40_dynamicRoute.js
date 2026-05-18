

import express from 'express';

const app = express();

app.get("/", (req, res)=>{

    const users = ['anil', 'sahil', 'rohit','aby', 'drago'];
    let data = "";
    data += `<ul>`;

    for(let i=0; i<users.length; i++){
        console.log(users[i]);
        data += `<li><a href="/user/${users[i]}">${users[i]}</a></li>`;
    }

    data += `</ul>`;

    res.send(data);
    
    

});

app.get("/user/:name", (req, res)=>{
    const name = req.params.name;
    res.send(`User name is ${name}`);
});


app.listen(8600, ()=>{
    console.log("server is running on port 8600");
});