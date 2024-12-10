import { z } from "zod";

const InputType = z.enum([
  "input",
  "select",
  "checkbox",
  "textarea",
  "date",
  "password",
]);

const FormFieldValueSchema = z.object({
  type: InputType,
  placeholder: z.string().optional(),
  defaultValue: z
    .union([z.string(), z.number(), z.array(z.any()), z.date()])
    .optional(),
});

export const FormFieldsSchema = z.record(FormFieldValueSchema);
