const apiKey="547b6aefc5e507d4532e8de7a6e6993f"
const apiBaseUrl= "https://api.themoviedb.org/3"
const imageBaseUrl="https://image.tmdb.org/t/p/w300"


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

async function fetchMoviesNowPlaying()
{
  const response= await fetch(`${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`) 
  const jsonResponse = await response.json()
  const movies=jsonResponse.results
  displayMovies(movies)
  console.log(movies);
}
function displayMovies(movies)
{
  var body=document.querySelector('#filmCards')
  console.log(body);
  for(let i=0;i<movies.length;i++)
  {
    var date=movies[i].release_date
    date=date.split("-")
    if (movies[i].adult) 
    {
      body.innerHTML+=`<div class="filminfo">
    <a href="moviePage.html"><img src=${imageBaseUrl}${movies[i].poster_path} alt="you can't load this image" style="width: 200px; border-radius:8px;" class="filmImage"></a>
    <a href="moviePage.html" class="filmDownload"><p>دانلود فیلم</p><span class="filmNameInFimmInfo">${movies[i].original_title}</span></a>

    <i class="material-icons clock">access_alarm</i>
    <p class="filmInfoTitleTime">: زمان</p>
    <p class="movieTime filmInfoContent time"> دقیقه</p>
    <span class="movieTime filmInfoContent">88  </span>

    <i class="material-icons genre">movie</i>
    <p class="filmInfoTitleGenre">: ژانر </p>
    <span class="movieGenre filmInfoContent">action</span>

    <i class="material-icons director">person</i>
    <p class="filmInfoTitleDirector">: کارگردان </p>
    <span class="movieDirector filmInfoContent"> الکساندر فلورنزی</span>
    
    <i class="material-icons actors">group</i>
    <p class="filmInfoTitleActors">: بازیگران</p>
    <span class="movieActors filmInfoContent"> جان مارستون و آرتور مورگان</span>

    <i class="material-icons country">language</i>
    <p class="filmInfoTitleCountry">: کشور سازنده</p>
    <span class="movieCountry filmInfoContent"> آمریکا</span>

    <i class="fa fa-calendar year"></i>
    <p class="filmInfoTitleYear">: سال ساخت</p>
    <span class="movieYear filmInfoContent">${date[0]}</span>

    <i class="fa fa-grav age"></i>
    <p class="filmInfoTitleAge">: رده سنی</p>
    <span class="movieAge filmInfoContent">بزرگسالان</span>

    <p class="description">${movies[i].overview}</p>

    <span class="backendScore">${movies[i].vote_average}</span>
    <p class="movieScore">/10</p>
    <div class="line"></div>
    <div id="scorePlace"><span class="votes">${movies[i].vote_count}</span></div>
    <p class="votesText">votes</p>
    </div>`
    }
    else{
      body.innerHTML+=`<div class="filminfo">
      <a href="moviePage.html"><img src=${imageBaseUrl}${movies[i].poster_path} alt="you can't load this image" style="width: 200px; border-radius:8px;" class="filmImage"></a>
      <a href="moviePage.html" class="filmDownload"><p>دانلود فیلم</p><span class="filmNameInFimmInfo">${movies[i].original_title}</span></a>
  
      <i class="material-icons clock">access_alarm</i>
      <p class="filmInfoTitleTime">: زمان</p>
      <p class="movieTime filmInfoContent time"> دقیقه</p>
      <span class="movieTime filmInfoContent">88  </span>
  
      <i class="material-icons genre">movie</i>
      <p class="filmInfoTitleGenre">: ژانر </p>
      <span class="movieGenre filmInfoContent">action</span>
  
      <i class="material-icons director">person</i>
      <p class="filmInfoTitleDirector">: کارگردان </p>
      <span class="movieDirector filmInfoContent"> الکساندر فلورنزی</span>
      
      <i class="material-icons actors">group</i>
      <p class="filmInfoTitleActors">: بازیگران</p>
      <span class="movieActors filmInfoContent"> جان مارستون و آرتور مورگان</span>
  
      <i class="material-icons country">language</i>
      <p class="filmInfoTitleCountry">: کشور سازنده</p>
      <span class="movieCountry filmInfoContent"> آمریکا</span>
  
      <i class="fa fa-calendar year"></i>
      <p class="filmInfoTitleYear">: سال ساخت</p>
      <span class="movieYear filmInfoContent">${date[0]}</span>
  
      <i class="fa fa-grav age"></i>
      <p class="filmInfoTitleAge">: رده سنی</p>
      <span class="movieAge filmInfoContent">کودکان</span>
  
      <p class="description">${movies[i].overview}</p>
  
      <span class="backendScore">${movies[i].vote_average}</span>
      <p class="movieScore">/10</p>
      <div class="line"></div>
      <div id="scorePlace"><span class="votes">${movies[i].vote_count}</span></div>
      <p class="votesText">votes</p>
      </div>`
    }
  }
}
fetchMoviesNowPlaying()