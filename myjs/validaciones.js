// SELECTING ALL TEXT ELEMENTS
function validaciones()                                   
{
  

var username = document.forms["RegForm"]["Name"];
var email = document.forms["RegForm"]["email"];
var password = document.forms["RegForm"]["password"];
var password_confirm = document.forms["RegForm"]["password_confirm"];
var firstname = document.forms["RegForm"]["firstname"];
var lastname = document.forms["RegForm"]["lastname"];
var phone = document.forms["RegForm"]["phone"];
var direction = document.forms["RegForm"]["direction"];
var userimg = document.forms["RegForm"]["userimg"];
var userback = document.forms["RegForm"]["userback"];


var name_error = document.getElementById("name_error");
  
    if (username.value == "")                                 
    {
        window.alert("Please enter your name.");
        username.focus();
        return false;
    }

     if (username.value.length < 6) {
      window.alert("Username must be at least 6 characters");
    username.focus();
    return false;
  }
      
    if (email.value == "")                                  
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf("@", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf(".", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

 
      if(password.value.length < 8) {
        alert("Error: Password must contain at least eight characters!");
        password.focus();
        return false;
      }
      if(password.value == username.value) {
        alert("Error: Password must be different from Username!");
        password.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        password.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        password.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        password.focus();
        return false;
      }

       if (password.value == "")                                 
    {
        alert("Please enter a password.");
        password.focus();
        return false;
    }

      if (password.value != password_confirm.value) {
        alert("Error: Passwords do not match");
    return false;
  }
    

   if (firstname.value == "")                                 
    {
        window.alert("Please enter your first name.");
        firstname.focus();
        return false;
    }
      

       if (lastname.value == "")                                 
    {
        window.alert("Please enter your last name.");
        lastname.focus();
        return false;
    }
      
    if (phone.value == "")                          
    {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;
    }

     re = /[0-9]/;
      if(!re.test(phone.value)) {
        alert("Error: Only Numbers.");
        phone.focus();
        return false;
      }

        if(phone.value.length < 10) {
        alert("Error: At least 10 numbers.");
        phone.focus();
        return false;
      }

    if (phone.value == "")                          
    {
        window.alert("Only numbers.");
        phone.focus();
        return false;
    }

     if (userimg.value == "")                          
    {
        window.alert("Select an image for your avatar.");
        userimg.focus();
        return false;
    }
  
   if (userback.value == "")                          
    {
        window.alert("Select an image for the background.");
        userback.focus();
        return false;
    }
  
  
  
    return true;
}