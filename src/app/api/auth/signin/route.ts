import { signin } from "@/modules/auth/services";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json(); // 요청 데이터 파싱
    const response = await signin(email, password);

    return NextResponse.json(response);
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, message: "로그인 실패(서버에러).", error },
      { status: 500 }
    );
  }
};
