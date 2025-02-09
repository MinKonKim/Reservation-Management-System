import { signup } from "@/modules/auth/services";
import { serverClient } from "@/shared/utils/supabase";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
  try {
    const supabase = await serverClient();
    const { email, password } = await req.json();

    const response = await signup(email, password, supabase);
    return NextResponse.json(response);
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, message: "회원가입 실패(서버에러).", error },
      { status: 500 }
    );
  }
};
