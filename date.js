let d= new Date();
console.log(d);

let d1= new Date(2000,6,13,10);
console.log(d1.toISOString());

const d2=new Date("October 13 , 2012 11:13:00");
console.log(d2.toDateString());

let d3=new Date();
console.log(d3.toUTCString());

//-----------------=-----------------------=Date formate--------------=
//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

let df=new Date("2019-6-20");
console.log(df.toUTCString());

let df1=new Date("2000");
console.log(df1.toDateString());

//----------Short  Dates-----------------
let df2=new Date("7/13/2000");
console.log(df2.toDateString());

//----------Long Dates-----------------
let dl=new Date("January ,25,2018");
console.log(dl.toDateString());

//-----------------parse date-------------
let dp=Date.parse("January ,25,2018");
console.log(dp);

