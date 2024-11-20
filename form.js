function validateName(){
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const nameMessage = document.getElementById("nameMessage");
    if(name.length >= 3){
        nameInput.style.borderColor = "green";
        nameMessage.textContent = "Name looks good";
        nameMessage.style.color = "Green";
        return true;

    }
    else{
        nameInput.style.borderColor = "red";
        nameMessage.textContent = "Name should be at least of 3 characters";
        nameMessage.style.color = "red";
        return false;
    }
}
function validateEmail(){
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-Za-Z0-9.-]+\.[a-Za-Z]{2,6}$/;
    if(emailPattern.test(email)){
        emailInput.style.borderColor = "green";
        emailMessage.textContent = "";Valid email
        emailMessage.style.color = "Green";
        return true;

    }
    else{
        emailInput.style.borderColor = "red";
        emailMessage.textContent = "Enter a valid email address";
        emailMessage.style.color = "red";
        return false;
    }
}
    
function validateName(){
    const password = document.getElementById("password").value;
    const passwordInput = document.getElementById("password");
    const passwordMessage = document.getElementById("passwordMessage");
    if(name.length >= 3){
        passwordInput.style.borderColor = "green";
        passwordMessage.textContent = "Strong password";
        passwordMessage.style.color = "Green";
        return true;

    }
    else{
        passwordInput.style.borderColor = "red";
        passwordMessage.textContent = "Password should be at least of 6 characters";
        passwordMessage.style.color = "red";
        return false;
    }
}
document.getElementById("myform").addEventListener("submit",function(event){
    const isvalidName = validateName();
    const isvalidEmail = validateEmail();
    const isvalidPassword = validatePassword();
    if(!isvalidName || !isvalidEmail || !isvalidPassword){
        event.preventDefault();

    }

});