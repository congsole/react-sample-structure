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
            {
                pageNum: 1,
                title: "무선 판매",
                isFixed: false,
                portlets: [
                    {
                        portletId: '1',
                        title: '유형 별 판매량/매출/이익',
                        description: '',
                        x: 0,
                        y: 0,
                        width: 4,
                        height: 4,
                        portletFilters: [],
                    },
                    {
                        portletId: '2',
                        title: '지역별 주문량',
                        description: '',
                        x: 4,
                        y: 0,
                        width: 4,
                        height: 2,
                        portletFilters: [],
                    },
                    {
                        portletId: '3',
                        title: '지역별/일별/제품별 판매량',
                        description: '',
                        x: 4,
                        y: 2,
                        width: 4,
                        height: 2,
                        portletFilters: [],
                    }
                ],
            }
            ],
        pageFilters: [
            { typeCd: "STAT", description: "도" },
        ],
        prgrpFilters: [
            { typeCd: "CITY", description: "시/군/구" },
            { typeCd: "CUST", description: "고객 분류" },
            { typeCd: "PRDL", description: "제품 대분류" },
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
