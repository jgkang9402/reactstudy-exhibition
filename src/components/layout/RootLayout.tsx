import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <header>123</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
