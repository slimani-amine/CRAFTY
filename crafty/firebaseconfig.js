// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR4Jij8f7drHH2M6Xvw8Fcw4dHtzikB0s",
  authDomain: "crafty-95149.firebaseapp.com",
  projectId: "crafty-95149",
  storageBucket: "crafty-95149.appspot.com",
  messagingSenderId: "200738428265",
  appId: "1:200738428265:web:8ec67dffbd4c8d1a0ad9f8",
  measurementId: "G-WRENZL128G"
};

// Initialize Firebase
export const fireBase_app = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth(fireBase_app);
export const fireStore = getFirestore(fireBase_app);
