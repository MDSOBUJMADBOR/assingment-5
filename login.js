
document.getElementById("userButton").addEventListener('click',function () {
        
const userInput = document.getElementById("userName");
const userInputValue = userInput.value;


const userPassword = document.getElementById("userPassword");
const userPasswordValue = userPassword.value;

if(userInputValue === "admin" && userPasswordValue === "admin123") {
          alert("Login Successfully");
          window.location.assign("home.html");

}
else {
          alert("Login Failed");
          return;
}

  
})


