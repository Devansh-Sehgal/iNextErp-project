
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlmqRdY3ggf7aawF6NDL3a3znaLO_-Qm8",
  authDomain: "inexterpsolutions.firebaseapp.com",
  projectId: "inexterpsolutions",
  storageBucket: "inexterpsolutions.firebasestorage.app",
  messagingSenderId: "412815477818",
  appId: "1:412815477818:web:eb3440724fb6d658253903",
  measurementId: "G-31LMC8MJZG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
