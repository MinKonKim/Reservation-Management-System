import GoogleSignupButton from "./GoogleSignupButton";
import KakaoSignupButton from "./KakaoSignupButton";
import NaverSignupButton from "./NaverSignupButton";
const SocialSignupButtons = () => {
  return (
    <div className="border-t border-gray-300 flex flex-col gap-2 py-4">
      <GoogleSignupButton />
      <KakaoSignupButton />
      <NaverSignupButton />
    </div>
  );
};

export default SocialSignupButtons;
