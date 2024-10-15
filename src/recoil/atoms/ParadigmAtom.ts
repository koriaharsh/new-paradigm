import { atom } from "recoil";

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
