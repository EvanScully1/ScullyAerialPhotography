// let button1 = document.getElementById("downButton");

// window.onscroll = function() {
//     nextSection();
// }

// function nextSection() {
//     if(document.body.scr)
// }

// JS FOR ARROW BUTTON IN .one
window.onclick = function() {nextSection()};
function nextSection() {
    document.getElementById("downButton").scrollY = "200";
}

// JS FOR HEADER 
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.opacity = "100%"
        document.getElementById("header").style.fontSize = "75%"
    } else {
        document.getElementById("header").style.backgroundColor = "rgb(0, 0, 0, 0.254)";
        document.getElementById("header").style.fontSize = "100%"
    }
}
// JS FOR FOOTER DATE
window.onload = function() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.getFullYear();
}