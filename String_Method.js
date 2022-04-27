// Extracting String Parts

// There are 3 methods for extracting a part of a string:

//     slice(start, end)
//     substring(start, end)
//     substr(start, length)

// slice(start, end)
let text="I am Student of UOG And MAin Campuse Of UOG";
let text2="This is my last year at UOG";
console.log(text.slice(6,14));
console.log(text.slice(-12,-6));
console.log(text.slice(7));

//     substring(start, end)
console.log(text.substring(5,13));

// If you omit the second parameter, substr() will slice out the rest of the string.
console.log(text.substr(5));
console.log(text.substr(-5));

// The replace() method replaces a specified value with another value in a string:
console.log(text.replace("UOG","MARGHZAR"));

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log(text.replace(/MARGHZAR/i,"UOG"));

// To replace all matches, use a regular expression with a /g flag (global match):
console.log(text.replace(/UOG/g,"MARGHZAR"));

// Converting to Upper and Lower Case

// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// JavaScript String concat()

// concat() joins two or more strings:
console.log(text.concat("   ",text2));

// JavaScript String trim()

// The trim() method removes whitespace from both sides of a string:
// Example
let a="                 My Name IS JAMI ";
console.log(a.trim());

// JavaScript String padStart()

// The padStart() method pads a string with another string:

console.log(a.padStart(14,"0"));

// JavaScript String padEnd()

// The padEnd() method pads a string with another string:
let x=4;
let to=x.toString();
console.log(to.padEnd(4,"0"));

// JavaScript String charAt()

// The charAt() method returns the character at a specified index (position) in a string:
console.log(text.charAt(0));

// JavaScript String charCodeAt()

// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(text.charCodeAt(0));

