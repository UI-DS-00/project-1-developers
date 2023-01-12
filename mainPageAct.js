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
var wishList=document.getElementById('wishlistHeart1')
var movieAddWishlist=false
wishList.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  var wishListFeel=document.getElementById('wishlistHeartFeel1')
  if(wishListFeel.classList.contains('far'))
  {
    wishListFeel.classList.replace('far','fas')
    movieAddWishlist=true
  }
  else
  {
    wishListFeel.classList.replace('fas','far')
    movieAddWishlist=false
  }
})
var wishList=document.getElementById('wishlistHeartPlus1')
var movieAddWishlist=false
wishList.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  var wishListFeel=document.getElementById('wishlistHeartFeel1')
  if(wishListFeel.classList.contains('far'))
  {
    wishListFeel.classList.replace('far','fas')
    movieAddWishlist=true
  }
  else
  {
    wishListFeel.classList.replace('fas','far')
    movieAddWishlist=false
  }
})
var wishList=document.getElementById('wishlistHeartCircle1')
var movieAddWishlist=false
wishList.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  var wishListFeel=document.getElementById('wishlistHeartFeel1')
  if(wishListFeel.classList.contains('far'))
  {
    wishListFeel.classList.replace('far','fas')
    movieAddWishlist=true
  }
  else
  {
    wishListFeel.classList.replace('fas','far')
    movieAddWishlist=false
  }
})
var wishList=document.getElementById('wishlistHeart2')
var movieAddWishlist=false
wishList.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  var wishListFeel=document.getElementById('wishlistHeartFeel2')
  if(wishListFeel.classList.contains('far'))
  {
    wishListFeel.classList.replace('far','fas')
    movieAddWishlist=true
  }
  else
  {
    wishListFeel.classList.replace('fas','far')
    movieAddWishlist=false
  }
})
var wishList=document.getElementById('wishlistHeartPlus2')
var movieAddWishlist=false
wishList.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  var wishListFeel=document.getElementById('wishlistHeartFeel2')
  if(wishListFeel.classList.contains('far'))
  {
    wishListFeel.classList.replace('far','fas')
    movieAddWishlist=true
  }
  else
  {
    wishListFeel.classList.replace('fas','far')
    movieAddWishlist=false
  }
})
var wishList=document.getElementById('wishlistHeartCircle2')
var movieAddWishlist=false
wishList.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  var wishListFeel=document.getElementById('wishlistHeartFeel2')
  if(wishListFeel.classList.contains('far'))
  {
    wishListFeel.classList.replace('far','fas')
    movieAddWishlist=true
  }
  else
  {
    wishListFeel.classList.replace('fas','far')
    movieAddWishlist=false
  }
})
var wishList=document.getElementById('wishlistHeart3')
var movieAddWishlist=false
wishList.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  var wishListFeel=document.getElementById('wishlistHeartFeel3')
  if(wishListFeel.classList.contains('far'))
  {
    wishListFeel.classList.replace('far','fas')
    movieAddWishlist=true
  }
  else
  {
    wishListFeel.classList.replace('fas','far')
    movieAddWishlist=false
  }
})
var wishList=document.getElementById('wishlistHeartPlus3')
var movieAddWishlist=false
wishList.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  var wishListFeel=document.getElementById('wishlistHeartFeel3')
  if(wishListFeel.classList.contains('far'))
  {
    wishListFeel.classList.replace('far','fas')
    movieAddWishlist=true
  }
  else
  {
    wishListFeel.classList.replace('fas','far')
    movieAddWishlist=false
  }
})
var wishList=document.getElementById('wishlistHeartCircle3')
var movieAddWishlist=false
wishList.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  var wishListFeel=document.getElementById('wishlistHeartFeel3')
  if(wishListFeel.classList.contains('far'))
  {
    wishListFeel.classList.replace('far','fas')
    movieAddWishlist=true
  }
  else
  {
    wishListFeel.classList.replace('fas','far')
    movieAddWishlist=false
  }
})


var movieYearElm=document.getElementById('movieYearRange')
movieYearElm.addEventListener('mousemove',(e)=>
{
    var firstYear=document.querySelector('.firstYear')
    firstYear.innerHTML=movieYearElm.value+" -"
})
var movieScoreElm=document.getElementById('movieScore')
movieScoreElm.addEventListener('mousemove',(e)=>
{
    var minScore=document.querySelector('.minScore')
    var maxScore=document.querySelector('.maxScore')
    if(movieScoreElm.value==10)
    {
        maxScore.style.left='6%'
    }
    else{
        maxScore.style.left='5%'
    }
    minScore.innerHTML=movieScoreElm.value+" -"
})
var submitSorter=document.querySelector('.submitFilterSearch')
submitSorter.addEventListener('click',(e)=>
{
  e.preventDefault();
  var year=document.querySelector('#movieYearRange')
  var score=document.querySelector('#movieScore')
  var actors=document.querySelector('#filterActorsSorter')
  var genre=document.querySelector('#genreFilterSorter')
  var director=document.querySelector('#directorFilterSorter')
  var children=document.querySelector('#checkChildren')
  var adults=document.querySelector('#checkAdults')
  let filmDiv = document.querySelectorAll('.filminfo');
  let filmGenre= document.querySelectorAll('.movieGenre');
  let movieDirector = document.querySelectorAll('.movieDirector');
  let movieActors = document.querySelectorAll('.movieActors');
  let movieScore = document.querySelectorAll('.backendScore');
  var age=document.querySelectorAll('.movieAge')
  var movieYear=document.querySelectorAll('.movieYear')
  for (i = 0; i < filmDiv.length; i++) 
  { 
    var checkFilm=0
    if (!filmGenre[i].innerHTML.toLowerCase().includes(genre.value))
     {
        filmDiv[i].style.display="none"
     }
    else
    {
      filmDiv[i].style.display="block";
      checkFilm +=1
    } 

    if (!movieDirector[i].innerHTML.toLowerCase().includes(director.value))
     {
        filmDiv[i].style.display="none"
     }
    else if(checkFilm==1)
    {
      filmDiv[i].style.display="block";
      checkFilm +=1
    } 

    if (!movieActors[i].innerHTML.toLowerCase().includes(actors.value))
     {
        filmDiv[i].style.display="none"
     }
    else if(checkFilm==2)
    {
      filmDiv[i].style.display="block";
      checkFilm +=1
    } 
    if (movieScore[i].innerHTML <= score.value)
     {
        filmDiv[i].style.display="none"
     }
    else if(checkFilm==3)
    {
      filmDiv[i].style.display="block";
      checkFilm +=1
    } 
    if (age[i].innerHTML.includes('کودکان'))
     {
        if (!children.checked) filmDiv[i].style.display="none";
        else if(checkFilm==4)
        {
          filmDiv[i].style.display="block";
          checkFilm +=1
        }
     }
    if(age[i].innerHTML.includes('بزرگسالان'))
    {
      if (!adults.checked) filmDiv[i].style.display="none";
      else if(checkFilm==4)
      {
        filmDiv[i].style.display="block";
        checkFilm +=1
      }
    }
    if (movieYear[i].innerHTML < year.value)
     {
        filmDiv[i].style.display="none"
     }
    else if(checkFilm==5)
    {
      filmDiv[i].style.display="block";
    }
  }
})