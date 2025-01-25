import { auth } from "@/firebase";
import { authErrorHandler } from "@/modules/auth/utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json(); // 요청 데이터 파싱
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const token = await user.getIdToken();

    return NextResponse.json(
      {
        success: true,
        message: "로그인 성공!",
        data: {
          userId: user.uid,
          email: user.email,
          token: token,
        },
      },
      { status: 200 }
    );
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
