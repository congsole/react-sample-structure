import React, { useCallback, useEffect, useRef, useState } from "react";
import {Filter, Page, PortletData} from "modules/aimc/types/report";
import cn from "classnames";

import ButtonIcon from "shared/components/ButtonIcon";
import { IconClose, IconFullView } from "shared/components/Icon";
// import usePortletStateStore from "@/app/_store/portletStateStore";

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import MoreDropdown from "../MoreDropdown";

// beforeDates의 타입을 정의
interface BeforeDate {
  beforeStartDate: string;
  beforeEndDate: string;
}

type ReportCardProps = {
  data: PortletData;
  globalFilterSetting: Filter[];
  existFilterRemoveAll?: boolean;
  onDelete: (portletId: number) => void;
  isFullScreen?: boolean; // 전체화면 가능 여부
  serviceId: number;
  isFixed: boolean;
};

/**
 * PowerBI Report Card
 */
export default function PowerBIReportCard({
  data,
  globalFilterSetting,
  existFilterRemoveAll = true,
  onDelete,
  isFullScreen = false,
  serviceId,
                                            isFixed
}: ReportCardProps) {
  // const { portletStateList, updatePortletState } = usePortletStateStore();
  const handleFullScreen = useFullScreenHandle();

  // useEffect ::::::::::::::::::
  // 초기화
  // useEffect(() => {
  //   updatePortletState({
  //     portletId: data.portletId,
  //     status: "init",
  //   });
  // }, [data.portletId, updatePortletState]);

  return (
      <div
        className="card"
        style={{ height: "100%", backgroundColor: "white", overflow: "hidden" }}
      >
        <div className="view-top">
          <div className="tit-set">
            <div className="tit">{data.title}</div>
          </div>
          <div className="right-set">
            {isFullScreen ? (
              <ButtonIcon
                onClick={
                  handleFullScreen.active
                    ? handleFullScreen.exit
                    : handleFullScreen.enter
                }
              >
                {handleFullScreen.active ? (
                  <IconClose style={{ width: 20 }} />
                ) : (
                  <IconFullView style={{ width: 30 }} />
                )}
              </ButtonIcon>
            ) : (
              <MoreDropdown isFixed={isFixed} onDelete={() => onDelete(Number(data.portletId))} />
            )}
          </div>
        </div>
        <div
          className={cn("view-content", {})}
        >
          <div className="report-container">
          </div>
        </div>
      </div>
  );
}
