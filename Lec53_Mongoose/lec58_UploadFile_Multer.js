
import express from 'express';
import multer from 'multer';


const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage: storage});


app.get('/', (req, res)=>{

    res.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="myfile"/>
            <button type="submit">Upload</button>
        </form>
        `)
})

app.post("/upload",upload.single('myfile'), (req, res)=>{
    res.send({
        "message" : 'file uploades',
        "info" : req.file
    })


})


app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})