// Arithmetic operators perform arithmetic on numbers (literals or variables).

// Operator 	Description
// ** 	Exponentiation (ES2016)
// % 	Modulus (Remainder)
// ++ 	Increment
// -- 	Decrement

let x =10;
let y=5;
let z;

// The modulus operator (%) returns the division remainder.
z=x%y;
console.log(z);

// The increment operator (++) increments numbers.
x++;
console.log(x);

// The decrement operator (--) decrements numbers.
y--;
console.log(y);

// The exponentiation operator (**) raises the first operand to the power of the second operand.
z=y**2;
console.log(z);

// x ** y produces the same result as Math.pow(x,y):
z= Math.pow(x,2);
console.log(z);

// Operator precedence describes the order in which operations are performed in an arithmetic expression
z= 101 - 50 * 2;
console.log(z);

