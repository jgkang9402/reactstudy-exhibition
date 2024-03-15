import ExhibitionCard from "@components/common/ExhibitionCard";
// import { useExhibitionStore } from "@store/exhibitionStore";
import { ExhibitionType } from "@/types/exhibition.type";
import { Link } from "react-router-dom";
import { useCombinedStore } from "@store/index";

const LikePage = () => {
  const { likeList } = useCombinedStore();
  // const { likeList, likeList2 } = useExhibitionStore();

  return (
    <div>
      <Link to={"/"}>LikePage</Link>
      <ul>
        {likeList?.map((exhibition: ExhibitionType) => {
          return (
            <ExhibitionCard
              key={exhibition.contentid}
              exhibition={exhibition}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default LikePage;
