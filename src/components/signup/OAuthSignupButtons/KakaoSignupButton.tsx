import { useKakaoSignup } from "@/modules/auth/hook/OAuth";
import { KakaoIcon } from "@/shared/Icons";

const KakaoSignupButton = () => {
  const kakaoSignupMutation = useKakaoSignup();

  const handleKakaoSignup = async () => {
    const response = await kakaoSignupMutation.mutateAsync();
    if (response.url) {
      window.location.href = response.url;
    }
  };

  return (
    <button
      className="social-signup-button bg-[#FEE500] text-black"
      onClick={handleKakaoSignup}
      disabled={kakaoSignupMutation.isPending}
    >
      <KakaoIcon />
      {kakaoSignupMutation.isPending ? "로그인 중..." : "Kakao로 시작하기"}
    </button>
  );
};

export default KakaoSignupButton;
