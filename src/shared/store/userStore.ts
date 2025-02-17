import { create } from "zustand";

interface UserStoreState {
  hasAllPermissions: boolean;
  setHasAllPermissions: (hasAllPermissions: boolean) => void;
  getHasAllPermissions: () => boolean;
}

export const useUserStore = create<UserStoreState>((set, get) => ({
  hasAllPermissions: false,
  setHasAllPermissions: (hasAllPermissions: boolean) => {
    set({ hasAllPermissions });
  },
  getHasAllPermissions: () => {
    return get().hasAllPermissions;
  },
}));
