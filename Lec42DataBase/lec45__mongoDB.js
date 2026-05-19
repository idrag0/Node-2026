
import express from 'express';

import { MongoClient } from 'mongodb';

const app = express();
const url = 'mongodb://localhost:27017/';

const client = new MongoClient(url);

// async function connectDB(){
//     await client.connect()
//     const db = client.db('college');
//     const collection = db.collection('users');
//     const result = await collection.find().toArray();
//     console.log(result);
// }

// connectDB();

app.set("view engine", "ejs");

app.get('/', async (req, res)=>{

    await client.connect()
    const db = client.db('college');
    const collection = db.collection('users');

    const results = await collection.find().toArray();
    console.log(results);


    res.render("students",{results:results});
})


app.listen(8900, ()=>{
    console.log("server is running on port 8900");
})


//lec 45 & lec 46 in this file