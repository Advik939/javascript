let div=document.getElementById("div");
let btn=document.getElementById('btn');
console.log(div);
console.log(btn);

btn.addEventListener("mouseover",()=>{
div.style.backgroundColor="gold"
div.style.color="white"
div.style.fontSize="30px"
div.style.fontFamily="cursive"
div.style.padding="20px"
div.textContent="Welcome to IPL 2025 updates"
btn.style.backgroundColor="red" 
}
)

btn.addEventListener('click',()=>{
div.style.backgroundColor="pink"
div.style.color="purple"
div.textContent="CSK VS RCB"
btn.textContent="clicked"

})

btn.addEventListener("mouseout",()=>{
div.style.backgroundColor="green"
div.style.color="gold"
div.textContent="ee sala cup namde"
})

document.addEventListener('keyup',(event)=>{
    console.log(event.key);
})