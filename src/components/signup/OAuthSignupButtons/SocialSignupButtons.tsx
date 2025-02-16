import GoogleSignupButton from "./GoogleSignupButton";
import KakaoSignupButton from "./KakaoSignupButton";
import NaverSignupButton from "./NaverSignupButton";
const SocialSignupButtons = () => {
  return (
    <div className="border-t border-gray-300 flex flex-col gap-2 py-4">
      <p className="w-full flex items-center justify-center my-2 font-thin text-gray-500">
        간편 회원 가입
      </p>
      <GoogleSignupButton />
      <KakaoSignupButton />
      <NaverSignupButton />
    </div>
  );
};

export default SocialSignupButtons;
