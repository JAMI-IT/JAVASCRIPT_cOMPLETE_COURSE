// // JavaScript Functions
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

function show(){
    console.log("Function Run successfully ");
}
show();

function mathe(x,y){
    //console.log(x+y);
    return x+y;
}
let z=mathe(4, 6);
console.log("The X+Y="+z);

// Convert Fahrenheit to Celsius:

function temp(fahrenheit)
{
    return (5/9)*(fahrenheit-32);
}

let a= temp(200);
console.log("Temperature ="+a+"clecius");


