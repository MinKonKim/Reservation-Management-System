"use client";
import { SignupForm } from "@/components/signup";
import { SignupFormType } from "@/modules/auth/types";
import { apiClient } from "@/shared/utils";
import { SubmitHandler } from "react-hook-form";

const SignupPage = () => {
  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    const response = await apiClient.post("/auth/signup", { ...data });
    // user 인지 , admin 인지 구별하고 role을 부여해 , users 테이블 까지 넣어주는 것이 원칙.
    console.log(response);
  };

  return (
    <div className="w-full mx-2">
      {/* TODO: 각각의 입력마다 유효성 검사 +  UI  */}
      <h2 className="title-md">회원가입</h2>
      <SignupForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignupPage;
