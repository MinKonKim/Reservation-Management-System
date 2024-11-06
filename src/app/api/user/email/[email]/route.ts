import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

// GET 요청으로 특정 이메일을 가진 사용자 조회
export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email = params.email;

    // Firestore에서 이메일을 조건으로 사용자 쿼리 생성
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      return NextResponse.json(userData, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "해당 이메일을 가진 사용자가 없습니다." },
        { status: 404 }
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { message: "사용자 정보 조회 오류", error: error.message },
      { status: 500 }
    );
  }
}
