import { apiClient } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";

type GoogleSignupResponse = {
  success: boolean;
  url?: string;
  message?: string;
};

const googleSignup = async () => {
  const { data } = await apiClient.post<GoogleSignupResponse>("/auth/google");
  if (!data.success) throw new Error(data.message);
  return data;
};

const useGoogleSignup = () => {
  return useMutation<GoogleSignupResponse>({
    mutationFn: googleSignup,
    onSuccess: () => {
      console.log("Google 로그인 성공!");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useGoogleSignup;
