// 단순하게 가자, 유저 정보를 받아와 users 테이블에 넣어주기만 하면 된다.

import { SupabaseClient } from "@supabase/supabase-js";
import { AdminInfoType } from "../types";

interface insertAdminProps {
  adminInfo: AdminInfoType;
  supabase: SupabaseClient;
}

const insertUser = async ({ adminInfo, supabase }: insertAdminProps) => {
  const { error } = await supabase.from("admins").insert([{ ...adminInfo }]);

  if (error) {
    return {
      success: false,
      message: "users Table에 유저 정보 삽입 실패!",
      status: error.code,
    };
  }

  return {
    success: true,
    message: "users Table에 유저 정보 삽입 성공!",
    status: 201,
  };
};

export default insertUser;
