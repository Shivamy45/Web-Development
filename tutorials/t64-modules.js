const fs = require('fs');
const text = fs.readFileSync("t64.txt", "utf-8");
console.log(text);
const data = fs.writeFileSync("t64-new.txt", 'This is added.', 'utf-8');
console.log('t64-new.txt created with the given data');