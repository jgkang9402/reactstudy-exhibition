import axiosInstance from "@/api/http";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

interface PayloadProps {
  code: number;
  page: number;
}

const fetchGetExhibitions = async (payload: PayloadProps) => {
  const { code, page } = payload;
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

const useGetExhhibition = (payload: PayloadProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["travelList", payload],
    queryFn: () => fetchGetExhibitions(payload),
    staleTime: 50000,
  });
  // const { data, isLoading, error } = useInfiniteQuery();
  console.log({
    exhibitionList: data?.items.item,
    totalCount: data?.totalCount,
    isLoading,
    error,
  });

  return {
    exhibitionList: data?.items.item,
    totalCount: data?.totalCount,
    isLoading,
    error,
  };
};

export default useGetExhhibition;
