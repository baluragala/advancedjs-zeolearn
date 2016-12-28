/**
 * Created by moksha on 28/12/16.
 */
/* Arithmetic*/
var x = 5;         // assign the value 5 to x
var y = 2;         // assign the value 2 to y
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x++);
console.log(y--);

/* Assignment */
var a=10;
console.log(a+=10);
console.log(a-=10);
console.log(a*=10);
console.log(a/=10);
console.log(a%=10);

let firstName="Zeolearn";
let secondName="Training";
console.log(firstName +" "+ secondName);
console.log(firstName +=secondName);

/* Comparison */
var x1=20, x2="20"
console.log(x1==x2);
console.log(x1===x2);
console.log(x1!=x2);
console.log(x1!==x2);
console.log(x1<x2);
console.log(x1>x2);
console.log(x1<=x2);
console.log(x1>=x2);
console.log(x1==x2 ? true : false);

/* logical */
var name="Javascript";
var age=15;

console.log( name=="javascript" && age === 15 ? true : false);
console.log( name=="javascript" || age === 15 ? true : false);
console.log( !(name=="javascript" && age === 15) ? true : false);

/* type */
var z1=10;
typeof z1;
z1 instanceof Number;

/* bitwise (JS uses 32 bit )*/
console.log(5 & 1);
console.log(5 | 1);
console.log(~5);
console.log(5 ^ 1);
console.log(5 << 1);
console.log(5 >> 1);
console.log(5 >>> 1); //zero fill right shift

// assignment operators can be extended to bitwise operators as well




