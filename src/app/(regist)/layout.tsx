"use client";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="flex flex-col w-[40vw] h-[80vh] p-5 m-0 border-2 border-solid rounded-[16px] justify-center">
        {children}
      </div>
    </div>
  );
};
export default LoginLayout;
