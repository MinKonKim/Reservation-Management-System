import { useMutation } from "@tanstack/react-query";
import { googleSignup } from "../../services/social";

type GoogleSignupResponse = {
  success: boolean;
  url?: string;
  message?: string;
};

const handleGoogleSignup = async () => {
  const { data, success, error } = await googleSignup();
  return {
    success,
    url: data?.url,
    message: success ? data?.provider : error?.message,
  };
};

const useGoogleSignup = () => {
  return useMutation<GoogleSignupResponse>({
    mutationFn: handleGoogleSignup,
    onSuccess: () => {
      console.log("Google 로그인 성공!");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useGoogleSignup;
