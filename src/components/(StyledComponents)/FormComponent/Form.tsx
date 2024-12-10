import { FormField, Inputs } from "@/types/formFiled";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FieldRenderer from "./FieldRenderer";

interface FormProps {
  fields: FormField[];
  onSubmit: SubmitHandler<Inputs>;
}

const Form = ({ fields, onSubmit }: FormProps) => {
  const methods = useForm<Inputs>();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {fields.map((field) => (
          <FieldRenderer key={field.name} field={field} />
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
