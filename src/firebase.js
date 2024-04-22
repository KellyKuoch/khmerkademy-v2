// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqgFdamPMbrDY5h-oq7JCR2nBL8YOeULQ",
  authDomain: "khmerkademy-v2.firebaseapp.com",
  projectId: "khmerkademy-v2",
  storageBucket: "khmerkademy-v2.appspot.com",
  messagingSenderId: "135891295305",
  appId: "1:135891295305:web:2030bdd717afdf7ea37398",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
