// SELECTING ALL TEXT ELEMENTS
var username = document.forms['vform']['userusername'];
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['password_confirm'];
var firstname = document.forms['vform']['firstname'];
var lastname = document.forms['vform']['lastname'];
var phone = document.forms['vform']['phone'];
var direction = document.forms['vform']['direction'];

// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var password_length_error = document.getElementById('password_length_error');
var firstname_error = document.getElementById('firstname_error');
var lastname_error = document.getElementById('lastname_error');
var phone_error = document.getElementById('phone_error');
var directions_error = document.getElementById('directions_error');


// SETTING ALL EVENT LISTENERS
username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
firstname.addEventListener('blur', firstnameVerify, true);
lastname.addEventListener('blur', lastnameVerify, true);
phone.addEventListener('blur', phoneVerify, true);
direction.addEventListener('blur', directionVerify, true);

// validation function
function Validate() {
  // validate username
  if (username.value == "") {
    username.style.border = "1px solid red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  // validate username
  if (username.value.length < 6) {
    username.style.border = "1px solid red";
    name_error.textContent = "Username must be at least 6 characters";
    username.focus();
    return false;
  }
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // validate password
  if (password.value == "") {
    password.style.border = "1px solid red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  // check if the two passwords match
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
  // check the lenght of the password
  if (password.value.length < 8) {
    password.style.border = "1px solid red";
    password_length_error.textContent = "Password lenght should be at least 8 characters";
    password.focus();
    return false;
  }
//validate firstname 
   if (firstname.value.length == "") {
    firstname.style.border = "1px solid red";
    firstname_error.textContent = "First Name is Required";
    firstname.focus();
    return false;
  }
//validate lastname
   if (lastname.value.length == "") {
    lastname_div.style.border = "1px solid red";
    lastname_error.textContent = "Lastname is Required";
    lastname_div.focus();
    return false;
  }
//validate telephone
    if (phone.value.length == "") {
    phone.style.border = "1px solid red";
    phone_error.textContent = "Telephone number is required";
    telefono_div.focus();
    return false;
  }
//validate directions
    if (direction.value.length == "") {
    direction.style.border = "1px solid red";
    directions_error.textContent = "Directions are Required";
    direction_div.focus();
    return false;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// event handler functions
function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    email_error.innerHTML = "";
    return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    password.style.border = "1px solid #5e6e66";
    password_error.innerHTML = "";
    return true;
  }
  if (password.value === password_confirm.value) {
    password.style.border = "1px solid #5e6e66";
    password_error.innerHTML = "";
    return true;
  }
}
function firstnameVerify() {
  if (firstname.value != "") {
   firstname.style.border = "1px solid #5e6e66";
   firstname_error.innerHTML = "";
   return true;
  }
}
function lastnameVerify() {
  if (lastname.value != "") {
   lastname.style.border = "1px solid #5e6e66";
   lastname_error.innerHTML = "";
   return true;
  }
}
function phoneVerify() {
  if (phone.value != "") {
   phone.style.border = "1px solid #5e6e66";
   phone_error.innerHTML = "";
   return true;
  }
}
function directionVerify() {
  if (direction.value != "") {
   direction.style.border = "1px solid #5e6e66";
   direction_error.innerHTML = "";
   return true;
  }
}