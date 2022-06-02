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
const dp1=new Date(dp);
console.log(dp);
console.log(dp1);

//------------------Get date from youser------------
const dg=new Date();
dg.getTime();
console.log(dg.toISOString());

//------------------get full year method-------------
const dy=new Date();
dy.getFullYear();
console.log(dy);

//----------------get full month---------------------
const dm=new Date();

console.log(dm.getMonth());

//--------------Get Day-----------------------------
const dd= new Date();
console.log(dd.getDate());

//---------------get houre--------------------------
const gh=new Date();
console.log(gh.getHours());

//-----------you can use the the array to get the day name of that day 0----------------
const days=["Sunday","Monday","Tusday","WEdnesday","Thurday","Friday","Sturday"];
const gd=new Date();
console.log(days[gd.getDay()]);

//---------------------Sete full year------------------
const ds=new Date();
console.log(ds.setFullYear(2000,6,13));

//------------------Set ful month--------------------
const sm=new Date();
console.log(sm.setMonth(11));

//-----------------set full hour------------------------
const fm=new Date();
console.log(fm.setHours(24));


