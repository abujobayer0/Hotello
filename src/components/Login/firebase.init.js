// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM1--jyC1XJsu8koj-PsrF0pNCvIYw3EY",
  authDomain: "hotello-d1707.firebaseapp.com",
  projectId: "hotello-d1707",
  storageBucket: "hotello-d1707.appspot.com",
  messagingSenderId: "627596790305",
  appId: "1:627596790305:web:3cd42850d0e608f110f160",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
