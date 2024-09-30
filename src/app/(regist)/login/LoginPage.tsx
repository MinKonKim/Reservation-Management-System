"use client";
// import GoogleRegister from "./_components/GoogleRegister";
import Button from "@/components/ButtonComponent/Button";
import Header from "@/components/HeaderComponent/Header";
import Input from "@/components/InputComponent/Input";
import { auth } from "@/firebase/fireauth";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) {
      alert("올바른 정보를 입력해 주세요!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log("User logged in:", userCredential.user);
      router.push("/login-success");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Header tag="h2" size="medium">
        로그인 페이지
      </Header>
      <form
        onSubmit={handleLogin}
        className="flex flex-col h-[600px] justify-center m-1 gap-4"
      >
        <div className="flex flex-col">
          <span className="font-bold">이메일</span>
          <Input type="email" ref={emailRef} placeholder="이메일" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">비밀번호</span>
          <Input type="password" ref={passwordRef} placeholder="비밀번호" />
        </div>
        <Button type="submit">로그인</Button>
      </form>
      <div className="border-t-2 p-1 flex items-center justify-center">
        <p className="mt-2">
          아직 회원이 아니신가요?
          <Link
            href="/sign_up"
            className="hover:text-indigo-500 font-bold ml-2"
          >
            회원가입
          </Link>
        </p>
      </div>
      {/* <GoogleRegister /> */}
    </>
  );
};

export default LoginPage;
