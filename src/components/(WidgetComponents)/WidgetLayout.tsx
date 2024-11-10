type WidgetLayoutProps = {
  children: React.ReactNode;
};

const WidgetLayout = ({ children }: WidgetLayoutProps) => {
  return <div className="shadow-lg">{children}</div>;
};

export default WidgetLayout;
