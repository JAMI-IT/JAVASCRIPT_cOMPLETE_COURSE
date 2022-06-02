
let nam="Abdul Rehman Jami";

console.log("length of the String :"+nam.length)
//--------------------------(slice) it take two arguments start and end 
console.log(nam.slice(0,5));

//--------------------------If we take the -ve value in parameter it will start from end 
console.log(nam.slice(-13,-6));

//-------------------------if we take one argument in the parameter then it take rest of string after that place
console.log(nam.slice(4));

//-------------------------similarly in negative case 
console.log(nam.slice(-6));

//================================SUBSTRING=================================================
//------------------The Defrence is that it treat less then 0 value as a 0...................
let str="I am eating the vegetable am";
console.log(str.length);

//---------------------------
console.log(str.substring(5,11));

//---------------------------If we omit the second value then it will print rest of whole string
console.log(str.substring(6));

//----------------------------If the parameter are negative then the the position counts from the end of the string
console.log(str.substring(-3));

//---------------------------------Replave by default replace the first match------------------------------------------------
console.log(str.replace("eating","MEat"));

//---------------------------------to replace insestive we use case regular expression with /i
console.log(str.replace(/VEGETABLE/i,"MEat"));

//------------------------------------To repalce all match int string we use regular expression with /g(Global match)
console.log(str.replace(/am/g,"is"));

//--------------------------To upper case the whole string......................................
console.log(str.toUpperCase());

//--------------------------To lower case the whole string......................................
console.log(str.toLowerCase());

//---------------------------Concatination of two string..........................................
let fname="Abdul Rehmna ";
let lname="Jami";
console.log(fname.concat(" ",lname));

//---------------------------------Trim method can remove the white spaces from the both sides of the string=------
let space="                 Hellow  World             ";
console.log(space.trim());

//------------------------------------pading can murge the string with another string ---------------------
console.log(lname.padStart(10,"!"));

//-----------------------------------for pading of number we can first convert the no into string .............
let a=21;
let temp;
temp=a.toString();
console.log(temp.padStart(4,"a"));

//--------------------------------pad end method start at the end of the string ------------------------
console.log(temp.padEnd(7,"@"));


//------------------------=======Character at cmd use for the find of the word at that space................
console.log(lname.charAt(1));

//==============================charcode gives us the unque code of that later at that postion/...................
console.log(lname.charCodeAt(2));

//------------------------------------ECMA script allow the user to show the letter at that address/.........
console.log(lname[3]);

//----------------------------------split()  String can be converted into the array by using split method........
console.log(lname.split(""));

//================================@@@@@@@@@@@@@@@@@@@@========================

// // Extracting String Parts
// // There are 3 methods for extracting a part of a string:
// //     slice(start, end)
// //     substring(start, end)
// //     substr(start, length)

// // slice(start, end)
// let text="I am Student of UOG And MAin Campuse Of UOG";
// let text2="This is my last year at UOG";
// console.log(text.slice(6,14));
// console.log(text.slice(-12,-6));
// console.log(text.slice(7));

// //     substring(start, end)
// console.log(text.substring(5,13));

// // If you omit the second parameter, substr() will slice out the rest of the string.
// console.log(text.substr(5));
// console.log(text.substr(-5));

// // The replace() method replaces a specified value with another value in a string:
// console.log(text.replace("UOG","MARGHZAR"));

// // To replace case insensitive, use a regular expression with an /i flag (insensitive):
// console.log(text.replace(/MARGHZAR/i,"UOG"));

// // To replace all matches, use a regular expression with a /g flag (global match):
// console.log(text.replace(/UOG/g,"MARGHZAR"));

// // Converting to Upper and Lower Case
// // A string is converted to upper case with toUpperCase():
// // A string is converted to lower case with toLowerCase():
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// // JavaScript String concat()
// // concat() joins two or more strings:
// console.log(text.concat("   ",text2));

// // JavaScript String trim()
// // The trim() method removes whitespace from both sides of a string:
// // Example
// let a="                 My Name IS JAMI ";
// console.log(a.trim());

// // JavaScript String padStart()
// // The padStart() method pads a string with another string:

// console.log(a.padStart(14,"0"));

// // JavaScript String padEnd()
// // The padEnd(   ) method pads a string with another string:
// let x=4;
// let to=x.toString();
// console.log(to.padEnd(4,"0"));

// // JavaScript String charAt()
// // The charAt() method returns the character at a specified index (position) in a string:
// console.log(text.charAt(0));

// // JavaScript String charCodeAt()
// // The charCodeAt() method returns the unicode of the character at a specified index in a string:
// // The method returns a UTF-16 code (an integer between 0 and 65535).
// console.log(text.charCodeAt(0));

