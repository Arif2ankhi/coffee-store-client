// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0BIVBC_newycM8suackW_G5XJQC6Mj28",
  authDomain: "coffee-store-3126f.firebaseapp.com",
  projectId: "coffee-store-3126f",
  storageBucket: "coffee-store-3126f.firebasestorage.app",
  messagingSenderId: "420155424787",
  appId: "1:420155424787:web:03d0b5ef9f34c32350bfe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
