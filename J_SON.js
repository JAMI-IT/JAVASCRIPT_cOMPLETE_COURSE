
    let jsonobj={
        name:"Jami",
        chanal:"Bole",
        friend:"Ali",
        food:"Zinger"
    }


console.log(jsonobj);
console.log("This can convert the array into string");
let jsonstr=JSON.stringify(jsonobj)
console.log(jsonstr);

console.log(jsonstr.replace('Bole','GEO'));

jsonobj=JSON.parse(jsonstr);
console.log(jsonobj);

