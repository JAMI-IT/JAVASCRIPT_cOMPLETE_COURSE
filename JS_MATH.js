let a=Math.PI
console.log(a);

let m=[Math.E,Math.PI,Math.SQRT2,Math.SQRT1_2,Math.LN2,Math.LN10,Math.LOG2E,Math.LOG10E];

let text=
''
for(let x in m)
{
    text +=m[x]+" _ ";

}
console.log(text);

let mat=[12.2,12.7,32,-4.7,4.4,4.5];
console.log(Math.round(mat[1]));

console.log(Math.ceil(mat[0]));

console.log(Math.floor(mat[3]));

console.log(Math.trunc(mat[1]));

console.log(Math.sign(mat[3]));

console.log(Math.pow(8,2));

console.log(Math.sqrt(64));

console.log(Math.abs(-4.7));

