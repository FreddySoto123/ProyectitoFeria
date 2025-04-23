// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_xSKv-jLCG5wjPaWzArVK3qQA1gx-Jco",
  authDomain: "tarjeta-nfc.firebaseapp.com",
  projectId: "tarjeta-nfc",
  storageBucket: "tarjeta-nfc.firebasestorage.app",
  messagingSenderId: "131202672313",
  appId: "1:131202672313:web:2c28815b99ca7dda6d5d68"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };