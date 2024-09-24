import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className={`p-4 m-1 rounded-lg bg-indigo-500 text-white hover:bg-indigo-700`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
