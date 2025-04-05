//document object model
document.body.style.backgroundColor="pink"
//on console
console.log("Hello")
//on page
document.write("<h1>hello</h1>")

//getElementById return elemnt
/* <h1 id="h1">Heading</h1> */
let head=document.getElementById("h1")
console.log(head);
head.style.color="red"

//elemntbycls=>html collection
let gtcls=document.getElementsByClassName("cls")
console.log(gtcls);
gtcls[0].style.backgroundcolor="red"
gtcls[1].style.backgroundColor="brown"
for(let i=0; i<gtcls.length;i++){
    gtcls[i].style.color="gold"
}

//tag name
let tg=document.getElementsByTagName("h1")
console.log(tg);
tg[0].style.textDecoration="underline"
//use loop
for(let i=0;i<tg.length;i++){
    tg[i].style.textDecoration="underline"

}

//query selector
let q=document.querySelector("h4")
console.log(q);
q.style.color="green"


//queryall
let qa=document.querySelectorAll("h2")
console.log(qa);
qa[0].style.color="aqua"
for(let i=0;i<qa.length;i++){
    qa[i].style.textDecoration="underline overline"
}

//getElementById return elemnt
//elmntbycls=>html collection
//queryselector=>html elmt
//tag name=>html collection
//queryall=>nodelist


//create element with JS
let newh1=document.createElement("h1")
newh1.textcontent="new heading"
// <h1>new heading</h1>
document.body.appendChild(newh1)

//create input and attributes
let newinp=document.createElement("input");
newinp.type="text"
newinp.placeholder="enter ur name"
document.body.appendChild(newinp)
