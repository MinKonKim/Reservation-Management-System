import { SupabaseClient } from "@supabase/supabase-js";
import { InsertUserType } from "../types";

interface insertUserProps {
  userInfo: InsertUserType;
  supabase: SupabaseClient;
}

const insertUser = async ({ userInfo, supabase }: insertUserProps) => {
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

export default insertUser;
