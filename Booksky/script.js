//selecting popupbox,overlay button,cancel
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.querySelector("#add-popup")
var cancel=document.querySelector("#cancel-popup")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})
 cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

 })
 //select container,add-book,book title,author,des
 var container=document.querySelector(".container")
 var addbook=document.getElementById("add-book")
 var booktitleinput=document.getElementById("book-title-input")
 var bookauthorinput=document.getElementById("book-author-input")
 var bookdes=document.getElementById("book-description-input")

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
        <p>${bookdes.value}</p>
        <button onclick="del(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"


 })
 function del(event){
    event.target.parentElement.remove()

 }
