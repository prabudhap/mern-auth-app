// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5dfc6.firebaseapp.com",
  projectId: "mern-auth-5dfc6",
  storageBucket: "mern-auth-5dfc6.appspot.com",
  messagingSenderId: "1085820959290",
  appId: "1:1085820959290:web:834f798065ea83c6799303"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
