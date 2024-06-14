// alert(3+3) // we are using Nodejs, not browser
/*
Data Types
number
bigint
string = ""
boolean = true/false
null = standalone value
undefiner
symbol 
object
*/

console.log(typeof null);
let age = 19;
let value = "33abc";

let result = age + Number(value);
console.log(result);
console.log(typeof result);

/*
"33" => 33
"3ab" => NaN
true => 1
false => 0
*/

let num = "33";
let strNum = String(num);
console.log(strNum);
console.log(typeof strNum);
