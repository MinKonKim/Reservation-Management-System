import { isFirebaseError } from "@/shared/utils/isFirebaseError";

export const authErrorHandler = (error: unknown) => {
  if (!isFirebaseError(error)) {
    return { errorMessage: "알 수 없는 오류가 발생했습니다.", statusCode: 404 };
  }
  switch (error.code) {
    case "auth/invalid-credential":
      return {
        errorMessage: "이메일 또는 비밀번호가 올바르지 않습니다.",
        statusCode: 401,
      };
    case "auth/user-not-found":
      return { errorMessage: "존재하지 않는 사용자입니다.", statusCode: 404 };
    case "auth/wrong-password":
      return { errorMessage: "비밀번호가 일치하지 않습니다.", statusCode: 401 };
    case "auth/too-many-requests":
      return {
        errorMessage: "너무 많은 시도로 인해 일시적으로 차단되었습니다.",
        statusCode: 429,
      };
    default:
      return { errorMessage: "서버에러...", statusCode: 500 };
  }
};
