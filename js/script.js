// let button1 = document.getElementById("downButton");

// window.onscroll = function() {
//     nextSection();
// }

// function nextSection() {
//     if(document.body.scr)
// }
function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

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

let intIndex = 0;

function showImage(i) {
// function showImage() {
    // intImage++;
    intIndex += i;

    let images = document.getElementsByClassName('image');
    let dots = document.getElementsByClassName('dot');

    for(k = 0; k<images.length; k++) {
        images[k].style.display = "none";
        dots[k].className = dots[k].className.replace("active", "");
    }
    //go back to first image if intIndex is 0
    if(intIndex > images.length - 1) {
        intIndex = 0
    }
    if(intIndex < 0) {
        intIndex = images.length-1;
    }

    images[intIndex].style.display = "block";
    dots[intIndex].className += " active"

}

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("cornerBtn").style.display = "block";
  } else {
    document.getElementById("cornerBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




//MAIN PRG
window.onload = function() { //live when on page
    currentYear();
    showImage(intIndex);
}


