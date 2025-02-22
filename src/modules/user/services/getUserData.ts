import createClient from "@/shared/utils/supabase/server";

const getUserData = async (userId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("user_id", userId);

  if (error) {
    return null;
  } else {
    return data;
  }
};

export default getUserData;
