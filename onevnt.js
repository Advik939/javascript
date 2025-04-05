document.getElementById("btn").onclick=()=>{
    alert("btn clicked")
}
document.getElementById('dbtn').ondblclick=()=>{
    alert("Dbl clicked")
}
document.getElementById("input").onchange=()=>{
    alert("input changed!")
}
document.getElementById("sbmt").onsubmit=()=>{
    alert("Form submitted")
}

//innerhtml & textcontent
let in_htm=document.getElementById('head')
in_htm.textContent="This is heading tag"
console.log(in_htm);

let in_html=document.getElementById('inhtml')
in_html.innerHTML="<i>This is inner html</i>"
console.log(in_html);