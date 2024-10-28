import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormFields } from "@/types/FormType";
import Input from "../InputComponent/Input";
import Button from "../ButtonComponent";
import Select from "../SelectComponet";

interface AutoFormProps {
  fields: FormFields;
  onSubmit: (data: FormFields) => void; // onSubmit 함수 타입 정의
}

// Zod 스키마 생성 함수
const generateZodSchema = (fields: FormFields) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schema: { [key: string]: any } = {};

  for (const key in fields) {
    if (typeof fields[key] === "string") {
      schema[key] = z.string().min(1, `${key}은 필수 항목입니다.`);
    } else if (typeof fields[key] === "boolean") {
      schema[key] = z.boolean();
    } else if (typeof fields[key] === "number") {
      schema[key] = z.number().min(1, `${key}는 유효한 숫자여야 합니다.`);
    } else if (fields[key] instanceof Date) {
      schema[key] = z.coerce.date().refine((date) => date <= new Date(), {
        message: `${key}는 오늘 이전의 날짜여야 합니다.`,
      });
    } else if (Array.isArray(fields[key])) {
      schema[key] = z.enum(fields[key] as [string, ...string[]]);
    }
  }

  return z.object(schema);
};

// 폼 컴포넌트
function CreateForm({ fields, onSubmit }: AutoFormProps) {
  const schema = generateZodSchema(fields);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(fields).map((key) => (
        <div className="mb-4" key={key}>
          <label className="block text-gray-700">{key}</label>
          {typeof fields[key] === "string" ? (
            <Input {...register(key)} type="text" isFull />
          ) : typeof fields[key] === "boolean" ? (
            <Input {...register(key)} type="checkbox" />
          ) : typeof fields[key] === "number" ? (
            <Input {...register(key)} type="number" />
          ) : fields[key] instanceof Date ? (
            <Input {...register(key)} type="date" />
          ) : Array.isArray(fields[key]) ? (
            <Select
              {...register(key)}
              options={fields[key] as string[]}
              isFull
            />
          ) : null}
          {errors[key] && <p>{errors[key]?.message as string}</p>}
        </div>
      ))}
      <Button type="submit" isFull>
        제출하기
      </Button>
    </form>
  );
}

export default CreateForm;
