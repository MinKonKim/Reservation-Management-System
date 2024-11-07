"use client";
import CreateForm from "@/components/(StyledComponents)/FormComponent";
import { UserType } from "@/types/firebase.type";
import { FormFields } from "@/types/FormFields";
import { UserInputType } from "@/types/user";
import axios from "axios";
import { useRouter } from "next/navigation";
const SignupPage = () => {
  const router = useRouter();
  const basicInfo: UserInputType = {
    name: "이름을 입력해주세요.",
    email: "ex) example@example.com",
    password: "6글자 이상 입력해주세요.",
    passwordCheck: "위와 동일하게 입력해주세요.",
    address: "주소",
    phoneNumber: "ex) 000-0000-0000",
    role: ["Admin", "User"], // 역할
  };

  const handleFormSubmit = async (data: FormFields) => {
    try {
      const { email, password } = data;
      const userCredential = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
      });

      const userData: UserType = {
        id: userCredential.data.uid,
        email: email as string,
        password: password as string,
        address: data.address as string,
        phone_number: data.phoneNumber as string,
        is_admin: data.role === "Admin" ? true : false,
        name: data.name as string,
      };
      const response = await axios.post("/api/auth/user", { userData });

      // 성공하면 Login 페이지로 이동
      if (response.status === 200) {
        router.push("/auth/login");
      } else {
        console.error("회원 정보 저장에 실패했습니다.");
      }
    } catch (error) {
      console.log("회원가입중 오류 발생 :", error);
    }
  };
  return <CreateForm fields={basicInfo} onSubmit={handleFormSubmit} />;
};

export default SignupPage;
