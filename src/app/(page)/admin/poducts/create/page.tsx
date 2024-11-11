import CreateForm from "@/components/(StyledComponents)/FormComponent";
import { ProductType } from "@/types/firebase.type";

type ProductInputType = Omit<
  ProductType,
  "id" | "createdAt" | "updatedAt" | "availableFrom" | "availableTo" | "status"
>;

const CreateProductPage = () => {
  const productInfo = {
    name: "상품 이름", // 상품 이름
    description: "textarea 상품 설명", // 상품 설명
    //category?: string, // 상품 카테고리 (예: 숙박, 투어 등)
    price: 0, // 상품 가격
    minGuests: 0, // 최소 예약 가능 인원
    maxGuests: 0, // 최대 예약 가능 인원
    ageRestriction: 0, // 연령 제한 (예: 18세 이상)
    //images: [], // 상품 이미지 URL 목록
    availableFrom: Date,
    availableTo: Date,
    status: ["active", "inactive", "draft"], // 상품 상태 (예: 활성, 비활성, 임시 저장)
  };

  const handleSubmit = (data: ProductInputType) => {};

  return (
    <div>
      <CreateForm fields={productInfo} />
    </div>
  );
};

export default CreateProductPage;
