/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CreateForm from "@/components/(StyledComponents)/FormComponent";
import useUserStore from "@/stores/userStore";
import { FormFields } from "@/types/formFiled";
import { login } from "@/utils/login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const loginInfo: FormFields = {
    email: {
      label: "이메일",
      type: "text",
      placeholder: "이메일",
      defaultValue: "",
    },
    password: {
      label: "비밀번호",
      type: "password",
      placeholder: "비밀번호",
      defaultValue: "",
    },
  };

  const router = useRouter();
  const { setUser } = useUserStore();
  const handleSubmit = async (data: Record<string, any>) => {
    const { email, password } = data;

    const response = await login(email, password);

    if (response.success && response.user) {
      // 로그인 성공

      setUser(response.user);

      router.push(
        `/${response.user.is_admin ? "admin" : "user"}/dashboard/${
          response.user.id
        }`
      );
    } else {
      // 로그인 실패
      console.error(response.message);
    }
  };

  useEffect(() => {}, [router]);

  return (
    <div>
      <CreateForm fields={loginInfo} onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
