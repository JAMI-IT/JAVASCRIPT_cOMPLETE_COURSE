const arr=[21,11,2,4,22];
var m=0;
maxi(arr);

function maxi(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i]>m) {
            m=params[i];
        }
    }
    return m;
}

console.log("Maximum Value In Array lsit :");
console.log(m);
console.log("--------------------------------");

const s=[3,2,4,5,6];
console.log("The Sum Of Array :");
console.log(summ(arr));
var total;

console.log("--------------------------------");


function summ(params) {
    var sum=0;

    for (let a = 0; a < params.length; a++) {
       sum=sum+params[a];
       
    }


    return sum;
}
