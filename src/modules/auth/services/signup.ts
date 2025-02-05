import { PromiseApiResponse } from "@/shared/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { SignupResponse } from "../types";
import { handleAuthError } from "../utils";

export const signup = async (
  email: string,
  password: string,
  supabase: SupabaseClient
): PromiseApiResponse<SignupResponse> => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });
    if (!error && user) {
      return {
        success: true,
        message: "회원가입 성공!",
        data: { userId: user.id },
      };
    } else {
      return {
        success: false,
        message: error?.message as string,
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
