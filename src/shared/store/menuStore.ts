import { create } from "zustand";
import {JSX} from "react";

export interface IMenu {
  number: number;
  name: string;
  url: string;
  portletYn: string;
  dataAuthYn: string;
  iconImageName: string;
  subMenuList?: IMenu[];
}

export interface MenuItem {
  id: number;
  icon: string | JSX.Element | null;
  label: string;
  url: string | null;
  children?: MenuItem[];
}

interface MenuStoreState {
  isMenuChecking: boolean;
  setIsMenuChecking: (isChecking: boolean) => void;
  menus: MenuItem[];
  setMenus: (menus: IMenu[]) => void;
  getMenus: (name: string) => MenuItem[] | undefined;
  getOneDepthMenus: () => string[];
}

export const useMenuStore = create<MenuStoreState>((set, get) => ({
  menus: [],
  isMenuChecking: false,
  setIsMenuChecking: (isChecking: boolean) => {
    console.log("메뉴권한 체크 중", isChecking);
    set({ isMenuChecking: isChecking });
  },
  setMenus: (menus: IMenu[]) => {
    const recursive = (menus: IMenu[]): MenuItem[] => {
      return menus.map((menu) => ({
        id: menu.number,
        icon: menu.iconImageName || null,
        label: menu.name,
        url: menu.url || null,
        children: menu.subMenuList ? recursive(menu.subMenuList) : undefined,
      }));
    };

    set({ menus: recursive(menus) });
  },
  getMenus: (name: string) => {
    const menus = get()
      .menus.filter((menus) => menus.label === name)
      .map((menus) => menus.children);

    if (menus) return menus[0];
  },
  getOneDepthMenus: () => {
    const menus = get().menus.map((menu) => menu.label);
    return menus;
  },
}));
