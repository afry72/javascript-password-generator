// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, addLowercase, addUppercase, addNumbers, addSymbols) {
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

  if(addedChars.length <= 0){
    return '(password must have atleast 1 charactor type)'
  }

  for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  
}

console.log(generatePassword.addedChars);

passwordLength = 15
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
