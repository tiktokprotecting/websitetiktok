
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCgGA_z_PtiEzQAO5R2cxN3mXO8GivqH1o",
    authDomain: "tiktok-844d5.firebaseapp.com",
    projectId: "tiktok-844d5",
    storageBucket: "tiktok-844d5.firebasestorage.app",
    messagingSenderId: "539323823221",
    appId: "1:539323823221:web:ed0865295f1d7eb72ff43c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  document.getElementById("submit").addEventListener('click', function(e){
    set(ref(db , 'user/' + document.getElementById("username").value),{

        username : document.getElementById("username").value,
        email :  document.getElementById("email").value,
        password :  document.getElementById("password").value
    })
  

  })