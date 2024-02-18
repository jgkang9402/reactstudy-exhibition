import useGetExhhibition from "@hooks/queries/useGetExhhibition";
import ExhibitionCard from "@components/common/ExhibitionCard";
import { useState } from "react";
import { ExhibitionType } from "@/types/exhibition.type";
// import { ExhibitionType } from "@types/exhibition.type";

const ExgibitionWrapper = () => {
  const [code, setCode] = useState(1); // 31경기도,32강원도
  const [page, setPage] = useState(1);

  const { exhibitionList, totalCount, isLoading } = useGetExhhibition({
    code: code,
    page: page,
  });

  if (isLoading) {
    return <div>loding~~~~...</div>;
  }
  // if (isLoading) <div>loding...</div>;
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {exhibitionList?.map((exhibition: ExhibitionType) => {
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

export default ExgibitionWrapper;
