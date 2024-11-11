import { auth, db } from "@/firebase/firebase";
import { UserType } from "@/types/firebase.type";
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { NextResponse } from "next/server";

// 현재 사용자 정보 가져오기
const getUser = async () => {
  const user = auth.currentUser;

  if (user) {
    return NextResponse.json({ user: user }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "유저 정보가 없습니다" },
      { status: 400 }
    );
  }
};

// 새 사용자 생성 (POST)
const createUser = async (user: UserType) => {
  const docRef = doc(collection(db, "users"));
  await setDoc(docRef, {
    ...user,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return NextResponse.json(
    { message: "사용자 생성 성공", docRef },
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
    updatedAt: serverTimestamp(),
  });

  return NextResponse.json({ message: "사용자 정보 업데이트 성공" });
};

// 유저 정보 가져오기
export const GET = async () => {
  try {
    return await getUser();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message, code: error.code },
      { status: 400 }
    );
  }
};

// 유저 생성
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

// 유저 정보 변경
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
