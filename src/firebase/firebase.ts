import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtc-hauUyj7FvcmuOmDT7R7dWhaNKVCIg",
  authDomain: "reservation-management-52a92.firebaseapp.com",
  projectId: "reservation-management-52a92",
  storageBucket: "reservation-management-52a92.appspot.com",
  messagingSenderId: "1076937914185",
  appId: "1:1076937914185:web:a5b232dd19ef0990bc8c98",
  measurementId: "G-JY2JEPR67B",
};

// apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // authentication 사용
export const db = getFirestore(app); // Firestore 사용
