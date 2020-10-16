const email = document.getElementById("email-input")
const form = document.getElementById("myForm")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("email: ", email.value)
})

