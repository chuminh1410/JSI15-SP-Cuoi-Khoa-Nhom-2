const signInContainer = document.querySelector('.container');
const signUpContainer = document.querySelector('.sign-up-container');

function showSignUp() {
    signInContainer.style.display = 'none';
    signUpContainer.style.display = 'flex';
}

function showSignIn() {
    signUpContainer.style.display = 'none';
    signInContainer.style.display = 'flex';
}

document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add the logic to authenticate the user

    alert(`User ${email} signed in successfully.`);
});

document.getElementById('signup-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;

    // Here you can add the logic to store the user details in local storage
    
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_password', password);

    alert(`User ${email} signed up successfully.`);
});
