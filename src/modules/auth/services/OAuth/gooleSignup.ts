import { supabase } from "@/shared/utils/supabase";

export const googleSignup = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: `${window.location.origin}/api/auth/callback`, // ✅ 역할 정보를 쿼리스트링에 포함
    },
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
