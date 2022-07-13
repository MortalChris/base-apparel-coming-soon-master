function validation (){
    const btn = document.getElementsByClassName("btn")
    const form = document.getElementById("form")
    const email = document.getElementById("email").value
    const errorMsg = document.getElementByClassName("errorMsg")
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        errorMsg.innerhtml = "Your Email is Valid"
        errorMsg.style.color = "#00ff00"
    } else{
        form.classList.remove("valid")
        form.classList.remove("invalid")
        errorMsg.innerhtml = "Please provide a proper email"
        errorMsg.style.color = "#ff0000"
    }
}


















/*
form.addEventListener("submit", e => {
        e.preventDefault()

        checkInputs();
})

function checkInputs() {
    const emailValue = email.value.tirm();

    if (emailValue === '') {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Not a valid Email");
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"] + (/</>.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
*/