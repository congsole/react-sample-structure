"use client";

import { saveParagraphLayout } from "@/app/_service/aimc/report/actions";
import useReportStore from "@/app/_store/reportStore";
import {
  Filter,
  PortletData,
  PortletLayout,
  PortletType,
  ReportParagraphType,
} from "@/app/_types/aimc/report";
import useConfirmStore from "@/app/aimc/_components/confirm/useConfirmStore";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import PowerBIReportVisualCard from "./portlet/PowerBIReportVisualCard";
import PowerBISummaryMulti from "./portlet/PowerBISummaryMulti";
import PowerBISummaryMultiChange from "./portlet/PowerBISummaryMultiChange";
import ReportSummary from "./portlet/ReportSummary";
import PowerBIReportSummaryRightCard from "./portlet/PowerBIReportSummaryRightCard";
import PowerBIEmbed from "./portlet/PowerBIEmbed";
import PowerBIMultiReportCard from "./portlet/PowerBIMultiReportCard";

const GridLayout = WidthProvider(RGL);
const PowerBIReportCard = dynamic(() => import("./portlet/PowerBIReportCard"), {
  ssr: false,
});
const PowerBISummary = dynamic(() => import("./portlet/PowerBISummary"), {
  ssr: false,
});
const PowerBIReportSummaryVisualCard = dynamic(
  () => import("./portlet/PowerBIReportSummaryVisualCard"),
  {
    ssr: false,
  },
);
// 기준 사이즈
const PORTLET_WIDTH = parseInt(process.env.NEXT_PUBLIC_PORTLET_WIDTH!, 10);
const PORTLET_HEIGHT = parseInt(process.env.NEXT_PUBLIC_PORTLET_HEIGHT!, 10);
const PORTLET_MARGIN = parseInt(process.env.NEXT_PUBLIC_PORTLET_MARGIN!, 10);

type ReportParagraphProps = {
  serviceId: number;
  data: ReportParagraphType;
  menuFilters: Filter[];
};

