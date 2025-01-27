import apiClient from "@/shared/utils/apiClient";
import Cookies from "js-cookie";

interface SigninResponse {
  success: boolean;
  message: string;
  data?: {
    userId: string;
    email: string;
    token: string;
  };
}

interface SigninResult {
  success: boolean;
  message: string;
}

export const signin = async (
  email: string,
  password: string
): Promise<SigninResult> => {
  try {
    const response = await apiClient.post<SigninResponse>("/auth/signin", {
      email,
      password,
    });

    const { data } = response;
    if (data.success && data.data) {
      Cookies.set("userToken", data.data.token, {
        expires: 7,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      return {
        success: true,
        message: data.message,
      };
    }

    return {
      success: false,
      message: data.message || "로그인 실패",
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error("로그인 중 에러 발생:", errorMessage);

    return {
      success: false,
      message: errorMessage,
    };
  }
};
