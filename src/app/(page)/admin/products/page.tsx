"use client";
import Button from "@/components/(StyledComponents)/ButtonComponent";
import useUserStore from "@/stores/userStore";
import { useRouter } from "next/navigation";

const ProductsListPage = () => {
  const { user } = useUserStore();
  const router = useRouter();

  if (!user.id) {
    return <p>사용자 정보가 없습니다. 다시 로그인해 주세요.</p>;
  }

  const goToCreateProduct = () => {
    router.push("/admin/products/create");
  };

  return (
    <div>
      {/* {Array.isArray(data) && data.length > 0 ? (
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>상품이 없습니다.</p>
      )} */}
      <Button onClick={goToCreateProduct}>새 상품 만들기</Button>
    </div>
  );
};

export default ProductsListPage;
