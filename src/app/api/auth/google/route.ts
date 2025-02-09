import { googleSignup } from "@/modules/auth/services/social";
import { serverClient } from "@/shared/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const supabase = await serverClient();
    const { origin } = new URL(req.url);

    const response = await googleSignup(origin, supabase);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      statusText: "구글로그인에 실패했습니다.(서버에러)",
      error,
    });
  }
};
