const signup = document.querySelector('#sign_block')
const emailForm = signup.querySelector('#email_form')
const emailFieled = signup.querySelector('#email_fieled')

const successBlock = document.querySelector('#success_message')
const userEmail = successBlock.querySelector('#user_email')
const dismiss = document.querySelector('#dismiss_btn')

/****** Event Listener ******/
 emailForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    submitEmail();
 })
 
// Back to form page
 dismiss.addEventListener('click',togglePages)

/****** End Event Listener ******/

// Check Valdition
 function checkValdition(input) {
   const inputValue = input.value.trim();
   const regEx = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
   const isValid = regEx.test(inputValue)
  
  input.parentElement.classList.toggle('error', !isValid)
   return isValid
}

// Submit Email
 function submitEmail() {
   // If Email not valid don't submit
   if(!checkValdition(emailFieled)) return

   // Else show welcomeing page 
   togglePages() 
   userEmail.innerHTML =  emailFieled.value 
 }

// Toggle Pages
function togglePages() {
   successBlock.classList.toggle('hide')
   signup.classList.toggle('hide')
 }