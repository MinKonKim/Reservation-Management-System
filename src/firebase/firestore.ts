import { collection, getFirestore } from "firebase/firestore";
import firebasedb from "./firebase";

export const db = getFirestore(firebasedb);

export const USER_COLLECTION = collection(db, "users");
