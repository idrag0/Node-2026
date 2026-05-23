import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

app.use(express.urlencoded({extended: true}));  // to parse form data in POST requests

const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

app.set("view engine", "ejs");

client.connect().then((connection)=>{
    const db = connection.db('college');

    app.get('/', (req, res)=>{
        res.send(`
            <h1>Welcome to the REST API</h1>
            <ul>
                <li><a href="/api">Get Students Data (JSON)</a></li>
                <li><a href="/ui">View Students Data (UI)</a></li>
                <li><a href="/add">add student</a></li>
            </ul>
        `);
    })

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

    // lec 48 storing form data in database

    app.get("/add", (req, res)=>{
        res.send(`
            <h2>Add Student</h2>
            <form method="post" action="/add-student">

            <input type="text" name="name" placeholder="Enter name"><br><br>
            <input type="number" name="age" placeholder ="Enter age"><br><br>
            <input type="text" name="city" placeholder="Enter city"><br><br>

            <button type="submit">Submit</button>

            </form>
        `)
    })

    app.post("/add-student", (req, res)=>{

        console.log(req.body); // { name: '...', age: '...', city: '...' }

        const collection = db.collection('users');
        collection.insertOne(req.body);

        

        res.send('alert("Student added successfully")');
    })
})


app.listen(8900, ()=>{
    console.log("server is running on port 8900");
})