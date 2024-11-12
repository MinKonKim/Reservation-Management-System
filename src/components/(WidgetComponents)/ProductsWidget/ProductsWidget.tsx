// TODO : 첫 번째로 상품 만드는 페이지 , 클릭시 이동 하기 까지.

import { useRouter } from "next/router";
import RocketIcon from "public/svg/rocket-outline.svg";
const ProductsWidget = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/adimin/proudcts");
  };
  return (
    <div onClick={handleClick}>
      <RocketIcon className="h-6 w-6" />
    </div>
  );
};

export default ProductsWidget;
