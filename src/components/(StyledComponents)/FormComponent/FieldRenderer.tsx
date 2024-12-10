import { FormField } from "@/types/formFiled";
import { useFormContext } from "react-hook-form";
import Input from "../InputComponent";

interface FieldRendererProps {
  field: FormField;
}

const FieldRenderer = ({ field }: FieldRendererProps) => {
  const { register } = useFormContext();

  if (field.type === "group" && field.group) {
    return (
      <div className="flex flex-wrap gap-4">
        {field.group.map((gField) => (
          <div key={gField.name} className="flex-1">
            <label className="block text-gray-700">{gField.name}</label>
            <Input
              {...register(gField.name, { required: gField.required })}
              type="text"
              placeholder={gField.placeholder}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-gray-700">{field.name}</label>
      <Input
        {...register(field.name, { required: field.required })}
        placeholder={field.placeholder}
      />
    </div>
  );
};

export default FieldRenderer;
