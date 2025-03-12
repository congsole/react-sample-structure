import React from "react";

import mainImg from "assets/images/main/bg_main_img.png";
import service2 from "assets/images/main/bg_service_aicm.png";
import service3 from "assets/images/main/bg_service_aiic.png";
import service1 from "assets/images/main/bg_service_aimc.png";

import ButtonIcon from "shared/components/ButtonIcon";
import {
    IconGnbConsult,
    IconGnbCreator,
    IconGnbWriter,
    IconMoreArrowB,
    IconQueW,
    IconSpeaker,
} from "shared/components/Icon";

import { Link } from "react-router-dom";
import { Image } from "antd";
import { useMenuStore } from "shared/store/menuStore";
import { useRouter } from "shared/routes/routes";

const Main = () => {
    const { getOneDepthMenus } = useMenuStore();
    const router = useRouter();
    const handleRoute = (e: any, key: string) => {
        const oneDepthMenus = getOneDepthMenus();

        if (!oneDepthMenus.includes(key)) {
            e.preventDefault();
            alert(
                "서비스 접근 권한이 없습니다. 자세한 사항은 관리자에게 문의해주세요",
            );
            return;
        }
    };

    return (
        <div className="layout-content main scrollbar">
            <div className="main-visual">
                <div className="inner-cont">
                    <div className="main-sec">
                        <div className="tit-set">
                            <div className="tit">
                                <strong>M</strong>NO
                                <br /> <strong>A</strong>I
                                <br /> <strong>M</strong>arketing
                                <br /> <strong>F</strong>ramework
                            </div>
                            <div className="txt">
                                그동안의 구성원들의 노하우와
                                <br />
                                데이터가 집약된 AI도우미를 통해
                                <br />
                                마케터들의 고민을
                                <br />
                                덜어주는 툴을 제공합니다.
                            </div>
                        </div>
                        <div className="main-img">
                            <Image preview={false} src={mainImg} alt="메인이미지" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-sec">
                <div className="inner-cont">
                    <div className="tit-set">
                        <div className="tit">
                            마케터들의 더 나은 업무진행을 위해 <strong>3가지 서비스</strong>를
                            제공합니다.
                        </div>
                    </div>
                    <ul className="service-list">
                        <li>
                            <div className="service-icon">
                                <IconGnbConsult style={{ width: 50 }} />
                            </div>
                            <div className="txt-box">
                                <div className="tit">AI Marketing Consultant</div>
                                <div className="txt">
                                    전사/상권/매장 현황에 대한 AI 리포트를 제공합니다.
                                    <br />
                                    자유롭게 리포트를 편집하고 LLM 기반으로 원하는
                                    <br />
                                    정보를 빠르고 쉽게 찾을 수 있습니다.
                                </div>
                                <Link
                                    to="/aimc"
                                    onClick={(e) => handleRoute(e, "AI Marketing Consultant")}
                                >
                                    <div className="btn-group">
                                        <ButtonIcon>
                                            바로가기
                                            <IconMoreArrowB />
                                        </ButtonIcon>
                                    </div>
                                </Link>
                            </div>
                            <div className="service-img">
                                <Image preview={false} src={service1} alt="서비스이미지1" />
                            </div>
                        </li>
                        <li>
                            <div className="service-icon">
                                <IconGnbWriter style={{ width: 50 }} />
                            </div>
                            <div className="txt-box">
                                <div className="tit">AI Campaign Advisor</div>
                                <div className="txt">
                                    AI와 함께 마케팅 프로젝트를 관리하고 메시지를 생성합니다.
                                    <br />
                                    대화를 통해 마케팅 아이디어를 얻고 MMS, 배너 등<br />
                                    양식에 맞는 메시지를 빠르게 생성해보세요.
                                </div>
                                <Link
                                    to="/aicm/main"
                                    onClick={(e) => handleRoute(e, "AI Campaign Advisor")}
                                >
                                    <div className="btn-group">
                                        <ButtonIcon>
                                            바로가기
                                            <IconMoreArrowB />
                                        </ButtonIcon>
                                    </div>
                                </Link>
                            </div>
                            <div className="service-img">
                                <Image preview={false} src={service2} alt="서비스이미지2" />
                            </div>
                        </li>
                        <li>
                            <div className="service-icon">
                                <IconGnbCreator style={{ width: 50 }} />
                            </div>
                            <div className="txt-box">
                                <div className="tit">AI Image Creator</div>
                                <div className="txt">
                                    모두의 디자인 도우미, AI 이미지 크레에이터 고객들의
                                    <br />
                                    이목을 끄는 우리만의 마케팅 콘텐츠,
                                    <br />
                                    디자인경험이 없어도 10분만에 만들어 쓸 수 있어요
                                </div>
                                <Link
                                    to="/aiic/main"
                                    onClick={(e) => handleRoute(e, "AI Image Creator")}
                                >
                                    <div className="btn-group">
                                        <ButtonIcon>
                                            바로가기
                                            <IconMoreArrowB />
                                        </ButtonIcon>
                                    </div>
                                </Link>
                            </div>
                            <div className="service-img">
                                <Image preview={false} src={service3} alt="서비스이미지3" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pop-btn-set">
                <ButtonIcon
                    className="portlet-btn"
                    onClick={() => router.push("/etc/notice")}
                >
                    <IconSpeaker style={{ width: 28 }} />
                </ButtonIcon>

                <ButtonIcon
                    className="chat-btn"
                    onClick={() => router.push("/etc/qna")}
                >
                    <IconQueW style={{ width: 28 }} />
                </ButtonIcon>
            </div>
        </div>
    );
};

export default Main;
