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
console.log(n++ + --n+ n-- +n++ - n-- + ++n -n--)