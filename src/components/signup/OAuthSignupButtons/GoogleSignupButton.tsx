// import { useGoogleSignup } from "@/modules/auth/hook/OAuth/useGoogleSignup";
import { GoogleIcon } from "@/shared/Icons";
const GoogleSignupButton = () => {
  // const googleSignupMutation = useGoogleSignup();

  // const handleGoogleSignup = async () => {
  //   const response = await googleSignupMutation.mutateAsync();
  //   if (response?.url) {
  //     window.location.href = response.url;
  //   }
  // };

  return (
    <button
      className="social-signup-button bg-white text-black"
      onClick={handleGoogleSignup}
      disabled={googleSignupMutation.isPending}
    >
      <GoogleIcon />
      {googleSignupMutation.isPending ? "로그인 중..." : "Google로 시작하기"}
    </button>
  );
};

export default GoogleSignupButton;
