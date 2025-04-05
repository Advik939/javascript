//arrays
let numbers=[1,"str",true,4.90,5];
console.log(numbers);

for(let x of numbers){
    console.log(x);
}
//access
console.log(numbers[0]);//1
console.log(numbers.length);//5
console.log("length of array");
//updating
console.log("Updating array");
numbers[0]=10;
console.log(numbers);
 
let arr=[1,2,3,4,5,6,7,8,9]
//delete splice(index,no_of_elements)
console.log("splice() method");
let arr2=arr.splice(3,2);
//(index,no_of_elements)
console.log(arr);//1,2,3,6,7,8,9

//delete & replace
//(index, no_of_elm , replaced_elem)
arr.splice(2,1,2)
console.log(arr);//1,2,2,6,7,8,9

//(index,no_of_elm,replaced_elem)
arr.splice(4,0,2,9,10)
console.log(arr);//[1, 2, 2, 6, 2, 9, 10, 7, 8, 9]

let arr1=[1,2,3]
console.log("concatenation of arrays");
console.log(arr.concat(arr1));//merged array
;
//push & pop mthods
//let arr1=[1,2,3]
arr1.push(10)//add at last
console.log("push method")
console.log(arr1);//1,2,3,10
arr1.push(100)//1,2,3,10,100
arr1.pop()//delete from last
console.log(arr1);//1,2,3,10

//shift(delete) & unshift(add) methods
//arr1=1,2,3,10
arr1.shift()//delete from first
console.log(arr1);//2,3,10
arr1.unshift(10)//add at first
console.log(arr1);//10,2,3,10
//reverse
arr1.reverse()
console.log("reversed arr"+arr1);//10,3,2,10 
// spread oprtr =>....
let arr8=[...arr,...arr1]//merged array
console.log(arr8);
