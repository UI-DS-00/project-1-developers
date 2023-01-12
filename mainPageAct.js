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