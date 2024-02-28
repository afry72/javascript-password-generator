// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(passwordLength, addLowercase, addUppercase, addNumbers, addSymbols) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersChars = "1234567890";
  var symbolsChars = "!@#$%^&*()-_=+[{]};:',<.>/?";


  var addedChars = "";
  var password = "";

  addedChars += addLowercase ? lowercaseChars:"";
  addedChars += addUppercase ? uppercaseChars:"";
  addedChars += addNumbers ? numbersChars:"";
  addedChars += addSymbols ? symbolsChars:"";
  
  console.log(addedChars);

  return '';
}


var passwordLength = 15;
var addLowercase = true;
var addUppercase = true;
var addNumbers = true;
var addSymbols = true; 
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
