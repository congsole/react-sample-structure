import React from "react";
import { useParams } from "react-router-dom";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import ParagraphFilterV2 from "./filter/ParagraphFilterV2";
import ReportParagraph from "./ReportParagraph";
import {getAimcMenu} from "../constants/menus";

const GridLayout = WidthProvider(RGL);

const AimcReport: React.FC = ()=> {
    const { serviceId, pageId } = useParams();
    const menu = getAimcMenu(serviceId!);
    const page = menu?.pages.find(page => page.pageNum === Number(pageId));


    return (
        <div className="portlet-area">
            <div className="portlet-info">
                <ParagraphFilterV2
                    prgrpFilters={menu?.filters}
                    serviceId={Number(serviceId)}
                    title={page?.title}
                />
            </div>
            {!isMenuChecking && (
                <div className="portlet" style={{ position: "relative" }}>
                    <ReportParagraph
                        serviceId={serviceId}
                        data={report}
                        menuFilters={filters}
                    />
                </div>
            )}
        </div>
    );
}

export default AimcReport;