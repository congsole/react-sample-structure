import React, { useCallback, useEffect, useRef, useState, lazy, Suspense } from "react";
import {Filter, Page, PortletData} from "modules/aimc/types/report";
import cn from "classnames";

import ButtonIcon from "shared/components/ButtonIcon";
import { IconClose, IconFullView } from "shared/components/Icon";

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
  pageId: number;
  isFixed: boolean;
};


export default function PowerBIReportCard({
  data,
  globalFilterSetting,
  existFilterRemoveAll = true,
  onDelete,
  isFullScreen = false,
  serviceId,
  pageId,
  isFixed,
}: ReportCardProps) {

  const PortletContent = lazy(() => import(`modules/aimc/components/report/${serviceId}/${pageId}/Dashboard_${data.portletId}`));
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
        style={{ height: "100%", backgroundColor: "white", overflow: "auto" }}
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
            <Suspense fallback={<div className="loading">LOADING</div>}>
              <PortletContent
                key={`${serviceId}-${pageId}-Portlet_${data.portletId}`}
              />
            </Suspense>
          </div>
        </div>
      </div>
  );
}
