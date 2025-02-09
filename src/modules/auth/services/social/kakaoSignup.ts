import { supabase } from "@/shared/utils/supabase";

export const kakaoSignup = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "kakao",
  });

  if (error) {
    return {
      success: false,
      message: "카카오로 회원가입에 실패했습니다.",
      error,
    };
  }

  return {
    success: true,
    message: "카카오로 회원가입 성공!",
    data,
  };
};
