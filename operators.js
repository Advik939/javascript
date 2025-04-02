//Arithmetic operator =,-,*,/,%
let a=10
b=20
let c="10"
let d="str"
console.log(a+b);//30
console.log(a-b);//-10
console.log(a*b);//200
console.log(a/b);//0.5
console.log(a%b);//10

console.log(a+c);
console.log(a-c);
console.log(a*c);
console.log(a/c);
console.log(a%c);

console.log(a+d);//10str
console.log(a-d);//NAN


//relational operator <,>,<=,>=,===,!==
console.log(2<4);//true
console.log(2>4);//false
console.log(2<=4);//true
console.log(2>=4);//false

//===,!==,==,!=,

let data=12
let data1='12'
console.log(data==data1);//12==12
console.log(data===data1);//12(num)==12(str)


//logical operators &&,||,!
console.log("logical operators");
console.log(true  && false);//false
console.log(false && false);//false
console.log(true && true);//true
console.log(true || false);//true
console.log(false||false);//false
console.log(!true);//false


//BITWISE &,|,^(XOR),~(NOT)
console.log("Bitwise operators");
let num1=12
let num2=5
console.log(num1&num2);//4
console.log(num1|num2);//13
console.log(num1^num2);//9
let num3=10
console.log(~num3);//-11                                  
//n => ~n=> -(n+1)

//=>XOR=>
// 0^0=>0 0^1=>1 1^0=>1 1^1=>0 XOR
//0&0=>0 0&1=>0 1&0=>0 1&1=>1 AND
//0|0=>0 0|1=>1 1|0=>1 1^1=>1 OR


//Left shift=> <<
//right shift=> >>
console.log("Rotational operators");
let num4=3
let num5=5
console.log(num4<<num5);//96
//a<<b=>a*2^b=>3 * 2^5=>32*3
console.log(num4>>num5);//0
//a<<b=>a/2*b=>3/2^5=>3/32=0                                       

//unary oprtr
let number=10
console.log("unary oprts");
console.log("Pre increment & decrement")
console.log(++number);//11
console.log(--number);//10

console.log("Post increment & decrement");
console.log(number++);//10 mem(11)
console.log(number--);//11 mem(10)

let n=5
console.log(n++ + --n+ n-- +n++ - n-- + ++n -n--)//14

console.log("Math methods------");
console.log(Math.round(2.4));//2 //round to nearest integer
console.log(Math.round(2.5));//3

console.log(Math.ceil(2.1));//3 round up to next num
console.log(Math.ceil(2.0));//2

console.log(Math.floor(2.9))//2 round down to next num
console.log(Math.floor(2.5))//2

console.log(Math.trunc(2.8))//2 only integer part
console.log(Math.trunc(2.535446))//2

console.log(Math.sign(-4));//-1
console.log(Math.sign(0));//0
console.log(Math.sign(9));//1

console.log(Math.pow(25,2));//625

console.log(Math.sqrt(169));//13

console.log(Math.abs(-25));//25

console.log(Math.max(12,3,4,56,78,9));//78
console.log(Math.min(12,3,45,2,3,125));//2

console.log("Random number---");
console.log(Math.trunc(Math.random()*100));//0 to <1
//0 to 99

let num=7164483836443643864368n
console.log(typeof(num));//bigint

