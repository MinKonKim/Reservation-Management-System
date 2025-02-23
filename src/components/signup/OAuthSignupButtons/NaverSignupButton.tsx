"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import NaverIcon from "../../../../public/png/btnG_Naver_Icon.png";
const NaverSignupButton = () => {
  return (
    <button
      className="social-signup-button bg-[#03c75A] text-white"
      onClick={() => signIn("naver")}
    >
      <Image
        className="social-icon"
        width={40}
        src={NaverIcon}
        alt="네이버 로그인 버튼 아이콘"
      />
      {"Naver로 시작하기"}
    </button>
  );
};

export default NaverSignupButton;
