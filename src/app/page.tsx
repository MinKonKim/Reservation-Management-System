"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/signup");
  };
  return (
    <div className="flex h-screen items-center justify-center ">
      <button onClick={handleClick} className="p-5 bg-blue-600 rounded-lg">
        DB연결확인버튼
      </button>
    </div>
  );
};

export default Home;
