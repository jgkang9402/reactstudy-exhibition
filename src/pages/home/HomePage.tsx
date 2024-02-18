import ExgibitionWrapper from "@components/home/ExgibitionWrapper";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to={"/like"}>HomePage</Link>
      <ExgibitionWrapper />
    </>
  );
};

export default HomePage;
