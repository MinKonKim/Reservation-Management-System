import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

// 회원 가입 로직
export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  // console.log(email, password);
  console.log("요청 확인", email, password);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid } = userCredential.user;
    return NextResponse.json(
      { message: "유저 회원가입 성공!", uid },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return NextResponse.json(
      { message: errorMessage, code: errorCode },
      { status: 400 }
    );
  }
};
