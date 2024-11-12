import { userStoreType } from "@/stores/userStore";
import axios from "axios";

export const login = async (email: string, password: string) => {
  try {
    // 1. 로그인 요청
    const loginResponse = await axios.post("/api/auth/login", {
      email,
      password,
    });

    const { uid } = loginResponse.data;

    // 2. 유저 데이터 요청
    const userResponse = await axios.get(`/api/user/${uid}`);

    if (!userResponse.data) {
      return { success: false, user: null, message: "유저 정보가 없습니다." };
    }

    const { id, name, is_admin }: userStoreType = userResponse.data;

    // 3. 로그인한 유저 정보를 쿠키에 저장
    const userStorage = JSON.stringify({
      user: { id, name, is_admin },
    });

    // 클라이언트 측에서 쿠키 설정
    document.cookie = `user-storage=${userStorage}; path=/; max-age=${
      30 * 24 * 60 * 60
    }`;

    return {
      success: true,
      user: { id, name, is_admin },
      message: "로그인 성공",
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      user: null,
      message: "로그인 실패",
      error: error.message,
    };
  }
};
