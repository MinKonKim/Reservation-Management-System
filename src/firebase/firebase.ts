import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_NEXT_PUBLIC_FIREBASE_MESSAGEINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.MEASUREMENTID,
};

// Initialize Firebase
const firebasedb = initializeApp(firebaseConfig);

export default firebasedb;
