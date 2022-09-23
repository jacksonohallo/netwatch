// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoxAJzpAblcMsf3go6bO5vbcAVB7yS4_Q",
  authDomain: "netflix-clone-579f9.firebaseapp.com",
  projectId: "netflix-clone-579f9",
  storageBucket: "netflix-clone-579f9.appspot.com",
  messagingSenderId: "799025814733",
  appId: "1:799025814733:web:3c403a83b33f2200e4dd84",
  measurementId: "G-FW31PVHW9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
