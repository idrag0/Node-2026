
import express from 'express';
import {MongoClient } from 'mongodb';

const app = express();

app.use(express.json()); // to parse JSON data in POST requests

const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

client.connect().then((connection) =>{

    const db = connection.db('college')

    app.post("/add-student/api", async (req, res)=>{
        console.log(req.body);

        const {name, age, city} = req.body;

        if(!name || !age || !city){
            res.send({message: "operation Failed", success: false})
            return false;
        }
        const collection = db.collection('users');
        const result = await collection.insertOne(req.body);


        res.send({message : "data stored", success :true, result:result })
    })

})

app.listen( 8200, ()=>{
    console.log("running 8200 post")
});

