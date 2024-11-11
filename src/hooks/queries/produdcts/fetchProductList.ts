import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUserProducts = async (userId: string) => {
  const { data } = await axios.get(`/api/products?userId=${userId}`);
  console.log("상품 목록", data.products);
};

export const useUserProducts = (userId: string) => {
  return useQuery({
    queryKey: ["userProducts", userId],
    queryFn: () => fetchUserProducts(userId),
    enabled: !!userId, // userId가 있을 때만 쿼리를 실행
  });
};
