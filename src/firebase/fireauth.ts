import { getAuth } from "firebase/auth/cordova";
import firebasedb from "./firebase";

const fireAuth = getAuth(firebasedb);
export default fireAuth;
