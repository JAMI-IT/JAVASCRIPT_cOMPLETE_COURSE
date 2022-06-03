

async function jami(){
console.log("Starat of Asynch loop");

    const response= await fetch ("https://github.com/JAMI-IT");
    const users= await response.json();

    return users;
}

let c=jami();

console.log(c);

c.then(dara => console.log(data))
console.log("Last Line ");

