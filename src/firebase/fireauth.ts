import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebasedb from "./firebase";

const fireAuth = getAuth(firebasedb);
const googleAuthProvider = new GoogleAuthProvider();

export { fireAuth, googleAuthProvider };
