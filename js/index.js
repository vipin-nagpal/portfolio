let menu = document.querySelector(".togglemenu");
let close = document.querySelector(".active")
let navbar = document.querySelector(".navbar");

menu.addEventListener("click" , fn)
function fn(event){
    navbar.style.display = "block";
    menu.style.display = "none";
    close.style.display = "block";
}
close.addEventListener("click" , fn1)
function fn1(event){
    navbar.style.display = "none";
    menu.style.display = "block";
    close.style.display = "none";
}

// scroll function
var scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.addEventListener("click" , fn2)

function fn2(event){
    document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
