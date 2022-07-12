const btn = document.getElementsByClassName("btn")
const texts = document.getElementsByClassName("texts")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    let messages = []
    if (texts.value === "" || texts.value == null){
        messages.push("Email is Required")
    }

    if (messages.length > 0){
        e.preventDefault()
    }
})