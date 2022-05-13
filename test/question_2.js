
const a={
    add : [
         {name:"ali",age:200},
         {name:"shah",age:2031},
         {name:"arslan",age:2038},
         {name:"ajmi",age:2033},
         {name:"shah",age:2034}
     ]
     };

       // b)print out the name names which is named as shah

    
   for (let i = 0; i < a.add.length; i++) {
        
    let text="";

if (a.add[i].name=="shah") {
    //console.log(a.add[i].name);
    text += a.add[i].name+"  ";
    // text +=a.add[i].age;
     console.log(text);
}
}