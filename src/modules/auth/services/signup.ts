import { auth } from "@/firebase";
import { PromiseApiResponse } from "@/shared/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SignupResponse } from "../types";
import { authErrorHandler } from "../utils";

export const signup = async (
  email: string,
  password: string
): PromiseApiResponse<SignupResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // // 🔹 Firestore에 사용자 정보 저장
    // await setDoc(doc(db, "users", user.uid), {
    //   email: user.email,
    //   role: "user",
    //   createdAt: new Date(),
    // });

    return {
      success: true,
      message: "회원가입 성공!",
      data: { userId: user.uid },
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
