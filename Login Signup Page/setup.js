  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";

  const firebaseConfig = {
      apiKey: "AIzaSyB6FDF1ej0q5r6plUNP5clgWY3d_u6j5v8",
      authDomain: "database-72236.firebaseapp.com",
      projectId: "database-72236",
      storageBucket: "database-72236.appspot.com",
      messagingSenderId: "795572450000",
      appId: "1:795572450000:web:9d319927a1233ef8fe64d5",
      measurementId: "G-CVGTTCB7K0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = firebase.auth();
  const db = firebase.firestore();

  db.settings({ timestampInsnapshots: true });