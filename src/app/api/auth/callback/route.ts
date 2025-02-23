import insertAdminData from "@/modules/admin/services/insertAdminData";
import { InsertAdminType } from "@/modules/admin/types";
import insertUserData from "@/modules/user/services/insertUserData";
import { InsertUserType } from "@/modules/user/types";
import createClient from "@/shared/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const role = searchParams.get("role");
  // TODO: [유저 아이디]로 받을 수 있게끔 경로 수정.
  const next = role === "admin" ? "/admin/dashboard" : "/dashboard"; //권한 별  Redirect 되는 경로.
  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
      // auth 테이블에 유저 정보 가져오기
      const {
        data: { user },
        error: getUserError,
      } = await supabase.auth.getUser();

      if (getUserError || !user) {
        console.error(getUserError);
        return;
      }
      // auth 테이블에서 가져온 정보를 Admins ,Users 테이블에 넣기

      if (role === "admin") {
        const adminInfo: InsertAdminType = {
          admin_id: user.id,
          email: user.email,
          role: "admin",
          created_at: user.created_at,
          name: user.user_metadata.name,
          phone_number: "",
        };
        const { success, status } = await insertAdminData({ adminInfo });
        if (!success) {
          console.error("어드민 테이블에 정보 저장을 실패했습니다!", status);
          return;
        }
      } else {
        const userInfo: InsertUserType = {
          user_id: user.id,
          email: user.email,
          role: "user",
          created_at: user.created_at,
          name: user.id,
          phone_number: "",
          profile_image_url: user.user_metadata.avatar_url,
          social: user.app_metadata.provider,
        };
        const { success, status } = await insertUserData({ userInfo });
        if (!success) {
          console.error("유저 테이블에 정보 저장을 실패했습니다!", status);
          return;
        }
      }
      const isLocalEnv = process.env.NODE_ENV === "development";

      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
};
