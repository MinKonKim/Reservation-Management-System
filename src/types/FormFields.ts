// 가능한 필드 타입
type FieldType =
  | "text"
  | "password"
  | "number"
  | "date"
  | "checkbox"
  | "textarea"
  | "select"
  | "group";

// 공통 필드 속성
interface BaseField {
  label: string; // 라벨
  type: FieldType; // 필드 타입
  placeholder?: string; // 플레이스홀더 (선택적)
}

// 개별 필드 타입에 따른 `defaultValue`
interface TextOrNumberField extends BaseField {
  type: "text" | "password" | "number";
  defaultValue?: string | number; // 텍스트와 숫자는 문자열 또는 숫자 가능
}

interface CheckboxField extends BaseField {
  type: "checkbox";
  defaultValue?: boolean; // 체크박스는 불리언
}

interface DateField extends BaseField {
  type: "date";
  defaultValue?: Date; // 날짜는 Date 객체
}

interface SelectField extends BaseField {
  type: "select";
  options: string[]; // 선택 가능한 옵션
  defaultValue?: string; // 선택 필드 기본값
}

interface TextAreaField extends BaseField {
  type: "textarea";
  defaultValue?: string; // 텍스트 필드 기본값
}

// 그룹 필드 타입
interface GroupField {
  type: "group"; // 그룹 타입
  fields: (TextOrNumberField | CheckboxField | DateField)[]; // 그룹 내의 필드 배열
}

// 최종 FormFields 타입
export type FormFields = Record<
  string,
  | TextOrNumberField
  | CheckboxField
  | DateField
  | SelectField
  | TextAreaField
  | GroupField
>;
