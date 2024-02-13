import { useNavigate } from "react-router-dom";

const Header = () => {
  console.log("Header");
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <header className="fixed w-96 z-[1] top-0 bg-white h-16 border-b border-primary">
      <div className="px-3 h-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={goBack}
            className="w-[30px] h-[26px] bg-[url('@/assets/back.svg')] bg-no-repeat"
          ></button>
          <h2 className="text-xl font-semibold">예매하기</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
