"use client";

import Form from "@/components/(StyledComponents)/FormComponent/Form";
import { FormFields } from "@/types/formFiled";

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
  return (
    <div>
      <Form fields={fields} />
    </div>
  );
};

export default TestPage;
