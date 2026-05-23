

const path = require('path');


const file = 'peter_l23.txt';

console.log(path.extname(file)); // .txt
console.log(path.basename(file)); // peter_l23.txt
console.log(path.dirname(file)); // . (current directory)
console.log(path.resolve(file)); // absolute path to peter_l23.txt
console.log(path.parse(file)); // { root: '', dir: '.', base: 'peter_l23.txt', ext: '.txt', name: 'peter_l23' }
console.log(path.isAbsolute(file)); // false

console.log(__dirname); // absolute path to current directory
console.log(__filename); // absolute path to current file (path_L23.js)