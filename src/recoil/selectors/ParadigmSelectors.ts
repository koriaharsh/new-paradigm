import { cycleCountAtom, durationState } from "../atoms/ParadigmAtom";
import { selector } from "recoil";

export const cycleCountAtomSelector = selector<number>({
  key: "cycleCountAtomSelector",
  get: ({ get }) => {
    const data = get(cycleCountAtom);

    return data + 1;
  },
});

export const durationStateSelector = selector<[number, number, ...number[]]>({
  key: "durationStateSelector",
  get: ({ get }) => {
    const data = get(durationState);
    const fifty = data * 0.5;
    const thirty = data * 0.3;
    const fifteen = data * 0.15;
    const five = 0;

    return [fifty, thirty, fifteen, five];
  },
});
