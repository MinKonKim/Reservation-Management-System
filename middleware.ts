import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { parseCookies } from "nookies";

export function middleware(request: NextRequest) {
  // 쿠키에서 'user-storage' 쿠키를 가져옵니다.
  const cookies = parseCookies({ req: request });
  const userStorage = cookies["user-storage"];
  let isAdmin = false;
  let id = "";
  // 유저 쿠키 정보가 있는 경우 관리자 여부 확인
  if (userStorage) {
    try {
      const user = JSON.parse(userStorage);
      isAdmin = user?.user?.is_admin;
      id = user?.user?.id;
    } catch (error) {
      console.error("Error parsing user storage cookie:", error);
    }
  }

  const { pathname } = request.nextUrl;

  // 관리자만 접근할 수 있는 "/admin" 경로에 접근하려는 경우
  if (pathname.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL(`/user/dashboard/${id}`, request.url));
  }

  // 로그인하지 않은 사용자가 "/user" 또는 "/admin" 경로에 접근하려는 경우
  if (!userStorage) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // 모든 조건에 맞는 경우 요청을 그대로 진행
  return NextResponse.next();
}

// 미들웨어를 적용할 경로 설정
export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
