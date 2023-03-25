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




// document.getElementById('submit-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Here you can add the logic to authenticate the user

//     alert(`User ${email} signed in successfully.`);
// });

// document.getElementById('signup-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('new-email').value;
//     const password = document.getElementById('new-password').value;

//     // Here you can add the logic to store the user details in local storage
    
//     localStorage.setItem('user_email', email);
//     localStorage.setItem('user_password', password);

//     alert(`User ${email} signed up successfully.`);
// });

const firebaseConfig = {
    apiKey: "AIzaSyB6FDF1ej0q5r6plUNP5clgWY3d_u6j5v8",
    authDomain: "database-72236.firebaseapp.com",
    projectId: "database-72236",
    storageBucket: "database-72236.appspot.com",
    messagingSenderId: "795572450000",
    appId: "1:795572450000:web:1e01e08b055b0c40fe64d5",
    measurementId: "G-W5VTNW033Y"
  };
