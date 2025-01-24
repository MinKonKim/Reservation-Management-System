// Import Firebase modules
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const env = process.env;
const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
