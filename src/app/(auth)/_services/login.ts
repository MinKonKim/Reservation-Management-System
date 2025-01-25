import axios from "axios";
import Cookies from "js-cookie";

interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    userId: string;
    email: string;
    token: string;
  };
}

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post<LoginResponse>("/api/login", {
      email,
      password,
    });

    const { data } = response;
    if (data.success && data.data) {
      Cookies.set("userToken", data.data.token, {
        expires: 7, // 쿠키 유지 기간 (7일)
        secure: process.env.NODE_ENV === "production", // HTTPS에서만 전송
        sameSite: "strict", // Cross-Site Request 방지
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(
      "로그인 중 에러 발생:",
      error.response?.data?.message || error.message
    );
  }
};
