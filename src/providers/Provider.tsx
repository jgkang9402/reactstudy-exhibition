import ReactQueryProvider from "@providers/ReactQueryProvider";
import ReactRouterProvider from "@/providers/ReactRouterProvider";

const Provider = () => {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider />
    </ReactQueryProvider>
  );
};

export default Provider;
