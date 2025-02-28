import React from "react";

import MultiSelectFilter from "modules/aimc/components/filter/MultiSelectFilter";

interface Filter {
  typCd: string;
  description: string | undefined;
}

interface IProps {
  serviceId: number;
  title?: string;
  prgrpFilters: Filter[];
}

const multiSelectCode = ["CITY", "CUST", "PRDL"];

const generateFilter = (typCd: string) => {
  if (multiSelectCode.includes(typCd)) {
    return <MultiSelectFilter typCd={typCd} key={typCd} />;
  }
};

const ParagraphFilterV2: React.FC<IProps> = ({
  serviceId,
  title,
  prgrpFilters,
}) => {

  return (
    <div className={`info-set ${serviceId !== 27 ? "flex" : ""}`}>
      {serviceId !== 27 && (
        <div className="filter-area">
          {/* 단락 제목 - 3사경쟁(7) 일때는 "기준" */}
          <div className="tit">{serviceId === 7 ? "기준" : title}</div>
          <div className="filter-set">
            {prgrpFilters.map((filter) =>
              generateFilter(filter.typCd),
            )}
          </div>
        </div>
      )}
      {serviceId !== 7 && serviceId !== 27 && serviceId !== 26 && (
        <div className="cmd">*최근 13개월 데이터로 D-2일 기준으로 제공함</div>
      )}
    </div>
  );
};

export default ParagraphFilterV2;
