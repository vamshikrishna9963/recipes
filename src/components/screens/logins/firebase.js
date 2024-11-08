// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUr1NcIW5h20Jrrj6wc7witU77L1g7RwM",
  authDomain: "recipe-project-98e3c.firebaseapp.com",
  projectId: "recipe-project-98e3c",
  storageBucket: "recipe-project-98e3c.firebasestorage.app",
  messagingSenderId: "800113683727",
  appId: "1:800113683727:web:b80c0a319ac99f7cf4227a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore(app)
export default app

