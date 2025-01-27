"use client";

import { Button, Input } from "@/shared/components";
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
      <h2 className="font-semibold text-2xl ml-2 mb-4">회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-2 mb-4">
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
        <Button type="submit" color="point" isFull>
          회원가입 하기
        </Button>
      </form>

      {/*TODO: 소셜 로그인 컴포넌트화 필요. */}
      <div className="border-t py-2 flex justify-between">
        <button>구글 로그인</button>
        <button>네이버 로그인</button>
      </div>
    </div>
  );
};

export default SignupPage;
