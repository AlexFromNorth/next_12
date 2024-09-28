// src/store/useStore.ts

import { create } from "zustand";

interface AppState {
  name: string;
  setName: (name: string) => void;
}

export const useStore = create<AppState>((set) => ({
  name: '',
  setName: (name) => set(() => ({ name })),
}));
