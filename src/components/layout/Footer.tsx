import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleRoute = (path: string) => {
    navigate(path);
  };
  return (
    <footer className="fixed bottom-0 w-96 bg-white h-20 border-t border-primary">
      <ul className="flex justify-evenly">
        <li>
          <Link to={"/"}>
            <span>전시회</span>
          </Link>
        </li>
        <li>
          <Link to={"/like"}>
            <span>찜목록</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
