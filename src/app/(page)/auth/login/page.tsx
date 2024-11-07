"use client";
import CreateForm from "@/components/(StyledComponents)/FormComponent";
import useUserStore, { userStoreType } from "@/stores/userStore";
import { FormFields } from "@/types/FormFields";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const loginInfo = {
    email: "이메일",
    password: "비밀번호",
  };

  const route = useRouter();
  const { setUser } = useUserStore();
  const handleSubmit = async (data: FormFields) => {
    try {
      const { email, password } = data;

      const loginData = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      const { uid } = loginData.data;

      const userData = await axios.get(`/api/user/${uid}`);

      // 로그인한 유저 정보를 전역으로 저장 (LocalStorage)
      const { id, name, is_admin }: userStoreType = userData.data;
      if (id && name && is_admin) {
        setUser({
          id: id,
          name: name,
          is_admin: is_admin,
        });
      }

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
