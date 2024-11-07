import { UserType } from "@/types/firebase.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// 필요한 속성만 선택한 타입 정의
export type userStoreType = Pick<UserType, "id" | "name" | "is_admin">;

interface UserState {
  user: userStoreType;
  setUser: (user: userStoreType) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    immer((set) => ({
      user: {
        id: "", // 초기값 설정
        name: "",
        is_admin: false,
      },

      setUser: (user: userStoreType) =>
        set((state) => {
          state.user = { ...user };
        }),

      clearUser: () =>
        set((state) => {
          state.user = {
            id: "",
            name: "",
            is_admin: false,
          };
        }),
    })),
    {
      name: "user-storage", // 로컬 스토리지에 저장될 키 이름
    }
  )
);

export default useUserStore;
