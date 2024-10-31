"use client";
import CreateForm from "@/components/FormComponent";
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
    const credentialUser = await axios.post("/api/auth/signup", {
      email: email,
      password: password,
    });

    console.log(credentialUser.data.message);

    // const userData: UserType = {
    //   name: name as string,
    //   email: email as string, // 사용자 이메일(고유 값)
    //   password: password as string, // 비밀번호 (Firebase Auth 사용 시 필요 없을 수 있음)
    //   address: address as string,
    //   is_admin: role === "Admin" ? true : false, // 어드민 판별 true : 어드민  false : 유저
    //   phone_number: phoneNumber as string,
    //   createdAt: new Date(), // 계정 생성 시간
    //   updatedAt: new Date(), // 계정 정보 마지막 업데이트 시간
    // };
    // try {
    //   await axios.post("/api/auth/user", { userData });
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return <CreateForm fields={basicInfo} onSubmit={handleFormSubmit} />;
};

export default SignupPage;
