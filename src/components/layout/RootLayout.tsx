import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
  console.log("RootLayout");
  return (
    <div className="flex justify-center items-center min-h-screen overflow-x-hidden">
      <div className="bg-primary w-full min-h-screen">
        <div className="flex pt-16 pb-20 bg-white w-96 min-h-screen mx-auto">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
