import CreateForm from "@/components/(StyledComponents)/FormComponent";
import { FormFields } from "@/types/formFiled";
import axios from "axios";

const CreateProductPage = () => {
  const productInfo: FormFields = {
    name: {
      label: "상품 이름",
      type: "text",
      placeholder: "상품 이름을 입력해주세요.",
      defaultValue: "",
    },
    description: {
      label: "상품 설명",
      type: "textarea",
      placeholder: "상품 설명을 입력해주세요.",
      defaultValue: "",
    },
    price: {
      label: "상품 가격",
      type: "number",
      placeholder: "상품 가격을 입력해주세요.",
      defaultValue: 0,
    },
    ageRestriction: {
      label: "연령 제한",
      type: "number",
      placeholder: "연령 제한을 입력해주세요. (예: 18세 이상)",
      defaultValue: 0,
    },
    availbaleGuests: {
      type: "group",
      fields: [
        {
          label: "최소 예약 가능 인원",
          type: "number",
          placeholder: "최소 예약 가능 인원을 입력해주세요.",
          defaultValue: 0,
        },
        {
          label: "최대 예약 가능 인원",
          type: "number",
          placeholder: "최대 예약 가능 인원을 입력해주세요.",
          defaultValue: 0,
        },
      ],
    },
    availableDates: {
      type: "group",
      fields: [
        {
          label: "예약 가능 시작일",
          type: "date",
          defaultValue: new Date(),
        },
        {
          label: "예약 가능 종료일",
          type: "date",
          defaultValue: new Date(),
        },
      ],
    },
    status: {
      label: "상품 상태",
      type: "select",
      options: ["active", "inactive", "draft"],
      defaultValue: "active",
    },
  };

  const handleSubmit = async (data: FormFields) => {
    const response = await axios.post("/api/products", { data });
    console.log(response);
    ``;
  };

  return (
    <div>
      <CreateForm fields={productInfo} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateProductPage;
