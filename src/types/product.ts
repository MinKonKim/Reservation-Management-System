import { ProductType } from "./firebase.type";
import { FormFields } from "./FormFields";

export type ProductInputType = Omit<
  ProductType,
  "id" | "createdAt" | "updatedAt" | "status"
> &
  FormFields;
