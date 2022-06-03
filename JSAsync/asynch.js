function disply(value)
{
    console.log(value);
}

async function myfunc(){return "hello";}
myfunc().then
(
    function(value)  {disply(value);},
    function(error)  {disply(error);}
);

//-----------------------------=If you want a normal response or not an error then you use the =-------------------
async function simplefn(){
    return "Ilove you";
}

simplefn().then
(
    function(value) {disply(value);}
)
