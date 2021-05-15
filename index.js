//taking mouse movement
const container= document.querySelector(".container");
const box= document.querySelector(".box");
const topButton=document.querySelector(".top-button");
const rightButton=document.querySelector(".right-button");
const bottomButton=document.querySelector(".bottom-button");
const leftButton=document.querySelector(".left-button");

topButton.addEventListener("click",e =>{
    box.style.transform= `rotateX(90deg)`;
})
rightButton.addEventListener("click",e =>{
    box.style.transform= `rotateY(${90+0}deg)`;
})
bottomButton.addEventListener("click",e =>{
    box.style.transform= `rotateX(-90deg)`;
})
leftButton.addEventListener("click",e =>{
    box.style.transform= `rotateY(-90deg)`;
})
