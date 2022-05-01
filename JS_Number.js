// JavaScript Numbers
// JavaScript has only one type of number. Numbers can be written with or without decimals.
let X=3.12; // A number with decimals
let y=4;// A number without decimals 
console.log(X,y);
// Extra large or extra small numbers can be written with scientific (exponent) notation:
let a=123e4;
let b=1231e-5;
console.log(a,b);

// Integer Precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let x = 999999999999999;   // x will be 999999999999999
let Y = 9999999999999999;  // y will be 10000000000000000 
console.log(x,Y);

// Floating point arithmetic is not always 100% accurate:
let m=(0.1+0.2)/2;
console.log(m);

// WARNING !!
// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.

let s=X+Y;
console.log(s);

// A common mistake is to expect this result to be 102030:

let l="20";
let sum=X+Y+l;
console.log(sum);

// A common mistake is to expect this result to be 102030:
let lx="100";
let ly="10";
let ld=lx/ly;
console.log(ld);
console.log(lx*ly);

// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let n=100/"apple";
console.log(n);

let ne=NaN;
console.log(typeof NAN);

// Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
let myno=2;
let text="";

while(myno !=Infinity)
{
    myno=myno*myno;
    text=text+myno;+"<br>";

}
console.log(text);

//zero also generate infinity
console.log(x/0);

let old=123;
let no= new Number(123);
console.log(typeof old,typeof no);

console.log(old==no);
console.log(old===no);
