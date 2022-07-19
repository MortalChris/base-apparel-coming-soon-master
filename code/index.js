const form = document.querySelector("form");
form.addEventListener("submit", evt => evt.preventDefault());

const elError = form.querySelector("#error-message");
const msgError = elError.lastElementChild;
const imgError = elError.firstElementChild;
form.querySelector("button").addEventListener("click", evt => {
  // Reset to defaults
  elError.removeAttribute("hidden"); // Allow showing
  imgError.removeAttribute("src"); // Hide when no 'src'

  if (!form.checkValidity()) {
    msgError.textContent = "Please provide a proper email address!";
    imgError.src = "images/icon-error.svg";
  }
});

// Optional: Hide error until next submission-attempt (click); this improves UX (opinionated)
form.addEventListener("change", () => elError.setAttribute("hidden", ""));


/*  Method 2 
function validation (){
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const errorMsg = document.getElementByClassName("errorMsg");
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        errorMsg.innerhtml = "Your Email is Valid";
        errorMsg.style.color = "#00ff00";
    } else{
        form.classList.remove("valid");
        form.classList.remove("invalid");
        errorMsg.innerhtml = "Please provide a proper email";
        errorMsg.style.color = "#ff0000";
    }

    if (email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        errorMsg.innerHTML = "";
        errorMsg.style.color = "#00ff00";
    }
}
*/
/*  Method 2
const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const errorMsg = document.getElementById("errorMsg");
    const error = document.getElementById("error");
    
  
  form.addEventListener("submit", (e) => {
    if(email.validity.typeMismatch){
      e.preventDefualt();
      error.style.opacity = 1;
      errorMsg.style.opacity = 1;
    } else {
      error.style.opacity = 0;
      errorMsg.style.opacity = 0;
    }
  })*/

/* Method 3
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