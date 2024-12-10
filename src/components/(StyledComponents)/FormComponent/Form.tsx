import { FormFields } from "@/types/formFiled";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../InputComponent";

type Inputs = Record<string, string | number | boolean | []>;

interface FormProps {
  fields: FormFields;
}

const Form = ({ fields }: FormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {fields.map((field, index) => {
        if (field.type === "group" && field.group) {
          const groupfields = field.group;
          return (
            <div key={`${field.name}-${index}`}>
              {groupfields.map((gfield) => (
                <Input
                  key={gfield.name}
                  type={gfield.type}
                  {...register(gfield.name, { required: gfield.required })}
                  placeholder={gfield.placeholder}
                />
              ))}
            </div>
          );
        } else {
          return (
            <Input
              key={field.name}
              type={field.type}
              {...register(field.name, { required: field.required })}
              placeholder={field.placeholder}
            />
          );
        }
      })}
      <input type="submit" />
    </form>
  );
};

export default Form;
