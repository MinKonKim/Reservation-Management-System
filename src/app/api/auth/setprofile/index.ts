import { db } from "@/firebase/firebase";
import { UserType } from "@/types/firebase.type";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

// 필수 필드 유효성 검사 함수
const validateUserFields = (
  user: UserType,
  requiredFields: (keyof UserType)[]
) => {
  for (const field of requiredFields) {
    if (!user[field]) {
      return `${String(field)}가 필요합니다.`;
    }
  }
  return null;
};

// 새 사용자 생성 (POST)
const createUser = async (user: UserType, res: NextApiResponse) => {
  const validationError = validateUserFields(user, [
    "email",
    "password",
    "address",
    "phone_number",
  ]);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const { email, password, address, phone_number, name, is_admin } = user;
  const uid = user.id || doc(db, "users").id; // Firebase에서 새로 생성될 ID

  await setDoc(doc(db, "users", uid), {
    id: uid,
    email,
    password,
    address,
    phone_number,
    name,
    is_admin,
    createdAt: new Date(),
  });

  return res.status(201).json({ message: "사용자 생성 성공", uid });
};

// 기존 사용자 정보 업데이트 (PUT)
const updateUser = async (user: UserType, res: NextApiResponse) => {
  const validationError = validateUserFields(user, ["id"]);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const { id, email, password, address, phone_number, name, is_admin } = user;
  const userRef = doc(db, "users", id!);

  await updateDoc(userRef, {
    email,
    password,
    address,
    phone_number,
    name,
    is_admin,
    updatedAt: new Date(),
  });

  return res.status(200).json({ message: "사용자 정보 업데이트 성공" });
};

// 메인 핸들러
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user: UserType = req.body;

  try {
    if (req.method === "POST") {
      return await createUser(user, res);
    } else if (req.method === "PUT") {
      return await updateUser(user, res);
    } else {
      res.setHeader("Allow", ["POST", "PUT"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("API 처리 중 오류 발생:", error);
    return res.status(500).json({ message: "서버 오류 발생" });
  }
}
