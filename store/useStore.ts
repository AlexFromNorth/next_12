// src/store/useStore.ts

import { create } from "zustand";

interface AppState {
  name: string;
  setName: (name: string) => void;
  passwords: string[];
  setPasswords: (passwords: string[]) => void;
}

export const useStore = create<AppState>((set) => ({
  name: "",
  setName: (name) => set(() => ({ name })),
  passwords: [],
  setPasswords: (passwords: string[]) => set(() => ({ passwords })),
}));
