// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "coffee-shop-93368.firebaseapp.com",
  projectId: "coffee-shop-93368",
  storageBucket: "coffee-shop-93368.appspot.com",
  messagingSenderId: "610579618809",
  appId: "1:610579618809:web:2e4369607dd8639c2a3b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)