import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

// GET 요청으로 특정 사용자 조회 (쿼리 방식)
export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const userId = params.id;
    const usersCollection = collection(db, "users");
    // `userData.id` 필드를 조건으로 쿼리 생성
    const q = query(usersCollection, where("userData.id", "==", userId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data().userData;
      return NextResponse.json({ ...userData }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "해당 아이디를 가진 사용자가 없습니다." },
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
};
