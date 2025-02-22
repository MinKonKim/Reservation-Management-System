import { create } from "zustand";

type RoleState = {
  role: string | null;
  setRole: (role: string | null) => void;
  resetRole: () => void;
};

export const useRoleStore = create<RoleState>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
  resetRole: () => set({ role: null }),
}));
