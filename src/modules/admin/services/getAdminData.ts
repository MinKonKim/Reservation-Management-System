import createClient from "@/shared/utils/supabase/server";

const getAdminData = async (userId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("admins")
    .select()
    .eq("id", userId)
    .single();
  if (error) {
    return {
      success: false,
      message: "admins Table에서 유저 정보 조회 실패!",
      status: error.code,
      data: null,
    };
  }
  return {
    success: true,
    message: "admins Table에서 유저 정보 조회 성공!",
    status: 200,
    data,
  };
};
export default getAdminData;
