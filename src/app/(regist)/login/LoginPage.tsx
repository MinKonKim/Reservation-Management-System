import React from "react";
// import GoogleRegister from "./_components/GoogleRegister";
import Header from "@/components/HeaderComponent/Header";
import Input from "@/components/InputComponent/Input";

const LoginPage = () => {
  return (
    <>
      <Header tag="h2" size="medium">
        로그인 페이지
      </Header>
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <div className="border-t-2 m-2 p-1 flex flex-col gap-3 items-center">
        <span className="mt-2">아직 회원이 아니신가요?</span>
        <div className="flex gap-5">
          <p
            className={`
            font-bold rounded-lg px-2 m-1 border-2 border-slate-100 flex items-center justify-center
            hover:border-cyan-600 hover:text-cyan-600 
            `}
          >
            회원가입
          </p>
          <p
            className={`
            font-bold rounded-lg  p-2 m-1 border-2 flex items-center justify-center
            hover:border-red-600 hover:text-red-600 
            `}
          >
            관리자가입
          </p>
        </div>
      </div>
      {/* <GoogleRegister /> */}
    </>
  );
};

export default LoginPage;
