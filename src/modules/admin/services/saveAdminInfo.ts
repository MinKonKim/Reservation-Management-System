import { apiClient } from "@/shared/utils";
import { Admin } from "../types";

interface saveAdminInfoProps {
  info: Admin;
}

const saveAdminInfo = async ({ info }: saveAdminInfoProps) => {
  const { adminId, role } = info;
  if (!adminId || role !== "admin") {
    return { message: "어드민이 아닙니다." };
  }
  const { data } = await apiClient.post("/info/admin", { ...info });
  return { messsage: data.message };
};

export default saveAdminInfo;
