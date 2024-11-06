import { auth } from "@/firebase/firebase"; // Firebase 설정이 있는 파일
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { email, password } = await req.json();
  try {
    if (!email || !password) {
      return NextResponse.json(
        { message: "이메일과 비밀번호가 필요합니다." },
        { status: 400 }
      );
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return NextResponse.json(
      {
        message: "로그인 성공",
        uid: user.uid,
        email: user.email,
      },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "로그인 실패",
        error: error.message,
      },
      { status: 401 }
    );
  }
};
