// Assignment code here
var generateBtn = document.querySelector("#generate");
// Getting the generator to produce random passwords
function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }

  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}
function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?");

  //Allowing the user to choose some of the passwords character traits.

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Password length needs to be a number.");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length needs to be between 8 and 128 characters.");
    return;
  }
  var userWantsNumbers = window.confirm(
    "Would you like to include numbers in your password?"
  );
  if (userWantsNumbers) {
    window.alert("Your password will contain numbers.");
  } else {
    window.alert("Your password will not contain numbers.");
  }

  var userWantsSymbols = window.confirm(
    "Would you like to include symbols in your password?"
  );
  if (userWantsSymbols) {
    window.alert("Your password will include symbols.");
  } else {
    window.alert("Your password will not include symbols.");
  }
  var userWantsLowercase = window.confirm(
    "Would you like to include lowercase letters in your password?"
  );
  if (userWantsLowercase) {
    window.alert("Your password will include lowercase letters.");
  } else {
    window.alert("Your password will not include lowercase letters.");
  }
  var userWantsUppercase = window.confirm(
    "Would you like to include uppercase letters in your password?"
  );
  if (userWantsUppercase) {
    window.alert("Your password will include Uppercase letters.");
  } else {
    window.alert("Your password will not contain Uppercase letters.");
  }
  // my list of all possible varaiables
  var uppercaseList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",

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

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList);
  }

  var generatePassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart);
    var randomChar = getRandomItem(randomList);
    generatePassword += randomChar;
  }

  return generatePassword;
}
// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
