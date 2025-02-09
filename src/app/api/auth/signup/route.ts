import { signup } from "@/modules/auth/services";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();

    const response = await signup(email, password);
    return NextResponse.json(response);
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, message: "회원가입 실패(서버에러).", error },
      { status: 500 }
    );
  }
};
