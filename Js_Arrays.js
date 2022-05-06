// An array is a special variable, which can hold more than one value:

const car=["BMW","Fortuner","AUDI"];
console.log(car);

// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";
// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
// The solution is an array!
// An array can hold many values under a single name, and you can access the values by referring to an index number.
car[0]="Toyota"

// New element can also be added to an array using the length property:
car[car.length]="Bhughati";

// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:
car.push("Audi")

// const has block level scope

{
    const car=["Hundai","Crolla","Colla"]
    console.log(car);
}
console.log(car);
// You can also create an array, and then provide the elements:

const home=[];
home[0]="kylane Home";
home[6]="Jami";

console.log(home);


// Objects use names to access its "members". In this example, person.firstName returns John:
// Object:
const person={F_Name:"Abdul Rehmnan",L_Name:"Jami"};
console.log(person.F_Name);

// The length Property
// The length property of an array returns the length of an array (the number of array elements).
console.log(car.length);
console.log(car.sort());

const point=new Array(40,100,23);
console.log(point);
console.log(typeof point);
console.log(Array.isArray(point));
console.log(point instanceof Array);