export default function ReportParagraph({
  serviceId,
  data,
  menuFilters,
}: ReportParagraphProps) {
  const { userParagraphId, isFixed, prgrpFilters, pageNum } = data;
  const items = data.layouts;
  const { confirm } = useConfirmStore();
  const [portletItems, setPortletItems] = useState<PortletData[]>([]);
  const [layout, setLayout] = useState<Layout[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const { setReportPageData } = useReportStore();
  const { reportPageData } = useReportStore();
  useEffect(() => {
    setReportPageData({ serviceId, isFixed, pageNum });
  }, [data]);

  useEffect(() => {
    const layouts = items.map((portlet: any) => {
      return {
        i: `${portlet.portletId}`,
        x: portlet.x,
        y: portlet.y,
        w: portlet.width,
        h: portlet.height,
        minW: portlet.width,
        minH: portlet.height,
      };
    });

    setPortletItems(items);
    setLayout(layouts);
  }, [items]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  const onLayoutChange = async (layout: any[]) => {
    const hasDroppingElem = layout.some(
      (item) => item.i === "__dropping-elem__",
    );

    if (!hasDroppingElem) {
      setLayout(layout);
      const paragraphLayouts: PortletLayout[] = layout.map(({ x, y, i }) => ({
        x,
        y,
        portletId: Number(i),
      }));
      await saveParagraphLayout(serviceId, userParagraphId, paragraphLayouts);
    }
  };

  const handlerDrop = async (
    layout: Layout[],
    layoutItem: Layout,
    e: Event,
  ) => {
    e.preventDefault();
    const dragEvent = e as DragEvent;

    if (!dragEvent.dataTransfer) return;

    const dataStr = dragEvent.dataTransfer.getData("portletData");
    const portletData = JSON.parse(dataStr);
    if (portletItems.some((data) => data.portletId === portletData.portletId)) {
      await confirm("해당 단락에 동일한 포틀릿이 있습니다.", false, true);
      return;
    }

    setPortletItems((prev) => [...prev, portletData]);
    setLayout((prev) => [
      ...prev,
      {
        i: portletData.portletId + "",
        x: layoutItem.x,
        y: layoutItem.y,
        w: portletData.width,
        h: portletData.height,
        minW: portletData.width,
        minH: portletData.height,
      },
    ]);
  };

  const handlePortletDelete = async (portletId: number) => {
    const isConfirmed = await confirm("해당 포틀릿을 삭제 하시겠습니까?", true);
    if (!isConfirmed) return;

    setPortletItems((prev) => [
      ...prev.filter((data) => data.portletId !== portletId),
    ]);

    setLayout((prev) => [
      ...prev.filter((data) => data.i !== portletId.toString()),
    ]);
  };

  function generateReportCard(layoutId: string) {
    const existFilterRemoveAll = serviceId !== 7; //3사경쟁(7) 일때는 기존 필터 유지
    // const fullScreen = serviceId === 7; //3사경쟁(7) 일때는 전체 화면

    const data = portletItems.find(
      (data) => data.portletId === Number(layoutId),
    );
    if (!data) return <></>;

    let reportCard;
    if (data.formCd === PortletType.PowerBI && data.type === "NR") {
      if (serviceId === 8 || serviceId === 27) {
        reportCard = (
          <PowerBIReportVisualCard
            onDelete={handlePortletDelete}
            data={data}
            globalFilterSetting={{ menu: menuFilters, paragraph: prgrpFilters }}
            existFilterRemoveAll={existFilterRemoveAll}
            isDragging={isDragging}
            serviceId={serviceId}
          />
        );
      } else {
        reportCard = (
          <PowerBIReportCard
            onDelete={handlePortletDelete}
            data={data}
            globalFilterSetting={[...menuFilters, ...prgrpFilters]}
            existFilterRemoveAll={existFilterRemoveAll}
            serviceId={serviceId}
          />
        );
      }
    } else if (data.formCd === PortletType.PowerBI && data.type === "ST") {
      if (serviceId === 26 || serviceId === 7) {
        reportCard = (
          <PowerBIEmbed
            pages={data.powerBiList}
            filters={[...menuFilters, ...prgrpFilters]}
          />
        );
      } else {
        reportCard = (
          <PowerBIMultiReportCard
            onDelete={handlePortletDelete}
            data={data}
            globalFilterSetting={[...menuFilters, ...prgrpFilters]}
            existFilterRemoveAll={existFilterRemoveAll}
            serviceId={serviceId}
          />
        );
      }
    } else if (data.formCd === PortletType.PowerBISummary) {
      if (serviceId === 8) {
        reportCard = (
          <PowerBIReportSummaryVisualCard
            onDelete={handlePortletDelete}
            data={data}
            globalFilterSetting={{
              menu: menuFilters,
              paragraph: prgrpFilters,
            }}
            existFilterRemoveAll={existFilterRemoveAll}
            isDragging={isDragging}
            serviceId={serviceId}
          />
        );
      } else {
        if (serviceId === 3 && data.type === "ST") {
          reportCard = (
            <PowerBISummaryMultiChange
              onDelete={handlePortletDelete}
              data={data}
              globalFilterSetting={[...menuFilters, ...prgrpFilters]}
              serviceId={serviceId}
            />
          );
        } else if (serviceId != 3 && data.type === "ST") {
          reportCard = (
            <PowerBISummaryMulti
              onDelete={handlePortletDelete}
              data={data}
              globalFilterSetting={[...menuFilters, ...prgrpFilters]}
              serviceId={serviceId}
            />
          );
        } else {
          reportCard = (
            <PowerBISummary
              onDelete={handlePortletDelete}
              data={data}
              globalFilterSetting={[...menuFilters, ...prgrpFilters]}
              serviceId={serviceId}
            />
          );
        }
      }
    } else if (data.formCd === PortletType.ReportSummary) {
      reportCard = (
        <ReportSummary
          portletData={data}
          globalFilterSetting={[...menuFilters, ...prgrpFilters]}
        />
      );
    } else if (data.formCd === PortletType.PowerBISummaryRight) {
      reportCard = (
        <PowerBIReportSummaryRightCard
          data={data}
          globalFilterSetting={[...menuFilters, ...prgrpFilters]}
          layout={layout}
          serviceId={serviceId}
          page={reportPageData?.pageNum ?? 1}
        />
      );
    }

    return (
      <div key={layoutId} className="dnd-movable-item">
        {reportCard}
      </div>
    );
  }

  return (
    <>
      {layout.length === 0 && (
        <div
          className="card none"
          style={{ position: "absolute", width: "100%" }}
        >
          <div className="view-content">
            <div className="con-box">
              <div className="no-data">
                <div className="tit">새로운 단락이 생성되었습니다.</div>
                <div className="cmt">
                  우측 하단 포틀릿 버튼을 통해 새로운 리포트를 만들어 주세요
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <GridLayout
        style={{
          minHeight: PORTLET_HEIGHT * 4 + 3 * PORTLET_MARGIN, // portlet_height * rows + (rows - 1) * margin
        }}
        layout={layout}
        rowHeight={PORTLET_HEIGHT}
        width={PORTLET_WIDTH * 8 + 7 * PORTLET_MARGIN} // portlet_width * cols + (cols - 1) * margin
        cols={8}
        containerPadding={[0, 0]}
        onLayoutChange={onLayoutChange}
        allowOverlap={false}
        compactType="vertical"
        isResizable={false}
        isDraggable={!isFixed}
        onDrop={handlerDrop}
        isDroppable={!reportPageData?.isFixed}
        onDragStart={handleDragStart}
        onDragStop={handleDragStop}
      >
        {layout.map(({ i }) => generateReportCard(i))}
      </GridLayout>
    </>
  );
}
