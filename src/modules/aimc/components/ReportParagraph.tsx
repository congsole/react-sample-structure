import React, { useEffect, useState } from "react";
import {
  Menu, Page, PortletData, PortletLayout,
} from "modules/aimc/types/report";
import { useConfirm } from "shared/hooks/alert/useConfirm";
import { useAlert } from "shared/hooks/alert/useAlert";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import PowerBIReportCard from "./portlet/PowerBIReportCard";

const GridLayout = WidthProvider(RGL);

// 기준 사이즈
const PORTLET_WIDTH = 182;
const PORTLET_HEIGHT = 204;
const PORTLET_MARGIN = 10;

type ReportParagraphProps = {
  serviceId: number;
  pageNum: number;
  menu: Menu;
  page: Page;
};

export default function ReportParagraph({
                                          serviceId,
                                          pageNum,
                                          menu,
                                          page,
}: ReportParagraphProps) {
  const items = page.portlets;
  const { showConfirm } = useConfirm();
  const { showAlert } = useAlert();
  const [portletItems, setPortletItems] = useState<PortletData[]>([]);
  const [layout, setLayout] = useState<Layout[]>([]);
  const [isDragging, setIsDragging] = useState(false);

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
      // const paragraphLayouts: PortletLayout[] = layout.map(({ x, y, i }) => ({
      //   x,
      //   y,
      //   portletId: Number(i),
      // }));
      // await saveParagraphLayout(serviceId, userParagraphId, paragraphLayouts);
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
      showAlert({
        message: "해당 단락에 동일한 포틀릿이 있습니다.",
      });
      return;
    }

    setPortletItems((prev) => [...prev, portletData]);
    setLayout((prev) => [
      ...prev,
      {
        i: portletData.portletId.toString(),
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
    showConfirm({
      message: "해당 포틀릿을 삭제 하시겠습니까?",
      onOk: async () => {
        setPortletItems((prev) => [
          ...prev.filter((data) => data.portletId !== portletId.toString()),
        ]);

        setLayout((prev) => [
          ...prev.filter((data) => data.i !== portletId.toString()),
        ]);
      }
    });
  };

  function generateReportCard(layoutId: string) {
    const existFilterRemoveAll = serviceId !== 7; //3사경쟁(7) 일때는 기존 필터 유지
    // const fullScreen = serviceId === 7; //3사경쟁(7) 일때는 전체 화면
    const data = portletItems.find(
      (data) => data.portletId === layoutId,
    );
    if (!data) return <></>;
    let reportCard;

        reportCard = (
          <PowerBIReportCard
            onDelete={handlePortletDelete}
            data={data}
            globalFilterSetting={[...menu.pageFilters, ...menu.prgrpFilters]}
            existFilterRemoveAll={existFilterRemoveAll}
            serviceId={serviceId}
            pageId={pageNum}
            isFixed={page.isFixed}
          />
        );
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
        isDraggable={!page.isFixed}
        onDrop={handlerDrop}
        isDroppable={!page?.isFixed}
        onDragStart={handleDragStart}
        onDragStop={handleDragStop}
      >
        {layout.map(({ i }) => generateReportCard(i))}
      </GridLayout>
    </>
  );
}
