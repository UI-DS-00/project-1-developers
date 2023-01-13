var form=document.getElementById('signin')
var usernameElm=document.getElementById('usernameInput')
var passwordElm=document.getElementById('passwordInput')
var passwordrepeatElm=document.getElementById('passwordrepeatInput')
var emailElm=document.getElementById('emailInput')
var phonenumberElm=document.getElementById('phonenumberInput')
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
passwordrepeatElm.addEventListener('keyup',(e)=>
{
    e.preventDefault();
    form.classList.add('was-validated')
})
emailElm.addEventListener('keyup',(e)=>
{
    e.preventDefault();
    form.classList.add('was-validated')
})
phonenumberElm.addEventListener('keyup',(e)=>
{
    e.preventDefault();
    form.classList.add('was-validated')
})
    var checkValidation=true
    var phoneNumber=phonenumberElm.value
    var username=usernameElm.value
    var password=passwordElm.value
    var passwordRepeat=passwordrepeatElm.value
    var email=emailElm.value
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
    for (let i = 0; i < passwordRepeat.length; i++)
    {
        if (passwordRepeat.charCodeAt(i)>130) {
            checkValidation=false
        }    
    }
    for (let i = 0; i < email.length; i++)
    {
        if (email.charCodeAt(i)>130) {
            checkValidation=false
        }    
    }
    if (phoneNumber.length>11 || phoneNumber.length<11 || phoneNumber[0]!='0' || phoneNumber[1]!='9') checkValidation=false
    if (username.length<5) checkValidation=false
    if (password!=passwordRepeat) checkValidation=false
    if (form.checkValidity()==true && checkValidation==true)
     {
        console.log("salam");
    }
    form.classList.add('was-validated')
})