import React, { ReactNode } from "react";
interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex items-center justify-center mt-4 h-full">
      <div className="border p-4 rounded-lg drop-shadow-lg w-[70vw]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
