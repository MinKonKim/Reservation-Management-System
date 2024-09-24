"use client";
import React, { useRef, useState } from "react";
import Input from "@/components/InputComponent/Input";
import Header from "@/components/HeaderComponent/Header";
import Button from "@/components/ButtonComponent/Button";
import axios from "axios";

const SignUpPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const handleSignup = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;
    try {
      const response = await axios.post("/api/user", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(`회원가입 실패 : ${error}`);
    }
  };
  return (
    <>
      <Header
        tag="h3"
        size="large"
        className="w-full items-center justify-center flex m-3 p-3"
      >
        회원가입
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
      {message && <p className="overflow-hidden">{message}</p>}
    </>
  );
};

export default SignUpPage;
