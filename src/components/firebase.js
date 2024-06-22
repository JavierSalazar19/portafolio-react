// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyBFd4Zn85jU881APjoXv5hqqThJX0tM26E",
  authDomain: "consumirdatos.firebaseapp.com",
  projectId: "consumirdatos",
  storageBucket: "consumirdatos.appspot.com",
  messagingSenderId: "902741548731",
  appId: "1:902741548731:web:3d9908bf06697b8b8cd39e"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };
