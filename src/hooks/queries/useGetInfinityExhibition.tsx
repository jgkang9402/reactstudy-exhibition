import axiosInstance from "@/api/http";
import { useInfiniteQuery } from "@tanstack/react-query";

// interface PayloadProps {
//   code: number;
// }

const fetchGetExhibitions = async (page: number, code: number) => {
  const response = await axiosInstance
    .get(
      `/B551011/KorService1/areaBasedList1?MobileOS=WIN&MobileApp=AppTest&_type=json&numOfRows=20&arrange=Q&areaCode=${code}&pageNo=${page}`
    )
    .then((res) => res.data.response.body)
    .catch((error) => {
      throw error;
    });
  return response;
};

const useGetInfinityExhibition = (code: number) => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["travelList", code],
    queryFn: ({ pageParam = 1 }) => fetchGetExhibitions(pageParam, code),
    getNextPageParam: (lastPage, allPages) => {
      console.log("###", lastPage);
      console.log("@@@@", allPages);

      const nextPage = allPages.length + 1;
      const totalpages = Math.ceil(lastPage.totalCount / lastPage.numOfRows);
      return nextPage <= totalpages ? nextPage : null;
    },
    initialPageParam: 1,
    staleTime: 50000,
  });

  return {
    exhibitionList: data?.pages.map((page) => page.items.item).flat(),
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGetInfinityExhibition;
