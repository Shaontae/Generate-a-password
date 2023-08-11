// Assignment Code
var generateBtn = document.querySelector("#generate");

// make list of array types  of arrays: numbers symbols,uppercase,lowercase
var upperCase = ["A", "B", "C", "D"];
var lowerCase = ["a", "b", "c", "d"];
var special = ["#", "$", "&", "@"];
var numeric = [1, 2, 3, 4];
//gathering user information 
function passCriteria() {

//creeate length variable and a prompt 8-128
var length = prompt('Whats your length');
if (length < 8 || length > 128) {
  alert('stay between the lines');
  return null;
}


//list confirms -4
var isUpperCase = confirm('Do you want upperCase');
var isLowerCase = confirm('Do you want lowerCase');
var isspecial = confirm('Do you want special');
var isnumeric = confirm('Do you want numberic');

var userInfo = {
  length: length,
  isUpperCase: isUpperCase,
  isLowerCase: isLowerCase,
  isspecial: isspecial,
  isnumeric: isnumeric,
}
return userInfo

}

//makes user answer and generate password with it 
function generatePassword() {
  var userChoice = passCriteria();
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// click aa button then create event listener then go to first function

function one() {
  ///code
  //code

  two()

}

function two() {
  
}