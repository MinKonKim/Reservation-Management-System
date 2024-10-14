"use client";
import Button from "@/components/ButtonComponent/Button";
import Header from "@/components/HeaderComponent/Header";
import Input from "@/components/InputComponent/Input";
import axios from "axios";
import React, { useRef } from "react";

const SignUpAdminPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSignup = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;
    try {
      await axios.post("/api/user", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        role: "admin",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header
        tag="h3"
        size="large"
        className="w-full items-center justify-center flex m-3 p-3"
      >
        어드민 가입
      </Header>
      <Input
        type="email"
        ref={emailRef}
        placeholder="아이디 ex) asdf@gmail.com"
        required={true}
      />
      <Input
        type="password"
        ref={passwordRef}
        placeholder="비밀번호"
        required={true}
      />
      <Input
        type="password"
        ref={passwordCheckRef}
        placeholder="비밀번호 확인"
        required={true}
      />
      <Input type="text" ref={nameRef} placeholder="이름" required={true} />
      <Button onClick={handleSignup}> 가입 하기 </Button>
    </>
  );
};

export default SignUpAdminPage;
