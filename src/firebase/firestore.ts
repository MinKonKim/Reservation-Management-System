import { getFirestore } from "firebase/firestore";
import firebasedb from "./firebase";

const fireStore = getFirestore(firebasedb);
export default fireStore;
