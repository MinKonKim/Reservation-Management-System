import { FirebaseError } from "firebase/app";

export const isFirebaseError = (error: unknown): error is FirebaseError => {
  return typeof error === "object" && error != null && "code" in error;
};
