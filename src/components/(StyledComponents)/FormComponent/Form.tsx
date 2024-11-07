import { FormFields } from "@/types/FormFields";
import { generateZodSchema } from "@/utils/generateZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../ButtonComponent";
import Input from "../InputComponent/Input";
import Select from "../SelectComponet";

interface AutoFormProps {
  fields: FormFields;
  onSubmit: (data: FormFields) => void; // onSubmit 함수 타입 정의
}

// 폼 컴포넌트
function CreateForm({ fields, onSubmit }: AutoFormProps) {
  const schema = generateZodSchema(fields); // Zod 로 유효성 검사 스키마 생성
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
            <Input
              {...register(key)}
              type={key.includes("password") ? "password" : "text"}
              placeholder={fields[key]}
              isFull
            />
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
