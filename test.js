//************1**************** */
//a)


const a={
   add : [
        {name:"ali",age:200},
        {name:"shah",age:2031},
        {name:"arslan",age:2038},
        {name:"ajmi",age:2033},
        {name:"shah",age:2034}
    ]
    };


    // a)Identify the piece of code is it array or object

    let t=typeof a;
   

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


// c)calculate the maximum number of age in this piece of code


var max=a.add[0].age;
for (let i = 0; i < a.add.length; i++) {
    var text;
    if (a.add[i].age>max) {
        max=a.add[i].age;
    }
}
console.log(max);


// e)write a object and push this object into this piece of code

let p={name:"Humyu",age:20};

a.add.push(p);
console.log(a.add);

// f)write a piece of code and changes the age where index is 3

let c={name:"shan",age:99};
a.add.splice(2,0,c);
console.log(a.add);
