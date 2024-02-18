import { ExhibitionType } from "@types/exhibition.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  likeList: ExhibitionType[];
};

type Action = {
  handleLike: (ExhibitionType: ExhibitionType) => void;
};

export const useExhibitionStore = create<State & Action>((set) => ({
  likeList: [],
  handleLike: (exhibition) =>
    set((state) => {
      const isLiked = state.likeList.some(
        (item) => item.contentid === exhibition.contentid
      );
      if (isLiked) {
        return {
          likeList: state.likeList.filter(
            (item) => item.contentid !== exhibition.contentid
          ),
        };
      } else {
        return {
          likeList: [...state.likeList, exhibition],
        };
      }
    }),
}));
