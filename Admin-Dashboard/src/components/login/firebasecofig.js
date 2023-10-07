// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAR4Jij8f7drHH2M6Xvw8Fcw4dHtzikB0s",
  authDomain: "crafty-95149.firebaseapp.com",
  projectId: "crafty-95149",
  storageBucket: "crafty-95149.appspot.com",
  messagingSenderId: "200738428265",
  appId: "1:200738428265:web:8c7908f9b1ccf8500ad9f8",
  measurementId: "G-2Z3T1MSKKJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database =getAuth(app)
