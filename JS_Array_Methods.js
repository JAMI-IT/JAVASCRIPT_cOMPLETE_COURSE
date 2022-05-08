// Converting Arrays to Strings
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
const fruit=["Banana","Apple","Pineapple","Mango"];
const vege=["Jinger","Potato","Onion"]


// The push() method adds a new element to an array (at the end):
console.log(fruit.push("KIWI"));

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: 
console.log(fruit.unshift("Orange"));

console.log(fruit.toString());

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

console.log(fruit.join(" * "));

// The pop() method returns the value that was "popped out":
console.log(fruit.pop());

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(fruit.shift());

//Delete
console.log(delete fruit[0]);
console.log(fruit.toString());

// The concat() method creates a new array by merging (concatenating) existing arrays:
const my_shop=fruit.concat(vege);
console.log(my_shop.concat("caret").toString());

// The splice() method can be used to add new items to an array: ?


