import { create } from 'zustand';

interface Store {
  currentPageId: number;
  setCurrentPageId: (id: number) => void;
}

export const useMainStore = create<Store>((set) => ({
  currentPageId: 1,
  setCurrentPageId: (page) => set({ currentPageId: page }),
}));
