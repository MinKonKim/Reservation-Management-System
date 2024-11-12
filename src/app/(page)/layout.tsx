import QueryProvider from "@/providers/QueryProviders";
import { StrictPropsWithChildren } from "@/types/common";

const ProvidersLayout = ({ children }: StrictPropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>;
};
export default ProvidersLayout;
