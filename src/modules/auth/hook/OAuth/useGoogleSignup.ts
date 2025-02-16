import { useRoleStore } from "@/stores";
import { useMutation } from "@tanstack/react-query";
import { googleSignup } from "../../services/OAuth";

type GoogleSignupResponse = {
  success: boolean;
  url?: string;
  message?: string;
};

const handleGoogleSignup = async (role: string) => {
  const { data, success, error } = await googleSignup(role);
  return {
    success,
    url: data?.url,
    message: success ? data?.provider : error?.message,
  };
};

export const useGoogleSignup = () => {
  const { role } = useRoleStore();
  return useMutation<GoogleSignupResponse>({
    mutationFn: () => handleGoogleSignup(role!),
    onSuccess: ({ message }) => {
      console.log("Google 로그인 성공!", message);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
