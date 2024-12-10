type InputType =
  | "text"
  | "select"
  | "checkbox"
  | "textarea"
  | "date"
  | "password"
  | "group";

export type FormField = {
  name: string;
  type: InputType;
  placeholder?: string;
  defaultValue?: string | number | [] | Date;
  required?: boolean;
  group?: FormField[];
};

export type FormFields = FormField[];

export type Inputs = Record<string, string | number | boolean | []>;

/*
  Record :
  - key 가 고유해야 하고, 이를 기반으로 필드를 관리하려면 Record가 적합
  - 특정 key로 값을 빠르게 조회하거나 수정할 때 유리.

*/
