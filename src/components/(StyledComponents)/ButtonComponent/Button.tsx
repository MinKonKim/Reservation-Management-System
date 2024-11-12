import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFull?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, isFull, ...props }) => {
  return (
    <button
      className={`p-4 m-1 rounded-lg bg-Prime-500 text-white hover:bg-Prime-700 ${
        isFull ? "w-full" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
