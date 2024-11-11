import { db } from "@/firebase/firebase";
import { ProductType } from "@/types/firebase.type";
import { ProductInputType } from "@/types/product";
import { handleError } from "@/utils/errorHandler";
import {
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from "@firebase/firestore";
import { NextResponse } from "next/server";

const createProduct = async (product: ProductInputType) => {
  const docRef = doc(collection(db, "products"));
  await setDoc(docRef, {
    ...product,
    id: docRef.id,
    availableFrom: Timestamp.fromDate(product.availableFrom),
    availableTo: Timestamp.fromDate(product.availableTo),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    status: product.status!,
  });

  return NextResponse.json(
    { message: "상품 생성 성공", docRef },
    { status: 200 }
  );
};

const updateProduct = async (product: ProductType) => {
  const { id } = product;

  if (!id) {
    return NextResponse.json(
      { message: "알 수 없는 ID 입니다." },
      { status: 400 }
    );
  }
  const productRef = doc(db, "products", id);
  await updateDoc(productRef, {
    ...product,
    updatedAt: serverTimestamp(),
  });

  return NextResponse.json({ message: "상품 정보 업데이트 성공" });
};

// 유저 ID 에 따라 프로덕트 가져오기
const getUserProducts = async (userId: string) => {
  if (!userId || typeof userId !== "string") {
    handleError({ message: "아이디값이 없습니다", code: 400 });
  }

  const productsRef = collection(db, "products");
  const q = query(productsRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  // 상품 목록 생성
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (products) {
    return NextResponse.json({ products: products }, { status: 200 });
  } else {
    handleError({
      message: "일치하는 상품 정보를 가져올 수 없습니다.",
      code: 400,
    });
  }
};

export const POST = async (req: Request) => {
  try {
    const produdct = await req.json();
    return await createProduct(produdct);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    handleError(error);
  }
};

export const PUT = async (req: Request) => {
  try {
    const produdct = await req.json();
    return await updateProduct(produdct);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    handleError(error);
  }
};

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (userId) {
      return await getUserProducts(userId);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    handleError(error);
  }
};
