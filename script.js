var slideIndext = 1;
showSlides(slideIndext);


function plusSlides(n) {
    showSlides(alideIndext += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndext = 1 }
    if (n < 1) { slideIndext = slides.length }
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display ="none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndext - 1].style.display = "block";
        dots[slideIndext - 1].className +="active";
    }
    
