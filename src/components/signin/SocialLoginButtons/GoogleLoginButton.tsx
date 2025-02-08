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
      onClick={handleGoogleSignup}
      disabled={googleSignupMutation.isPending}
    >
      {googleSignupMutation.isPending ? "로그인 중..." : "Google 로그인"}
    </button>
  );
};

export default GoogleLoginButton;
