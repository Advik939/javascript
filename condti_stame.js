//camelCase->>userName (def)
//PascalCase->>UserName
//snake_case->>user_name

//conditional statement
//if , if-else 
/*
if (condtn){


} else{

}    stat=> if age<18 print not adult
*/
//let age1=prompt("Enter ur age")//user input
let age=25;
if(age<18){
    console.log("not an adult");
} else{
    console.log("adult");
}

//num>0=> +ve
//num<0=> -ve
//zero

let num=0
if(num<0){
    console.log("Negative num");
}
else if(num===0){
    console.log("num is zero");
}
else{
    console.log("Positive num");
}

//switch
/*
switch(expression){
case value 1:
    //code to be executed
break
case value 2:
    //code to be executed
break 
default:
    //code
    break
    } */

let day=1
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day")
        break;
}


//ternary operator=>3 operands 2 operator
//condn ? true(stat) : false(stat)
// num is even or not

let numb=20
let ans=(numb%2==0)?"Even":"odd"
console.log(ans);

//loops->for,while,do-while
//for(start end increment/decrement){
//   //code
// }
//1 to 10

for(let i=0;i<=10;i++){
    console.log(i);
}

//while loop
//while(condition){
//  //code
// } even numbers......
console.log("while loop")
let i=2
while(i<=10){
    console.log(i);
    i+=2   //i=i+2
}

/* do-while loop
do{
//code
  }
while() // table of 3 */

console.log("do-while-loop");
let j=1
do{
console.log(j*3);//
j++
}
while(j<=10);





