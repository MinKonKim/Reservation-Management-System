import { ButtonHTMLAttributes } from "react";
import { buttonVariantStyles, buttonWidthStyle } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  color?: "primary" | "secondary" | "point";
  isFull?: boolean;
}

const Button = ({
  children,
  variant = "filled",
  color = "primary",
  isFull = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium border transition-all duration-200
         ${buttonWidthStyle(isFull)} 
         ${buttonVariantStyles(variant, color)} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
