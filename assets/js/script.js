// Assignment code here
var generatePassword = function(){
  //gets how many characters in password INTEGER
  var passLength = window.prompt("How many characters do you want in your in password?");
  //asks if user wants uppercase letters BOOL
  var upperCase = window.confirm("Do you want upper case characters in your password?");
  //asks if user wants numbers BOOL
  var numbers = window.confirm("Do you want numbers in your password?");
  //asks if user wants special characters BOOL
  var specialChar = window.confirm("Do you want special characters in your password?");
}

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
