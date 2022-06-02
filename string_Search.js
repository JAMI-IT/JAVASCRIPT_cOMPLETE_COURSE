let text="I am in the professional in java script";

//--------------===-===============lastindexof return thee last index of a specified text------------
console.log(text.lastIndexOf("java"));

//-------------------------------both accept the second index in the parameter 
console.log(text.indexOf("am",14));

//-------------------------------serach operator .................................
console.log(text.search("script"));

//-------------------------------match operation------------------------------------
console.log(text.match(/in/g));

//--------------------------------for global match---------------------------------
console.log(text.match(/in/gi));

//---------------------------------include-----------------------------------------
console.log(text.includes("script"));

//---------------------------------start with--------------------------------------
console.log(text.startsWith("I"));


// // JavaScript Search Methods
// // String indexOf()
// // String lastIndexOf()
// // String startsWith()
// // String endsWith()

// // JavaScript String indexOf()
// // The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
// let text="I am Student Of am UOG";
// console.log(text.indexOf("UOG"));

// // JavaScript String lastIndexOf()
// // The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// console.log(text.lastIndexOf("UOG"));

// // Both methods accept a second parameter as the starting position for the search:
// console.log(text.indexOf("uOG",15));

// // The lastIndexOf() methods searches backwards (from the end to the beginning),
// //  meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
// let b="Sub Campus MARGHZAR";
// //let a=text.split("");
// //console.log(a);
// //Repat Comad 
// console.log(text.repeat(2));

// //slice
// console.log(b.slice(2,5));

// //substr slelect only those word that or at that address which wepass in parameter
// console.log(b.substring(2,8));

// //tostring
// let z=12;
// let y=z.toString();

// console.log(y+30);
// //value 
// console.log(text.valueOf());

