import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTjSfYKSwTz7SuCup-bD2mWlzo2jUSAcU",
  authDomain: "hebras-9b631.firebaseapp.com",
  projectId: "hebras-9b631",
  storageBucket: "hebras-9b631.appspot.com",
  messagingSenderId: "790847729158",
  appId: "1:790847729158:web:3be1c974626961dfa99d87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);