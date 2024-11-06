"use client";
import CreateForm from "@/components/FormComponent";
import { FormFields } from "@/types/FormFields";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const loginInfo = {
    email: "이메일",
    password: "비밀번호",
  };

  const route = useRouter();

  const handleSubmit = async (data: FormFields) => {
    try {
      const { email, password } = data;

      const loginData = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      const { uid } = loginData.data;

      const userData = await axios.get(`/api/user/${uid}`);
      const { is_admin } = userData.data;
      route.push(`/${is_admin ? "admin" : "user"}/dashboard/${uid}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CreateForm fields={loginInfo} onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
