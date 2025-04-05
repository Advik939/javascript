//create objects.....key-value pair
let person={
    name:"John",
    age:30,
    city:"New york"
}
console.log(person);//printing

//loops for-in
for(let i in person){
    //console.log(i);//key
    //console.log(person[i]);//value
    console.log(i,person[i]);//both
}

//access-> bracket[],dot . notation
console.log(person.name);//john
console.log(person.age);//30
console.log(person["city"]);//New york

//update
person.name="Abc"
person.age=20
console.log(person);
//add
person.mobile="xxx-xxxx-xxx"
console.log(person);

//delete
delete person.city
console.log(person);

//object in object university(student)
let university={
    name:"parul",
    place:"gujarat",
    student:{
        stud_name:"abc",
        stud_marks:98,
        stud_roll:90909090
    }}