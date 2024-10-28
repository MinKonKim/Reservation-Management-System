import React, { forwardRef } from "react";

// React.InputHTMLAttributes를 사용하여 기본 input 속성을 모두 포함
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isFull?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className = "", isFull = false, ...props }, ref) => {
    const baseStyles = "p-3 m-1 border-solid border-2 rounded-lg";
    const fullWidthStyle = isFull ? "w-full" : "";

    // type에 따른 스타일 조건부 지정
    const typeStyles =
      type === "checkbox"
        ? "w-5 h-5 accent-indigo-600 cursor-pointer" // 체크박스 스타일링
        : "border-indigo-600";

    return (
      <input
        type={type}
        ref={ref}
        className={`${baseStyles} ${typeStyles} ${fullWidthStyle} ${className}`}
        {...props} // 나머지 props 전달
      />
    );
  }
);

// displayName 추가
Input.displayName = "Input";

export default Input;
