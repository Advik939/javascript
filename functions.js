//block of code writeen @ 1
// place to perform specific tsk=>fun

/*
function fun_name(...para.....){
fun_body
return
}
fun_name(argu)//calling fun

*/

//0 para... & no return
function greet(){
    console.log("Good morning");
}
greet()//fun_call

//prmtrzd & no return
function greet_p(name){
    console.log("Hello"+name)
}
greet_p("Abc")

//no prmtr but return
function add(){
    //no prmtr but return
    let a=10
    let b=20
    return a+b
}
let res=add()
console.log(res);
// or ->>console.log(add())

//par and return
function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(45, 76);
console.log("Sum obtained from the function: " + result);


//anonymous fun

let fun=function(a,b){
    console.log("From anonymous fun");
    return a *b
}
console.log(fun(3,5));

//arrow function
let arr_fun=()=>{
    console.log("from arrow function");
}
arr_fun()
//prmtr and return 
let mul=(a,b)=>{
    return a*b
}
console.log(mul(2,9));

//square
let sq=(x)=>x*x//implicit return
console.log(sq(7));//49

function modulus(a,b){
    //callback fun
    console.log(a%b)//2%9=2
}
console.log("taim lagega");
setTimeout(modulus,2000,2,9)

//for-each
let arr=[1,2,3,4,5]
console.log("For each loop");
arr.forEach((num)=>{
    console.log(num);
})
