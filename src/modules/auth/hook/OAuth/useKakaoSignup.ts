import { useRoleStore } from "@/modules/user/stores";
import { apiClient } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";

type KakaoSignupResponse = {
  success: boolean;
  url?: string;
  message?: string;
};

export const useKakaoSignup = () => {
  const { role } = useRoleStore();
  return useMutation<KakaoSignupResponse, Error>({
    mutationFn: async () => {
      const { data } = await apiClient.post<KakaoSignupResponse>(
        `/auth/kakao?role=${role}`
      );
      if (!data.success) throw new Error(data.message);
      return data;
    },
    onSuccess: (data) => {
      if (data.url) console.log(data.url);
    },
  });
};
