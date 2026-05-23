
import express from 'express';

const app = express();

app.set("view engine", "ejs");

app.get("/users", (req, res) => {
    res.render("users");

})