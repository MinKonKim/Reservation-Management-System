type WidgetLayoutProps = {
  children: React.ReactNode;
};

const WidgetLayout = ({ children }: WidgetLayoutProps) => {
  return (
    <div className="shadow-lg flex justify-center items-center">{children}</div>
  );
};

export default WidgetLayout;
