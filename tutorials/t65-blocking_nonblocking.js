// Synchronous or blocking
// - line by line execution
const fs = require('fs');
let text = fs.readFileSync('t64.txt', 'utf-8');
// this is will not go forward until file the content is read and stored in text
console.log(text);
console.log('This is message 1');

// Asynchronous or non-blocking
// - callbacks will fire
const fs1 = require('fs');
fs1.readFile('t64.txt', 'utf-8', (err, data1) => {
    // this is will go forward and get called back when ready
    console.log(data1);
})
console.log('This is message 2');
