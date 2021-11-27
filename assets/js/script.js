// Assignment code here
var selectAPrompt = function(passLength){
  var pass = "";

  //asks if user wants lowercase letters 
  var lowerCaseConfirm = window.confirm("Do you want lower case characters in your password?");
  //asks if user wants uppercase letters BOOL
  var upperCaseConfirm = window.confirm("Do you want upper case characters in your password?");
  //asks if user wants numbers BOOL
  var numbersConfirm = window.confirm("Do you want numbers in your password?");
  //asks if user wants special characters BOOL
  var specialCharConfirm = window.confirm("Do you want special characters in your password?");

  if (lowerCaseConfirm || upperCaseConfirm || numbersConfirm || specialCharConfirm){
    //arrays for password generator
    var lowerCaseAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var integers = [1,2,3,4,5,6,7,8,9,0];
    var specialChars = ['!','@','#','$','%','^','&','*','(',')'];

    //creating the list for the for loop based on the users choice selection
    var list = [];

    if(lowerCaseConfirm){
      list = list.concat(lowerCaseAlpha);
    }
    if (upperCaseConfirm){
      list = list.concat(upperCaseAlpha);
    }
    if (numbersConfirm) {
      list = list.concat(integers);
    }
    if(specialCharConfirm) {
      list =list.concat(specialChars);
    }

    for(var i=0; i<passLength; i++){
      var random = Math.random();
      //gets random character from array
      var numForArray = Math.round(random * (list.length - 1));
      //adds new character to string one at a time
      pass += list[numForArray];

    }
    console.log(pass);
  }
  else{
    window.alert("You must pick atleast one option.");
    pass = selectAPrompt(passLength);
  }
  return pass;
}

var generatePassword = function(){
  //gets how many characters in password INTEGER
  var passLength = window.prompt("How many characters do you want in your in password? (8min-8max)");
  passLength = parseInt(passLength);
  var pass = "";

  if(passLength>7 && passLength<129){
    pass = selectAPrompt(passLength);
  }
  else{
    window.alert("Type a number greater than 8 and less than 128");
  }
  return pass;
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