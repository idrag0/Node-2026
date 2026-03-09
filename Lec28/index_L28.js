


import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the view directory
app.use(express.static(path.resolve('./view')));  // lec 29

app.get('/', (req, res) =>{
    const abspath = path.resolve('./view/home.html');
    res.sendFile(abspath);
});


app.get('/login', (req,res)=>{
    const abspath = path.resolve('./view/login.html');
    res.sendFile(abspath);
})

app.get('/about', (req,res)=>{
    const abspath = path.resolve('./view/about.html');  
    res.sendFile(abspath);      
});

app.use((req, res) => {    
    
    const abspaath = path.resolve('./view/404.html');
    res.status(404).sendFile(abspaath);
});

app.listen(8600, () => {
    console.log('Server is running on port 8600');
});