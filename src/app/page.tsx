"use client";

import Button from "@/components/(StyledComponents)/ButtonComponent";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/signup");
  };
  return (
    <div className="flex h-screen items-center justify-center ">
      <Button onClick={() => router.push("/auth/login")}>로그인</Button>
      <Button onClick={handleClick}>회원가입</Button>
    </div>
  );
};

export default Home;
