import { atom } from "jotai";

export const initialBalance = atom(undefined);

export const initialChainId = atom<string>('');