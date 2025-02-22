import { AdminInfoType } from "@/modules/admin/types";
import createClient from "@/shared/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";

interface insertAdminDataProps {
  userInfo: AdminInfoType;
  supabase: SupabaseClient;
}

const insertAdminData = async ({ userInfo }: insertAdminDataProps) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("admins")
    .insert([{ ...userInfo }]);

  if (error) {
    return {
      success: false,
      message: "admins Table에 유저 정보 삽입 실패!",
      status: error.code,
    };
  }

  return {
    success: true,
    message: "admins Table에 유저 정보 삽입 성공!",
    status: 201,
    data,
  };
};

export default insertAdminData;
