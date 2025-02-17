import React from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import logo from "assets/images/logo.svg";
import { usePathname, useRouter } from "shared/routes/routes";

import ButtonIcon from "../ButtonIcon";
import {
  IconGnbConsult,
  IconGnbConsultAct,
  IconGnbCreator,
  IconGnbCreatorAct,
  IconGnbWriterAct,
  IconGnbWriter,
  IconHeaderInfo,
  IconHeaderQna,
  IconHeaderGuide,
} from "../Icon";

import UserInfo from "./UserInfo";

interface Props {
  className?: string;
  title?: string;
  datepicker?: any;
}

export default function HeaderGnb({ className = "" }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  let serviceName = "";
  if (pathname.startsWith("/aimc")) {
    serviceName = "aimc";
  } else if (pathname.startsWith("/aicm")) {
    serviceName = "aicm";
  } else if (pathname.startsWith("/aiic")) {
    serviceName = "aiic";
  }

  return (
    <header className={`header ${className}`}>
      <div className="logo">
        <Link to="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="tab-area">
        <ul className="tab-list">
          <li className={serviceName === "aimc" ? "active" : ""}>
            <Link to="/aimc">
              <div className="icon">
                {serviceName === "aimc" ? (
                  <IconGnbConsultAct />
                ) : (
                  <IconGnbConsult />
                )}
              </div>
              <div className="txt">AI Marketing Consultant</div>
            </Link>
          </li>
          <li className={serviceName === "aicm" ? "active" : ""}>
            <Link to="/aicm/main">
              <div className="icon">
                {serviceName === "aicm" ? (
                  <IconGnbWriterAct />
                ) : (
                  <IconGnbWriter />
                )}
              </div>
              <div className="txt">AI Campaign Advisor</div>
            </Link>
          </li>
          <li className={serviceName === "aiic" ? "active" : ""}>
            <Link to="/aiic/main">
              <div className="icon">
                {serviceName === "aiic" ? (
                  <IconGnbCreatorAct />
                ) : (
                  <IconGnbCreator />
                )}
              </div>
              <div className="txt">AI Image Creator</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="info-set">
        <UserInfo />
        {/* 09.27 마이페이지, 로그아웃 주석 처리 */}
        {/* <div className="btn-group">
          <ButtonIcon>
            <IconMypage />
          </ButtonIcon>
          <ButtonIcon>
            <IconLogout />
          </ButtonIcon>
        </div> */}
        <div className="btn-group">
          <ButtonIcon onClick={() => router.push("/etc/notice")}>
            <IconHeaderInfo />
          </ButtonIcon>
          <ButtonIcon onClick={() => router.push("/etc/qna")}>
            <IconHeaderQna />
          </ButtonIcon>
          <ButtonIcon onClick={() => router.push("/etc/serviceGuide")}>
            <IconHeaderGuide />
          </ButtonIcon>
        </div>
      </div>
    </header>
  );
}
