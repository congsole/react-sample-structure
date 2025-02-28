import React, { useEffect, useState } from "react";
import ButtonIcon from "shared/components/ButtonIcon";
import { Popover } from "antd";
import { getUserMe } from "shared/services/user/actions";
import { useMenuStore } from "shared/store/menuStore";
import { usePathname, useRouter } from "shared/routes/routes";
import { useParams } from "react-router-dom";
import { ReportPage } from "modules/aimc/constants/menus"

type ReportNavProps = {
  pages: ReportPage[];
};

export default function ReportNav({ pages }: ReportNavProps ) {
  const [pageData, setPageData] = useState<{ [key: string]: string[] }>();
  const router = useRouter();
  const pathname = usePathname();
  const { serviceId, pageId } = useParams();
  const { setIsMenuChecking } = useMenuStore();

  useEffect(() => {
    if (!pages) return;

    const titleData: { [key: string]: string[] } = {};
    pages.map((page: { pageNum: any; title: string; }) => {
      if (titleData[`${page.pageNum}`]) {
        titleData[`${page.pageNum}`].push(page.title);
      } else {
        titleData[`${page.pageNum}`] = [page.title];
      }
    });

    setPageData(titleData);
  }, [pages]);

  const handlePageClick = (pageNum: string) => {
    if (pageNum === pageId) return;
    if (!pageNum) return;
    setIsMenuChecking(true);
    getUserMe().then(async (data) => {
      const { menuList } = data;
      const isPathAllowed = menuList
        .filter((v: string) => v !== "/aimc")
        .some((path: string) => pathname.startsWith(path));
      if (!isPathAllowed) {
        window.location.href = "/auth/unauthorized";
      }
      setIsMenuChecking(false);
    });
    router.push(`/aimc/${serviceId}/${pageNum}`);
  };

  return (
    <div className="num">
      {pageData &&
        Object.keys(pageData).map((pageNum) => (
          <Popover
            key={pageNum}
            content={
              <div>
                {pageData[pageNum].map((title: string, i: number) => (
                  <p key={i}>{title}</p>
                ))}
              </div>
            }
            trigger="hover"
          >
            <>
              <ButtonIcon
                className={`circle ${pageNum === pageId ? "active" : ""}`}
                onClick={() => handlePageClick(pageNum)}
              >
                {pageNum}
              </ButtonIcon>
            </>
          </Popover>
        ))}
    </div>
  );
}
