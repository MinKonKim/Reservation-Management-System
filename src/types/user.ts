import { FormFields } from "./FormFields";

export type UserInputType = {
  name?: string;
  email: string; // 사용자 이메일(고유 값)
  password: string; // 비밀번호
  passwordCheck: string; // 비밀번호 확인용
  address: string; // 사용자 주소
  is_admin?: boolean; // 어드민 여부 (선택적)
  phoneNumber: string; //전화번호
  role: string[]; // 역할
} & FormFields;
