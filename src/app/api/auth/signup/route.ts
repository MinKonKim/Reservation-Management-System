import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import { authErrorHandler } from "../../../../modules/auth/utils";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    return NextResponse.json(
      {
        success: true,
        message: "회원가입 성공!",
        data: {
          userId: user.uid,
          email: user.email,
        },
      },
      { status: 201 } // 새로운 사용자 등록 완료 :201
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
