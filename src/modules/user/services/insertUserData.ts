import createClient from "@/shared/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { InsertUserType } from "../types";

interface insertUserDataProps {
  userInfo: InsertUserType;
  supabase: SupabaseClient;
}

const insertUserData = async ({ userInfo }: insertUserDataProps) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("users")
    .insert([{ ...userInfo }]);

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
    data,
  };
};

export default insertUserData;
