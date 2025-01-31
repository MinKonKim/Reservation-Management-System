import { auth } from "@/firebase";
import { authErrorHandler } from "@/modules/auth/utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    await createUserWithEmailAndPassword(auth, email, password);

    return NextResponse.json({
      success: true,
      message: "회원가입 성공!",
    });
  } catch (error) {
    const { errorMessage, statusCode } = authErrorHandler(error);
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
}
