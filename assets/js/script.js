// Assignment code here
var generatePassword = function(){
  //gets how many characters in password INTEGER
  var passLength = window.prompt("How many characters do you want in your in password? (8min-8max)");
  passLength = parseInt(passLength);
  var pass = "";

  if(passLength>7 && passLength<129){
  
    //asks if user wants uppercase letters BOOL
    var upperCaseConfirm = window.confirm("Do you want upper case characters in your password?");
    //asks if user wants numbers BOOL
    var numbersConfirm = window.confirm("Do you want numbers in your password?");
    //asks if user wants special characters BOOL
    var specialCharConfirm = window.confirm("Do you want special characters in your password?");

    //arrays for password generator
    var lowerCaseAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var integers = [1,2,3,4,5,6,7,8,9,0];
    var specialChars = ['!','@','#','$','%','^','&','*','(',')'];

    //creating the list for the for loop based on the users choice selection
    var list = lowerCaseAlpha;

    if (upperCaseConfirm){
      list = list.concat(upperCaseAlpha);
      console.log(list);
    }
    if (numbersConfirm) {
      list = list.concat(integers);
      console.log(list);
    }
    if(specialCharConfirm) {
      list =list.concat(specialChars);
      console.log(list);
    }

    for(var i=0; i<passLength; i++){
      
      //gets random character from array
      numForArray = Math.round(Math.random() * list.length);
      console.log(list[numForArray]);

      //adds new character to string one at a time
      pass += list[numForArray];

    }
    console.log(pass);
  }
  else{
    window.alert("type a number greater than 8 and less than 128");
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