// // Splicing and Slicing Arrays
// // The splice() method adds new items to an array.
// // The slice() method slices out a piece of an array.

// JavaScript Array splice()
// The splice() method can be used to add new items to an array: 

let person=["Jami","Ehtisham","Shahjahan","Hukayu"];
let teacher=["Farhat","Mandi","DGkhna"];
person.splice(2,0,"Ghouse","Ali");
console.log(person.toString());

person.splice(2,4);
console.log(person.toString());

// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"):

person.slice(2);
console.log(person.toString);

console.log(teacher.slice(2,3).toString());




