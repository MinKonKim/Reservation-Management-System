"use client";

import { SignupForm, SignupFormType } from "@/components/signup";
import { signup } from "@/modules/auth/services/signup";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const SignupPage = () => {
  const router = useRouter(); // useRouter 훅 사용

  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    const { email, password } = data;
    const response = await signup(email, password);
    if (response.success) {
      router.push("/auth/login");
    } else {
      // TODO:실패 시 사용자에게 알림 (예: 알림 UI 제작)
      alert(response.message);
    }
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
