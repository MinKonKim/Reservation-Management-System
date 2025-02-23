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
      <div className="social-icon">
        <KakaoIcon width={25} />
      </div>
      <p>
        {kakaoSignupMutation.isPending ? "로그인 중..." : "Kakao로 시작하기"}
      </p>
    </button>
  );
};

export default KakaoSignupButton;
