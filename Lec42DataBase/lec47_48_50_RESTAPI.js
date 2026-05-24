import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

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
                <li> <a href="/update-users">Data delete</a> </li>
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

        console.log(req.body); // { name: '... ', age: '...', city: '...' }

        const collection = db.collection('users');
        collection.insertOne(req.body);

        

        res.send('alert("Student added successfully")');
    })

    app.get("/update-users", async(req, res)=>{  // lec 50 last

        const collection = db.collection('users');
        const results = await collection.find().toArray();
        res.render("userDelete",{results:results}); 

    })

    app.get("/update-user/:id",async(req,res)=>{  // lec 50 last
        const id = req.params.id;

        console.log(id);

        if(!ObjectId.isValid(id)){
            return res.send({success:false, message : "Invalid Id"});
        }

        const collection = db.collection('users');

        const result = await collection.deleteOne({_id:new ObjectId(id)});
         
        if(result.deletedCount > 0){
            res.send("<h2>data deleted</h2>")
        }else{
            res.send("<h2> data not deleted , try again !</h2>")
        }
    })

    app.delete("/delete/:id",async (req, res)=>{   // lec 50 mid

        const id = req.params.id;

        console.log(id);

        if(!ObjectId.isValid(id)){
            return res.send({success:false, message : "Invalid Id"});
        }

        const collection = db.collection('users');

        const result = await collection.deleteOne({_id:new ObjectId(id)});
         
        if(result.deletedCount > 0){
            res.send({
                message : "data deleted",
                success : true
            })
        }else{
            res.send({message : "data not deleted , try after sometimes",
                success : false
            })
        }
    })


    app.get("/update/:id", async(req, res)=>{
        const id = req.params.id;

        console.log(id);

        const collection = db.collection("users");
        const result = await collection.findOne({_id: new ObjectId(id)});
        res.render("update-users",{user:result});

        
    })

    app.post('/update-users/:id', async(req, res)=>{
        const id = req.params.id;
        const body = req.body;

        console.log(id);

        const collection = db.collection("users");
        

    
        const result = await collection.updateOne({_id : new ObjectId(id)}, {$set:body});

        if(result){
            res.send("<h2>data update</h2>");
        }else{
            res.send("<h2>data update</h2>");
        }
    })
})





app.listen(8900, ()=>{
    console.log("server is running on port 8900");
})