document.getElementById("signupLink").addEventListener("click", function(event) {
  event.preventDefault(); 
  document.getElementById("loginPage").style.display = "none"; 
  document.getElementById("signupPage").style.display = "block";
}); 

document.getElementById("loginLink").addEventListener("click", function(event) {
  event.preventDefault(); 
  document.getElementById("loginPage").style.display = "block"; 
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("forgotPage").style.display = "none";
}); 

document.getElementById("forgotLink").addEventListener("click", function(event) {
  event.preventDefault(); 
  document.getElementById("loginPage").style.display = "none"; 
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("forgotPage").style.display = "block";
}); 

document.getElementById("forgotLink1").addEventListener("click", function(event) {
  event.preventDefault(); 
  document.getElementById("loginPage").style.display = "block"; 
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("forgotPage").style.display = "none";
}); 