// import useGetExhhibition from "@hooks/queries/useGetExhhibition";
import ExhibitionCard from "@components/common/ExhibitionCard";
import { useState } from "react";
import { ExhibitionType } from "@/types/exhibition.type";
import Spinner from "@components/common/Spinner";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import useGetInfinityExhibition from "@hooks/queries/useGetInfinityExhibition";
// import { ExhibitionType } from "@types/exhibition.type";

const ExgibitionWrapper = () => {
  const [code] = useState(1); // 31경기도,32강원도

  const { targetRef } = useIntersectionObserver(handleVisibility);
  const {
    exhibitionList,
    isLoading,
    // error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInfinityExhibition(code);
  function handleVisibility(isVisible: boolean) {
    if (isVisible && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }
  // const { exhibitionList, totalCount, isLoading } = useGetExhhibition({
  //   code: code,
  //   page: page,
  // });

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="pb-12">
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
      <div ref={targetRef}>{isFetchingNextPage && <Spinner />}</div>
    </div>
  );
};

export default ExgibitionWrapper;
