import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});


app.use(express.urlencoded({ extended: false  }));

app.get("/login", (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
   `);
});

app.post('/submit', (req,res)=>{
  console.log(req.body); // { username: '...', password: '...' }
  res.send("Form submitted successfully");
})

app.get("/submit", (req, res) => {
  res.send("submit page");
});

app.get("/user", (req, res) => {
  res.send("user page");
});    


app.listen(8900, () => {
  console.log("server is running on port 8900");
});