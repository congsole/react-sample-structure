import React from "react";

export type Filter = {
    typeCd: string;
    description: string | undefined;
}

// 리포트 단락 정보
export type ReportParagraphType = {
    userParagraphId: number;
    title: string;
    pageNum: number;
    paragraphType: string; //'MX':무선, 'ET':기타
    order: number;
    filters: string[];
    // layouts: PortletData[];
    isFixed: boolean;
    prgrpFilters: Filter[] | undefined;
};

// 포틀릿 레이아웃 정보
export type PortletLayout = {
    portletId: number;
    x: number;
    y: number;
};
// 포틀릿 정보
export type PortletData = {
    portletId: string;
    x: number;
    y: number;
    width: number;
    height: number;
    title: string;
    description: string;
    portletFilters: Filter[];
};
// 페이지 정보
export type Page = {
    pageNum: number;
    title: string;
    isFixed: boolean;
    portlets: PortletData[],
}
// 메뉴 정보
export type Menu = {
    serviceId: number;
    title: string;
    pages: Page[];
    pageFilters: Filter[];
    prgrpFilters: Filter[];
}

export type PortletContent = {
    key: React.Key;
    title: string;
}
