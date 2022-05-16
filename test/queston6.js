const a={
    add : [
         {name:"ali",age:200},
         {name:"shah",age:2031},
         {name:"arslan",age:2038},
         {name:"ajmi",age:2033},
         {name:"shah",age:2034}
     ]
     };



// f)write a piece of code and changes the age where index is 3

let c={name:"shan",age:99};
a.add.splice(2,0,c);
console.log(a.add);
