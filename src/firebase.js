// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-perfomance-review-5078b.firebaseapp.com",
  projectId: "react-perfomance-review-5078b",
  storageBucket: "react-perfomance-review-5078b.appspot.com",
  messagingSenderId: "881833502556",
  appId: "1:881833502556:web:a1c2aaddacb6519f304399"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();
