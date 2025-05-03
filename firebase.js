<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD3voRUhhaJUSiYUc7WnsN8iMXsNn84UNM",
    authDomain: "darling-clica-e-ganha.firebaseapp.com",
    projectId: "darling-clica-e-ganha",
    storageBucket: "darling-clica-e-ganha.firebasestorage.app",
    messagingSenderId: "993176761999",
    appId: "1:993176761999:web:2b6b692ec80250b637e2fa",
    measurementId: "G-ZTHNDPMTBN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
