
(
    function(){
        console.log("Function Call Itself");
        console.log("hellow");
    }
)();

const x= (a,b)=> a*b;
console.log(x(3,2));

const x1= (a,b)=>{
    console.log("Addition of two Variable");
    return a+b;
}

console.log(x1(5,5));

const arr=[12,31,11,423,12,244,65,23];
//var fun=maxim(arr)
var max=0;
// function maxim(va)
// {
    for (let i = 0; i < arr.length; i++) 
    {

        if(arr[i]>max)
        {
            max=arr[i];
            console.log(max);
        }
    }
// }

let su=[2,3,1,4,5];

var sum=0;
for (let a = 0; a < su.length; a++) {
    sum=sum+su[a];
}
console.log("Sum of Arrays :");
console.log(sum);
