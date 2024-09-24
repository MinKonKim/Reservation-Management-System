import { auth } from "@/firebase/fireauth";
import { endAt } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

// GET 요청 처리
export async function GET() {
  // 사용자 데이터를 가져오는 로직
  return NextResponse.json({ message: "GET request: Fetching user data" });
}

// POST 요청 처리
export async function POST(request: Request) {
  setup();
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentail) => {
      const user = userCredentail.user; // 회원가입
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// 405 Method Not Allowed 처리
export async function DELETE() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
