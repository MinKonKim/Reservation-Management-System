import { db } from "@/firebase";
import { ApiResponse } from "@/shared/types";
import { addDoc, collection, FirestoreError } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest
): Promise<NextResponse<ApiResponse>> => {
  try {
    const info = await req.json();
    const docRef = await addDoc(collection(db, "admins"), { ...info });
    return NextResponse.json(
      {
        success: true,
        message: `어드민 정보가 저장되었습니다. id: ${docRef.id}`,
        data: {
          id: docRef.id,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("document 추가 과정에서 에러 발생.", error);
    return NextResponse.json(
      {
        message: `어드민 정보를 저장하는 중 에러 발생.${
          (error as FirestoreError).message
        }`,
        success: false,
      },
      { status: 500 }
    );
  }
};
