import React from "react";

interface InputProps {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text", // 기본적으로 text 타입으로 설정
  value,
  onChange,
  placeholder,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="p-3 m-1 border-solid border-2 border-indigo-600 rounded-lg"
    />
  );
};

export default Input;
