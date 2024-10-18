import { atom, selector } from "recoil";

// Time duration in seconds
export const durationState = atom<number>({
  key: "durationState",
  default: 60,
});

export const cycleAtom = atom<string>({
  key: "cycleAtom",
  default: "5",
});

export const cycleCountAtom = atom<number>({
  key: "cycleCountAtom",
  default: 0,
});

export const paradigmState = atom<string>({
  key: "paradigmState",
  default: "Landing",
});

export const markerState = atom({
  key: "markerState",
  default: selector({
    key: "markerStateSelector",
    get: () => {
      return new Date();
    },
  }),
});
