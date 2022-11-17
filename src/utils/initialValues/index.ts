import { atom } from "jotai";

export const initialTransactionCompleted = atom<string>('');

export const initialBalance = atom(undefined);

export const initialPattern = atom<RegExp>(/^^/g);

export const initialChainId = atom<string>('');