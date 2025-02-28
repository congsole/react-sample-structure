// export const AIMC_MEMUS = [
//     { id: 1, name: "판매실적 분석", isPortlet: true },
//     { id: 2, name: "AI 시장운영", isPortlet: true },
//     { id: 3, name: "판매실적 분석", isPortlet: true },
//     { id: 4, name: "상품별 고객특성", isPortlet: true },
//     { id: 5, name: "지역상권 분석", isPortlet: false },
//     { id: 6, name: "AI 실험실", isPortlet: false },
//     { id: 7, name: "3사 경쟁현황", isPortlet: false },
//     { id: 8, name: "매장 컨설팅", isPortlet: true },
//     { id: 26, name: "비용/기대 ARPU 분석", isPortlet: false },
//     { id: 27, name: "일별 실적 비교", isPortlet: false },
// ];

export const AIMC_MENUS = [
    {
        serviceId: 1,
        title: "판매실적 분석",
        pages: [
            { pageNum: 1, title: "1페이지입니다." },
            { pageNum: 2, title: "2페이지입니다." },
            { pageNum: 3, title: "3페이지입니다." },
        ],
        filters: [
            { typeCd: "CITY", description: "시/군/구" },
            { typeCd: "CUST", description: "고객 분류" },
            { typeCd: "PRDL", description: "제품 대분류" },
            { typeCd: "PRDS", description: "제품 소분류" },
        ]
    }
];

export const getAimcMenu = (serviceId: string)=> {
    return AIMC_MENUS.find(menu => menu.serviceId === parseInt(serviceId));
}

export interface ReportPage {
    pageNum: number;
    title: string;
}
