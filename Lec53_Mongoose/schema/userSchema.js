
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

export default userSchema;