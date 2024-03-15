import { create } from "zustand";
import { useExhibitionStore, ExhibitionStoreType } from "./exhibitionStore";
import {
  useExhibitionDetailStore,
  DetailExhibitionStoreType,
} from "./exhibitionDetailStore";

export const useCombinedStore = create<
  ExhibitionStoreType & DetailExhibitionStoreType
>()((...a) => ({
  ...useExhibitionStore(...a),
  ...useExhibitionDetailStore(...a),
}));
