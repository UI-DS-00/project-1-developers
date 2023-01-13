var form=document.getElementById('login')
var usernameElm=document.getElementById('usernameInput')
var passwordElm=document.getElementById('passwordInput')
form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    usernameElm.addEventListener('keyup',(e)=>
{
    e.preventDefault();
    form.classList.add('was-validated')
})
passwordElm.addEventListener('keyup',(e)=>
{
    e.preventDefault();
    form.classList.add('was-validated')
})
    var alaki='fdfgdf'
    var checkValidation=true
    var username=usernameElm.value
    var password=passwordElm.value
    for (let i = 0; i < username.length; i++)
     {
        if (username.charCodeAt(i)>130) {
            checkValidation=false
        }    
    }
    for (let i = 0; i < password.length; i++)
     {
        if (password.charCodeAt(i)>130) {
            checkValidation=false
        }    
    }
    if (username.length<5) checkValidation=false
    if (form.checkValidity()==true && checkValidation==true)
     {
        console.log("salam");
    }
    form.classList.add('was-validated')
})