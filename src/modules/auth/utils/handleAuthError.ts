import { AuthError } from "@supabase/supabase-js";

/**
 * Supabase Auth 에러 핸들링 함수
 * @param error - Supabase에서 발생한 인증 관련 에러
 * @returns 에러 메시지 및 HTTP 상태 코드
 */
export const handleAuthError = (
  error: unknown
): { message: string; status: number } => {
  if (error instanceof AuthError) {
    if ("code" in error && "status" in error) {
      switch (error.status) {
        case 403:
          return {
            message: "접근이 금지되었습니다. 해당 기능을 사용할 수 없습니다.",
            status: 403,
          };
        case 422:
          return {
            message: "요청을 처리할 수 없습니다. 계정 상태를 확인해주세요.",
            status: 422,
          };
        case 429:
          return {
            message: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요.",
            status: 429,
          };
        case 500:
          return {
            message: "서버 오류가 발생했습니다. 관리자에게 문의하세요.",
            status: 500,
          };
        case 501:
          return {
            message: "지원되지 않는 기능입니다. 설정을 확인하세요.",
            status: 501,
          };
        default:
          return {
            message: `인증 오류가 발생했습니다. (${error.message})`,
            status: error.status as number,
          };
      }
    }

    // CustomAuthError (클라이언트 상태에서 발생한 에러)
    if ("name" in error) {
      return {
        message: `인증 오류가 발생했습니다: ${error}`,
        status: 400,
      };
    }
  }

  // 예상치 못한 오류 처리
  return { message: "알 수 없는 오류가 발생했습니다.", status: 500 };
};
