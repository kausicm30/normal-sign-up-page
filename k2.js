function validatePassword()
{
    var password1 = document.myform.password1.value;
    var password2 = document.myform.password2.value;
    if(password1 == password2)
    {
        if(confirm("Are you sure ?"))
                alert("Signup Successful");
    }
    else{
        alert("Password must be same");
    }
}