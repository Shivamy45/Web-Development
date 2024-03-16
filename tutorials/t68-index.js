// For single export
// const funcAverage = require("./t68-custom_modules");
// console.log(funcAverage([2, 3, 5, 2]));

const mod = require("./t68-custom_modules");
// console.log(mod);
console.log(mod.name);
console.log(mod.avg([3, 5]));
console.log(mod.maximum([3, 5, 4, 8]));