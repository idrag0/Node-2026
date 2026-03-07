

const path = require('path');


const file = 'peter_l23.txt';

console.log(path.extname(file)); // .txt
console.log(path.basename(file)); // peter_l23.txt
console.log(path.dirname(file)); // . (current directory)
console.log(path.resolve(file)); // absolute path to peter_l23.txt