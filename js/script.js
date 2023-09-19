const form = document.querySelector("form"),
emailField = form.querySelector(".email-field"),
emailInput = form.querySelector(".email"),
passwordField = form.querySelector(".password-field"),
passwordInput = form.querySelector(".password")

//emailValidation
const checkEmail = () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)){
        return emailField.classList.toggle("invalid")
    }
}

//password validation
const checkPassword = (e) => {
    const loginPassword = "password"
    if(passwordInput.value == '' || passwordInput.value == null || passwordInput.value !== loginPassword){
        return passwordField.classList.toggle("invalid");
    }
}


//calling the functions on form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submission
    checkEmail();
    checkPassword();
    emailInput.addEventListener("keydown", checkEmail);
    passwordInput.addEventListener("click", checkPassword);
});