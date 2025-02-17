import React, { useCallback, useEffect } from "react";
import { getUserMe } from "shared/services/user/actions";
import { usePathname } from "shared/routes/routes";
// import {
//   SLACK_ALARM_TYPE,
//   slackAlarmDetail,
// } from "@/app/aimc/_utils/slackAlarm";
import { useMenuStore } from "shared/store/menuStore";

interface MenuProviderProps {
  children: React.ReactNode;
}

// 아래 url들은 메뉴접근 권한을 체크해야한다.
const menuAccessCheckUrls = ["/aimc", "/aicm", "/aiic"];

function isMenuAccessUrl(url: string): boolean {
  return menuAccessCheckUrls.some((baseUrl) => url.startsWith(baseUrl));
}

const MenuCheckerProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const { setIsMenuChecking } = useMenuStore();
  const checkAccessAndRedirect = useCallback(
    async (pathname: string) => {
      try {
        setIsMenuChecking(true);
        const user = await getUserMe();
        const menuList = user.menuList;
        if (isMenuAccessUrl(pathname)) {
          if (pathname === "/aimc") {
            return;
          }
          const isPathAllowed = menuList
            .filter((v: string) => v !== "/aimc")
            .some((path: string) => pathname.startsWith(path));
          if (!isPathAllowed) {
            // slackAlarmDetail(
            //   SLACK_ALARM_TYPE.AUTH,
            //   "app/_components/shared/MenuCheckerProvider.tsx !isPathAllowed",
            // );
            window.location.href = "/auth/unauthorized";
            return;
          }
        }
        setIsMenuChecking(false);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        // slackAlarmDetail(
        //   SLACK_ALARM_TYPE.AUTH,
        //   "app/_components/shared/MenuCheckerProvider.tsx catch" + error,
        // );
        window.location.href = "/auth/unauthorized";
      }
    },
    [setIsMenuChecking],
  );

  useEffect(() => {
    checkAccessAndRedirect(pathname);
  }, [pathname, checkAccessAndRedirect]);

  return <> {children} </>;
};

export default MenuCheckerProvider;
