const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('sumbit', (e) =>{
    e.preventDefault();

    const email = signupForm['new-email'].value;
    const password = signupForm['new-password'].value;


    console.log(email, password)
})