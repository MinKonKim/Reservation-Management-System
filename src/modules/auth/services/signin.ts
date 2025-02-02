import { auth } from "@/firebase";
import { PromiseApiResponse } from "@/shared/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SigninResponse } from "../types";
import { authErrorHandler } from "../utils";

// 🔹 로그인 서비스 함수
export const signin = async (
  email: string,
  password: string
): PromiseApiResponse<SigninResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const token = await user.getIdToken();

    return {
      success: true,
      message: "로그인 성공!",
      data: { userId: user.uid, token, status: 200 },
    };
  } catch (error: unknown) {
    const { errorMessage, statusCode } = authErrorHandler(error);
    return {
      success: false,
      message: errorMessage,
      data: { status: statusCode },
    };
  }
};
