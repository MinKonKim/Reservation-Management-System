"use client";

// Form 컴포넌트 사용법

import Form from "@/components/(StyledComponents)/FormComponent/Form";
import { FormFields, Inputs } from "@/types/formFiled";

const TestPage = () => {
  const fields: FormFields = [
    {
      name: "email",
      type: "text",
      placeholder: "이메일을 입력해주세요",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "비밀번호를 입력해주세요",
      required: true,
    },
    {
      name: "passwordCheck",
      type: "password",
      placeholder: "위와 동일한 비밀번호를 입력해주세요.",
    },
    {
      name: "date",
      type: "group",
      group: [
        {
          name: "startDate",
          type: "date",
          placeholder: "시작일",
        },
        {
          name: "endDate",
          type: "date",
          placeholder: "종료일",
        },
      ],
    },
  ];

  const handelSubmit = (data: Inputs) => {
    console.log("폼 데이터", data);

    //TODO : 로직 작성
  };

  return (
    <div>
      <Form fields={fields} onSubmit={handelSubmit} />
    </div>
  );
};

export default TestPage;
