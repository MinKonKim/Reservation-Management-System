import createClient from "@/shared/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { origin, searchParams } = new URL(req.url);
    const supabase = await createClient();
    const role = searchParams.get("role");
    // 🔹 Supabase OAuth 로그인 URL 생성
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `${
          origin || "localhost:3000"
        }/api/auth/callback?role=${role}`,
        queryParams: {
          access_type: "offline",
        },
      }, // ✅ 로그인 후 돌아올 페이지
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, url: data.url });
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, message: "구글회원가입 실패", error },
      { status: 500 }
    );
  }
};
