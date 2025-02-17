const getUserSample = {
    usrSeq: "427",
    id: "P197244",
    pwd: "",
    identfcNum: "P197244",
    usrTypCd: "UE",
    usrStsCd: "NR",
    topDeptNm: "기타",
    teamNm: "임시",
    usrNm: "손해솔",
    menuList: [
        "/aimc",
        "/aimc/report/3",
        "/aimc/report/4",
        "/aimc/report/27",
        "/aimc/report/26",
        "/aimc/compare",
        "/aimc/report/8",
        "/aicm/main",
        "/aicm/marketing",
        "/aicm/message",
        "/aicm/my-project",
        "/aicm/t-marketing-archive/projects",
        "/aicm/t-marketing-archive/advanced-info",
        "/aiic/main",
        "/aiic/image",
        "/aiic/video",
        "https://express.adobe.com/",
        "https://author-p140220-e1433056.adobeaemcloud.com/linkshare.html?sh=9e9d79e8_723c_480c_999d_52cc4b8b3ca8.LWrHA2PourF-BDzJpQeR7DTedHUWBWNY5DYC7BB3L-M",
        "/aiic/authority"
    ]
};
const getUserMenuSample = [
    {
        number: 1,
        name: "AI Marketing Consultant",
        url: "/aimc",
        leafYn: "N",
        portletYn: "N",
        dataAuthYn: "N",
        iconImageName: "",
        subMenuList: [
            {
                number: 2,
                name: "AI 시장운영",
                url: "",
                leafYn: "N",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconMenu1",
                subMenuList: [
                    {
                        number: 3,
                        name: "판매실적 분석",
                        url: "/aimc/report/3",
                        leafYn: "Y",
                        portletYn: "Y",
                        dataAuthYn: "N",
                        iconImageName: ""
                    },
                    {
                        number: 4,
                        name: "상품별 고객특성",
                        url: "/aimc/report/4",
                        leafYn: "Y",
                        portletYn: "Y",
                        dataAuthYn: "N",
                        iconImageName: ""
                    },
                    {
                        number: 27,
                        name: "일별 실적 비교",
                        url: "/aimc/report/27",
                        leafYn: "Y",
                        portletYn: "Y",
                        dataAuthYn: "N",
                        iconImageName: ""
                    }
                ]
            },
            {
                number: 6,
                name: "AI 실험실",
                url: "",
                leafYn: "N",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconMenu3",
                subMenuList: [
                    {
                        number: 26,
                        name: "비용/기대 ARPU 분석",
                        url: "/aimc/report/26",
                        leafYn: "Y",
                        portletYn: "Y",
                        dataAuthYn: "N",
                        iconImageName: ""
                    }
                ]
            },
            {
                number: 7,
                name: "3사 경쟁 현황",
                url: "/aimc/compare",
                leafYn: "Y",
                portletYn: "Y",
                dataAuthYn: "N",
                iconImageName: "IconMenu4"
            },
            {
                number: 8,
                name: "매장 컨설팅(리포트)",
                url: "/aimc/report/8",
                leafYn: "Y",
                portletYn: "Y",
                dataAuthYn: "N",
                iconImageName: "IconMenu5"
            }
        ]
    },
    {
        number: 9,
        name: "AI Campaign Advisor",
        url: "/aicm/main",
        leafYn: "N",
        portletYn: "N",
        dataAuthYn: "N",
        iconImageName: "IconMenuGuide",
        subMenuList: [
            {
                number: 10,
                name: "마케팅 기획",
                url: "/aicm/marketing",
                leafYn: "Y",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconMenuMaketing"
            },
            {
                number: 11,
                name: "메시지 Writer",
                url: "/aicm/message",
                leafYn: "Y",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconMenuMsg"
            },
            {
                number: 12,
                name: "내 프로젝트",
                url: "/aicm/my-project",
                leafYn: "Y",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconMenuProject"
            },
            {
                number: 13,
                name: "T marketing Archive",
                url: "",
                leafYn: "N",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconMenuArchieve",
                subMenuList: [
                    {
                        number: 14,
                        name: "모든 프로젝트",
                        url: "/aicm/t-marketing-archive/projects",
                        leafYn: "Y",
                        portletYn: "N",
                        dataAuthYn: "N",
                        iconImageName: ""
                    },
                    {
                        number: 15,
                        name: "사전정보",
                        url: "/aicm/t-marketing-archive/advanced-info",
                        leafYn: "Y",
                        portletYn: "N",
                        dataAuthYn: "N",
                        iconImageName: ""
                    }
                ]
            }
        ]
    },
    {
        number: 18,
        name: "AI Image Creator",
        url: "/aiic/main",
        leafYn: "N",
        portletYn: "N",
        dataAuthYn: "N",
        iconImageName: "IconMenu1",
        subMenuList: [
            {
                number: 19,
                name: "AI Creator",
                url: "",
                leafYn: "N",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconCreator",
                subMenuList: [
                    {
                        number: 20,
                        name: "이미지 생성",
                        url: "/aiic/image",
                        leafYn: "Y",
                        portletYn: "N",
                        dataAuthYn: "N",
                        iconImageName: ""
                    },
                    {
                        number: 21,
                        name: "동영상 생성",
                        url: "/aiic/video",
                        leafYn: "Y",
                        portletYn: "N",
                        dataAuthYn: "N",
                        iconImageName: ""
                    }
                ]
            },
            {
                number: 22,
                name: "Content editor",
                url: "https://express.adobe.com/",
                leafYn: "Y",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconEditor"
            },
            {
                number: 23,
                name: "Asset Cloud",
                url: "https://author-p140220-e1433056.adobeaemcloud.com/linkshare.html?sh=9e9d79e8_723c_480c_999d_52cc4b8b3ca8.LWrHA2PourF-BDzJpQeR7DTedHUWBWNY5DYC7BB3L-M",
                leafYn: "Y",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconHub"
            },
            {
                number: 24,
                name: "Adobe 권한 신청",
                url: "/aiic/authority",
                leafYn: "Y",
                portletYn: "N",
                dataAuthYn: "N",
                iconImageName: "IconLock"
            }
        ]
    }
];

export async function getUserMe() {
    return getUserSample;
}

export async function getUserMenus() {
    return getUserMenuSample;
}