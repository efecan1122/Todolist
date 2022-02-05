
let adToDoButton=document.getElementById("addToDo");
let toDoContainer=document.getElementById("toDoContainer");
let inputText=document.getElementById("inputText");
let clearToDo=document.getElementById("clearToDo");



adToDoButton.addEventListener("click",function(){

    
    let paragraph=document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML=inputText.value;
    inputText.value="";

    clearToDo.addEventListener("click",function(){
        paragraph.remove();
    })
    
    paragraph.addEventListener("dblclick",function(){
        paragraph.remove();
    })
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    })
}) ;