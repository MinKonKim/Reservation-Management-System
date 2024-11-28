import { FormFields } from "@/types/FormFields";
import { generateZodSchema } from "@/utils/generateZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../ButtonComponent";
import Input from "../InputComponent";
import Select from "../SelectComponet";

interface AutoFormProps {
  fields: FormFields;
  onSubmit: (data: FormFields) => void; // onSubmit 함수 타입 정의
}

const CreateForm = ({ fields, onSubmit }: AutoFormProps) => {
  const schema = generateZodSchema(fields); // Zod로 유효성 검사 스키마 생성
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
                    {...register(`${key}-${idx}`)}
                    type={subField.type}
                    defaultValue={subField.defaultValue as string}
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
                {...register(key)}
                className="w-full p-2 border rounded-lg"
                rows={4}
                placeholder={field.placeholder}
                defaultValue={field.defaultValue}
              />
            ) : field.type === "select" ? (
              <Select
                {...register(key)}
                options={field.options || []}
                defaultValue={field.defaultValue}
              />
            ) : (
              <Input
                {...register(key)}
                type={field.type}
                placeholder={field.placeholder}
                defaultValue={field.defaultValue as string}
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
