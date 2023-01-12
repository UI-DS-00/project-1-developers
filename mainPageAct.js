//search
var search= document.getElementById('submitFilterSearch')
search=addEventListener('submit',(e)=>
{
  e.preventDefault();
  let input = document.querySelector('.searchbox')
  let x = document.querySelectorAll('.filminfo');
  let filmName = document.querySelectorAll('.filmNameInFimmInfo')
  for (i = 0; i < filmName.length; i++) { 
      if (!filmName[i].innerHTML.toLocaleLowerCase().includes(input.value)) {
          x[i].style.display="none";
      }
      else x[i].style.display="block";
  }
})



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}