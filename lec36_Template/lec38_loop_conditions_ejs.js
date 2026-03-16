
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/add-user", (req, res) =>{

    res.render("addUser");

});

app.get("/", (req, res) =>{
    res.write(`
        <h1>Home page</h1>
        <a href="/add-user">Add user</a><br>
        <a href="/users">Users</a>
    `);
});



app.post('/submit-user', (req, res) =>{
    console.log(req.body);
    res.render("submitUser.ejs",{user :req.body });

});


app.get("/users", (req, res) =>{
    const people = ["abrar", "chetu", "anam", "sadia"];
    res.render("users",{people: people})
});

app.listen(8600, () => {
  console.log("server is running on port 8600");
});


