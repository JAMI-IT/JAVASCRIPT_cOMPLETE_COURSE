const a={
    add : [
         {name:"ali",age:200},
         {name:"shah",age:2031},
         {name:"arslan",age:2038},
         {name:"ajmi",age:2033},
         {name:"shah",age:2034}
     ]
     };

     
// d)re arrange the array in assending as well as dessending order

// var A=a.add[0].age;
// for (let i = 0; i < a.add.length; i++) {
//     if (a.add.age<A) {
       
    
//     for (let i = 0; i < a.add.length; i++) {
     
//         if (a.add.age<A) {
//             A=a.add[i];
//         }
//          }
//     }
// }

// console.log(A);

let s=a.add.sort();

console.log(s);

