var form=document.getElementById('forgetpass')
var emailElm=document.getElementById('emailInput')
form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    emailElm.addEventListener('keyup',(e)=>
{
    e.preventDefault();
    form.classList.add('was-validated')
})
    var checkValidation=true
    var email=emailElm.value
    for (let i = 0; i < email.length; i++)
     {
        if (email.charCodeAt(i)>130) {
            checkValidation=false
        }    
    }
    if (form.checkValidity()==true && checkValidation==true)
     {
        console.log("salam");
    }
    form.classList.add('was-validated')
})