const a={
    add : [
         {name:"ali",age:200},
         {name:"shah",age:2031},
         {name:"arslan",age:2038},
         {name:"ajmi",age:2033},
         {name:"shah",age:2034}
     ]
     };
        // c)calculate the maximum number of age in this piece of code
var max=a.add[0].age;
for (let i = 0; i < a.add.length; i++) {
    var text;
    if (a.add[i].age>max) {
        max=a.add[i].age;
    }
}
console.log(max);