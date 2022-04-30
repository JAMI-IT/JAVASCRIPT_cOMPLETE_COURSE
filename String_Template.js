// Synonyms:
// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax

// Back-Tics Syntax

// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

let text=`IAm A student of the UOG`;

// Quotes Inside Strings
// With template literals, you can use both single and double quotes inside a string:
let text1=` I'am a student og "UOG"`;
console.log(text1);


// Multiline Strings
// Template literals allows multiline strings:
let text2=`Paksitan 
is Islamic
Republic State`;
console.log(text2);
// Interpolation
// Template literals provide an easy way to interpolate variables and expressions into strings.
// The method is called string interpolation.
// The syntax is:
 
let fname=`Abdul Rehman`;
let Lname=`Jami`;

let name=`My Name Is ${fname} ${Lname}`;
console.log(name);

// Expression Substitution

// Template literals allow expressions in strings:
let unit=10;
let price=0.24;

let bill=`TOTAL: ${(unit*(1+price).toFixed(2))}`;
console.log(bill);

// HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log(html);


