var userRate=document.querySelector('#userRate')
userRate.addEventListener('submit', (e)=>
{
    e.preventDefault();
    var star1=document.querySelector('.star-1')
    var star2=document.querySelector('.star-2')
    var star3=document.querySelector('.star-3')
    var star4=document.querySelector('.star-4')
    var star5=document.querySelector('.star-5')
    if(star1.checked) console.log(1);
    else if(star2.checked) console.log(2);
    else if(star3.checked) console.log(3);
    else if(star4.checked) console.log(4);
    else if(star5.checked) console.log(5);
    else console.log(0);
})