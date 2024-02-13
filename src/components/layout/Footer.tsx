import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleRoute = (path: string) => {
    navigate(path);
  };
  return (
    <footer className="fixed bottom-0 w-96 bg-white h-20 border-t border-primary">
      <ul className="flex justify-evenly">
        <li>
          <button onClick={() => handleRoute("/")}>
            <span>전시회</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleRoute("/like")}>
            <span>찜목록</span>
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
