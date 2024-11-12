// TODO : 첫 번째로 상품 만드는 페이지 , 클릭시 이동 하기 까지.

import RocketIcon from "@/icons/rocket-outline.svg";
import { useRouter } from "next/navigation";
const ProductsWidget = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/admin/products");
  };
  return (
    <div onClick={handleClick}>
      <RocketIcon width={50} height={50} />
    </div>
  );
};

export default ProductsWidget;
