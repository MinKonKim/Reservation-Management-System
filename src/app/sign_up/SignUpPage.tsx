"use client";
import fireAuth from "@/firebase/fireauth";
import fireStore from "@/firebase/firestore";
import { doc, setDoc } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        fireAuth,
        email,
        password
      );
      const user = userCredential.user;

      // Firestore에 사용자 정보 저장
      await setDoc(doc(fireStore, "users", user.uid), {
        name: name,
        email: user.email,
        createdAt: new Date(),
      });

      router.push("/login");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
