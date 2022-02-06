// Assignment Code
let generateBtn = document.querySelector("#generate");
//Varibles 
let password = [];

// Arrays of uppercase letters, lowercase letters, special character, and numbers.
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let onlySpecial = [' ','!','"','#','$','%','&','()','*','+',',','-','.','/',':',';','<','=','>','?','@','[','',']','^','_','`','{','|','}','~'];
let onlyNumbers = ['0','1','2','3','4','5','6','7','8','9'];


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
}
function generatePassword(){
  let characterNumber = prompt("Input a number between 8-126 ")
  if (characterNumber < 8 || characterNumber > 126){
    alert("Please try again")
  } else if (characterNumber > 8 || characterNumber < 126)
  let upperCase = confirm("Do you want to include upper case letters?");
  let lowerCase = confirm("Do you want to include lower case letters?");
  let onlySpecial = confirm("Do you want to include special characters?");
  let onlyNumbers = confirm("Do you want to include numbers?");




  passwordText.value = password;

}

writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
