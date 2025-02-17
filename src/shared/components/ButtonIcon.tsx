import { CSSProperties, MouseEvent, ReactNode } from "react";
import cx from "classnames";
import React from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
}

export default function ButtonIcon({
  className = "",
  style,
  children,
  onClick,
  disabled,
}: Props) {
  return (
    <button
      type="button"
      className={cx("ui-btn-icon", `${className}`)}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
