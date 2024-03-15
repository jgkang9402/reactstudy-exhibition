import { ExhibitionType } from "@/types/exhibition.type";
import { devtools } from "zustand/middleware";

export interface DetailExhibitionStoreType {
  detailExhibitionInfo: ExhibitionType;
  handleDetailExhibitionInfo: (ExhibitionType: ExhibitionType) => void;
}

export const useExhibitionDetailStore = (set) => ({
  detailExhibitionInfo: null,
  handleDetailExhibitionInfo: (exhibition: ExhibitionType) =>
    set((state) => {
      return (state.detailExhibitionInfo = exhibition);
    }),
});
// export const useExhibitionDetailStore = devtools((set) => ({
//   detailExhibitionInfo: null,
//   handleDetailExhibitionInfo: (exhibition) =>
//     set((state) => {
//       return (state.detailExhibitionInfo = exhibition);
//     }),
// }));
