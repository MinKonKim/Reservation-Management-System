import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUserProducts = async (userId: string) => {
  try {
    const { data } = await axios.get(`/api/products?userId=${userId}`);
    return data.products; // 데이터를 반환하여 `useQuery`가 사용하도록 함
  } catch (error) {
    console.error("Failed to fetch user products:", error);
    throw error; // 에러를 던져 React Query에서 에러 상태를 처리할 수 있도록 함
  }
};

const useUserProducts = (userId: string) => {
  return useQuery({
    queryKey: ["userProducts", userId],
    queryFn: () => fetchUserProducts(userId),
    enabled: !!userId, // userId가 있을 때만 쿼리를 실행
    staleTime: 5 * 60 * 1000, // 데이터 캐시 유효 시간을 5분으로 설정 (선택 사항)
    retry: 1, // 요청 실패 시 한 번 더 재시도 (선택 사항)
  });
};

export default useUserProducts;
