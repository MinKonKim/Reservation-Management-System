import { useGoogleSignup } from "@/modules/auth/hook/OAuth";
import { googleSignup } from "@/modules/auth/services/social";
import { GoogleIcon } from "@/shared/Icons";
const GoogleSignupButton = () => {
  const googleSignupMutation = useGoogleSignup();

  const handleGoogleSignup = async () => {
    const { data } = await googleSignup();
    if (data?.url) {
      window.location.href = data.url;
    }
  };

  return (
    <button
      className="social-signup-button bg-white text-black"
      onClick={handleGoogleSignup}
      disabled={googleSignupMutation.isPending}
    >
      <GoogleIcon />
      {googleSignupMutation.isPending ? "로그인 중..." : "Google로 로그인하기"}
    </button>
  );
};

export default GoogleSignupButton;
