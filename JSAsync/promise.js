setTimeout(function(){myFunction(console.log("Ilove you"))},3000);

function myFunction() {
  console.log("Hellow world");
}


function disply(text)
{
  console.log(text);
}
let mypromis =new Promise(
function(myresovle,myreject)
{
    let x=0;
    if (x==0)
    {
      myresovle("OK");
    }
    else{
      myreject("Error");
   }
   
  }
   );

    mypromis.then(
      function(value){disply(value)},
      function(error){disply(error)}
    )




