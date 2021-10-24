// Assignment code here

// Ask user prefrence 

function generatePassword(){
  // password characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numeric = '0123456789';
var special = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
 //length of the password   
var askLength = Number(window.prompt("length of the password? "));
if(Number.isNaN(askLength)){
    alert("you must Enter number");
    return generatePassword();
}else if(askLength <=8 || askLength >=128){
    alert("you must Enter number between 8 and 128");
    return generatePassword();
}else {

}
console.log(askLength);

// lowercase, uppercase, numeric, and/or special characters
//lowercase
var askLowerCase = window.confirm("Password Contain lowercase Characters?");
if( askLowerCase) {
askLowerCase = lowerCase;
}
else {
    lowerCase=false;
}
//uppercase
var askUpperCase = window.confirm("Password Contain uppercase Characters?");
if( askUpperCase) {
    askUpperCase = upperCase;

}
else {
    upperCase=false;
}

//numeric
var askNumeric = window.confirm("Password Contain numeric Characters?");
if( askNumeric) {
    askNumeric = numeric;
}
else {
    askNumeric=false;
}
//special characters
var askSpecialChar = window.confirm("Password Contain special Characters?");
if( askSpecialChar) {
    askSpecialChar = special;
}
else {
    askSpecialChar =false;
}
//add user input to array
userPassSet= [askLowerCase,askNumeric,askSpecialChar,askUpperCase];
//remove Null value from array and join it
var fillterPass = userPassSet.filter(Boolean).join('');
var password ="";
// create password random from the array
for (var i = 1; i <= askLength; i++) {
    var randomNumber = Math.floor(Math.random() * fillterPass.length);
    password += fillterPass.substring(randomNumber, randomNumber +1);
   }
   return password;

};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
