import {
  IconCreator,
  IconEditor,
  IconHub,
  IconLock,
  IconMenu1,
  IconMenu2,
  IconMenu3,
  IconMenu4,
  IconMenu5,
  IconMenuMinus,
  IconMenuPlus,
} from "shared/components/Icon";
import cx from "classnames";
import React, {JSX, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { usePathname, useRouter } from "shared/routes/routes";

import { useMenuStore } from "shared/store/menuStore";
import { useAlert } from "shared/hooks/alert/useAlert";

const iconMapping: { [key: string]: JSX.Element } = {
  IconMenu1: <IconMenu1 style={{ width: 16 }} />,
  IconMenu2: <IconMenu2 style={{ width: 16 }} />,
  IconMenu3: <IconMenu3 style={{ width: 16 }} />,
  IconMenu4: <IconMenu4 style={{ width: 16 }} />,
  IconMenu5: <IconMenu5 style={{ width: 16 }} />,
  IconCreator: <IconCreator style={{ width: 16 }} />,
  IconEditor: <IconEditor style={{ width: 16 }} />,
  IconHub: <IconHub style={{ width: 16 }} />,
  IconLock: <IconLock style={{ width: 16 }} />,
};

type SnbProps = {
  menu: string;
};

export default function Snb({ menu }: SnbProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { getMenus } = useMenuStore();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const { showAlert } = useAlert();
  // const { isOpen, toggleIsOpen } = useSmartBeeStore();

  const handleToggle = (id: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 메뉴 데이터 fetch
  const menus = getMenus(menu);

  // 아이콘 매핑 처리
  const includesIconItems = () => {
    let result;
    if (menus) {
      result = menus.map((menu) => {
        if (menu.icon && typeof menu.icon === "string") {
          return {
            ...menu,
            icon: iconMapping[menu.icon],
          };
        } else {
          return menu;
        }
      });
    }

    return result;
  };
  // 경로에 따른 메뉴 상태 관리
  useEffect(() => {
    if (!menus) return;

    const newOpenMenus: { [key: number]: boolean } = {};

    menus.forEach((menu) => {
      if (menu.children) {
        menu.children.forEach((child) => {
          if (child.url === pathname) {
            newOpenMenus[menu.id] = true;
          }
        });
      }
    });

    setOpenMenus(newOpenMenus);

    // 라우팅 시 SmartBee Widget 닫기
    // if (isOpen) {
    //   toggleIsOpen();
    // }
  }, [pathname, menus]);

  return (
    <div className="snb sticky">
      <div className="snb-wrap">
        <div className="snb-box scrollbar">
          <ul className="snb-list">
            {includesIconItems()?.map((menu) => {
              return (
                <li key={menu.id}>
                  {menu.url ? (
                    <div
                      className={cx("main-menu", {
                        active: pathname === menu.url,
                      })}
                    >
                      <Link
                        to={menu.url}
                        target={menu.url.indexOf("http") == 0 ? "_blank" : ""}
                        className="label-set"
                      >
                        {menu.icon}
                        <div className="label">{menu.label}</div>
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="main-menu"
                      onClick={() => handleToggle(menu.id)}
                    >
                      <div className="label-set">
                        {menu.icon}
                        <div className="label">{menu.label}</div>
                      </div>
                      <div className="toggle-icon">
                        {openMenus[menu.id] ? (
                          <IconMenuMinus style={{ width: 24 }} />
                        ) : (
                          <IconMenuPlus style={{ width: 24 }} />
                        )}
                      </div>
                    </div>
                  )}

                  {!menu.url && (
                    <ul
                      className={cx("sub-menu", { open: openMenus[menu.id] })}
                    >
                      {menu.children?.map((childMenu) => {
                        return (
                          <li
                            key={childMenu.id}
                            className={cx({
                              active: pathname === childMenu.url,
                            })}
                          >
                            {childMenu.url && (
                              <Link to={childMenu.url}>
                                {childMenu.label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="info-box">
          <li>
            <Link to={"/etc/notice"}>공지사항</Link>
          </li>
          <li>
            <Link to={"/etc/qna"}>서비스 요청 사항</Link>
          </li>
          <li>
            <Link to={"/etc/serviceGuide"}>서비스 가이드</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
