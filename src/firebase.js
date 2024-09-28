import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYQbmkBm7F79j5APBkGA_jHFqH1Lg9yoY",
  authDomain: "clone-96a28.firebaseapp.com",
  projectId: "clone-96a28",
  storageBucket: "clone-96a28.appspot.com",
  messagingSenderId: "200744717957",
  appId: "1:200744717957:web:e6f1c2641f6544063b63ec",
  measurementId: "G-D9Q611BRNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
