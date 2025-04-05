let str="Good afternoon,!"
console.log(str)
console.log(str.length);//16
//index-of(first index)
console.log("Index of method");
console.log(str.indexOf("o"));//1
console.log(str.indexOf("A"));//-1
console.log(str.indexOf("noon"));//10
//str="Good afternoon,!"
console.log("Last Index Method");
console.log(str.lastIndexOf("o"));//12
console.log(str.lastIndexOf("n"));//13

//search-->returns index of first
//occurence of the specified value
//str="Good afternoon,!"
console.log("Search method");//1
console.log(str.search("o"));//-1
console.log(str.search("O"));//5
console.log(str.search("after"));
//includes -> returns true if the value is found or false
console.log("Includes method");
    //str="Good afternoon,!"
console.log(str.includes("o"));//true
console.log(str.includes("@"));//false

//startsWith()
console.log("Starts with method");
//str="Good afternoon,!"
console.log(str.startsWith("g"));//false
console.log(str.startsWith("Go"));//true
console.log(str.endsWith("g"));//false

//tolowercase()
//str="Good afternoon,!"
console.log("To lowercase method");
console.log(str.toLowerCase());
console.log(str.toUpperCase());


//trim()
let str1="  Par  ul  "
console.log(str1);
console.log((str1.length));
console.log(str1.trim());
let trimstr=str1.trim()
console.log(trimstr);
console.log(trimstr.length);//7

//str to array
let str2="Hello, world"
console.log(str2);
console.log(str2.split(""));

console.log(str2.split(""));

//arr to string
//join

//charAt()=>return char at index
//let str2="Hello, world"
console.log("char at index");
console.log(str2.charAt(2))
console.log(str2.charAt(6))

//charcode
console.log("char code");
console.log(str2.charCodeAt(2));//1-108
console.log(str2.charCodeAt(6));//32

//slice()
console.log("slice method");
// let str2="Hello, world"
console.log(str2.slice(0,5));//Hello
console.log(str2.slice());//Hello, world
//starting index,ending-1
console.log(str2.slice(5));//, world
console.log(str2.slice(-1));//d
console.log(str2.slice(-5));//world
console.log(str2.slice(-5,-1));//worl
console.log(str2.slice(-1,-5));//nothing

//substring()->will not work with -ve index
//let str2="Hello, world"
console.log("substring methods");
console.log(str2.substring());//org str
console.log(str2.substring(2));//llo, world
console.log(str2.substring(2,5));//llo
console.log(str2.substring(-1));//org str
console.log(str2.substring(-1,-5));//ntg
console.log(str2.substring(-5,-1));//ntg
console.log(str2.substring(-5));//org string

//substr()
// let str2="Hello, world"
console.log("Substr method");
console.log(str2.substr());//org str
console.log(str2.substr(1));//ello, world
//starting index,no of char
console.log(str2.substr(1,5));//ello,
console.log(str2.substr(3,7));//lo, wor
console.log(str2.substr(7,20));//world
console.log(str2.substr(7,0));//ntg
console.log(str2.substr(-7));//, world
console.log(str2.substr(-7,8));//, world

