import { ExhibitionType } from "@/types/exhibition.type";
import { useExhibitionStore } from "@store/exhibitionStore";

export interface ExhibitionCardProps {
  exhibition: ExhibitionType;
}

const ExhibitionCard = ({ exhibition }: ExhibitionCardProps) => {
  const { likeList, handleLike } = useExhibitionStore();
  return (
    <li>
      <div className="flex">
        <div className="w-1/4 h-16">
          <img className="w-full h-full" src={exhibition?.firstimage} alt="" />
        </div>
        <div className="text-xs">
          <p className="overflow-hidden whitespace-nowrap text-overflow-ellipsis w-48">
            {exhibition.title}
          </p>
          <p className="overflow-hidden whitespace-nowrap text-overflow-ellipsis w-48">
            {exhibition.addr1}
          </p>
          <p className="overflow-hidden whitespace-nowrap text-overflow-ellipsis w-48">
            {exhibition.contentid} 원
          </p>
        </div>
        <div className="flex flex-col">
          <button onClick={() => handleLike(exhibition)}>
            {/* <button onClick={() => handleLike(exhibition.contentid)}> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className={`-mt-0.5 h-5 w-5 ${
                !likeList.some(
                  (item) => item.contentid === exhibition.contentid
                )
                  ? "text-white border border-yellow-400"
                  : "text-yellow-400"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="border p-3">예매하기</button>
        </div>
      </div>
    </li>
  );
};

export default ExhibitionCard;
