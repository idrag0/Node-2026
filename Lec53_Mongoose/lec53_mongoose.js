import mongoose from "mongoose";

async function dbConnection(){
    await mongoose.connect("mongodb://localhost:27017/college")

    const schema = mongoose.Schema({
        name : String,
        age : Number,
        city:String
    })

    const model = mongoose.model('users', schema);
    const result = await model.find();
    console.log(result);
}

dbConnection();