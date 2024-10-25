"use client";
import Form from "@/components/FormComponent";
import { FormType } from "@/types/FormType";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormType>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/auth", {
        email: formData.email,
        password: formData.password,
      });
      if (response) {
        router.push("/user/profile");
      }
      setError(null);
    } catch (error: unknown) {
      setError(error as string);
    }
  };

  return (
    <>
      <Form
        handleSubmit={handleSignup}
        formData={formData}
        setFormData={setFormData}
      />
      {error && <p className="color-red">{error}</p>}
    </>
  );
};

export default Signup;
