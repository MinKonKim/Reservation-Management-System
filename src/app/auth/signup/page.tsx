"use client";
import CreateForm from "@/components/FormComponent";
import { FormFields } from "@/types/FormType";
const SignupPage = () => {
  const basicInfo = {
    email: "example@example.com",
    password: "password123",
    isAdmin: false,
    address: "123 Main St",
    birthDate: new Date(),
    role: ["Admin", "User", "Guest"],
  };
  const handleFormSubmit = (data: FormFields) => {
    // 회원가입 로직 넣기
    console.log("", data);
  };
  return <CreateForm fields={basicInfo} onSubmit={handleFormSubmit} />;
};

export default SignupPage;
