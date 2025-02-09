import { supabase } from "@/shared/utils/supabase";

export const googleSignup = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    return {
      success: false,
      message: "구글로 회원가입에 실패했습니다.",
      error,
    };
  }

  return {
    success: true,
    message: "구글로 회원가입 성공!",
    data,
  };
};
