import { InputHTMLAttributes } from "react";
import {
  borderColor,
  focusInputStyle,
  hoverInputStyle,
  isRequired,
} from "./Input.style";

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
  return (
    <div className="space-y-1 min-h-[97px]">
      {label && (
        <label className="block text-m font-medium text-gray-700">
          {label}
          <span className={isRequired(required)}>*</span>
        </label>
      )}
      <input
        className={`block w-full rounded-md border-b bg-gray-100 py-3 px-3 
          ${borderColor(validation)} ${hoverInputStyle}
          ${focusInputStyle}`}
        {...props}
      />

      {/* 하단 설명 문구(있을 경우만 표시) */}
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};

export default Input;
