// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Password length needs to be a number.");
    return;c
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length needs to be between 8 and 128 characters.");
    return;
  }
  var userWantsNumbers = window.confirm(
    "Would you like to include numbers in your password?"
  );
  var userWantsSymbols = window.confirm(
    "Would you like to include symbols in your password?"
  );
  var userWantsLowercase = window.confirm(
    "Would you like to include lowercase letters in your password?"
  );
  var userWantsUppercase = window.confirm(
    "Would you like to include uppercase letters in your password?"
  );

  var uppercaseList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = [
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
  ];

  var optionsCart = [];
}

if (userWantsNumbers === true) {
  optionsCart.push(numberList);
}

if (userWantsSymbols === true) {
  optionsCart.push(symbolList);
}

if (userWantsLowercase === true) {
  optionsCart.push(lowercaseList);
}

if (userWantsUppercase === true) {
  optionsCart.push(uppercaseList);
}

console.log(optionsCart);

// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
