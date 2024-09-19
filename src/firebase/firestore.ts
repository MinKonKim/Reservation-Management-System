import { getFirestore } from "firebase/firestore/lite";
import firebasedb from "./firebase";

const fireStore = getFirestore(firebasedb);
export default fireStore;
