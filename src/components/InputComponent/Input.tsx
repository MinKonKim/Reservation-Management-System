import React, { forwardRef } from "react";

// React.InputHTMLAttributes를 사용하여 기본 input 속성을 모두 포함
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className = "", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={`p-3 m-1 border-solid border-2 border-indigo-600 rounded-lg ${className}`}
        {...props} // 나머지 props 전달
      />
    );
  }
);

// displayName 추가
Input.displayName = "Input";

export default Input;
