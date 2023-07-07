const form = document.querySelector("form")
const emailInput = document.querySelector("input")
const errorText = document.querySelector("form span")

// event listener
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const emailValue = emailInput.value.trim()
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (!emailRegex.test(emailValue)) {
    showErrorText()
  } else {
    hideErrorText()
    form.submit()
  }
})
emailInput.addEventListener("blur",()=>{
  console.log("fired blur event")
  hideErrorText()
})

// functions
function showErrorText() {
  errorText.style.display = "inline"
}
function hideErrorText() {
  errorText.style.display = "none"
}
