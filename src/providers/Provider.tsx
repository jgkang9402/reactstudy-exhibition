import ReactQueryProvider from "./ReactQueryProvider";
import ReactRouterProvider from "./ReactRouterProvider";

const Provider = () => {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider />
    </ReactQueryProvider>
  );
};

export default Provider;
