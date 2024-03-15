import { ExhibitionType } from "@/types/exhibition.type";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

export interface ExhibitionStoreType {
  likeList: ExhibitionType[];
  handleLike: (ExhibitionType: ExhibitionType) => void;
}
interface ExhibitionPersistedState {
  likeList: ExhibitionType[];
}

export const useExhibitionStore = devtools(
  persist<ExhibitionStoreType, [], [], ExhibitionPersistedState>(
    (set) => ({
      likeList: [],
      handleLike: (exhibition) =>
        set((state) => {
          console.log(state);

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
    }),
    {
      name: "exhibitionLikeList",
      partialize: (state) => ({ likeList: state.likeList }),
    }
  )
);
// export const useExhibitionStore = create(
//   devtools(
//     persist<ExhibitionStoreType, [], [], ExhibitionPersistedState>(
//       (set) => ({
//         likeList: [],
//         likeList2: [], // persist테스트용 스테이트
//         handleLike: (exhibition) =>
//           set((state) => {
//             console.log(state);

//             const isLiked = state.likeList.some(
//               (item) => item.contentid === exhibition.contentid
//             );
//             const isLiked2 = state.likeList2.some(
//               (item) => item.contentid === exhibition.contentid
//             );
//             if (isLiked || isLiked2) {
//               return {
//                 likeList: state.likeList.filter(
//                   (item) => item.contentid !== exhibition.contentid
//                 ),
//                 likeList2: state.likeList2.filter(
//                   (item) => item.contentid !== exhibition.contentid
//                 ),
//               };
//             } else {
//               return {
//                 likeList: [...state.likeList, exhibition],
//                 likeList2: [...state.likeList, exhibition],
//               };
//             }
//           }),
//       }),
//       {
//         name: "exhibitionLikeList",
//         partialize: (state) => ({ likeList: state.likeList }),
//       }
//     )
//   )
// );

/* 
type Persist = <
T,  // 전체 스토어 상태 타입.
Mps extends [StoreMutatorIdentifier, unknown][] = [], // Zustand 미들웨어에 대한 추가 타입 매개변수는 필요하지 않으므로 비워 둠.
Mcs extends [StoreMutatorIdentifier, unknown][] = [] // Zustand 미들웨어에 대한 추가 타입 매개변수는 필요하지 않으므로 비워 둠.
U = T  // partialize 함수에 의해 반환되는 상태의 타입.
>
(initializer: StateCreator<T, [...Mps, ['zustand/persist', unknown]], Mcs>, options: PersistOptions<T, U>) => StateCreator<T, Mps, [['zustand/persist', U], ...Mcs]>;
*/
