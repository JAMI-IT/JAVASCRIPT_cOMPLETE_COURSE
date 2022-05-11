// JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.

const no=[21,11,23,41,12.55];
let text="";
no.forEach(myfunction);


function myfunction(value,index,array)
{
    text +=value;
    console.log(value);
}

// Note that the function takes 3 arguments:
//     The item value
//     The item index
//     The array itself

// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
// This example multiplies each array value by 2: 
const str=["Jami","Shahjahan","Humayu","Gujjar"];
const no1=[2,5,3,8,7];
const no2=no1.map(myfunc);
console.log("Teh multiplee of 2");
console.log(no2.toString());
function myfunc(value,index,array) {

    return value*2;
}

const no3=no1.filter(result);
console.log("The No greater and equal to the 5");
console.log(no3.toString());
function result(value,index,array) {
    return value>=5;
    
}

const no4=no1.reduce(reducce);
console.log("The reduce Method");
console.log(no4);
function reducce(total,value,index,array) {
    return total + value;
}

const no5=no1.reduceRight(reducer);

console.log("THe Reduce right method");
console.log(no5);
function reducer(total,value,index,array) {
    return total*value;
}


console.log("The every no is over to 2");

const no6=no1.every(over);
console.log(no6);
function over(value,index,array) {
    if (value>1) {
        console.log("The all vaue is above then 2 :");
    }
    else
    {
        console.log("The all valuue is no greter then 2");
    }

}


// JavaScript Array some()
// The some() method check if some array values pass a test.
// This example check if some array values are larger than 18:

const no7=no1.some(soom);
console.log("THE USE OF SOME COMD");
console.log(no7);

function soom(value,index,array) {

    return value>2;

}

let s=str.indexOf("Humayu")+1;
console.log(s+" :  THe index Of humyau");

s=str.lastIndexOf("Humayu")+1;
console.log(s+":  The LAST INDEX OF humyu");

let no8=no1.find(fin);
console.log(no8);
function fin(value,index,aray) {
    return value>7;
}

no8=no1.findIndex(FIND);
console.log(no8+1);
function FIND(value,index,array) {
    return value>2;
}

const f=str.entries();
for (let index = 0; index < array.length; index++) {
    const element = str[index];
    console.log(element);
}
