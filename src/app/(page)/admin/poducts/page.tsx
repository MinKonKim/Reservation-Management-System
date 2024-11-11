"useclient";
import Button from "@/components/(StyledComponents)/ButtonComponent";
import { useUserProducts } from "@/hooks/queries/produdcts/fetchProductList";
import useUserStore from "@/stores/userStore";

// 상품 내역 보이는 곳.
const ProductsListPage = () => {
  const { user } = useUserStore();

  const { data, isLoading, isError, error } = useUserProducts(user.id!);

  if (isLoading) return <p>로딩중..</p>;
  if (isError) return <p>오류가 발생함: {String(error)}</p>;

  // TODO 임의로 만든 Button 부분 다르게 수정해야함.
  return (
    <div>
      {Array.isArray(data) && data.length > 0 ? (
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p> 상품이 없습니다.</p>
      )}
      <Button>새 상품 만들기</Button>
    </div>
  );
};

export default ProductsListPage;
