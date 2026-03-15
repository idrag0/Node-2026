
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/add-user", (req, res) =>{

    res.render("addUser");

});



app.post('/submit-user', (req, res) =>{
    console.log(req.body);
    res.render("submitUser.ejs",{user :req.body });

});

app.listen(8600, () => {
  console.log("server is running on port 8600");
});


