import { db } from "@/firebase/firebase";
import { UserType } from "@/types/firebase.type";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

// 새 사용자 생성 (POST)
const createUser = async (user: UserType) => {
  const uid = user.id || doc(db, "users").id; // Firebase에서 새로 생성될 ID

  await setDoc(doc(db, "users", uid), {
    ...user,
    id: uid,
  });

  return NextResponse.json(
    { message: "사용자 생성 성공", uid },
    { status: 200 }
  );
};

// 기존 사용자 정보 업데이트 (PUT)
const updateUser = async (user: UserType) => {
  const { id } = user;
  if (!id) {
    return NextResponse.json({ message: "ID는 필수입니다." }, { status: 400 });
  }

  const userRef = doc(db, "users", id);

  await updateDoc(userRef, {
    ...user,
    updatedAt: new Date(),
  });

  return NextResponse.json({ message: "사용자 정보 업데이트 성공" });
};

export const POST = async (req: Request) => {
  try {
    const data: UserType = await req.json();
    return await createUser(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message, code: error.code },
      { status: 400 }
    );
  }
};

export const PUT = async (req: Request) => {
  try {
    const data: UserType = await req.json();
    return await updateUser(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message, code: error.code },
      { status: 400 }
    );
  }
};
