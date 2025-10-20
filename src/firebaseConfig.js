// Importa a função initializeApp do SDK
import { initializeApp } from "firebase/app";

// Importa explicitamente getFirestore
import { getFirestore } from "firebase/firestore";

// Suas configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-EXEMPLO",
  authDomain: "meu-app.firebaseapp.com",
  projectId: "meu-app",
  storageBucket: "meu-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
export const db = getFirestore(app);