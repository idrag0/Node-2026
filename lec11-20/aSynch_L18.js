

console.log("a")

// setTimeout(() => {
//     console.log("b")
// }, 2000)

// console.log("c")

const fs = require('fs');

fs.readFile("./data.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("error in reading file");
        return;
    }
    console.log(data);
})

console.log("d")