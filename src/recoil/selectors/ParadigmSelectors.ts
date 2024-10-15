import { cycleCountAtom } from "../atoms/ParadigmAtom";
import { selector } from "recoil";

export const cycleCountAtomSelector = selector<number>({
  key: "cycleCountAtomSelector",
  get: ({ get }) => {
    const data = get(cycleCountAtom);

    return data + 1;
  },
});
