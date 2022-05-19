

const mymap=new Map();

const key1="JAMI",key2={},key3= function(){};

mymap.set(key1,"THis Is key one ");
mymap.set(key2,"THis Array ");
mymap.set(key3,"THis is Function");
console.log(mymap);

let value=mymap.get(key1);
console.log(value);

console.log(mymap.get('JAMI'));

console.log(mymap.size);

const my_MAP=new Map(
[
["apple",500],
["Orange",200],
["Pinapple",300]
]
);


let text1="";
my_MAP.forEach(function(value,key){
    text1 +=key +" = "+value;
})
console.log(text1);

my_MAP.delete("apple");
console.log(my_MAP.has("apple"));


