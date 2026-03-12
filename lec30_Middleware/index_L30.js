import express from 'express';

const app = express();




app.get('/',(req,res)=>{
    res.write("Home page " );
})


app.get("/product", (req,res)=>{
    res.write("product page")

})

app.get("/user", (req,res)=>{
    res.write("user page")
})

app.listen(8600,()=>{
    console.log("server is running on port 8600");
})  



