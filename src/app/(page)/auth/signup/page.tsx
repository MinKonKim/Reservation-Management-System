"use client";
import CreateForm from "@/components/FormComponent";
import { UserType } from "@/types/firebase.type";
import { FormFields } from "@/types/FormFields";
import { UserInputType } from "@/types/user";
import axios from "axios";
const SignupPage = () => {
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
    // 회원가입 로직 넣기
    // data 에 입력된 정보가 제대로 들어감
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
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await axios.post("/api/auth/user", { userData });
  };
  return <CreateForm fields={basicInfo} onSubmit={handleFormSubmit} />;
};

export default SignupPage;
