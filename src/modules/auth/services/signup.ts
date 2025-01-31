import { Result } from "@/shared/types";
import apiClient from "@/shared/utils/apiClient";

interface SignupResponse {
  success: boolean;
  message: string;
  data: {
    userId: string;
    email: string;
  };
}

export const signup = async (
  email: string,
  password: string
): Promise<Result> => {
  try {
    const response = await apiClient.post<SignupResponse>("/auth/signup", {
      email,
      password,
    });
    const { data } = response;
    if (!data.success) {
      return {
        success: false,
        message: data.message,
      };
    }
    return {
      success: true,
      message: data.message,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("회원가입 중 에러 발생:", errorMessage);

    return {
      success: false,
      message: errorMessage,
    };
  }
};
