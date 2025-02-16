import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (
    !user &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/auth")
  ) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 중요: 반드시 `supabaseResponse` 객체를 그대로 반환해야 합니다.
  // 만약 `NextResponse.next()`를 사용하여 새 응답 객체를 생성하는 경우, 반드시 다음을 따라야 합니다.
  // 1. 요청(request)을 포함해야 합니다. 예:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. 쿠키를 복사해야 합니다. 예:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. `myNewResponse` 객체를 필요한 대로 변경할 수 있지만,
  //    **쿠키는 변경하지 마세요!**
  // 4. 마지막으로,
  //    return myNewResponse
  // 위 작업이 제대로 이루어지지 않으면, **브라우저와 서버의 쿠키 상태가 동기화되지 않아
  // 사용자의 세션이 조기 종료되는 문제가 발생할 수 있습니다!**

  return supabaseResponse;
}
