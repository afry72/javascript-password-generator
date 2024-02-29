// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 15;
var addLowercase = true;
var addUppercase = true;
var addNumbers = true;
var addSymbols = true; 

function generatePassword() {
  //setting up arrays for each individual characters that could be used
  var lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbersChars = ["1","2","3","4","5","6","7","8","9","0"];
  var symbolsChars = ["!","@","#","$","%","^","&","*","(",")"];


  var addedChars = [];
  var password = "";
  
  //creating individual for loops to make the output as random as possible
  if (addLowercase) {
    for(var i = 0; i < lowercaseChars.length; i++) {
      addedChars.push(lowercaseChars[i]);
    }
  }

  if (addUppercase) {
    for(var i = 0; i < uppercaseChars.length; i++) {
      addedChars.push(uppercaseChars[i]);
    }
  }

  if (addNumbers) {
    for(var i = 0; i < numbersChars.length; i++) {
      addedChars.push(numbersChars[i]);
    }
  }

  if (addSymbols) {
    for(var i = 0; i < symbolsChars.length; i++) {
      addedChars.push(symbolsChars[i]);
    }
  } 
  //creating if statements that limit the amount of charactors to 8-128 and making sure you have to pick atleast 1 character type
  if(addedChars.length <= 0){
  alert("password must have atleast 1 character type");
  return null;
  }

  if(passwordLength > 128){
    alert("password must be less then 128 characters");
    return null;
  }
    
  if(passwordLength < 8){
    alert("password must be more than 8 characters");
    return null;
  }


  for(let i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * addedChars.length);
    password += addedChars[randomIndex];
  }
  console.log("password",password);
  return password;
}
  
//sending the user prompts to decide how they want to customize their password
function passwordDetails() {
  passwordLength = prompt("how long do you want your password");
  addLowercase = confirm("do you want to include lower case letters");
  addUppercase = confirm("do you want to include upper case letters");
  addNumbers = confirm("do you want to include numbers");
  addSymbols = confirm("do you want to include symbols");
}
// Write password to the #password input
function writePassword() {
  //call a function to set character booleans with window.alert
  passwordDetails();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
