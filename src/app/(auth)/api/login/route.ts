import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json(); // 요청 데이터 파싱

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return NextResponse.json(
      { userId: user.uid, email: user.email },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof FirebaseError) {
      return NextResponse.json(
        { message: "Login failed", error: error.message },
        { status: 400 }
      );
    }
  }
}
