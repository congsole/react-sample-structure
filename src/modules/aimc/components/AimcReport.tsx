import React, {useEffect} from "react";
import {redirect, useParams} from "react-router-dom";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import ParagraphFilterV2 from "./filter/ParagraphFilterV2";
import ReportParagraph from "./ReportParagraph";
import {getAimcMenu} from "../constants/menus";
import dayjs from "dayjs";
import useQueryString from "../../../shared/hooks/useQueryString";
import {buildUrl} from "../../../shared/utils/utils";
import {usePathname} from "../../../shared/routes/routes";

const GridLayout = WidthProvider(RGL);

const AimcReport: React.FC = ()=> {
    const { serviceId, pageId } = useParams();
    const menu = getAimcMenu(serviceId!);
    const page = menu?.pages.find(page => page.pageNum === Number(pageId));
    // const { router, pathname, searchParams, createQueryStringList } =
    //     useQueryString();

    // const redirectUrl = buildUrl(usePathname(), {
    //     startDt: dayjs() === dayjs().startOf("month") ? dayjs().subtract(1, "month").startOf("month").format("YYYY-MM-DD") : dayjs().startOf("month").format("YYYY-MM-DD"),
    //     endDt: dayjs().subtract(1, "days").format("YYYY-MM-DD"),
    // });
    //
    // useEffect(() => {
    //     router.push(redirectUrl);
    // }, [serviceId]);

    return (
        <div className="portlet-area">
            <div className="portlet-info">
                <ParagraphFilterV2
                    prgrpFilters={menu?.prgrpFilters}
                    serviceId={Number(serviceId)}
                    title={page?.title}
                />
            </div>
                <div className="portlet" style={{ position: "relative" }}>
                    <ReportParagraph
                        serviceId={Number(serviceId)}
                        pageNum={Number(pageId)}
                        menu={menu!}
                        page={page!}
                    />
                </div>
        </div>
    );
}

export default AimcReport;