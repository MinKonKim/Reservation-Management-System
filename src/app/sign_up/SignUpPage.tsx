import React from "react";
import Input from "@/components/InputComponent/Input";

const SignUpPage = () => {
  return (
    <div className="flex w-full h-screen justify-center ">
      <div className="border border-3 border-solid p-5 m-3 rounded-lg">
        <h3>회원가입</h3>
        <Input />
      </div>
    </div>
  );
};

export default SignUpPage;
