import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

app.set("view engine", "ejs");

client.connect().then((connection)=>{
    const db = connection.db('college');

    app.get('/api', async(req, res)=>{
        const collection = db.collection('users');
        const students = await collection.find().toArray();
        res.send(students);
    })

    app.get('/ui', async(req, res)=>{
        const collection = db.collection('users');
        const results = await collection.find().toArray();
        res.render("students",{results:results});   
    })
})


app.listen(8900, ()=>{
    console.log("server is running on port 8900");
})