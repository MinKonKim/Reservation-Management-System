import { apiClient } from "@/shared/utils";
import { Admin } from "../types";

// 🔹 Admin 데이터 저장 함수
const createAdmin = async (info: Admin) => {
  //TODO : 로직추가
  /** 1. info를 정제할 수 있는 로직이 필요한가?
   *  2. 프롭스로 어떤 정보까지 받아 올 수 있는가?
   */
  try {
    const response = await apiClient.post("/info/admin", { ...info });
    const { data } = response;

    // API 응답에서 success 여부 체크
    if (!data.success) {
      return { success: false, message: data.message };
    }

    return {
      success: true,
      message: "어드민 정보가 성공적으로 저장되었습니다.",
      id: data.data?.id,
    };
  } catch (error) {
    console.error("saveAdminInfo 요청 중 오류 발생:", error);
    return { success: false, message: "네트워크 오류 또는 서버 오류 발생" };
  }
};

export default createAdmin;
