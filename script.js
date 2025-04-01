console.log("From external script");
//single line comment
     /*
//multi line comment
     */
//dynamically typed language
   //declaration statements
   var a;//declaration
   a=10;//initiialization
   console.log(a)//10

   //var a=10->> declaring & initializing
a=12//updated -> assigning
console.log(a)//12

var a=10
var a=20//redeclaring & reinitializing
console.log(a);
a=25;
console.log(a);//re-assigning


//global scope
{
    var a=40
    console.log("inside block"+a);//40
}
console.log("inside block"+a);//25

//RE-declaration re-initialization
//re-assignment is possible in var
//var-Global scope

//let->onlr re-assigning/updation is possible
let b=10;
console.log(b);//
b=20
console.log(b);//

//scope->>block scope
{
    let b=30
    console.log("Inside the block"+b);//30
}
console.log("outside the block"+b);//20


//const
const pi=3.142
console.log(pi);//3.142

//scope->block scope
{
    const pi=2.8
    console.log("Inside"+pi);//2.8
}
console.log("outside"+pi);//3.142

{
    z=20
    console.log(z);//20
}
console.log(z);//20

//only declaration->NO
//re-declaring & re-initialization->No
//re-assignment->NO
//scoping->block


//dynamic typing
let x=10
console.log(x);//10->int
x=10.3
console.log(x);//10.3->float
x="Advik"
console.log(x);//10->string

//hoisting->First initialize &
//then declare
//var - hoisting=> Possible
p=10//initializg
var p;//declaring
console.log(p);

//let-hoisting ->Not possible
q=20//initialization
let q;//declaring
console.log(q);//error

//const-hoisting->Not possible

let num=10
console.log(typeof(num));//number
let f_num=10.9
console.log(typeof(f_num));

