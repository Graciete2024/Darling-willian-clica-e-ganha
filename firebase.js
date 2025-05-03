// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3voRUhhaJUSiYUc7WnsN8iMXsNn84UNM",
  authDomain: "darling-clica-e-ganha.firebaseapp.com",
  projectId: "querida-clica-e-ganha",
  storageBucket: "darling-clica-e-ganha.appspot.com",
  messagingSenderId: "993176761999",
  appId: "1:993176761999:web:d6a10be0f2e4f42237e2fa",
  measurementId: "G-64JM6D3QS2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
