import React from "react";
import { Outlet, useParams, Navigate, useLocation } from "react-router-dom";
import UserProvider from "shared/components/user/UserProvider";
import Snb from "shared/components/layout-ui/Snb";
import ReportHeader from "./ReportHeader";
import { getAimcMenu } from "../constants/menus";

const AimcLayout: React.FC = ()=> {
    const { serviceId, pageId } = useParams();
    const location = useLocation();

    if (location.pathname === "/aimc") {
        return <Navigate to="/aimc/1/1" replace />;
    }

    const serviceIdNum = Number(serviceId);
    const pageIdNum = Number(pageId);
    const menu = getAimcMenu(serviceId!)!;
    const title = menu.title;
    const pages = menu.pages;
    const hasAllPermissions = true;

    return (
        <UserProvider hasAllPermissions={hasAllPermissions}>
            <Snb menu={"AI Marketing Consultant"} />
            <div className="content">
                <div className="portlet-wrap">
                    <ReportHeader title={title} pages={pages} orgName={"조직선택조저거러"} serviceId={serviceIdNum} pageId={pageIdNum} />
                    <Outlet />
                </div>
            </div>
        </UserProvider>
    );
}

export default AimcLayout;