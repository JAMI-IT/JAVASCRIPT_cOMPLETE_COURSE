
    let jsonobj={
        name:"Jami",
        chanal:"Bole",
        friend:"Ali",
        food:"Zinger"
    }


console.log(jsonobj);
let jsonstr=JSON.stringify(jsonobj)
console.log(jsonstr);

console.log(jsonstr.replace('Bole','GEO'));
jsonobj=JSON.parse(jsonstr);
console.log(jsonobj);
