/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormFields } from "@/types/FormFields";
import { generateZodSchema } from "@/utils/generateZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Path, useForm } from "react-hook-form";
import Button from "../ButtonComponent";
import Input from "../InputComponent";
import Select from "../SelectComponet";

interface CreateFormProps<T> {
  fields: FormFields;
  onSubmit: (data: T) => void; // 제네릭을 사용해 데이터 타입을 유연하게 설정
}

const CreateForm = <T extends Record<string, any>>({
  fields,
  onSubmit,
}: CreateFormProps<T>) => {
  const schema = generateZodSchema(fields); // Zod로 유효성 검사 스키마 생성
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(fields).map((key) => {
        const field = fields[key];

        // 그룹 필드 처리
        if (field.type === "group" && "fields" in field) {
          return (
            <div className="flex space-x-4 mb-4" key={key}>
              {field.fields.map((subField, idx) => (
                <div className="flex-1" key={`${key}-${idx}`}>
                  <label className="block text-gray-700 mb-1">
                    {subField.label}
                  </label>
                  <Input
                    {...register(`${key}.${idx}` as Path<T>)}
                    type={subField.type}
                    value={subField.defaultValue as string}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          );
        }

        // 일반 필드 처리
        return (
          <div className="mb-4" key={key}>
            <label className="block text-gray-700 mb-1">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                {...register(key as Path<T>)}
                className="w-full p-2 border rounded-lg"
                rows={4}
                placeholder={field.placeholder}
                value={field.defaultValue}
              />
            ) : field.type === "select" ? (
              <Select
                {...register(key as Path<T>)}
                options={field.options || []}
                value={field.defaultValue}
              />
            ) : (
              <Input
                {...register(key as Path<T>)}
                type={field.type}
                placeholder={field.placeholder}
                value={field.defaultValue as string}
                className="w-full"
              />
            )}
            {errors[key] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[key]?.message as string}
              </p>
            )}
          </div>
        );
      })}
      <Button type="submit" isFull>
        제출하기
      </Button>
    </form>
  );
};

export default CreateForm;
