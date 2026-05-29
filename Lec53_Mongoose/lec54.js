import express from 'express';
import mongoose from 'mongoose';
import userModel from './model/userModel.js';
import userSchema from './schema/userSchema.js';

const app = express();


app.use(express.json());

await mongoose.connect("mongodb://localhost:27017/college").then(()=>{
    console.log("______________connected");
})

app.get('/', async (req, res)=>{

    const userData = await userModel.find();
    res.send(userData);
})

//   lecture 54 fetch api and post request
app.post('/save' , async (req, res)=>{
    console.log(req.body);

    const {name, age, city} = req.body;

    if(!req.body || !name || !age || !city){ 
        return res.send({
            "message": "all fields are required",
            success : false
        })

        return false;
    }

    const user = await userModel.create(req.body); 
    res.send({
        "message": "data stored",
        success : true,
        "dataInfo" : user
    })
});


app.listen(3600,()=>{
    console.log("running on port 3600");
})