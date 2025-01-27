import { InputHTMLAttributes } from "react";
import { focusInputStyle, hoverInputStyle } from "./Input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  validation?: boolean;
  required?: boolean;
  description?: string;
}

const Input = ({
  label,
  validation,
  description,
  required,
  ...props
}: InputProps) => {
  // 동적으로 테두리 색상 변경
  const borderColor =
    validation === undefined
      ? "border-gray-300"
      : validation
      ? "border-green-500 focus:ring-green-500"
      : "border-red-500 focus:ring-red-500";

  const isRequired = required ? "text-red-500 mx-1" : "";
  return (
    <div className="space-y-1 min-h-[97px]">
      {label && (
        <label className="block text-m font-medium text-gray-700">
          {label}
          <span className={isRequired}>*</span>
        </label>
      )}
      <input
        className={`block w-full rounded-md border-b bg-gray-100 py-3 
          ${borderColor} ${hoverInputStyle}
          ${focusInputStyle}`}
        {...props}
      />

      {/* 하단 설명 문구(있을 경우만 표시) */}
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};

export default Input;
