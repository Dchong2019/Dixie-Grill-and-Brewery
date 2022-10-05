
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB3lyujRu2g_szT-r0GZF4T12MrzGZJHg8",
    authDomain: "beer-database.firebaseapp.com",
    databaseURL: "https://beer-database-default-rtdb.firebaseio.com",
    projectId: "beer-database",
    storageBucket: "beer-database.appspot.com",
    messagingSenderId: "237719564948",
    appId: "1:237719564948:web:a16916d042fd96c874ba81",
    measurementId: "G-KHGHBKCJF7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
