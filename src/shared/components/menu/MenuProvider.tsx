import React, { useEffect } from "react";
import { useMenuStore } from "shared/store/menuStore";
import { getUserMenus } from "shared/services/user/actions";
import { usePathname } from "shared/routes/routes";

interface MenuProviderProps {
  children: React.ReactNode;
}

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const { setMenus } = useMenuStore();
  const pathname = usePathname();

  useEffect(() => {
    const getMenuList = async () => {
      const menus  = await getUserMenus();
      setMenus(menus);
    };
    getMenuList().then();
  }, [pathname, setMenus]);

  return <> {children} </>;
};

export default MenuProvider;
