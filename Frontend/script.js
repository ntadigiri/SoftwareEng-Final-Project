//Copy to Clipboard
const passwordElement = document.getElementById("password");

function copyPassword() {
  var password = passwordElement.value;
  passwordElement.value = password; 
  passwordElement.select(); 
  navigator.clipboard.writeText(password).then(function() {
    alert("Password copied to clipboard!");
  });
}

const iconElement = document.getElementById("copyIcon");
iconElement.addEventListener("click", copyPassword);

//Slider Range
var slider = document.getElementById("range");
var output = document.getElementById("op");
output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
}

//Generate Random Password
const generatePassword = () => {
  const length = parseInt(document.getElementById("range").value);
  const includeUppercase = document.getElementById("upperCase").checked;
  const includeLowercase = document.getElementById("lowerCase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  let characters = "";
  if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) characters += "0123456789";
  if (includeSymbols) characters += "!@#$%^&*()";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", () => {
  passwordElement.value = generatePassword();
});

