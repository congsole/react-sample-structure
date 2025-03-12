import React from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import FooterLogo from "assets/images/footer_logo.svg";

interface Props {
  className?: string;
}

export default function Footer({ className = "" }: Props) {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-logo">
        <Link to="/">
          <Image preview={false} src={FooterLogo} alt="logo" />
        </Link>
        <span className="copyright">
          SK TELECOM CO., LTD. All rights reserved.
        </span>
      </div>
      <div className="link-set">
        <Link to="/etc/notice">공지사항</Link>
        <Link to="/etc/qna">서비스 요청 사항</Link>
        <Link to="/etc/serviceGuide">서비스 가이드</Link>
      </div>
    </footer>
  );
}
