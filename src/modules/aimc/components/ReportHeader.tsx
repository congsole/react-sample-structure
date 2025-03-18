import React from "react";
import { useState } from "react";
import { IconModify, IconStoreAct } from "shared/components/Icon";
import PdfDownload from "./PdfDownload";
// import ReportNav from "./ReportNav";
import GlobalDateRangeFilter from "shared/components/filter/GlobalDateRangeFilter";
// import MonthFilter from "./filter/global/MonthFilter";
// import ReportEditorModal from "./modal/ReportEditorModal";
// import SelectOrgModal from "./modal/SelectOrgModal";
// import SelectStoreModal from "./modal/SelectStoreModal";
import { Popover, Tooltip } from "antd";
import dayjs from "dayjs";
import ReportNav from "./ReportNav";
import useFilterStore from "../store/filterStore";
import SelectStateModal from "./modal/SelectOrgModal";

type ReportHeaderProps = {
  title: string;
  pages: {
    pageNum: number;
    title: string;
  }[];
  serviceId: number;
  pageId: number;
};

export default function ReportHeader({
  title,
  pages,
  serviceId,
}: ReportHeaderProps) {
  const [showOrgModal, setShowOrgModal] = useState(false);
  const [showStoreModal, setShowStoreModal] = useState(false);
  const [showReportEditorModal, setShowReportEditorModal] = useState(false);
  const [isStoreReport, setIsStoreReport] = useState(serviceId === 8); // 매장 리포트인지 여부
  const [selectedStates, setSelectedStates] = useState<string>("");
  const selectedStateList = useFilterStore((state) => state.getSelectedOptions("STAT")) || [];

  React.useEffect(() => {
    setSelectedStates(selectedStateList.join(", "));
  }, [selectedStateList]);

  const monFilterIds = [8, 26];
  const noOrgOrStoreIds = [26, 27];
  const noGlobalFilterIds = [27];
  // const page = Number(searchParams.get("page")) || 1;
  const format: { [key: number]: string } = {
    8: "YYYY-MM",
    26: "YYYYMM",
  };

  return (
    <div className="top-set">
      <div className="lft">
        <div className="tit-set">
          <div className="tit">{title}</div>
          {!noGlobalFilterIds.includes(serviceId) && (
            <div className="datepicker">
              <GlobalDateRangeFilter
                start={dayjs().startOf("month").format("YYYY-MM-DD")}
                end={dayjs().subtract(1,"day").format("YYYY-MM-DD")}
              />
            </div>
          )}
          <div className="btn-group">
            <PdfDownload title={title} />

            {/*{isStoreReport && (*/}
            {/*  <div className="branch">*/}
            {/*    <div className="place">*/}
            {/*      <Popover content={agentName}>*/}
            {/*        <span className="store">{shopName}</span>*/}
            {/*      </Popover>*/}
            {/*    </div>*/}
            {/*    <button*/}
            {/*      type="button"*/}
            {/*      className="ui-btn sm border round"*/}
            {/*      onClick={() => {*/}
            {/*        setShowStoreModal(true);*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <IconStoreAct style={{ width: 16 }} />*/}
            {/*      <span>매장 선택</span>*/}
            {/*    </button>*/}
            {/*  </div>*/}
            {/*)}*/}

            {!isStoreReport &&
              (noOrgOrStoreIds.includes(serviceId) ? (
                <></>
              ) : (
                <div className="branch">
                  <div className="place">
                    <Tooltip title={selectedStates}>{selectedStates}</Tooltip>
                  </div>
                  <button
                    type="button"
                    className="ui-btn sm border round"
                    onClick={() => {
                      setShowOrgModal(true);
                    }}
                  >
                    <IconStoreAct style={{ width: 16 }} />
                    <span>지역 선택</span>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="rgt">
        <div className="popover-set">
          <div className="txt">리포트 화면</div>
          <ReportNav pages={pages} />

          {!noOrgOrStoreIds.includes(serviceId) && (
            <div className="btn-area">
              <div
                className="modify"
                onClick={() => {
                  setShowReportEditorModal(true);
                }}
              >
                <IconModify />
              </div>
            </div>
          )}
        </div>
      </div>
      <SelectStateModal
        showModal={showOrgModal}
        onCancel={() => setShowOrgModal(false)}
      />

      {/*{serviceId !== 6 && !pages[page - 1].isFixed && (*/}
      {/*  <ReportEditorModal*/}
      {/*    serviceId={serviceId}*/}
      {/*    pages={pages}*/}
      {/*    showModal={showReportEditorModal}*/}
      {/*    onCancel={() => setShowReportEditorModal(false)}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
}
