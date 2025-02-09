import { useGoogleSignup } from "@/modules/auth/hook/OAuth";

const GoogleLoginButton = () => {
  const googleSignupMutation = useGoogleSignup();

  const handleGoogleSignup = async () => {
    const response = await googleSignupMutation.mutateAsync();
    if (response.url) {
      window.location.href = response.url;
    }
  };

  return (
    <button
      className="w-full h-[40px] "
      onClick={handleGoogleSignup}
      disabled={googleSignupMutation.isPending}
    >
      {googleSignupMutation.isPending ? "로그인 중..." : "Google로 로그인하기"}
    </button>
  );
};

export default GoogleLoginButton;
