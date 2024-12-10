import { ProductType } from "./firebase.type";
import { FormFields } from "./formFiled";

export type ProductInputType = Omit<
  ProductType,
  "id" | "createdAt" | "updatedAt" | "status"
> &
  FormFields;
