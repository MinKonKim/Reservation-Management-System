"use client";
import { auth } from "@/firebase/firebase";
import { signInAnonymously } from "firebase/auth";
import { useEffect } from "react";

const LoginPage = () => {
  const testFirebaseAuthConnection = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      console.log("익명 로그인 성공:", userCredential.user);
      alert("Firebase 인증 연결 성공");
    } catch (error) {
      console.error("Firebase 인증 연결 실패:", error);
      alert("Firebase 인증 연결 실패");
    }
  };
  useEffect(() => {
    testFirebaseAuthConnection();
  }, []);
  return <div>LoginPage</div>;
};

export default LoginPage;
