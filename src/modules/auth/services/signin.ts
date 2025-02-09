import { PromiseApiResponse } from "@/shared/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { SigninResponse } from "../types";
import { handleAuthError } from "../utils";

// 🔹일반반 로그인 서비스 함수
export const signin = async (
  email: string,
  password: string,
  supabase: SupabaseClient
): PromiseApiResponse<SigninResponse> => {
  try {
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (user && session.access_token && !error) {
      return {
        success: true,
        message: "로그인 성공!",
        data: { userId: user.id, token: session.access_token, status: 200 },
      };
    } else {
      return {
        success: false,
        message: "로그인 실패!",
      };
    }
  } catch (error: unknown) {
    const { message, status } = handleAuthError(error);
    return {
      success: false,
      message: message,
      data: { status },
    };
  }
};
