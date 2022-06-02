//Number Methods and Properties
//Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).
//But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

// The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.
// A parameter defines the numberlet x of characters behind the decimal point:

let x=786;
console.log(x.toString(),(786).toString(),(700+86).toString);

// The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.
// A parameter defines the number of characters behind the decimal point:

let y=7.786;
console.log(y.toExponential(2));

console.log(y.toFixed(6));

console.log(y.toPrecision(4));

// Converting Variables to Numbers
// There are 3 JavaScript methods that can be used to convert variables to numbers:
//     The Number() method
//     The parseInt() method
//     The parseFloat() method
// These methods are not number methods, but global JavaScript methods.

console.log(Number(true),Number(false),Number("10"),Number("  10.33"),Number("10,22"));

let d=new Date("1970-01-01");
console.log(Number(d));

console.log(Number(new Date("1970-01-01")));

// The parseInt() Method
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

console.log(parseInt("-10"+"10.21"),parseInt("year 10"),parseFloat("10.21"));
let a=Number.MIN_VALUE;
let z=Number.MAX_VALUE;
let p=Number.POSITIVE_INFINITY;
let n=Number.NEGATIVE_INFINITY;
let na=Number.NaN;
console.log(a,z,p,n,na);
console.log(1/0,-1/0,1/"jami");
console.log(x.MAX_VALUE);


let ax=new Number(500);
let bx=new Number(500);
console.log(ax===bx);

//-----------------------------to string method ---------------------------------
let no=21;
no.toString();
console.log(no);
console.log((100+32).toString());
console.log(no.valueOf());

let az=Number.MAX_VALUE;
console.log(az);