// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7N3mav8S2Rg_rHLCC3Ev-pEg463gJEFw",
  authDomain: "insurance-app-772db.firebaseapp.com",
  projectId: "insurance-app-772db",
  storageBucket: "insurance-app-772db.appspot.com",
  messagingSenderId: "258235275909",
  appId: "1:258235275909:web:98967a3f5a752e6fd367ec",
  measurementId: "G-GSSVZ4NSV6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);