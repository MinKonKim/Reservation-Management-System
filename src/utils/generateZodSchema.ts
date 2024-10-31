import { FormFields } from "@/types/FormFields";
import { z } from "zod";

// Zod 스키마 생성 함수
export const generateZodSchema = (fields: FormFields) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schema: { [key: string]: any } = {};

  for (const key in fields) {
    if (typeof fields[key] === "string") {
      if (key === "password" || key === "passwordCheck") {
        schema[key] = z
          .string()
          .min(6, `${key}은 최소 6자리 이상이어야 합니다.`);
      } else if (key === "passwordCheck") {
        schema[key] = z
          .string()
          .min(6, "비밀번호 확인은 최소 6자리 이상이어야 합니다.")
          .refine((val) => val === fields.password, {
            message: "비밀번호가 일치하지 않습니다.",
          });
      } else {
        schema[key] = z.string().min(1, `${key}은 필수 항목입니다.`);
      }
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
