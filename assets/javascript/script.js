// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLib = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLib = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numLib = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specCharLib = [' ', '!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',','-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '\`', '{', '|', '}', '~'];
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

// generatePassword will ask for all parameters before asking for length.
// Function then asks for length and checks input
function generatePassword() {
  passParams.lowCase = confirm("Would you like to include lower case letters in your password?");
  passParams.upCase = confirm("Would you like to include upper case letters in your password?");
  passParams.num = confirm("Would you like to include numbers in your password?");
  passParams.spec = confirm("Would you like to include special characters in your password?");

  if(passParams.lowCase == false && passParams.upCase == false && 
     passParams.num == false && passParams.spec == false) {
      alert("Error: please select at least one character type")
      return "Please select at least one character type";
     }

  passParams.length = parseInt(prompt("Choose a length for your password between 8 and 128 characters."))

  if (passParams.length.isNaN || (passParams.length < 8 || passParams.length > 128)) {
    alert("Please enter a number between 8 and 128");
    return "Please enter a number between 8 and 128";
  };

  // log all inputs for dev use
  console.log(passParams.lowCase);
  console.log(passParams.upCase);
  console.log(passParams.num);
  console.log(passParams.spec);
  console.log(passParams.length);
};


// -----------------------  MAIN  -----------------------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);