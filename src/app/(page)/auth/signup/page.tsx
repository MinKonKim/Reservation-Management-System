"use client";
import CreateForm from "@/components/(StyledComponents)/FormComponent";
import { UserType } from "@/types/firebase.type";
import { FormFields } from "@/types/FormFields";
import axios from "axios";
import { useRouter } from "next/navigation";
const SignupPage = () => {
  const router = useRouter();

  const basicInfo: FormFields = {
    name: {
      label: "이름",
      type: "text",
      placeholder: "이름을 입력해주세요.",
      defaultValue: "",
    },
    email: {
      label: "이메일",
      type: "text",
      placeholder: "ex) example@example.com",
      defaultValue: "",
    },
    password: {
      label: "비밀번호",
      type: "password",
      placeholder: "6글자 이상 입력해주세요.",
      defaultValue: "",
    },
    passwordCheck: {
      label: "비밀번호 확인",
      type: "password",
      placeholder: "위와 동일하게 입력해주세요.",
      defaultValue: "",
    },
    address: {
      label: "주소",
      type: "text",
      placeholder: "주소를 입력해주세요.",
      defaultValue: "",
    },
    phoneNumber: {
      label: "전화번호",
      type: "text",
      placeholder: "ex) 000-0000-0000",
      defaultValue: "",
    },
    role: {
      label: "역할",
      type: "select",
      options: ["Admin", "User"], // 선택 가능한 옵션
      defaultValue: "User",
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (data: Record<string, any>) => {
    try {
      const { email, password, name, address, phoneNumber, role } = data;
      const userCredential = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
      });

      const userData: UserType = {
        id: userCredential.data.uid,
        email,
        password,
        address,
        phone_number: phoneNumber,
        is_admin: role === "Admin" ? true : false,
        name,
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
