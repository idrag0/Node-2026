
const fs = require('fs');

// create file and write data in it
// fs.writeFileSync("./heloo.txt","this is a fruit text file");  

// fs.unlinkSync("./heloo.txt");  // this will delete the file named heloo.txt 

// const data = fs.readFileSync("./text.txt", "utf-8");  // this will read the data from the file and return it as a string
// console.log(data);


// update the file with new data

// fs.appendFileSync("./text.txt", "\n this is new data");  // this will append the new data in the file, if file not exist it will create a new file and write the data in it

// const data = fs.readFileSync("./text.txt", "utf-8");
// console.log(data);


// take input form terminal and write it in a file

// const input = process.argv[2];

// console.log(input);


const operations = process.argv[2];

if(operations == 'write'){
    const data = process.argv[3];
    const content = process.argv[4];

    const path = "./" + data + ".txt";

    fs.writeFileSync(path, content);
    console.log("file created and data written in it");

    const fileData = fs.readFileSync(path, "utf-8");
    console.log("data read from file : " + fileData);
}
else if(operations == 'update'){
    const data = process.argv[3];
    const content = process.argv[4];
    const path = "./" + data + ".txt";

    fs.appendFileSync(path, "\n" + content);
    console.log("data updated in file");        
    const fileData = fs.readFileSync(path, "utf-8");
    console.log("data read from file : " + fileData);
}
else if(operations == 'delete'){
    const data = process.argv[3];
    const path = "./" + data + ".txt";      

    fs.unlinkSync(path);
    console.log("file deleted");
}


