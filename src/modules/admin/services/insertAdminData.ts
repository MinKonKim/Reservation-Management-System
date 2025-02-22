import { InsertAdminType } from "@/modules/admin/types";
import createClient from "@/shared/utils/supabase/server";

interface insertAdminDataProps {
  adminInfo: InsertAdminType;
}

const insertAdminData = async ({ adminInfo }: insertAdminDataProps) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("admins")
    .insert([{ ...adminInfo }]);

  if (error) {
    return {
      success: false,
      status: error.code,
    };
  }

  return {
    success: true,
    status: 201,
    data,
  };
};

export default insertAdminData;
