"use client";
import Form from "@/components/FormComponent";
import { FormType } from "@/types/FormType";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [basicInfo, setBasicInfo] = useState<FormType>({
    email: "",
    password: "",
    passwordCheck: "",
  });
  const [additionalInfo, setAdditionalInfo] = useState<FormType>({
    name: "",
    address: "",
    phoneNumber: "",
    isAdmin: false,
  });

  const goNextStep = () => {
    if (basicInfo.password !== basicInfo.passwordCheck) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    setStep(2);
  };

  const handleSignup = async () => {
    const { data: userCredential } = await axios.post("/api/auth/signup", {
      email: basicInfo.email,
      password: basicInfo.password,
    });

    if (!userCredential) {
      setError("유저 기본정보를 저장하지 못함.");
    }

    await axios.post("/api/auth/user", {
      id: userCredential.uid,
      ...basicInfo,
      ...additionalInfo,
    });

    router.push("/user/profile");
  };

  return (
    <>
      {step === 1 ? (
        <Form
          handleSubmit={goNextStep}
          formData={basicInfo}
          setFormData={setBasicInfo}
        />
      ) : (
        <Form
          handleSubmit={handleSignup}
          formData={additionalInfo}
          setFormData={setAdditionalInfo}
        />
      )}

      {error && <p className="color-red">{error}</p>}
    </>
  );
};

export default SignupPage;
