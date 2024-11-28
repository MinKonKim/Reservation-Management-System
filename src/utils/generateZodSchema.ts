import { FormFields } from "@/types/FormFields";
import { z, ZodTypeAny } from "zod";

// Zod 타입 매핑 함수
const mapToZodType = (type: string): ZodTypeAny => {
  switch (type) {
    case "text":
    case "textarea":
      return z.string().min(1, "필수 항목입니다.");
    case "password":
      return z.string().min(6, "비밀번호는 최소 6자리 이상이어야 합니다.");
    case "number":
      return z.number().min(1, "유효한 숫자여야 합니다.");
    case "date":
      return z.date().refine((date) => date <= new Date(), {
        message: "오늘 이전의 날짜여야 합니다.",
      });
    case "checkbox":
      return z.boolean();
    default:
      throw new Error(`지원하지 않는 타입: ${type}`);
  }
};

// Zod 스키마 생성 함수
export const generateZodSchema = (fields: FormFields) => {
  const schema: { [key: string]: ZodTypeAny } = {};

  Object.keys(fields).forEach((key) => {
    const field = fields[key];

    if (field.type === "group" && "fields" in field) {
      // 그룹 필드 처리
      schema[key] = z.object(
        field.fields.reduce((groupSchema, subField, index) => {
          groupSchema[`field${index}`] = mapToZodType(subField.type);
          return groupSchema;
        }, {} as { [subKey: string]: ZodTypeAny })
      );
    } else {
      // 일반 필드 처리
      schema[key] = mapToZodType(field.type);
    }
  });

  return z.object(schema);
};
