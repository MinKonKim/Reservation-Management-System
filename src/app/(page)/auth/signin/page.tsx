"use client";
import { Button, Input, TextLoading } from "@/shared/components";
import { apiClient } from "@/shared/utils";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type SigninFormType = {
  email: string;
  password: string;
};

const SigninPage = () => {
  const { register, handleSubmit } = useForm<SigninFormType>();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit: SubmitHandler<SigninFormType> = async (data) => {
    setIsLoading(true);
    const response = await apiClient.post("/auth/signin", { ...data });
    console.log(response);
    setIsLoading(false);
  };

  return (
    <div className="w-full mx-2 mb-4 ">
      <h2 className="title-md">로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-2 mb-4">
        <Input
          {...register("email")}
          label="이메일"
          placeholder="이메일을 입력해주세요."
        />
        <Input
          {...register("password")}
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        {/* isLoading이 true면 disabled 도 true가 되어 클릭 불가. */}
        <Button color="point" isFull disabled={isLoading}>
          {isLoading ? <TextLoading text="로그인중..." /> : "로그인 하기"}
        </Button>
      </form>
      <Link
        href={"/auth/role-select"}
        className="text-sm w-full flex justify-center py-2 text-point-700 hover:text-point-500 hover:underline-1 "
      >
        아직 회원이 아니신가요?
      </Link>
    </div>
  );
};

export default SigninPage;
