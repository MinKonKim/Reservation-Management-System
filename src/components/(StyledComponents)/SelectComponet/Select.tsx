import React, { forwardRef } from "react";

// Select 컴포넌트에 사용할 기본 props 정의
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  isFull?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className = "", isFull = false, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`p-3 m-1 border-solid border-2 border-indigo-600 rounded-lg ${
          isFull ? "w-full" : ""
        } ${className} cursor-pointer`}
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;
