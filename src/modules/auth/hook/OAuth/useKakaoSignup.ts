import { useMutation } from "@tanstack/react-query";
import { kakaoSignup } from "../../services/social";

type KakaoSignupResponse = {
  success: boolean;
  url?: string;
  message?: string;
};

const handleKakaoSignup = async () => {
  const { data, success, error } = await kakaoSignup();
  return {
    success,
    url: data?.url,
    message: success ? data?.provider : error?.message,
  };
};

export const useKakaoSignup = () => {
  return useMutation<KakaoSignupResponse>({
    mutationFn: handleKakaoSignup,
    onSuccess: () => {
      console.log("Kakao 로그인 성공!");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
