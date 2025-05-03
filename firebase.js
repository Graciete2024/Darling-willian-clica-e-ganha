// Importação do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Configuração real do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3voRUhhaJUSiYUc7WnsN8iMXsNn84UNM",
  authDomain: "darling-clica-e-ganha.firebaseapp.com",
  projectId: "darling-clica-e-ganha",
  storageBucket: "darling-clica-e-ganha.firebasestorage.app",
  messagingSenderId: "993176761999",
  appId: "1:993176761999:web:d6a10be0f2e4f42237e2fa",
  measurementId: "G-64JM6D3QS2"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para uso nos outros arquivos
export { auth, db };
