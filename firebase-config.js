// firebase-config.js
// Add your Firebase project config here (from Firebase Console -> Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyA4yRkCYzUDc_GY_ou1UYJ7bIytLa-DwJY",
  authDomain: "dynablocks-ce7d8.firebaseapp.com",
  projectId: "dynablocks-ce7d8",
  storageBucket: "dynablocks-ce7d8.firebasestorage.app",
  messagingSenderId: "660768350715",
  appId: "1:660768350715:web:7b0e02afcf6b7f4b0deb5e",
  measurementId: "G-H3GCKHN9PF"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";
initializeApp(firebaseConfig);
