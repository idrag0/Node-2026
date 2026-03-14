
import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Home page " );
})

app.get("/user", (req,res)=>{
    res.send("user page")   
})

app.get("/error", (req,res)=>{
    res.send("error page")
})

function errorHandling(error, req, res, next){
    res.status(error.status || 500).send("try again later");
}


// 404 handler for undefined routes
app.use((req, res, next) => {
    const error = new Error("Page not found");
    error.status = 404;
    next(error);
});

app.use(errorHandling);


app.listen(8600,()=>{
    console.log("server is running on port 8600");  

});
