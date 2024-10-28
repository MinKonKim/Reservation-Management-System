"use client";
import AutoForm from "@/components/FormComponent";
const SignupPage = () => {
  const basicInfo = {
    email: "example@example.com",
    password: "password123",
    isAdmin: false,
    address: "123 Main St",
    birthDate: new Date(),
    role: ["Admin", "User", "Guest"],
  };

  return <AutoForm fields={basicInfo} />;
};

export default SignupPage;
