// get input
var todoInput = document.getElementById("userInput");
// get add button
var enterBtn = document.getElementById("enter");
// get list
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
// get modal
var errorModal= document.getElementById("errormodal");
// get X button
var Xbtn = document.getElementsById("closebtn");


// opening the "error validation modal"
function openmodal(){
    if (inputlength()<0){
        errorModal.style.display = "block";
    }
}

// closing the error modal
Xbtn.addEventListener("click",closemodal);
function closemodal(){
errorModal.style.display = "none";
}



function inputlength(){
    return todoInput.value.length;

}
function listlength(){
    return item.length;

}

function  addtodoItem(){
    // create the HTML element "li"
   var li = document.createElement("li");
   
//    transfer input field text to to "li" text
li.appendChild(document.createTextNode(todoInput.value));

// add "li" to "ul"
ul.appendChild(li);

// reset text input field
 todoInput.value ="";
 
//  strikethrough
function crossout(){
    li.classList.toggle("done");
}
// end strikethrough
    li.addEventListener("click", crossout);


//  delete button
var dbutton = document.createElement("button");

// foretext of the delete button = "X"
dbutton.appendChild(document.createTextNode("X"));

li.appendChild(dbutton);  // add X button to lst item
dbutton.addEventListener("click", deleteitem);   //  end X button

// class delete (dispalay:none)
function deleteitem(){
    li.classList.add("delete");
}
}


// call functions
 
function addlistitemCLICK(){
    // an empty text field dont create empty "list"
    if (inputlength()> 0){
        addtodoItem();
    }
}
function addlistKeypress(event){
if (inputlength()> 0 && event.which ===13){
    addtodoItem();
}
}
// listen for "enterbtn" click
enterBtn.addEventListener("click",addlistitemCLICK);
enterBtn.addEventListener("click",openmodal);

// listen for "enterbtn" keypress
todoInput.addEventListener("keypress",addlistKeypress);
