import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface DecodedToken {
  userId: string;
  email: string;
  exp: number; // 토큰 만료 시간 (Unix timestamp)
}

interface AuthState {
  isAuthenticated: boolean;
  user: DecodedToken | null;
}

/**
 * useAuth 훅
 * - 로그인 여부를 확인하고, 사용자 정보를 반환
 */
export const useAuth = (): AuthState => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // 쿠키에서 토큰 가져오기
    const token = Cookies.get("userToken");

    if (token) {
      try {
        // 토큰 디코딩
        const decoded = jwtDecode<DecodedToken>(token);

        // 토큰 만료 확인
        const isExpired = decoded.exp * 1000 < Date.now();
        if (!isExpired) {
          setAuthState({
            isAuthenticated: true,
            user: decoded,
          });
        } else {
          // 만료된 토큰 제거
          Cookies.remove("user");
        }
      } catch (error) {
        console.error("토큰 디코딩 실패:", error);
        Cookies.remove("userToken"); // 잘못된 토큰 제거
      }
    }
  }, []); // 컴포넌트가 마운트될 때 한 번 실행

  return authState;
};
