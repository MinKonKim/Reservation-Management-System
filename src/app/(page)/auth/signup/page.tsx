"use client";

import Input from "@/shared/components/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type SignupFormType = {
  email: string;
  password: string;
  passwordCheck: string;
};

const SignupPage = () => {
  const { register, handleSubmit } = useForm<SignupFormType>();

  const onSubmit: SubmitHandler<SignupFormType> = (data) => console.log(data);

  return (
    <div className="w-full mx-2">
      <h2 className="font-semibold text-2xl ml-2 mb-4">로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-2">
        <Input {...register("email")} label="아이디" required />
        <Input
          {...register("password")}
          label="비밀번호"
          type="password"
          required
        />
        <Input
          {...register("passwordCheck")}
          label="비밀번호 확인"
          type="password"
          required
        />
      </form>
      <div>
        <button>구글 로그인</button>
        <button>네이버 로그인</button>
      </div>
    </div>
  );
};

export default SignupPage;
