import { handleAuthError } from "@/modules/auth/utils";
import { serverClient } from "@/shared/utils/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const supabase = await serverClient();
    // 🔹 Supabase에서 로그인 세션 가져오기
    const { data, error } = await supabase.auth.getSession();

    if (error || !data.session) {
      return NextResponse.json(
        { success: false, message: "로그인 실패" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "로그인 성공",
      data: { user: data.session.user, token: data.session.access_token },
    });
  } catch (error: unknown) {
    const { message, status } = handleAuthError(error);
    return NextResponse.json(
      { success: false, message: message },
      { status: status }
    );
  }
};
