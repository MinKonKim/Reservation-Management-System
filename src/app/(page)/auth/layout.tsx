const AuthPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 bg-gray-200">이미지 들어갈 자리</div>
      <main className="w-1/2 m-2">{children}</main>
    </div>
  );
};

export default AuthPageLayout;
