import { NextResponse } from "next/server";

/**
 * 쿠키 설정 헬퍼 함수
 * @param response - NextResponse 객체
 * @param name - 쿠키 이름
 * @param value - 쿠키 값
 * @param options - 쿠키 옵션
 */

export const setCookie = (
  response: NextResponse,
  name: string,
  value: string,
  options: {
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: "strict" | "lax" | "none";
    path?: string;
    maxAge?: number;
  } = {}
) => {
  response.cookies.set(name, value, {
    httpOnly: options.httpOnly ?? true,
    secure: options.secure ?? process.env.NODE_ENV === "production",
    sameSite: options.sameSite ?? "strict",
    path: options.path ?? "/",
    maxAge: options.maxAge ?? 60 * 60 * 24 * 7, // 7일 기본 설정
  });
};
