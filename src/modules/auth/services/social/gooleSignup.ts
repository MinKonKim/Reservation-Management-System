import { PromiseApiResponse } from "@/shared/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { SignupResponse } from "../../types";
import { handleAuthError } from "../../utils";

export const googleSignup = async (
  origin: string,
  supabase: SupabaseClient
): PromiseApiResponse<SignupResponse> => {
  try {
    // 🔹 Google 로그인 URL 생성 (리다이렉트 방식)
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback`,
        // queryParams: {
        //   access_type: "offline",
        //   prompt: "consent",
        // },
      },
    });

    if (error) {
      return {
        success: false,
        message: error.message as string,
        data: { status: error.status },
      };
    }

    return {
      success: true,
      message: "구글로 회원가입 성공!",
      data: { status: 200, url: data.url! },
    };
  } catch (error: unknown) {
    const { message, status } = handleAuthError(error);
    return {
      success: false,
      message,
      data: { status },
    };
  }
};
