import { useRoleStore } from "@/modules/user/stores";
import { apiClient } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";

interface GoogleSignupResponse {
  success: boolean;
  url?: string;
  message?: string;
}

export const useGoogleSignup = () => {
  const { role } = useRoleStore();
  return useMutation<GoogleSignupResponse, Error>({
    mutationFn: async () => {
      const { data } = await apiClient.post<GoogleSignupResponse>(
        `/auth/google?role=${role}`
      );
      if (!data.success) throw new Error(data.message);
      return data;
    },
    onSuccess: (data) => {
      if (data.url) console.log(data.url);
    },
  });
};
