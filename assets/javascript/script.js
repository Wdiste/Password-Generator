// Assignment Code
var generateBtn = document.querySelector("#generate");
var passParams = [
  length = 8,
  lowCase = false,
  upCase = false,
  num = false,
  spec = false,
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {
  passParams.length = parseInt(prompt("Choose a length for your password between 8 and 128 characters."))
  console.log(passParams.length);
  if (passParams.length.isNaN || (passParams.length < 8 || passParams.length > 128)) {
    return "Please enter a number between 8 and 128";
  };
};


// -----------------------  MAIN  -----------------------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);