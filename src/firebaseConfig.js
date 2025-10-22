// Importa a função initializeApp do SDK
import { initializeApp } from "firebase/app";

// Importa explicitamente getFirestore
import { getFirestore } from "firebase/firestore";

// Suas configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBh3taJyN4toHQaNoUkl2heETANnBhkx_8",
  authDomain: "milaneelucas-e0638.firebaseapp.com",
  projectId: "milaneelucas-e0638",
  storageBucket: "milaneelucas-e0638.firebasestorage.app",
  messagingSenderId: "50504367793",
  appId: "1:50504367793:web:5e4b08383012025adb2c90"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
export const db = getFirestore(app);